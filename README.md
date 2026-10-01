# 模型编年史

大模型发布时间线网站：收录 GPT-2 至今各大实验室模型的发布日期、发布间隔，以及发布时官方报告的评测成绩。

[在线浏览发布时间线](https://majiayu000.github.io/biannianshi/) · [数据与界面说明](PRODUCT.md)

时间轴支持缩放与平移：滚轮直接缩放（以光标为锚；缩到最小后继续向下滚会滚动页面），拖动平移，双击或「复位」按钮回到默认视图（默认聚焦 ChatGPT 之后的密集期，2019–2021 向左拖动可见）。

零依赖纯静态站（HTML + CSS + 原生 JS + SVG），任意静态托管可直接部署。

## 本地预览

数据通过 `<script>` 加载（非 fetch），直接双击 `index.html` 也能打开；起服务器仅是为了体验完整：

```bash
python3 -m http.server 8741
# 打开 http://localhost:8741
```

## 部署

把整个目录推到任意静态托管即可：

- **GitHub Pages**：仓库 Settings → Pages → 选择分支根目录。
- **Vercel / Netlify**：导入仓库，无需构建命令，输出目录为根目录。

## 更新数据

源数据在 `data/_merge/*.json`（按厂商分文件，schema 同下）。改完后重新生成：

```bash
node scripts/build-data.js   # 合并去重 → data/models.js（生成文件，勿手改）
```

每条模型记录：

```js
{
  id: "gpt-4",              // 唯一 ID
  name: "GPT-4",            // 展示名
  lab: "OpenAI",            // 实际实验室（用于展示）
  org: "openai",            // 归类分组（决定颜色和时间轴行，见 orgs）
  date: "2023-03-14",       // 发布日期
  precision: "day",         // "day" 精确到日 / "month" 仅确认到月（按当月 1 日定位）
  confidence: "high",       // "high" 已核实 / "low" 待核实（表中加 *）
  context: "8K/32K",        // 上下文窗口（可选）
  flagship: true,           // 是否在时间轴上直接标注名称
  benchmarks: { MMLU: 86.4 }, // 发布时官方报告的评测分数（数值型才会进图表）
  note: "一句话说明",        // 可选
  sources: ["https://..."], // 官方公告链接
}
```

分组（`orgs`）目前为 8 组：OpenAI / Anthropic / Google / Meta / xAI / DeepSeek / 阿里通义 / 其他厂商。
新增厂商时归入「其他厂商」或替换「其他厂商」中的成员（配色上限 8 组，见 `css/style.css` 的 `--s1`–`--s7`）。

## 数据口径

网站中的[阅读口径](https://majiayu000.github.io/biannianshi/#reading-guide)说明早期记录、月份精度、发布间隔与基准比较的限制。本站和 [Model Chronicle](https://majiayu000.github.io/model-chronicle/model/explore.html)由同一维护者维护；本站侧重零依赖发布时间线，后者提供系列演进、规格筛选与数据工具，收录范围不保证相同。

- 发布日期以实验室官方公告（博客 / 文档 / 论文 / 官方仓库）为准；仅确认到月的按当月 1 日定位并在图表中以空心点区分。
- 评测分数为**发布时官方报告值**；不同时期测试口径不同，跨代际直接横比仅供参考。
- 「距上作」按同一厂商上一款收录模型计算。

## 结构

```
index.html             页面骨架
css/style.css          样式（深浅主题与响应式布局）
PRODUCT.md             产品定位与界面设计原则
js/app.js              渲染逻辑（时间轴 / 间隔 / 基准 / 明细表 / 筛选 / 主题切换）
data/models.js         数据（由脚本生成，勿手改）
data/_merge/*.json     源数据（按厂商分文件）
scripts/build-data.js  合并脚本：node scripts/build-data.js
```
