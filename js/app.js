/* 模型编年史 · 渲染逻辑（零依赖） */
(() => {
  "use strict";

  const DATA = window.MODEL_DATA;
  const ORGS = DATA.orgs.slice().sort((a, b) => {
    const sa = a.slot === 0 ? 99 : a.slot;
    const sb = b.slot === 0 ? 99 : b.slot;
    return sa - sb;
  });
  const ORG_BY_ID = new Map(ORGS.map((o) => [o.id, o]));

  // ---------- 全局状态 ----------
  const state = {
    orgs: new Set(ORGS.map((o) => o.id)), // 启用的厂商
    range: "all", // all | 3y | 1y
    benchKey: null, // 当前选中的基准
  };

  // ---------- 工具 ----------
  const DAY = 86400000;
  const parseDate = (s) => {
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const fmtDate = (m) => {
    if (m.precision === "month") return m.date.slice(0, 7);
    return m.date;
  };
  const fmtYearMonth = (s) => s.slice(0, 4) + "." + s.slice(5, 7);
  const daysBetween = (a, b) => Math.round((b - a) / DAY);

  const CSS = getComputedStyle(document.documentElement);

  // ---------- 时间轴视窗（缩放 / 平移） ----------
  let tlView = null; // {x0, x1} 毫秒；null = 按当前时间范围预设重置
  let tlDragMoved = false; // 拖动过就抑制圆点的点击跳转
  const TL_ML = 96, TL_MR = 24; // 与 renderTimeline 共用的左右留白
  const FULL_DOM = (() => {
    const min = parseDate(DATA.models[0].date);
    min.setDate(min.getDate() - 20);
    const max = new Date();
    max.setDate(max.getDate() + 20);
    const last = parseDate(DATA.models[DATA.models.length - 1].date);
    return { min: +min, max: Math.max(+max, +last) };
  })();

  function defaultView() {
    const now = Date.now();
    if (state.range === "1y") return { x0: now - 365 * DAY, x1: FULL_DOM.max };
    if (state.range === "3y") return { x0: now - 3 * 365 * DAY, x1: FULL_DOM.max };
    // 全部时间：默认聚焦 ChatGPT 之后的密集期，2019–2021 向左拖动可见
    return { x0: Math.max(FULL_DOM.min, +parseDate("2022-01-01")), x1: FULL_DOM.max };
  }
  function clampView(v) {
    const MIN_SPAN = 45 * DAY;
    const span = Math.min(Math.max(v.x1 - v.x0, MIN_SPAN), FULL_DOM.max - FULL_DOM.min);
    const x0 = Math.min(Math.max(v.x0, FULL_DOM.min), FULL_DOM.max - span);
    return { x0, x1: x0 + span };
  }
  function zoomTimeline(factor, anchorFrac = 0.5) {
    if (!tlView) tlView = clampView(defaultView());
    const span = tlView.x1 - tlView.x0;
    const anchor = tlView.x0 + span * anchorFrac;
    const ns = Math.min(Math.max(span * factor, 45 * DAY), FULL_DOM.max - FULL_DOM.min);
    tlView = clampView({ x0: anchor - ns * anchorFrac, x1: anchor + ns * (1 - anchorFrac) });
    renderTimeline(filteredModels());
  }
  function resetTlView() {
    tlView = clampView(defaultView());
    renderTimeline(filteredModels());
  }
  const labelW = (s) => {
    let w = 0;
    for (const ch of s) w += ch.charCodeAt(0) > 0x2e7f ? 11 : 6.5; // CJK 全宽 vs 拉丁（11px 字号）
    return w;
  };

  // ---------- DOM / SVG 构建 ----------
  function el(tag, attrs = {}, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else if (v !== null && v !== undefined) node.setAttribute(k, v);
    }
    for (const c of children) {
      if (c === null || c === undefined) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }

  const SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs = {}, ...children) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
      else if (v !== null && v !== undefined) node.setAttribute(k, v);
    }
    for (const c of children) {
      if (c === null || c === undefined) continue;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return node;
  }

  function orgColor(orgId) {
    const org = ORG_BY_ID.get(orgId);
    if (!org) return "var(--s-other)";
    return org.slot === 0 ? "var(--s-other)" : `var(--s${org.slot})`;
  }

  // ---------- 工具提示 ----------
  const tooltip = document.getElementById("tooltip");

  function showTooltip(model, clientX, clientY) {
    tooltip.replaceChildren();

    tooltip.appendChild(el("div", { class: "tt-title", text: model.name }));

    const dateStr =
      fmtDate(model) + (model.precision === "month" ? "（月内）" : "");
    const sub = [model.lab, dateStr, model.context ? "上下文 " + model.context : null]
      .filter(Boolean)
      .join(" · ");
    tooltip.appendChild(el("div", { class: "tt-sub", text: sub }));

    const benchEntries = Object.entries(model.benchmarks || {}).filter(
      ([, v]) => typeof v === "number"
    );
    for (const [k, v] of benchEntries.slice(0, 4)) {
      tooltip.appendChild(
        el(
          "div",
          { class: "tt-row" },
          el("span", { class: "tt-k", text: k }),
          el("span", { class: "tt-v", text: String(v) })
        )
      );
    }
    if (model.note) {
      const p = el("div", { class: "tt-sub", text: model.note });
      p.style.marginTop = "6px";
      tooltip.appendChild(p);
    }

    tooltip.hidden = false;
    const pad = 14;
    const rect = tooltip.getBoundingClientRect();
    let x = clientX + pad;
    let y = clientY + pad;
    if (x + rect.width > window.innerWidth - 8) x = clientX - rect.width - pad;
    if (y + rect.height > window.innerHeight - 8) y = clientY - rect.height - pad;
    tooltip.style.left = Math.max(8, x) + "px";
    tooltip.style.top = Math.max(8, y) + "px";
  }

  function hideTooltip() {
    tooltip.hidden = true;
  }

  // ---------- 数据切片 ----------
  function filteredModels() {
    const now = new Date();
    let minDate = null;
    if (state.range !== "all") {
      const years = state.range === "1y" ? 1 : 3;
      minDate = new Date(now.getFullYear() - years, now.getMonth(), now.getDate());
    }
    return DATA.models
      .filter((m) => state.orgs.has(m.org))
      .filter((m) => !minDate || parseDate(m.date) >= minDate)
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  // ---------- KPI ----------
  function renderKpis(list) {
    const host = document.getElementById("kpis");
    host.replaceChildren();

    const labs = new Set(list.map((m) => m.lab));
    let span = "—";
    if (list.length) {
      span =
        fmtYearMonth(list[0].date) + " – " + fmtYearMonth(list[list.length - 1].date);
    }
    const cutoff = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate());
    const recent = list.filter((m) => parseDate(m.date) >= cutoff).length;

    const tiles = [
      { label: "收录模型", value: String(list.length), sub: "截至 " + DATA.meta.updated },
      { label: "涉及厂商 / 实验室", value: String(labs.size), sub: "按实验室去重" },
      { label: "时间跨度", value: span, sub: list.length ? "首次发布 → 最新发布" : "" },
      { label: "近 12 个月发布", value: String(recent), sub: "模型 / 重要版本" },
    ];
    for (const t of tiles) {
      host.appendChild(
        el(
          "div",
          { class: "kpi" },
          el("div", { class: "kpi-label", text: t.label }),
          el("div", { class: "kpi-value", text: t.value }),
          t.sub ? el("div", { class: "kpi-sub", text: t.sub }) : null
        )
      );
    }
  }

  // ---------- 筛选行 ----------
  function renderFilters() {
    const host = document.getElementById("filters");
    host.replaceChildren();

    // 时间范围（放最前）
    const seg = el("div", { class: "segmented", role: "group", "aria-label": "时间范围" });
    for (const [val, label] of [
      ["all", "全部时间"],
      ["3y", "近 3 年"],
      ["1y", "近 1 年"],
    ]) {
      seg.appendChild(
        el(
          "button",
          {
            class: val === state.range ? "active" : "",
            onclick: () => {
              state.range = val;
              tlView = null; // 视窗跟随时间范围预设
              renderAll();
            },
            text: label,
          }
        )
      );
    }
    host.appendChild(seg);

    // 厂商图例 = 筛选 chips
    const orgsWithModels = new Set(DATA.models.map((m) => m.org));
    for (const org of ORGS) {
      if (!orgsWithModels.has(org.id)) continue;
      const active = state.orgs.has(org.id);
      const chip = el(
        "button",
        {
          class: "chip" + (active ? " active" : ""),
          "aria-pressed": String(active),
          onclick: () => {
            if (state.orgs.has(org.id)) state.orgs.delete(org.id);
            else state.orgs.add(org.id);
            if (state.orgs.size === 0) state.orgs = new Set(ORGS.map((o) => o.id)); // 至少保留一个
            renderAll();
          },
        },
        el("span", { class: "swatch", style: "background:" + orgColor(org.id) }),
        document.createTextNode(org.name)
      );
      host.appendChild(chip);
    }
  }

  // ---------- 时间轴 ----------
  function renderTimeline(list) {
    const host = document.getElementById("timeline");
    host.replaceChildren();

    if (!list.length) {
      host.appendChild(el("div", { class: "empty-note", text: "当前筛选条件下暂无数据。" }));
      return;
    }

    const W = Math.max(560, host.clientWidth || 900);
    const ml = 96, mr = 24, mt = 12, axisH = 30;
    const rowH = 44;

    const rows = ORGS.filter((o) => list.some((m) => m.org === o.id));
    const H = mt + rows.length * rowH + axisH;

    if (!tlView) tlView = clampView(defaultView());
    const t0 = new Date(tlView.x0);
    const t1 = new Date(tlView.x1);
    const span = t1 - t0;
    const x = (d) => ml + ((d - t0) / span) * (W - ml - mr);
    const rowY = new Map(rows.map((o, i) => [o.id, mt + i * rowH + rowH / 2]));

    const svg = svgEl("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: W,
      height: H,
      role: "img",
      "aria-label": "大模型发布时间轴，每行一个厂商",
    });

    // 时间网格线：步长按视窗跨度自适应（年 / 半年 / 季 / 双月 / 月）
    const totalMonths = span / (DAY * 30.44);
    const maxTicks = Math.max(4, Math.floor((W - ml - mr) / 52));
    let step = 1;
    for (const s of [12, 6, 3, 2]) {
      const ticks = totalMonths / s;
      if (ticks >= 4 && ticks <= maxTicks) { step = s; break; }
    }
    const cur = new Date(t0.getFullYear(), t0.getMonth(), 1);
    cur.setMonth(Math.ceil(cur.getMonth() / step) * step);
    if (cur < t0) cur.setMonth(cur.getMonth() + step);
    let firstTick = true;
    for (; cur < t1; cur.setMonth(cur.getMonth() + step)) {
      const gx = x(cur);
      if (gx < ml - 1 || gx > W - mr + 1) continue;
      svg.appendChild(
        svgEl("line", {
          x1: gx, y1: mt, x2: gx, y2: H - axisH + 6,
          stroke: "var(--grid)", "stroke-width": 1,
        })
      );
      const label =
        step === 12
          ? String(cur.getFullYear())
          : cur.getFullYear() + "-" + String(cur.getMonth() + 1).padStart(2, "0");
      svg.appendChild(
        svgEl("text", {
          x: firstTick ? ml : gx, y: H - 8,
          "text-anchor": firstTick ? "start" : "middle",
          fill: "var(--muted)", "font-size": 12,
          text: label,
        })
      );
      firstTick = false;
    }

    // 今天（仅在视窗内画出）
    const now = new Date();
    if (now >= t0 && now <= t1) {
      const tx = x(now);
      svg.appendChild(
        svgEl("line", {
          x1: tx, y1: mt, x2: tx, y2: H - axisH + 6,
          stroke: "var(--axis)", "stroke-width": 1,
        })
      );
      svg.appendChild(
        svgEl("text", {
          x: tx, y: mt + 2, dy: -6, "text-anchor": "middle",
          fill: "var(--muted)", "font-size": 11, text: "今天",
        })
      );
    }

    // 行标签 + 点
    const dots = []; // {x, y, model, node}
    const flagSpots = new Map(); // org.id → [{lx, y, name, date}]，待放置的旗舰标签

    for (const org of rows) {
      const y = rowY.get(org.id);
      svg.appendChild(
        svgEl("text", {
          x: ml - 12, y: y + 4, "text-anchor": "end",
          fill: "var(--text-2)", "font-size": 12,
          text: org.name,
        })
      );

      for (const m of list.filter((mm) => mm.org === org.id)) {
        const cx = x(parseDate(m.date));
        const hollow = m.precision === "month";
        const g = svgEl("g", {
          class: "dot",
          tabindex: 0,
          role: "img",
          "aria-label": `${m.name}，${m.lab}，发布于 ${fmtDate(m)}`,
        });
        const circle = svgEl("circle", {
          cx, cy: y, r: 5,
          fill: hollow ? "var(--surface)" : orgColor(org.id),
          stroke: orgColor(org.id),
          "stroke-width": 2,
        });
        g.appendChild(circle);
        g.addEventListener("pointermove", (e) => showTooltip(m, e.clientX, e.clientY));
        g.addEventListener("pointerleave", hideTooltip);
        g.addEventListener("focus", () => {
          const r = g.getBoundingClientRect();
          showTooltip(m, r.left + r.width / 2, r.top);
        });
        g.addEventListener("blur", hideTooltip);
        if (m.sources && m.sources[0]) {
          const url = m.sources[0];
          g.addEventListener("click", () => {
            if (!tlDragMoved) window.open(url, "_blank", "noopener");
          });
          g.style.cursor = "pointer";
        }
        svg.appendChild(g);
        dots.push({ x: cx, y, m });

        if (m.flagship) {
          if (!flagSpots.has(org.id)) flagSpots.set(org.id, []);
          flagSpots.get(org.id).push({ cx, y, name: m.name, date: m.date });
        }
      }

      // 旗舰标签从最新往旧放置：保证每行当前的旗舰一定有标签；
      // 间距按文字实际宽度算，长名字（如带参数后缀的 Qwen）不会互相压叠
      const spots = flagSpots.get(org.id);
      if (spots) {
        let prevLeft = Infinity;
        for (const s of spots.sort((a, b) => b.date.localeCompare(a.date))) {
          if (s.cx < ml - 8 || s.cx > W - mr + 8) continue; // 只标注视窗内的点，避免幽灵标签
          const half = labelW(s.name) / 2;
          const lx = Math.max(ml + half + 2, Math.min(s.cx, W - mr - half - 2));
          if (lx + half > prevLeft - 8) continue; // 与右侧已放标签相碰就省略
          prevLeft = lx - half;
          svg.appendChild(
            svgEl("text", {
              x: lx, y: s.y - 11, "text-anchor": "middle",
              fill: "var(--text-2)", "font-size": 11,
              text: s.name,
            })
          );
        }
      }
    }

    // SVG 级就近命中（比逐点更容易命中）
    svg.addEventListener("pointermove", (e) => {
      const r = svg.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width) * W;
      const py = ((e.clientY - r.top) / r.height) * H;
      let best = null, bestD = 22 * 22;
      for (const d of dots) {
        const dx = d.x - px, dy = d.y - py;
        const dist = dx * dx + dy * dy;
        if (dist < bestD) { bestD = dist; best = d; }
      }
      if (best) showTooltip(best.m, e.clientX, e.clientY);
      else hideTooltip();
    });
    svg.addEventListener("pointerleave", hideTooltip);

    host.appendChild(svg);
    const note = el(
      "div",
      { class: "axis-note" },
      document.createTextNode(
        "滚轮缩放 · 拖动平移 · 双击复位；空心圆 = 日期仅确认到月份，点击圆点可打开官方公告。"
      )
    );
    if (tlView.x0 > FULL_DOM.min + DAY) {
      note.appendChild(
        el("span", { class: "tl-more", text: " 左侧还有更早年份（GPT-2 起），向左拖动可查看。" })
      );
    }
    host.appendChild(note);
  }

  // ---------- 发布间隔 ----------
  function renderIntervals(list) {
    const host = document.getElementById("intervals");
    host.replaceChildren();

    const stats = [];
    for (const org of ORGS) {
      const ms = list.filter((m) => m.org === org.id);
      if (ms.length < 2) continue;
      const gaps = [];
      for (let i = 1; i < ms.length; i++) {
        gaps.push(daysBetween(parseDate(ms[i - 1].date), parseDate(ms[i].date)));
      }
      const avg = gaps.reduce((a, b) => a + b, 0) / gaps.length;
      stats.push({ org, avg, count: ms.length });
    }

    if (!stats.length) {
      host.appendChild(el("div", { class: "empty-note", text: "当前筛选条件下暂无数据。" }));
      return;
    }

    stats.sort((a, b) => a.avg - b.avg); // 节奏最快的在最上面
    const max = stats[stats.length - 1].avg;

    const wrap = el("div", { class: "hbars" });
    for (const s of stats) {
      const pct = Math.min(92, Math.max(0.5, (s.avg / max) * 100)); // 留出数值标签的位置
      const bar = el("span", {
        class: "hbar-bar",
        style: `width:${pct}%;background:${orgColor(s.org.id)}`,
      });
      const value = el("span", {
        class: "hbar-value",
        style: `left:calc(${pct}% + 8px)`,
        text: Math.round(s.avg) + " 天",
      });
      const track = el("div", { class: "hbar-track", tabindex: "0" }, bar, value);
      const label = el(
        "div",
        { class: "hbar-label" },
        document.createTextNode(s.org.name + " "),
        el("span", { class: "hbar-sub", text: `（${s.count} 款）` })
      );
      wrap.appendChild(el("div", { class: "hbar-row" }, label, track));

      const show = (e) => {
        tooltip.replaceChildren();
        tooltip.appendChild(
          el("div", { class: "tt-title", text: s.org.name + " 平均发布间隔" })
        );
        tooltip.appendChild(
          el("div", { class: "tt-sub", text: `筛选范围内共 ${s.count} 次发布` })
        );
        tooltip.appendChild(
          el(
            "div",
            { class: "tt-row" },
            el("span", { class: "tt-k", text: "相邻发布平均间隔" }),
            el("span", { class: "tt-v", text: Math.round(s.avg) + " 天" })
          )
        );
        tooltip.hidden = false;
        const pad = 14;
        const rect = tooltip.getBoundingClientRect();
        let x = e.clientX + pad, y = e.clientY + pad;
        if (x + rect.width > window.innerWidth - 8) x = e.clientX - rect.width - pad;
        if (y + rect.height > window.innerHeight - 8) y = e.clientY - rect.height - pad;
        tooltip.style.left = Math.max(8, x) + "px";
        tooltip.style.top = Math.max(8, y) + "px";
      };
      track.addEventListener("pointermove", show);
      track.addEventListener("pointerleave", hideTooltip);
      track.addEventListener("focus", (e) => {
        const r = track.getBoundingClientRect();
        show({ clientX: r.left + r.width / 2, clientY: r.top });
      });
      track.addEventListener("blur", hideTooltip);
    }
    host.appendChild(wrap);
    host.appendChild(
      el(
        "div",
        { class: "bench-note" },
        document.createTextNode("基于当前筛选范围内同一厂商相邻两次发布的平均间隔；筛选范围变化时数值随之变化。")
      )
    );
  }

  // ---------- 能力基准 ----------
  function renderBenchmark(list) {
    const host = document.getElementById("bench");
    host.replaceChildren();

    // 统计每个基准出现在多少款模型上
    const counts = new Map();
    for (const m of list) {
      for (const [k, v] of Object.entries(m.benchmarks || {})) {
        if (typeof v === "number") counts.set(k, (counts.get(k) || 0) + 1);
      }
    }
    const keys = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    const head = document.getElementById("bench-head");
    head.replaceChildren();

    if (!keys.length) {
      host.appendChild(el("div", { class: "empty-note", text: "当前筛选条件下暂无评测数据。" }));
      return;
    }

    if (!state.benchKey || !counts.has(state.benchKey)) state.benchKey = keys[0][0];

    const select = el("select", {
      "aria-label": "选择基准",
      onchange: (e) => {
        state.benchKey = e.target.value;
        renderBenchmark(list);
      },
    });
    for (const [k, n] of keys) {
      const opt = el("option", { value: k, text: `${k}（${n} 款）` });
      if (k === state.benchKey) opt.selected = true;
      select.appendChild(opt);
    }
    head.appendChild(select);

    const rowsData = list
      .map((m) => ({ m, v: m.benchmarks[state.benchKey] }))
      .filter((r) => typeof r.v === "number")
      .sort((a, b) => b.v - a.v)
      .slice(0, 15);

    const maxV = rowsData[0].v;
    const wrap = el("div", { class: "hbars" });
    for (const { m, v } of rowsData) {
      const pct = Math.min(92, Math.max(0.5, (v / maxV) * 100)); // 留出数值标签的位置
      const bar = el("span", {
        class: "hbar-bar",
        style: `width:${pct}%;background:${orgColor(m.org)}`,
      });
      const value = el("span", {
        class: "hbar-value",
        style: `left:calc(${pct}% + 8px)`,
        text: String(v),
      });
      const track = el(
        "div",
        { class: "hbar-track", tabindex: "0" },
        bar,
        value
      );
      const label = el(
        "div",
        { class: "hbar-label" },
        el("span", { text: m.name + " " }),
        el("span", { class: "hbar-sub", text: m.lab })
      );
      const row = el("div", { class: "hbar-row" }, label, track);
      wrap.appendChild(row);

      const show = (e) => showTooltip(m, e.clientX, e.clientY);
      track.addEventListener("pointermove", show);
      track.addEventListener("pointerleave", hideTooltip);
      track.addEventListener("focus", () => {
        const r = track.getBoundingClientRect();
        showTooltip(m, r.left + r.width / 3, r.top);
      });
      track.addEventListener("blur", hideTooltip);
    }
    host.appendChild(wrap);

    host.appendChild(
      el(
        "div",
        { class: "bench-note" },
        document.createTextNode(
          "仅收录官方在发布时报告过该基准的模型，展示前 " + rowsData.length + " 名；完整数据见下方明细表。不同时期的测试条件与口径可能不同，跨代际比较仅供参考。"
        )
      )
    );
  }

  // ---------- 明细表 ----------
  function renderTable(list) {
    const host = document.getElementById("table");
    host.replaceChildren();

    if (!list.length) {
      host.appendChild(el("div", { class: "empty-note", text: "当前筛选条件下暂无数据。" }));
      return;
    }

    // 每款模型在其厂商内距上一作的间隔（按全量数据计算，不受筛选影响）
    const prevGap = new Map();
    for (const org of ORGS) {
      const ms = DATA.models
        .filter((m) => m.org === org.id)
        .sort((a, b) => a.date.localeCompare(b.date));
      for (let i = 0; i < ms.length; i++) {
        prevGap.set(
          ms[i].id,
          i === 0 ? null : daysBetween(parseDate(ms[i - 1].date), parseDate(ms[i].date))
        );
      }
    }

    const table = el("table", { class: "models" });
    const thead = el("thead");
    thead.appendChild(
      el(
        "tr",
        {},
        ...["厂商", "模型", "发布日期", "距上作", "上下文", "发布时评测（官方报告）", "来源"].map(
          (h) => el("th", { text: h, scope: "col" })
        )
      )
    );
    table.appendChild(thead);

    const tbody = el("tbody");
    const desc = list.slice().sort((a, b) => b.date.localeCompare(a.date));
    for (const m of desc) {
      const org = ORG_BY_ID.get(m.org);
      const gap = prevGap.get(m.id);

      const benchStr = Object.entries(m.benchmarks || {})
        .filter(([, v]) => typeof v === "number")
        .slice(0, 3)
        .map(([k, v]) => `${k} ${v}`)
        .join(" · ");

      const sources = m.sources || [];
      const linkCell = el("td");
      if (sources.length) {
        linkCell.appendChild(
          el("a", {
            href: sources[0],
            target: "_blank",
            rel: "noopener",
            text: "公告" + (sources.length > 1 ? ` +${sources.length - 1}` : ""),
          })
        );
      } else {
        linkCell.textContent = "—";
      }

      tbody.appendChild(
        el(
          "tr",
          {},
          el(
            "td",
            {},
            el(
              "span",
              { class: "org-cell" },
              el("span", { class: "swatch", style: "background:" + orgColor(m.org) }),
              document.createTextNode(m.lab)
            )
          ),
          el(
            "td",
            {},
            el("div", { class: "model-name", text: m.name }),
            m.note ? el("div", { class: "model-note", text: m.note }) : null
          ),
          el("td", {
            class: "num",
            text: fmtDate(m) + (m.confidence === "low" ? " *" : ""),
          }),
          el("td", { class: "num", text: gap === null ? "—" : gap + " 天" }),
          el("td", { class: "num", text: m.context || "—" }),
          el("td", { text: benchStr || "—" }),
          linkCell
        )
      );
    }
    table.appendChild(tbody);

    const scroll = el("div", { class: "table-scroll" }, table);
    host.appendChild(scroll);
    host.appendChild(
      el(
        "div",
        { class: "footnote" },
        document.createTextNode(
          "日期仅确认到月份的模型按当月 1 日定位、显示为“年-月”；带 * 为待核实日期。“距上作”按同一厂商的上一款收录模型计算。评测分数为发布时官方报告值。"
        )
      )
    );
  }

  // ---------- 主题 ----------
  function initTheme() {
    const btn = document.getElementById("theme-toggle");
    const saved = localStorage.getItem("chronicle-theme");
    if (saved) document.documentElement.dataset.theme = saved;
    const label = () => {
      const t = document.documentElement.dataset.theme;
      return t === "dark" ? "主题：深色" : t === "light" ? "主题：浅色" : "主题：跟随系统";
    };
    btn.textContent = label();
    btn.addEventListener("click", () => {
      const cur = document.documentElement.dataset.theme || "auto";
      const next = cur === "auto" ? "light" : cur === "light" ? "dark" : "auto";
      if (next === "auto") delete document.documentElement.dataset.theme;
      else document.documentElement.dataset.theme = next;
      localStorage.setItem("chronicle-theme", next);
      btn.textContent = label();
    });
  }

  // ---------- 总渲染 ----------
  function renderAll() {
    const list = filteredModels();
    renderKpis(list);
    renderFilters();
    renderTimeline(list);
    renderIntervals(list);
    renderBenchmark(list);
    renderTable(list);
  }

  // ---------- 静态文案 ----------
  document.getElementById("updated-at").textContent =
    "数据检索截至 " + DATA.meta.updated;
  document.getElementById("footer-note").textContent = DATA.meta.note;

  let resizeTimer = null;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderAll, 150);
  });

  // ---------- 时间轴手势（挂在 #timeline 宿主上，重绘不丢监听） ----------
  {
    const hostTl = document.getElementById("timeline");
    let rectW = 1;
    let pointers = new Map();
    let dragX = 0;
    let pinchBase = 0;
    let pinchSpan = 0;

    hostTl.addEventListener("pointerdown", (e) => {
      tlDragMoved = false;
      pointers.set(e.pointerId, e.clientX);
      if (pointers.size === 1) {
        rectW = hostTl.getBoundingClientRect().width;
        dragX = e.clientX;
        try { hostTl.setPointerCapture(e.pointerId); } catch {} /* 合成事件下可能无活动指针 */
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchBase = Math.abs(a - b) || 1;
        pinchSpan = tlView ? tlView.x1 - tlView.x0 : 1;
      }
    });
    hostTl.addEventListener("pointermove", (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, e.clientX);
      if (pointers.size === 1) {
        const dx = e.clientX - dragX;
        dragX = e.clientX;
        if (Math.abs(dx) > 2) tlDragMoved = true;
        const dms = (dx * (tlView.x1 - tlView.x0)) / Math.max(rectW - TL_ML - TL_MR, 1);
        tlView = clampView({ x0: tlView.x0 - dms, x1: tlView.x1 - dms });
        renderTimeline(filteredModels());
      } else if (pointers.size === 2 && pinchBase > 0) {
        const [a, b] = [...pointers.values()];
        const d = Math.abs(a - b);
        if (d > 0) {
          const ns = Math.min(
            Math.max((pinchSpan * pinchBase) / d, 45 * DAY),
            FULL_DOM.max - FULL_DOM.min
          );
          const c = (tlView.x0 + tlView.x1) / 2;
          tlView = clampView({ x0: c - ns / 2, x1: c + ns / 2 });
          renderTimeline(filteredModels());
        }
      }
    });
    const endPtr = (e) => {
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchBase = 0;
    };
    hostTl.addEventListener("pointerup", endPtr);
    hostTl.addEventListener("pointercancel", endPtr);

    hostTl.addEventListener(
      "wheel",
      (e) => {
        // 时间轴上滚轮直接缩放（无需任何按键）；已缩到最小后向下滚轮放行给页面滚动
        const v = tlView || clampView(defaultView());
        if (e.deltaY > 0 && v.x1 - v.x0 >= FULL_DOM.max - FULL_DOM.min - 1) return;
        e.preventDefault();
        const r = hostTl.getBoundingClientRect();
        const frac = Math.min(
          Math.max((e.clientX - r.left - TL_ML) / (r.width - TL_ML - TL_MR), 0),
          1
        );
        zoomTimeline(Math.exp(e.deltaY * 0.003), frac);
      },
      { passive: false }
    );
    hostTl.addEventListener("dblclick", resetTlView);

    document.getElementById("tl-zoom-in").addEventListener("click", () => zoomTimeline(1 / 1.6));
    document.getElementById("tl-zoom-out").addEventListener("click", () => zoomTimeline(1.6));
    document.getElementById("tl-reset").addEventListener("click", resetTlView);
  }

  initTheme();
  renderAll();
})();
