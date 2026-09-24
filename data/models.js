// 模型编年史 · 数据文件（由 scripts/build-data.js 生成，请勿手改；数据源在 data/_merge/）
window.MODEL_DATA = {
  "meta": {
    "title": "模型编年史",
    "updated": "2026-09-23",
    "note": "发布日期以各实验室官方公告为准（仅确认到月的按当月 1 日定位，图中以空心点区分）；评测分数为发布时官方报告值，不同基准、不同时期口径不可直接横比。"
  },
  "orgs": [
    {
      "id": "openai",
      "name": "OpenAI",
      "slot": 1
    },
    {
      "id": "anthropic",
      "name": "Anthropic",
      "slot": 2
    },
    {
      "id": "google",
      "name": "Google",
      "slot": 3
    },
    {
      "id": "meta",
      "name": "Meta",
      "slot": 4
    },
    {
      "id": "xai",
      "name": "xAI",
      "slot": 5
    },
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "slot": 6
    },
    {
      "id": "alibaba",
      "name": "阿里通义",
      "slot": 7
    },
    {
      "id": "others",
      "name": "其他厂商",
      "slot": 0
    }
  ],
  "models": [
    {
      "id": "gpt-2",
      "name": "GPT-2",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2019-02-14",
      "precision": "day",
      "confidence": "high",
      "context": "1K",
      "flagship": true,
      "benchmarks": {},
      "note": "15 亿参数，因担忧滥用分阶段发布（完整模型 2019-11-05 放出）。",
      "sources": [
        "https://openai.com/blog/better-language-models/",
        "https://en.wikipedia.org/wiki/GPT-2"
      ]
    },
    {
      "id": "gpt-3",
      "name": "GPT-3",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2020-06-11",
      "precision": "day",
      "confidence": "high",
      "context": "2K",
      "flagship": true,
      "benchmarks": {},
      "note": "1750 亿参数；论文《Language Models are Few-Shot Learners》2020-05-28 提交 arXiv，6 月开放 API 测试。",
      "sources": [
        "https://arxiv.org/abs/2005.14165"
      ]
    },
    {
      "id": "lamda",
      "name": "LaMDA",
      "lab": "Google",
      "org": "google",
      "date": "2021-05-18",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "对话专用模型，Google I/O 2021 首次亮相。",
      "sources": [
        "https://blog.google/technology/ai/lamda/"
      ]
    },
    {
      "id": "palm",
      "name": "PaLM (540B)",
      "lab": "Google",
      "org": "google",
      "date": "2022-04-04",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "MMLU": 67.6,
        "GSM8K": 56.9
      },
      "note": "5400 亿参数稠密模型，随 Pathways 发布；日期取自技术报告 arXiv v1。",
      "sources": [
        "https://arxiv.org/abs/2204.02311"
      ]
    },
    {
      "id": "chatgpt",
      "name": "ChatGPT (GPT-3.5)",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2022-11-30",
      "precision": "day",
      "confidence": "high",
      "context": "4K",
      "flagship": true,
      "benchmarks": {},
      "note": "对话形态上线，五天百万用户，引爆大模型时代。",
      "sources": [
        "https://openai.com/blog/chatgpt"
      ]
    },
    {
      "id": "llama-1",
      "name": "LLaMA",
      "lab": "Meta",
      "org": "meta",
      "date": "2023-02-24",
      "precision": "day",
      "confidence": "high",
      "context": "2K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 63.4
      },
      "note": "7B–65B 研究许可泄露后引爆开源生态（分数为 65B 档）。",
      "sources": [
        "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
        "https://arxiv.org/abs/2302.13971"
      ]
    },
    {
      "id": "chatglm-6b",
      "name": "ChatGLM-6B",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2023-03-13",
      "precision": "day",
      "confidence": "high",
      "context": "2K",
      "flagship": true,
      "benchmarks": {},
      "note": "中文开源社区引爆点之一。",
      "sources": [
        "https://github.com/THUDM/ChatGLM-6B"
      ]
    },
    {
      "id": "claude-1",
      "name": "Claude 1",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2023-03-14",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {},
      "note": "首发即带约 9K 上下文与合作伙伴内测。",
      "sources": [
        "https://www.anthropic.com/news/introducing-claude"
      ]
    },
    {
      "id": "gpt-4",
      "name": "GPT-4",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2023-03-14",
      "precision": "day",
      "confidence": "high",
      "context": "8K/32K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 86.4
      },
      "note": "模拟律师资格考试约前 10%，多模态输入。",
      "sources": [
        "https://arxiv.org/abs/2303.08774"
      ]
    },
    {
      "id": "palm-2",
      "name": "PaLM 2",
      "lab": "Google",
      "org": "google",
      "date": "2023-05-10",
      "precision": "day",
      "confidence": "high",
      "context": "32K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 80.7
      },
      "note": "Google I/O 2023 发布，驱动 25+ 产品。",
      "sources": [
        "https://arxiv.org/abs/2305.10403"
      ]
    },
    {
      "id": "claude-2",
      "name": "Claude 2",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2023-07-11",
      "precision": "day",
      "confidence": "high",
      "context": "100K",
      "flagship": true,
      "benchmarks": {
        "HumanEval": 71.2,
        "GSM8K": 88
      },
      "note": "律师资格考试多选 76.5%。",
      "sources": [
        "https://www.anthropic.com/news/claude-2"
      ]
    },
    {
      "id": "llama-2",
      "name": "Llama 2",
      "lab": "Meta",
      "org": "meta",
      "date": "2023-07-18",
      "precision": "day",
      "confidence": "high",
      "context": "4K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 68.9,
        "HumanEval": 29.9,
        "GSM8K": 56.8
      },
      "note": "开放商用许可（分数为 70B 档）。",
      "sources": [
        "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
        "https://arxiv.org/abs/2307.09288"
      ]
    },
    {
      "id": "qwen-7b",
      "name": "Qwen (7B/14B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2023-08-03",
      "precision": "day",
      "confidence": "high",
      "context": "8K",
      "flagship": false,
      "benchmarks": {},
      "note": "Qwen 首批开源权重。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen-7B"
      ]
    },
    {
      "id": "code-llama",
      "name": "Code Llama",
      "lab": "Meta",
      "org": "meta",
      "date": "2023-08-24",
      "precision": "day",
      "confidence": "high",
      "context": "100K",
      "flagship": false,
      "benchmarks": {
        "HumanEval": 53.7
      },
      "note": "7/13/34B，代码专用（分数为 34B 档）。",
      "sources": [
        "https://ai.meta.com/blog/code-llama-large-language-model-coding/"
      ]
    },
    {
      "id": "mistral-7b",
      "name": "Mistral 7B",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2023-09-27",
      "precision": "day",
      "confidence": "high",
      "context": "8K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 62.5
      },
      "note": "Apache 2.0，全面胜过 Llama 2 13B 的 7B 模型。",
      "sources": [
        "https://mistral.ai/news/announcing-mistral-7b/"
      ]
    },
    {
      "id": "kimi",
      "name": "Kimi 智能助手",
      "lab": "月之暗面",
      "org": "others",
      "date": "2023-10-01",
      "precision": "month",
      "confidence": "high",
      "context": "200K 字",
      "flagship": true,
      "benchmarks": {},
      "note": "支持 20 万汉字长上下文的消费级产品，出圈之作。",
      "sources": [
        "https://en.wikipedia.org/wiki/Moonshot_AI"
      ]
    },
    {
      "id": "yi-34b",
      "name": "Yi-34B",
      "lab": "零一万物",
      "org": "others",
      "date": "2023-11-01",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "发布时登顶多个开源 MMLU / CMMLU 榜单。",
      "sources": [
        "https://huggingface.co/01-ai/Yi-34B"
      ]
    },
    {
      "id": "grok-1",
      "name": "Grok-1",
      "lab": "xAI",
      "org": "xai",
      "date": "2023-11-03",
      "precision": "day",
      "confidence": "high",
      "context": "8K",
      "flagship": true,
      "benchmarks": {},
      "note": "面向 X Premium+ 的内测预览；2024 年 3 月以 Apache 2.0 开源权重。",
      "sources": [
        "https://x.ai/blog/grok",
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "gpt-4-turbo",
      "name": "GPT-4 Turbo",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2023-11-06",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {},
      "note": "DevDay 2023 发布，上下文扩至 128K。",
      "sources": [
        "https://openai.com/blog/new-models-and-developer-products-announced-at-devday"
      ]
    },
    {
      "id": "claude-2.1",
      "name": "Claude 2.1",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2023-11-21",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {},
      "note": "上下文翻倍至 200K，幻觉减少约一半。",
      "sources": [
        "https://www.anthropic.com/news/claude-2-1"
      ]
    },
    {
      "id": "deepseek-llm",
      "name": "DeepSeek LLM (7B/67B)",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2023-11-29",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "首个 DeepSeek 开源系列。",
      "sources": [
        "https://huggingface.co/deepseek-ai/deepseek-llm-7b-chat"
      ]
    },
    {
      "id": "gemini-1.0-ultra",
      "name": "Gemini 1.0 Ultra",
      "lab": "Google",
      "org": "google",
      "date": "2023-12-06",
      "precision": "day",
      "confidence": "high",
      "context": "32K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 90,
        "MMMU": 59.4
      },
      "note": "首个在 MMLU 上超过人类专家的模型，Ultra/Pro/Nano 三档。",
      "sources": [
        "https://blog.google/technology/ai/google-gemini-ai/"
      ]
    },
    {
      "id": "mixtral-8x7b",
      "name": "Mixtral 8x7B",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2023-12-11",
      "precision": "day",
      "confidence": "high",
      "context": "32K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 70.6
      },
      "note": "稀疏 MoE（46.7B/激活 12.9B），MT-Bench 8.3。",
      "sources": [
        "https://mistral.ai/news/mixtral-of-experts/"
      ]
    },
    {
      "id": "glm-4",
      "name": "GLM-4",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2024-01-16",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {},
      "note": "智谱 DevDay 发布，官方称整体接近 GPT-4 Turbo。",
      "sources": [
        "https://github.com/THUDM/GLM-4"
      ]
    },
    {
      "id": "gemini-1.5-pro",
      "name": "Gemini 1.5 Pro",
      "lab": "Google",
      "org": "google",
      "date": "2024-02-15",
      "precision": "day",
      "confidence": "high",
      "context": "128K–1M",
      "flagship": true,
      "benchmarks": {},
      "note": "MoE 架构，百万级上下文，长文本检索 >99%。",
      "sources": [
        "https://ai.google.dev/gemini-api/docs/changelog"
      ]
    },
    {
      "id": "mistral-large",
      "name": "Mistral Large",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2024-02-26",
      "precision": "day",
      "confidence": "high",
      "context": "32K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 81.2
      },
      "note": "发布时官方称仅次于 GPT-4 的 API 模型。",
      "sources": [
        "https://mistral.ai/news/mistral-large/"
      ]
    },
    {
      "id": "claude-3",
      "name": "Claude 3（Opus / Sonnet / Haiku）",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2024-03-04",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 86.8,
        "GPQA Diamond": 50.4,
        "HumanEval": 84.9,
        "GSM8K": 95
      },
      "note": "三档同发（Haiku 3 月 13 日独立上线），Opus 一度成为 MMLU 最强。",
      "sources": [
        "https://www.anthropic.com/news/claude-3-family"
      ]
    },
    {
      "id": "grok-1.5",
      "name": "Grok-1.5",
      "lab": "xAI",
      "org": "xai",
      "date": "2024-03-29",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {},
      "note": "上下文扩至 128K；5 月 15 日向 X Premium 全量开放。",
      "sources": [
        "https://x.ai/blog/grok-1.5",
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "llama-3",
      "name": "Llama 3 (70B)",
      "lab": "Meta",
      "org": "meta",
      "date": "2024-04-18",
      "precision": "day",
      "confidence": "high",
      "context": "8K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 82,
        "HumanEval": 81.7,
        "GSM8K": 93
      },
      "note": "8B/70B 双发，15T token 预训练（分数为 70B 档）。",
      "sources": [
        "https://ai.meta.com/blog/meta-llama-3/"
      ]
    },
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2024-05-13",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 88.7
      },
      "note": "原生全模态，语音延迟约 320ms。",
      "sources": [
        "https://openai.com/index/hello-gpt-4o/"
      ]
    },
    {
      "id": "gemini-1.5-flash",
      "name": "Gemini 1.5 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2024-05-14",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {},
      "note": "Google I/O 2024 发布，由 1.5 Pro 蒸馏。",
      "sources": [
        "https://ai.google.dev/gemini-api/docs/changelog"
      ]
    },
    {
      "id": "deepseek-v2",
      "name": "DeepSeek-V2",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2024-05-16",
      "precision": "day",
      "confidence": "low",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 78.5,
        "HumanEval": 81
      },
      "note": "236B MoE（A21B），以约 1/10 成本对标 GPT-4-Turbo 水准；日期待核实。",
      "sources": [
        "https://arxiv.org/abs/2405.04434",
        "https://api-docs.deepseek.com/updates"
      ]
    },
    {
      "id": "qwen2-72b",
      "name": "Qwen2 (72B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2024-06-07",
      "precision": "day",
      "confidence": "low",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 84.2,
        "HumanEval": 73.2,
        "GPQA": 57.9
      },
      "note": "0.5B–72B 全家桶；日期待核实。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen2-72B-Instruct"
      ]
    },
    {
      "id": "claude-3.5-sonnet",
      "name": "Claude 3.5 Sonnet",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2024-06-20",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 59.4,
        "MMLU": 88.7,
        "HumanEval": 92
      },
      "note": "以 Sonnet 价格超过 Opus 3 水准。",
      "sources": [
        "https://www.anthropic.com/news/claude-3-5-sonnet"
      ]
    },
    {
      "id": "llama-3.1-405b",
      "name": "Llama 3.1 405B",
      "lab": "Meta",
      "org": "meta",
      "date": "2024-07-23",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 87.3,
        "HumanEval": 89,
        "GPQA": 50.7
      },
      "note": "当时最强开放权重模型，对标 GPT-4o。",
      "sources": [
        "https://ai.meta.com/blog/meta-llama-3-1/"
      ]
    },
    {
      "id": "mistral-large-2",
      "name": "Mistral Large 2 (123B)",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2024-07-24",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 84
      },
      "note": "研究许可开放权重。",
      "sources": [
        "https://mistral.ai/news/mistral-large-2407/"
      ]
    },
    {
      "id": "grok-2",
      "name": "Grok-2",
      "lab": "xAI",
      "org": "xai",
      "date": "2024-08-14",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {},
      "note": "与 Grok-2 mini 同发；次年为开放权重（xAI 社区许可）。",
      "sources": [
        "https://x.ai/blog/grok-2",
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "deepseek-v2.5",
      "name": "DeepSeek-V2.5",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2024-09-05",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "HumanEval": 89
      },
      "note": "合并 chat 与 coder 两条线。",
      "sources": [
        "https://api-docs.deepseek.com/updates"
      ]
    },
    {
      "id": "o1-preview",
      "name": "o1-preview",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2024-09-12",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "AIME 2024": 83.3
      },
      "note": "推理模型开端：AIME 约 83%（GPT-4o 仅 13%），Codeforces 89 分位。",
      "sources": [
        "https://openai.com/index/learning-to-reason-with-llms/"
      ]
    },
    {
      "id": "qwen2.5",
      "name": "Qwen2.5 (72B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2024-09-19",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 86.1,
        "HumanEval": 86.4,
        "MATH": 83.1
      },
      "note": "0.5B–72B，另有 MoE 版本。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen2.5-72B-Instruct"
      ]
    },
    {
      "id": "llama-3.2",
      "name": "Llama 3.2 (11B/90B 视觉)",
      "lab": "Meta",
      "org": "meta",
      "date": "2024-09-25",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {},
      "note": "首批开源多模态 Llama，另有 1B/3B 边缘模型。",
      "sources": [
        "https://ai.meta.com/blog/llama-3-2-connect-2024-vision-edge-mobile-devices/"
      ]
    },
    {
      "id": "claude-3.5-sonnet-v2",
      "name": "Claude 3.5 Sonnet（新版）",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2024-10-22",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 49
      },
      "note": "同日发布「计算机使用」（computer use）能力。",
      "sources": [
        "https://www.anthropic.com/news/claude-3-5-sonnet"
      ]
    },
    {
      "id": "qwq-32b-preview",
      "name": "QwQ-32B-Preview",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2024-11-28",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "AIME 2024": 44
      },
      "note": "Qwen 首个公开推理模型（Apache 2.0）。",
      "sources": [
        "https://en.wikipedia.org/wiki/Qwen"
      ]
    },
    {
      "id": "o1",
      "name": "o1（正式版）",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2024-12-05",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "随 ChatGPT Pro 订阅一同发布。",
      "sources": [
        "https://arxiv.org/abs/2412.16720"
      ]
    },
    {
      "id": "llama-3.3-70b",
      "name": "Llama 3.3 70B",
      "lab": "Meta",
      "org": "meta",
      "date": "2024-12-06",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "MMLU": 86,
        "HumanEval": 88.4,
        "GPQA Diamond": 50.5
      },
      "note": "以 70B 达到 405B 多数水准。",
      "sources": [
        "https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct"
      ]
    },
    {
      "id": "gemini-2.0-flash",
      "name": "Gemini 2.0 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2024-12-11",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {},
      "note": "关键基准超过 1.5 Pro 且速度翻倍，「智能体时代」首发。",
      "sources": [
        "https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/"
      ]
    },
    {
      "id": "o3-preview",
      "name": "o3（预览）",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2024-12-20",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 87.7,
        "SWE-bench Verified": 71.7
      },
      "note": "发布时 ARC-AGI 成绩约为 o1 的 3 倍。",
      "sources": [
        "https://en.wikipedia.org/wiki/OpenAI_o3"
      ]
    },
    {
      "id": "deepseek-v3",
      "name": "DeepSeek-V3",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2024-12-26",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "MMLU": 88.5,
        "MMLU-Pro": 75.9,
        "GPQA Diamond": 59.1,
        "MATH-500": 90.2,
        "AIME 2024": 39.2,
        "LiveCodeBench": 40.5
      },
      "note": "671B MoE（A37B），FP8 训练，训练成本引发全行业讨论。",
      "sources": [
        "https://arxiv.org/abs/2412.19437",
        "https://api-docs.deepseek.com/updates"
      ]
    },
    {
      "id": "minimax-text-01",
      "name": "MiniMax-Text-01",
      "lab": "MiniMax",
      "org": "others",
      "date": "2025-01-12",
      "precision": "day",
      "confidence": "high",
      "context": "4M",
      "flagship": false,
      "benchmarks": {},
      "note": "456B MoE，400 万 token 上下文（闪电注意力混合）。",
      "sources": [
        "https://huggingface.co/MiniMaxAI/MiniMax-Text-01"
      ]
    },
    {
      "id": "deepseek-r1",
      "name": "DeepSeek-R1",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2025-01-20",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "AIME 2024": 79.8,
        "MATH-500": 97.3,
        "GPQA Diamond": 71.5,
        "LiveCodeBench": 65.9
      },
      "note": "开源推理模型（MIT），R1-Zero 与 6 个蒸馏版同发，震动全球市场。",
      "sources": [
        "https://arxiv.org/abs/2501.12948",
        "https://api-docs.deepseek.com/updates"
      ]
    },
    {
      "id": "kimi-k1.5",
      "name": "Kimi k1.5",
      "lab": "月之暗面",
      "org": "others",
      "date": "2025-01-20",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "AIME 2024": 77.5,
        "MATH-500": 96.2
      },
      "note": "多模态 RL 推理，o1 级别（与 R1 同日发布）。",
      "sources": [
        "https://arxiv.org/abs/2501.12599"
      ]
    },
    {
      "id": "o3-mini",
      "name": "o3-mini",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-01-31",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 79.7,
        "AIME 2024": 87.3,
        "SWE-bench Verified": 61
      },
      "note": "高性价比推理模型。",
      "sources": [
        "https://en.wikipedia.org/wiki/OpenAI_o3"
      ]
    },
    {
      "id": "grok-3",
      "name": "Grok 3",
      "lab": "xAI",
      "org": "xai",
      "date": "2025-02-17",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {},
      "note": "20 万 GPU 的 Colossus 数据中心训练，官方称推理版在 AIME 2025 等基准超过 o3-mini-high。",
      "sources": [
        "https://x.ai/blog/grok-3",
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "claude-3.7-sonnet",
      "name": "Claude 3.7 Sonnet",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2025-02-24",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 62.3,
        "GPQA Diamond": 78.2,
        "AIME 2024": 61.3
      },
      "note": "首个「混合推理」Claude，扩展思考可并行计算提升至 AIME 80%。",
      "sources": [
        "https://www.anthropic.com/news/claude-3-7-sonnet"
      ]
    },
    {
      "id": "gpt-4.5",
      "name": "GPT-4.5",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-02-27",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "GPQA": 71.4,
        "MMMU": 74.4,
        "SWE-bench Verified": 38
      },
      "note": "最后一个非推理系列旗舰。",
      "sources": [
        "https://openai.com/index/introducing-gpt-4-5/"
      ]
    },
    {
      "id": "qwq-32b",
      "name": "QwQ-32B",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2025-03-06",
      "precision": "day",
      "confidence": "low",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "AIME": 79.5,
        "LiveCodeBench": 63.4
      },
      "note": "32B 强化学习推理模型，日期待核实。",
      "sources": [
        "https://en.wikipedia.org/wiki/Qwen"
      ]
    },
    {
      "id": "gemini-2.5-pro",
      "name": "Gemini 2.5 Pro",
      "lab": "Google",
      "org": "google",
      "date": "2025-03-25",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "HLE": 18.8,
        "GPQA Diamond": 78,
        "AIME 2025": 86.7,
        "SWE-bench Verified": 63.8
      },
      "note": "首个「默认思考」的 Gemini，发布时 LMArena 第一。",
      "sources": [
        "https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/"
      ]
    },
    {
      "id": "llama-4",
      "name": "Llama 4 (Scout / Maverick)",
      "lab": "Meta",
      "org": "meta",
      "date": "2025-04-05",
      "precision": "day",
      "confidence": "high",
      "context": "10M (Scout)",
      "flagship": true,
      "benchmarks": {
        "MMLU-Pro": 80.5,
        "GPQA Diamond": 69.8,
        "LiveCodeBench": 43.4
      },
      "note": "MoE（17B 激活）；Scout 宣称 10M 上下文；分数为 Maverick 档，LMArena 实验版 Elo 引发争议；同日预告的 Behemoth (~2T) 最终未发布。",
      "sources": [
        "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
      ]
    },
    {
      "id": "gpt-4.1",
      "name": "GPT-4.1",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-04-14",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 54.6,
        "MMLU": 90.2,
        "GPQA Diamond": 66.3
      },
      "note": "百万级上下文，API 编码主力。",
      "sources": [
        "https://openai.com/index/gpt-4-1/"
      ]
    },
    {
      "id": "o3-o4-mini",
      "name": "o3 / o4-mini（正式）",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-04-16",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {
        "AIME 2025": 98.4
      },
      "note": "带工具 AIME 2025 98.4%（o4-mini 99.5%）。",
      "sources": [
        "https://openai.com/index/introducing-o3-and-o4-mini/"
      ]
    },
    {
      "id": "gemini-2.5-flash",
      "name": "Gemini 2.5 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2025-04-17",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {},
      "note": "可控制思考预算的性价比主力。",
      "sources": [
        "https://ai.google.dev/gemini-api/docs/changelog"
      ]
    },
    {
      "id": "qwen3",
      "name": "Qwen3 (235B-A22B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2025-04-28",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "MMLU-Pro": 68.2,
        "SWE-bench Pro": 21.4
      },
      "note": "0.6B–235B 全系列，混合思考，Apache 2.0，36T token 预训练。",
      "sources": [
        "https://arxiv.org/abs/2505.09388",
        "https://huggingface.co/Qwen/Qwen3-235B-A22B"
      ]
    },
    {
      "id": "mistral-medium-3",
      "name": "Mistral Medium 3",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2025-05-07",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "官方称以约 1/8 成本达到 Claude 3.7 Sonnet 九成水准。",
      "sources": [
        "https://mistral.ai/news/mistral-medium-3/"
      ]
    },
    {
      "id": "claude-4",
      "name": "Claude 4（Opus 4 / Sonnet 4）",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2025-05-22",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 72.7,
        "GPQA Diamond": 74.9
      },
      "note": "同日双发；SWE-bench 72.5%（Opus）/ 72.7%（Sonnet），并行测试时计算可达 80.2%。",
      "sources": [
        "https://www.anthropic.com/news/claude-4"
      ]
    },
    {
      "id": "magistral",
      "name": "Magistral",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2025-06-10",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "AIME 2024": 73.6
      },
      "note": "Mistral 首个推理模型（Small 24B Apache 2.0 + Medium）。",
      "sources": [
        "https://mistral.ai/news/magistral/"
      ]
    },
    {
      "id": "minimax-m1",
      "name": "MiniMax-M1",
      "lab": "MiniMax",
      "org": "others",
      "date": "2025-06-13",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {},
      "note": "开源推理模型（456B/A45.9B）。",
      "sources": [
        "https://huggingface.co/MiniMaxAI/MiniMax-M1-80k"
      ]
    },
    {
      "id": "grok-4",
      "name": "Grok 4",
      "lab": "xAI",
      "org": "xai",
      "date": "2025-07-09",
      "precision": "day",
      "confidence": "high",
      "context": "256K",
      "flagship": true,
      "benchmarks": {},
      "note": "与 Grok 4 Heavy 同发，配套 $300/月订阅。",
      "sources": [
        "https://x.ai/blog/grok-4",
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "kimi-k2",
      "name": "Kimi K2",
      "lab": "月之暗面",
      "org": "others",
      "date": "2025-07-11",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 75.1,
        "MMLU": 89.5,
        "SWE-bench Verified": 65.8
      },
      "note": "1T MoE（A32B），万亿参数开源浪潮起点。",
      "sources": [
        "https://huggingface.co/moonshotai/Kimi-K2-Instruct"
      ]
    },
    {
      "id": "glm-4.5",
      "name": "GLM-4.5",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2025-07-28",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": true,
      "benchmarks": {
        "AIME 2025": 91,
        "GPQA Diamond": 79.1,
        "SWE-bench Verified": 64.2
      },
      "note": "355B MoE（A32B），混合思考，12 项开源智能体基准第一。",
      "sources": [
        "https://arxiv.org/abs/2508.06471"
      ]
    },
    {
      "id": "gemini-2.5-deep-think",
      "name": "Gemini 2.5 Deep Think",
      "lab": "Google",
      "org": "google",
      "date": "2025-08-01",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "研究版达到 IMO 2025 金牌水准。",
      "sources": [
        "https://blog.google/products/gemini/gemini-2-5-deep-think/"
      ]
    },
    {
      "id": "claude-opus-4.1",
      "name": "Claude Opus 4.1",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2025-08-05",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 74.5,
        "AIME 2025": 78,
        "GPQA Diamond": 81
      },
      "note": "聚焦编码与智能体微调。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-4-1"
      ]
    },
    {
      "id": "gpt-5",
      "name": "GPT-5",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-08-07",
      "precision": "day",
      "confidence": "high",
      "context": "272K",
      "flagship": true,
      "benchmarks": {
        "AIME 2025": 94.6,
        "SWE-bench Verified": 74.9,
        "MMMU": 84.2
      },
      "note": "统一推理与对话路线（o 系列并入），事实错误较 o3 减少约 80%。",
      "sources": [
        "https://openai.com/index/introducing-gpt-5/",
        "https://arxiv.org/abs/2601.03267"
      ]
    },
    {
      "id": "deepseek-v3.1",
      "name": "DeepSeek-V3.1",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2025-08-21",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "AIME 2025": 88.4,
        "GPQA Diamond": 80.1,
        "LiveCodeBench": 74.8
      },
      "note": "混合思考：一个模型两种模式。",
      "sources": [
        "https://huggingface.co/deepseek-ai/DeepSeek-V3.1"
      ]
    },
    {
      "id": "qwen3-max",
      "name": "Qwen3-Max",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2025-09-05",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "万亿级 API 专属旗舰（不开源）。",
      "sources": [
        "https://en.wikipedia.org/wiki/Qwen"
      ]
    },
    {
      "id": "claude-sonnet-4.5",
      "name": "Claude Sonnet 4.5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2025-09-29",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 77.2,
        "AIME 2025": 87,
        "GPQA Diamond": 83.4,
        "OSWorld": 61.4
      },
      "note": "发布时 SWE-bench 最强，OSWorld SOTA。",
      "sources": [
        "https://www.anthropic.com/news/claude-sonnet-4-5"
      ]
    },
    {
      "id": "deepseek-v3.2-exp",
      "name": "DeepSeek-V3.2-Exp",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2025-09-29",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "AIME 2025": 89.3,
        "GPQA Diamond": 79.9
      },
      "note": "引入 DeepSeek Sparse Attention，API 价格约降一半。",
      "sources": [
        "https://huggingface.co/deepseek-ai/DeepSeek-V3.2-Exp"
      ]
    },
    {
      "id": "glm-4.6",
      "name": "GLM-4.6",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2025-09-30",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {},
      "note": "上下文扩至 200K；CC-Bench 对 Claude Sonnet 4 胜率 48.6%。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-4.6"
      ]
    },
    {
      "id": "minimax-m2",
      "name": "MiniMax-M2",
      "lab": "MiniMax",
      "org": "others",
      "date": "2025-10-22",
      "precision": "day",
      "confidence": "low",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 69.4
      },
      "note": "230B/A10B 智能体编码方向。",
      "sources": [
        "https://huggingface.co/MiniMaxAI/MiniMax-M2"
      ]
    },
    {
      "id": "kimi-k2-thinking",
      "name": "Kimi K2-Thinking",
      "lab": "月之暗面",
      "org": "others",
      "date": "2025-11-04",
      "precision": "day",
      "confidence": "high",
      "context": "256K",
      "flagship": false,
      "benchmarks": {
        "AIME 2025": 94.5,
        "GPQA": 84.5,
        "SWE-bench Verified": 71.3
      },
      "note": "原生 INT4 量化训练，200–300 步工具链。",
      "sources": [
        "https://huggingface.co/moonshotai/Kimi-K2-Thinking"
      ]
    },
    {
      "id": "gpt-5.1",
      "name": "GPT-5.1",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-11-12",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "自适应推理（Instant / Thinking / Auto）。",
      "sources": [
        "https://openai.com/index/gpt-5-1/"
      ]
    },
    {
      "id": "gpt-5.1-codex-max",
      "name": "GPT-5.1-Codex-Max",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-11-17",
      "precision": "day",
      "confidence": "high",
      "context": "多窗口压缩",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 77.9,
        "Terminal-Bench 2.0": 58.1
      },
      "note": "首个原生跨多上下文窗口训练的模型，可连续工作 24 小时以上。",
      "sources": [
        "https://openai.com/index/gpt-5-1-codex-max/"
      ]
    },
    {
      "id": "grok-4.1",
      "name": "Grok 4.1",
      "lab": "xAI",
      "org": "xai",
      "date": "2025-11-17",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "推理与多模态改进；Fast 版 11 月 19 日上线。",
      "sources": [
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "gemini-3-pro",
      "name": "Gemini 3 Pro",
      "lab": "Google",
      "org": "google",
      "date": "2025-11-18",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "HLE": 37.5,
        "GPQA Diamond": 91.9,
        "SWE-bench Verified": 76.2,
        "MMMU-Pro": 81,
        "LMArena (Elo)": 1501
      },
      "note": "首发即接入 Google Search AI Mode，配套 Antigravity IDE。",
      "sources": [
        "https://blog.google/products/gemini/gemini-3/"
      ]
    },
    {
      "id": "claude-opus-4.5",
      "name": "Claude Opus 4.5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2025-11-24",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 80.9,
        "GPQA Diamond": 87,
        "ARC-AGI-2": 37.6,
        "Terminal-Bench 2.0": 59.3
      },
      "note": "输出 token 减少 76% 的同时追平 Sonnet 4.5 最佳成绩。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-4-5"
      ]
    },
    {
      "id": "deepseek-v3.2",
      "name": "DeepSeek-V3.2",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2025-12-01",
      "precision": "day",
      "confidence": "high",
      "context": "128K",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 82.4
      },
      "note": "高算力变体 V3.2-Speciale 达 IMO 2025 与 IOI 2025 金牌水准。",
      "sources": [
        "https://huggingface.co/deepseek-ai/DeepSeek-V3.2"
      ]
    },
    {
      "id": "mistral-3",
      "name": "Mistral 3 (Large 3)",
      "lab": "Mistral AI",
      "org": "others",
      "date": "2025-12-02",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {},
      "note": "675B MoE（激活 41B）Apache 2.0 多模态，Mixtral 之后首个 MoE 旗舰；同发 Ministral 3 系列。",
      "sources": [
        "https://mistral.ai/news/mistral-3/"
      ]
    },
    {
      "id": "gemini-3-deep-think",
      "name": "Gemini 3 Deep Think",
      "lab": "Google",
      "org": "google",
      "date": "2025-12-04",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "HLE": 41,
        "ARC-AGI-2": 45.1
      },
      "note": "官方公告为 12 月 4 日（Wikipedia 记 12 月 3 日，取官方）。",
      "sources": [
        "https://blog.google/products/gemini/gemini-3-deep-think/"
      ]
    },
    {
      "id": "gpt-5.2",
      "name": "GPT-5.2",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2025-12-08",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 80,
        "GPQA Diamond": 92.4,
        "AIME 2025": 100,
        "ARC-AGI-2": 52.9
      },
      "note": "官方公告 12 月 8 日（Wikipedia 记 12 月 11 日，取官方）。AIME 2025 无工具满分。",
      "sources": [
        "https://openai.com/index/introducing-gpt-5-2/"
      ]
    },
    {
      "id": "gemini-3-flash",
      "name": "Gemini 3 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2025-12-17",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 90.4,
        "HLE": 33.7,
        "MMMU-Pro": 81.2,
        "SWE-bench Verified": 78
      },
      "note": "以主力模型成本提供 3 Pro 级质量。",
      "sources": [
        "https://blog.google/products/gemini/gemini-3-flash/"
      ]
    },
    {
      "id": "glm-4.7",
      "name": "GLM-4.7",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2025-12-22",
      "precision": "day",
      "confidence": "high",
      "context": "200K",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 85.7,
        "SWE-bench Verified": 73.8
      },
      "note": "GLM-4 系列收官。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-4.7"
      ]
    },
    {
      "id": "kimi-k2.5",
      "name": "Kimi K2.5",
      "lab": "月之暗面",
      "org": "others",
      "date": "2026-01-29",
      "precision": "day",
      "confidence": "low",
      "context": "256K",
      "flagship": false,
      "benchmarks": {
        "AIME 2025": 96.1,
        "GPQA Diamond": 87.6,
        "SWE-bench Verified": 76.8
      },
      "note": "视觉智能体 + Agent Swarm；日期待核实。",
      "sources": [
        "https://huggingface.co/moonshotai/Kimi-K2.5"
      ]
    },
    {
      "id": "gemini-3.1-deep-think",
      "name": "Gemini 3.1 Deep Think",
      "lab": "Google",
      "org": "google",
      "date": "2026-02-01",
      "precision": "month",
      "confidence": "low",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "ARC-AGI-2": 84.6,
        "HLE": 48.4
      },
      "note": "官方仅标注 2026 年 2 月，具体日未公布。",
      "sources": [
        "https://deepmind.google/models/gemini/deep-think/"
      ]
    },
    {
      "id": "claude-opus-4.6",
      "name": "Claude Opus 4.6",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-02-05",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 80.8,
        "HLE": 40,
        "ARC-AGI-2": 68.8,
        "GPQA Diamond": 91.3,
        "Terminal-Bench 2.0": 65.4
      },
      "note": "1M 上下文上线，BrowseComp 84%。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-4-6"
      ]
    },
    {
      "id": "gpt-5.3-codex",
      "name": "GPT-5.3-Codex",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2026-02-05",
      "precision": "day",
      "confidence": "low",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "仅 Wikipedia 可查，未见带日期的官方公告页。",
      "sources": [
        "https://en.wikipedia.org/wiki/GPT-5.3"
      ]
    },
    {
      "id": "glm-5",
      "name": "GLM-5",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2026-02-12",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "HLE": 30.5,
        "GPQA Diamond": 86,
        "SWE-bench Verified": 77.8,
        "Terminal-Bench 2.0": 56.2
      },
      "note": "744B MoE（A40B）+ 稀疏注意力，MIT 协议。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-5",
        "https://arxiv.org/abs/2602.15763"
      ]
    },
    {
      "id": "qwen3.5",
      "name": "Qwen3.5 (397B-A17B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2026-02-16",
      "precision": "day",
      "confidence": "high",
      "context": "256K–1M",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 86.6,
        "SWE-bench Verified": 72,
        "MMLU-Pro": 86.7,
        "LiveCodeBench": 78.9
      },
      "note": "原生多模态智能体系列（分数为 122B-A10B 档实测）。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen3.5-122B-A10B"
      ]
    },
    {
      "id": "claude-sonnet-4.6",
      "name": "Claude Sonnet 4.6",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-02-17",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "SWE-bench Verified": 79.6,
        "ARC-AGI-2": 58.3,
        "Terminal-Bench 2.0": 59.1
      },
      "note": "Opus 4.6 同代轻量版。",
      "sources": [
        "https://www.anthropic.com/news/claude-sonnet-4-6"
      ]
    },
    {
      "id": "gemini-3.1-pro",
      "name": "Gemini 3.1 Pro",
      "lab": "Google",
      "org": "google",
      "date": "2026-02-19",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "ARC-AGI-2": 77.1
      },
      "note": "推理能力较 3 Pro 翻倍以上（ARC-AGI-2）。",
      "sources": [
        "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/"
      ]
    },
    {
      "id": "gpt-5.4",
      "name": "GPT-5.4",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2026-03-05",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 92.8,
        "ARC-AGI-2": 73.3,
        "Terminal-Bench 2.0": 75.1,
        "OSWorld-Verified": 75
      },
      "note": "OSWorld-Verified 75%（人类平均 72.4%）。",
      "sources": [
        "https://en.wikipedia.org/wiki/GPT-5.4",
        "https://openai.com/index/introducing-gpt-5-5/"
      ]
    },
    {
      "id": "muse-spark",
      "name": "Muse Spark",
      "lab": "Meta",
      "org": "meta",
      "date": "2026-04-01",
      "precision": "month",
      "confidence": "low",
      "context": "",
      "flagship": true,
      "benchmarks": {},
      "note": "Meta Superintelligence Labs 以 Muse 系列接替 Llama 驱动聊天机器人；仅月可考，官方公告 URL 未定位（Muse Spark 1.1 于 7 月 9 日发布）。",
      "sources": [
        "https://en.wikipedia.org/wiki/Llama_(language_model)"
      ]
    },
    {
      "id": "glm-5.1",
      "name": "GLM-5.1",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2026-04-07",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 86.2,
        "HLE": 34.7,
        "SWE-bench Pro": 58.4,
        "Terminal-Bench 2.0": 63.5
      },
      "note": "3 月底向订阅用户推送、4 月 7 日开源。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-5.1"
      ]
    },
    {
      "id": "kimi-k2.6",
      "name": "Kimi K2.6",
      "lab": "月之暗面",
      "org": "others",
      "date": "2026-04-14",
      "precision": "day",
      "confidence": "low",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 90.5,
        "SWE-bench Verified": 80.2
      },
      "note": "日期取自 HF 仓库。",
      "sources": [
        "https://huggingface.co/moonshotai/Kimi-K2.6"
      ]
    },
    {
      "id": "qwen3.6",
      "name": "Qwen3.6 (35B-A3B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2026-04-15",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 86,
        "SWE-bench Verified": 73.4,
        "AIME 2026": 92.7
      },
      "note": "智能体编码刷新。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen3.6-35B-A3B"
      ]
    },
    {
      "id": "claude-opus-4.7",
      "name": "Claude Opus 4.7",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-04-16",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "OSWorld-Verified": 82.3
      },
      "note": "新增 xhigh 思考档位与高分辨率图像输入；官方仅以交互图表公布分数。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-4-7"
      ]
    },
    {
      "id": "deepseek-v4",
      "name": "DeepSeek-V4 (Pro)",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2026-04-22",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 90.1,
        "SWE-bench Verified": 80.6,
        "LiveCodeBench": 93.5,
        "MMLU-Pro": 87.5,
        "HLE": 37.7,
        "Terminal-Bench 2.0": 67.9
      },
      "note": "1.6T MoE（A49B），百万级上下文，发布时称「当前最强开源模型」。",
      "sources": [
        "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro",
        "https://api-docs.deepseek.com/updates"
      ]
    },
    {
      "id": "gpt-5.5",
      "name": "GPT-5.5",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2026-04-23",
      "precision": "day",
      "confidence": "high",
      "context": "400K",
      "flagship": false,
      "benchmarks": {
        "Terminal-Bench 2.0": 82.7,
        "GPQA Diamond": 93.6,
        "ARC-AGI-2": 85
      },
      "note": "Codex 版上下文 400K。",
      "sources": [
        "https://openai.com/index/introducing-gpt-5-5/"
      ]
    },
    {
      "id": "qwen3.7-max",
      "name": "Qwen3.7-Max",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2026-05-01",
      "precision": "month",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 92.4,
        "HLE": 41.4,
        "SWE-bench Pro": 60.6,
        "Terminal-Bench 2.1": 74.5
      },
      "note": "仅 API；具体日期未公布（按当月定位）。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
      ]
    },
    {
      "id": "gemini-3.5-flash",
      "name": "Gemini 3.5 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2026-05-19",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "Terminal-Bench 2.1": 76.2,
        "MCP Atlas": 83.6
      },
      "note": "首个 3.5 系模型，直接 GA，智能体/编码基准超过 3.1 Pro。",
      "sources": [
        "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/"
      ]
    },
    {
      "id": "claude-opus-4.8",
      "name": "Claude Opus 4.8",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-05-28",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "SWE-Bench Pro": 69.2,
        "Terminal-Bench 2.1": 82.7,
        "OSWorld-Verified": 83.4,
        "HLE": 49.8
      },
      "note": "SWE-Bench Pro 69.2%。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-4-8"
      ]
    },
    {
      "id": "minimax-m3",
      "name": "MiniMax-M3",
      "lab": "MiniMax",
      "org": "others",
      "date": "2026-06-02",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "SWE-bench Verified": 80.5,
        "SWE-bench Pro": 59
      },
      "note": "428B/A23B，稀疏注意力，原生多模态。",
      "sources": [
        "https://arxiv.org/abs/2606.13392"
      ]
    },
    {
      "id": "claude-fable-5",
      "name": "Claude Fable 5 / Mythos 5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-06-09",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "SWE-Bench Pro": 80.3,
        "HLE": 59,
        "Terminal-Bench 2.1": 88,
        "OSWorld-Verified": 85
      },
      "note": "Fable 为公开旗舰，Mythos 为经 Glasswing 可信访问提供的加固版；上线后公开访问一度暂停、7 月 1 日恢复。",
      "sources": [
        "https://www.anthropic.com/news/claude-fable-5-mythos-5",
        "https://www.anthropic.com/news/redeploying-fable-5"
      ]
    },
    {
      "id": "glm-5.2",
      "name": "GLM-5.2",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2026-06-16",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "Terminal-Bench 2.1": 81,
        "GPQA Diamond": 91.2
      },
      "note": "同底座的 post-training 升级。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-5.2"
      ]
    },
    {
      "id": "gpt-5.6",
      "name": "GPT-5.6",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2026-06-26",
      "precision": "day",
      "confidence": "low",
      "context": "≥1M",
      "flagship": false,
      "benchmarks": {
        "GPQA Diamond": 94.6,
        "Terminal-Bench 2.1": 88.8,
        "ARC-AGI-3": 7.78
      },
      "note": "6 月 26 日限量预览、7 月 9 日 GA（日期仅 Wikipedia 可查）；Luna/Terra/Sol 三档。",
      "sources": [
        "https://openai.com/index/gpt-5-6/",
        "https://en.wikipedia.org/wiki/GPT-5.6"
      ]
    },
    {
      "id": "claude-sonnet-5",
      "name": "Claude Sonnet 5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-06-30",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": false,
      "benchmarks": {
        "SWE-Bench Pro": 63.2,
        "Terminal-Bench 2.1": 80.4
      },
      "note": "新分词器（同文本约多 30% token）。",
      "sources": [
        "https://www.anthropic.com/news/claude-sonnet-5"
      ]
    },
    {
      "id": "grok-4.5",
      "name": "Grok 4.5",
      "lab": "xAI",
      "org": "xai",
      "date": "2026-07-08",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "经 Grok Build、Cursor 编辑器与 API 控制台发布，欧盟暂缓上线。",
      "sources": [
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "kimi-k3",
      "name": "Kimi K3",
      "lab": "月之暗面",
      "org": "others",
      "date": "2026-07-16",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 93.5,
        "Terminal-Bench 2.1": 88.3,
        "OSWorld-Verified": 84.8,
        "HLE": 43.5
      },
      "note": "2.8T MoE（A104B），全球首个开放 3T 级模型。",
      "sources": [
        "https://huggingface.co/moonshotai/Kimi-K3"
      ]
    },
    {
      "id": "gemini-3.6-flash",
      "name": "Gemini 3.6 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2026-07-21",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "DeepSWE": 49,
        "MLE-Bench": 63.9,
        "OSWorld-Verified": 83
      },
      "note": "同日公告：Gemini 4 预训练已开始。",
      "sources": [
        "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/"
      ]
    },
    {
      "id": "claude-opus-5",
      "name": "Claude Opus 5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-07-24",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "Terminal-Bench 4.0": 52.3
      },
      "note": "Frontier-Bench 超过所有已发布模型约 2 倍；ARC-AGI 3 约为次优 3 倍（官方仅交互图表）。",
      "sources": [
        "https://www.anthropic.com/news/claude-opus-5"
      ]
    },
    {
      "id": "qwen3.8-max",
      "name": "Qwen3.8-Max (2.4T-A95B)",
      "lab": "阿里通义",
      "org": "alibaba",
      "date": "2026-08-03",
      "precision": "day",
      "confidence": "high",
      "context": "256K–1M",
      "flagship": true,
      "benchmarks": {
        "GPQA Diamond": 92.6,
        "HLE": 43.6,
        "SWE-bench Pro": 67.7,
        "Terminal-Bench 2.1": 86.6,
        "DeepSWE": 56.6
      },
      "note": "首个 Max 级开源模型（512 专家），对标 Opus 4.8 / Fable 5 / GPT-5.6 Sol。",
      "sources": [
        "https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B"
      ]
    },
    {
      "id": "grok-4.6",
      "name": "Grok 4.6",
      "lab": "xAI",
      "org": "xai",
      "date": "2026-08-12",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {},
      "note": "",
      "sources": [
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "gemini-3.7-flash",
      "name": "Gemini 3.7 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2026-08-13",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": false,
      "benchmarks": {
        "DeepSWE v1.1": 65.3,
        "FrontierCode 1.1": 43.6
      },
      "note": "面向编码与智能体的主力型号。",
      "sources": [
        "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/"
      ]
    },
    {
      "id": "glm-5.3",
      "name": "GLM-5.3",
      "lab": "智谱 AI",
      "org": "others",
      "date": "2026-08-14",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "Terminal-Bench 2.1": 88.2,
        "DeepSWE": 66.9,
        "HLE": 62.5
      },
      "note": "753B MoE；HLE 为带工具成绩；公告 8 月 14 日、权重 8 月 25 日。",
      "sources": [
        "https://huggingface.co/zai-org/GLM-5.3"
      ]
    },
    {
      "id": "claude-fable-5.1",
      "name": "Claude Fable 5.1 / Mythos 5.1",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-09-01",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "HLE": 60.9,
        "Terminal-Bench 4.0": 55.8,
        "Terminal-Bench-Science 0.1": 52.6
      },
      "note": "缓存读取降价约 25%；Mythos 5.1 走可信访问。",
      "sources": [
        "https://www.anthropic.com/claude-fable-and-mythos-5-1"
      ]
    },
    {
      "id": "gemini-3.8-flash",
      "name": "Gemini 3.8 Flash",
      "lab": "Google",
      "org": "google",
      "date": "2026-09-02",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {
        "HLE-Verified": 54.9,
        "Terminal-Bench 2.1": 89.4,
        "DeepSWE v1.1": 73.7
      },
      "note": "截至 2026-09 的最新旗舰，长程智能体基准领先。",
      "sources": [
        "https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/"
      ]
    },
    {
      "id": "gpt-6-astra",
      "name": "GPT-6 Astra",
      "lab": "OpenAI",
      "org": "openai",
      "date": "2026-09-03",
      "precision": "day",
      "confidence": "high",
      "context": "≥1M",
      "flagship": true,
      "benchmarks": {
        "ARC-AGI-2": 95,
        "GPQA Diamond": 96,
        "Terminal-Bench 4.0": 57.9
      },
      "note": "9 月 3 日限量预览、9 月 4 日面向付费用户；ARC-AGI-3 在修改评测框架下 99.9%（默认框架 62.7%）；首个越过「Critical」网络安全阈值的模型。",
      "sources": [
        "https://openai.com/index/gpt-6-astra/",
        "https://en.wikipedia.org/wiki/GPT-6"
      ]
    },
    {
      "id": "deepseek-v4.1-flash",
      "name": "DeepSeek-V4.1-Flash",
      "lab": "DeepSeek",
      "org": "deepseek",
      "date": "2026-09-10",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {},
      "note": "552B 因果编码器-解码器，原生视觉；官方称超过 V4-Pro，分数仅以图表公布。",
      "sources": [
        "https://api-docs.deepseek.com/news/news260910"
      ]
    },
    {
      "id": "grok-4.7",
      "name": "Grok 4.7",
      "lab": "xAI",
      "org": "xai",
      "date": "2026-09-21",
      "precision": "day",
      "confidence": "high",
      "context": "",
      "flagship": true,
      "benchmarks": {},
      "note": "截至 2026-09-23 的最新 Grok。",
      "sources": [
        "https://en.wikipedia.org/wiki/Grok_(chatbot)"
      ]
    },
    {
      "id": "claude-opus-5.5",
      "name": "Claude Opus 5.5",
      "lab": "Anthropic",
      "org": "anthropic",
      "date": "2026-09-22",
      "precision": "day",
      "confidence": "high",
      "context": "1M",
      "flagship": true,
      "benchmarks": {
        "Terminal-Bench 4.0": 66.4,
        "HLE": 67.7
      },
      "note": "较 Opus 5 降价约 20%、输出快约 30%；Sonnet 5.5 / Haiku 5.5 官方预告随后发布。",
      "sources": [
        "https://www.anthropic.com/claude-opus-5-5"
      ]
    }
  ]
};
