export const mockScenarios = {
  product: {
    node1: {
      thoughts: [
        "正在分析产品 'Notion'...",
        "识别其主要功能：笔记、项目管理、知识库、协同办公。",
        "判断其所属的细分赛道：All-in-one 工作空间 / 生产力工具。"
      ],
      logs: [
        "[SEARCH] query: 'Notion product positioning'",
        "[SEARCH] query: 'Notion vs competitors category'",
        "[INFO] Found 15 articles discussing Notion's pivot to All-in-one workspace."
      ],
      document: `
# 赛道识别报告：Notion

**分析对象**：Notion

## 所属核心赛道
**All-in-one 生产力与协作工作空间 (All-in-one Productivity & Collaboration Workspace)**

## 赛道特征
*   **高度模块化**：以 Block 为基础单位，用户可自由组合页面。
*   **多场景覆盖**：从个人笔记到企业级知识库、项目看板。
*   **弱化边界**：模糊了文档、表格、数据库和任务管理软件的边界。

## 标签
\`知识管理\` \`项目协同\` \`No-Code/Low-Code\`
      `
    },
    node2: {
      thoughts: [
        "需要找出与 Notion 在同一赛道竞争的产品。",
        "分为直接竞品（如 Coda, Obsidian）和间接竞品（如 Evernote, Jira）。",
        "提取核心竞品的市场表现数据。"
      ],
      logs: [
        "[SEARCH] query: 'Notion alternatives'",
        "[SEARCH] query: 'Coda vs Notion'",
        "[SEARCH] query: 'Obsidian market share'"
      ],
      document: `
# 竞品扫描：All-in-one 生产力赛道

## 直接竞品
1.  **Coda**: 侧重于数据交互和自动化，"Doc as an app" 理念更强。
2.  **Obsidian**: 侧重于本地优先和双向链接，受极客和知识管理重度用户喜爱。
3.  **Roam Research**: 网状结构笔记的先驱，更偏向学术和深度研究。

## 间接/垂直领域竞品
1.  **Confluence/Jira**: 企业级项目管理和文档，传统且沉重，但集成度深。
2.  **Evernote**: 传统的线性笔记应用，正在流失用户。
3.  **Airtable**: 以表格/数据库为主，在复杂数据管理上优于 Notion。
      `
    },
    node3: {
      thoughts: [
        "分析这些用户的痛点是什么？",
        "为什么他们需要 Notion 这样的工具？",
        "痛点包括：信息碎片化、多工具切换成本高、传统工具不够灵活。"
      ],
      logs: [
        "[SEARCH] query: 'Why people use Notion'",
        "[SEARCH] query: 'productivity tools pain points'",
        "[INFO] Extracted data from Reddit /r/Notion and Twitter."
      ],
      document: `
# 用户痛点分析

## 核心痛点
1.  **工具孤岛与上下文切换**：用户厌倦了在 Google Docs 写文档，在 Trello 管任务，在 Airtable 看数据。频繁切换导致效率低下。
2.  **信息碎片化与找回困难**：传统的树状文件夹结构难以管理复杂的关联知识，导致"写了就忘，存了找不到"。
3.  **标准化工具的局限性**：每个团队的工作流都不同，传统 SaaS 提供的固定流程（如 Jira）过于僵化，无法适应敏捷团队的个性化需求。
      `
    },
    node4: {
      thoughts: [
        "Notion 的定位与其他产品有什么不同？",
        "对比其模块化设计、UI/UX 体验、社区生态。"
      ],
      logs: [
        "[SEARCH] query: 'Notion competitive advantage'",
        "[SEARCH] query: 'Notion design aesthetic'",
        "[INFO] Analyzing user reviews regarding UX."
      ],
      document: `
# 定位差异分析

## Notion 的独特优势

*   **极致的 UI/UX 美学**：极简设计，降低了用户使用企业级软件的心理门槛。
*   **乐高式的 Block 架构**：赋予用户极高的自由度去构建自己的系统。
*   **强大的社区与模版生态**：用户不仅是消费者，也是创造者。丰富的模版让新手可以快速上手复杂的管理系统。

## 对比 Coda
*   Coda 更像是一个**带有文档界面的数据库应用开发平台**，适合有一定逻辑基础的用户去构建自动化流程。
*   Notion 则始终保持**以文档和文字为核心**的体验，更易于被大众接受。
      `
    },
    node5: {
      thoughts: [
        "赛道里还有什么没被做好的？",
        "AI 融合、本地离线优先、极致的性能、针对特定垂直行业的工作流。"
      ],
      logs: [
        "[SEARCH] query: 'Notion missing features'",
        "[SEARCH] query: 'future of productivity tools'",
        "[INFO] Synthesizing gap analysis."
      ],
      document: `
# 市场空白与机会点

即使在如此拥挤的赛道，依然存在未被充分满足的需求：

1.  **真正的离线可用与端到端加密 (E2EE)**：Notion 一直被诟病不支持完全离线和数据隐私问题（Obsidian 和 Anytype 在填补这一空白）。
2.  **更深度的 AI 融合（非外挂式）**：目前的 AI 多为文字生成，缺乏能真正理解用户私人知识库并主动组织、关联信息的 AI Agent。
3.  **垂直行业的深度定制**：针对律所、科研机构等有着极高数据合规要求和特定协作模式的行业，通用的 All-in-one 工具往往不够专业。
      `
    }
  },
  niche: {
    // 省略部分详情，为了快速验证流程，使用简化的数据
    node1: { thoughts: ["正在分析模糊赛道描述...", "识别为 AI 陪伴类产品赛道。"], logs: ["[SEARCH] 'AI companion market size'"], document: "# 赛道识别\n**赛道**：AI 情感陪伴与虚拟角色交互\n**标签**：`Generative AI` `Virtual Companion` `Mental Health`" },
    node2: { thoughts: ["寻找该赛道的现有产品...", "Character.ai, Replika, Glow."], logs: ["[SEARCH] 'AI companion apps'"], document: "# 市场格局\n1. **Character.ai**: 平台型，UGC 角色丰富。\n2. **Replika**: 深度情感绑定，1v1 陪伴。\n3. **Glow (MiniMax)**: 国内市场领跑者。" },
    node3: { thoughts: ["分析用户为何需要 AI 陪伴...", "孤独感、无压力倾诉、角色扮演偏好。"], logs: ["[SEARCH] 'Why people use Replika'"], document: "# 用户诉求\n1. **缓解孤独感**：提供全天候的、无条件积极关注的倾听者。\n2. **安全的社交演练场**：无需承担真实人际交往的压力和后果。\n3. **沉浸式娱乐**：满足对特定虚构角色的互动幻想。" },
    node4: { thoughts: ["赛道竞争激烈度如何...", "马太效应初显，但垂类仍有机会。"], logs: ["[SEARCH] 'AI companion market landscape'"], document: "# 竞争烈度与机会\n*   **头部效应**：Character.ai 占据了大量泛互动时长。\n*   **技术壁垒**：模型的情商（EQ）、长文本记忆能力成为核心壁垒。\n*   **机会**：针对特定人群（如老年人陪伴、特定心理辅导）的垂直产品依然匮乏。" },
    node5: { thoughts: ["是否值得入场...", "需要评估 ROI 和合规风险。"], logs: ["[SEARCH] 'AI companion regulations'"], document: "# 入场建议\n**结论**：谨慎乐观。\n如果只做通用的套壳聊天机器人，**不建议入场**，红海且难以留存。\n如果能结合特定硬件（如 AI 吊坠）、或者具有专属的优质 IP 矩阵，且能解决长记忆和情绪价值提供问题，**值得尝试**。" }
  }
}
