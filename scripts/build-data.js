#!/usr/bin/env node
/* 合并 data/_merge/*.json → data/models.js
   用法: node scripts/build-data.js
   新增厂商数据时，往 data/_merge/ 丢一份同 schema 的 JSON 再跑一次即可。 */
const fs = require("fs");
const path = require("path");

const MERGE_DIR = path.join(__dirname, "..", "data", "_merge");
const OUT = path.join(__dirname, "..", "data", "models.js");

const meta = {
  title: "模型编年史",
  updated: "2026-09-23",
  note: "发布日期以各实验室官方公告为准（仅确认到月的按当月 1 日定位，图中以空心点区分）；评测分数为发布时官方报告值，不同基准、不同时期口径不可直接横比。",
};

const orgs = [
  { id: "openai", name: "OpenAI", slot: 1 },
  { id: "anthropic", name: "Anthropic", slot: 2 },
  { id: "google", name: "Google", slot: 3 },
  { id: "meta", name: "Meta", slot: 4 },
  { id: "xai", name: "xAI", slot: 5 },
  { id: "deepseek", name: "DeepSeek", slot: 6 },
  { id: "alibaba", name: "阿里通义", slot: 7 },
  { id: "others", name: "其他厂商", slot: 0 },
];

const files = fs.readdirSync(MERGE_DIR).filter((f) => f.endsWith(".json")).sort();
const models = [];
for (const f of files) {
  const arr = JSON.parse(fs.readFileSync(path.join(MERGE_DIR, f), "utf8"));
  models.push(...arr);
  console.log(`  ${f}: ${arr.length} 条`);
}

// 去重（以 id 为准，后加载的文件覆盖先加载的）
const byId = new Map();
for (const m of models) {
  if (!m.id || !m.date || !m.org) throw new Error(`记录缺字段: ${JSON.stringify(m).slice(0, 80)}`);
  byId.set(m.id, m);
}

// 校验 org 合法
const orgIds = new Set(orgs.map((o) => o.id));
for (const m of byId.values()) {
  if (!orgIds.has(m.org)) throw new Error(`未知 org "${m.org}": ${m.id}`);
}

const merged = [...byId.values()].sort(
  (a, b) => a.date.localeCompare(b.date) || a.name.localeCompare(b.name)
);
console.log(`合计 ${merged.length} 条模型记录（去重后）`);

const out = `// 模型编年史 · 数据文件（由 scripts/build-data.js 生成，请勿手改；数据源在 data/_merge/）
window.MODEL_DATA = ${JSON.stringify({ meta, orgs, models: merged }, null, 2)};\n`;
fs.writeFileSync(OUT, out);
console.log(`已写入 ${path.relative(process.cwd(), OUT)}`);
