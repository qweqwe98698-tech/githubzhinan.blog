# GitHub 指南 · 开发者全球网络工程与选型知识库

<p align="center">
  <a href="https://githubzhinan.blog/">
    <img src="public/favicon.svg" alt="GitHub 指南 Logo" width="80" height="80" />
  </a>
</p>

<p align="center">
  <strong>面向开发者、科研人员与出海团队的现代网络基础设施技术选型与测速实测中立指南</strong>
</p>

<p align="center">
  <a href="https://githubzhinan.blog/"><img src="https://img.shields.io/badge/官网-githubzhinan.blog-10b981?style=flat-square" alt="Website" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-v7.3.3-ff5d01?style=flat-square&logo=astro" alt="Astro" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" /></a>
  <a href="#"><img src="https://img.shields.io/badge/SEO_Score-97%2F100_Grade_A+-success?style=flat-square" alt="SEO Grade" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Accessibility-WCAG_AA_100%25-blue?style=flat-square" alt="WCAG AA" /></a>
  <a href="#"><img src="https://img.shields.io/badge/License-MIT-gray?style=flat-square" alt="License" /></a>
</p>

---

## 📖 项目简介

**GitHub 指南**（[githubzhinan.blog](https://githubzhinan.blog/)）是一个遵循技术规范书标准构建的现代静态站点。项目针对日常高频遭遇的 GitHub Clone 超时、Git SSH 握手阻断、终端环境代理失效、以及 ChatGPT / Claude 访问受阻等痛点，基于全网晚高峰千兆骨干网真实测试数据，深度评测 42 家主流机场节点性能，提供中立、透明、有技术依据的工程级选型指南。

项目基于 **Astro 7 + Tailwind CSS v4** 纯静态架构（SSG）打造，全站保持 **Zero Client-Side JavaScript**（除主题切换与复制功能外），首屏加载轻盈，完美兼容搜索引擎蜘蛛（Googlebot、Bingbot、Baiduspider、yisouspider）抓取与 GEO 生成式 AI（SearchGPT / Perplexity）语义抽取。

---

## ✨ 核心特性

- **纯静态预渲染 (SSG)**：全站 83 个页面完全生成为静态 HTML，无数据库依赖，页面 TTFB 接近物理极限。
- **专著级万字技术内容矩阵**：
  - 8 篇单篇 10,000+ 纯汉字专著级技术长文与专题枢纽（涵盖 42 家横评、IEPL/IPLC 底层光缆拓扑、AI 防封策略、Git/Copilot 加速配置、Clash Verge Rev 进阶实操、免费资源防坑指南、跑路黑名单预警库、全景 42 问答知识库）。
  - 严谨中文排版，严禁使用冒号、破折号及翻案反转句，确保真实流畅的专业工程师语感。
- **42 家主流品牌实体大数据库**：包含每家品牌的开业年限、晚高峰测速吞吐量、丢包抖动率、解锁能力证据、套餐价格阶梯及专属优惠码。
- **高级预防性 SEO & GEO 基础设施**：
  - **Sitemap 架构**：纯净收录 58 个高价值正式网址，自动过滤 24 个薄标签页并配置 `noindex, follow`。
  - **Schema.org 知识图谱**：精准结构化注入 `WebSite`、`BlogPosting`、`BreadcrumbList`、`FAQPage`、`Review` 与 `Product`，且前台可视评级与 Schema 达成逐字对齐。
  - **外链隔离安全机制**：全站所有出站商业与外部链接 100% 具备 `rel="nofollow noopener noreferrer"` 隔离，严格遵守 Google Link Spam 政策。
- **印刷级排版美学**：
  - 经典的纯 CSS 边缘索引轨（Marginal Index），随章节滚动动态悬浮。
  - 严格遵循 `--shell-width: 50rem`（800px）阅读度量衡与 `--radius: 3px` 设计语言，无突兀弹窗与冗余卡片阴影。
  - 自托管 Webfonts（Public Sans + JetBrains Mono），100% 通过 WCAG AA 级色彩对比度检验。

---

## 🗂 目录结构与内容架构

```text
githubzhinan.blog/
├── docs/                       # 部署与配置文档
├── public/                     # 静态公共资产 (Logo、测速图、解锁证据)
├── src/
│   ├── components/             # Astro 共享组件 (Header, Footer, SEO, Section 等)
│   ├── content/
│   │   ├── blog/               # 核心万字长文 Markdown 库
│   │   └── plans.json          # 选型矩阵套餐配置数据
│   ├── data/
│   │   └── brands.ts           # 42 家收录机场全维度结构化实体库
│   ├── layouts/
│   │   ├── Base.astro          # 核心页面骨架与 SEO Meta 注入层
│   │   └── Page.astro          # 通用页面排版容器
│   ├── lib/                    # 内容读取、日期格式化与数学公式工具
│   ├── pages/
│   │   ├── blog/               # 深度测评文章与分页归档路由
│   │   ├── brands/             # 42 家大表与各品牌专属详情评测页
│   │   ├── clients.astro       # 2026 全平台客户端下载与安装配置中心
│   │   ├── faq.astro           # 梯子与网络工程全景 FAQ 知识库 (万字级)
│   │   ├── free.astro          # 免费资源与公共节点防坑指南 (万字级)
│   │   ├── risk-warning.astro  # 跑路避坑与黑名单预警情报库 (万字级)
│   │   ├── pricing.astro       # 价格阶梯与场景选型决策矩阵
│   │   ├── robots.txt.ts       # 动态绝对路径 robots.txt 路由
│   │   ├── rss.xml.ts          # RSS 2.0 全文订阅源
│   │   └── index.astro         # 网站首页 (Answer-First 核心决策枢纽)
│   └── styles/
│       ├── global.css          # 全局排版规则
│       ├── theme.css           # 变量覆盖
│       └── tokens.css          # 色彩与尺寸设计系统
├── astro.config.mjs            # Astro 配置文件 (集成 Sitemap, MDX, Icon 等)
├── package.json
└── tsconfig.json
```

---

## 🚀 本地开发与构建

### 运行环境要求
- **Node.js**：`v22.12.0` 或更高版本
- **包管理器**：`pnpm v9.0.0` 或更高版本

### 安装与启动
```bash
# 1. 克隆代码仓库
git clone https://github.com/qweqwe98698-tech/githubzhinan.blog.git
cd githubzhinan.blog

# 2. 安装依赖
pnpm install

# 3. 启动本地开发服务器 (默认端口 4321，附带 /styleguide 页面)
pnpm dev
```

### 构建与质量验证
```bash
# TypeScript 类型检查 (要求 0 errors / 0 warnings)
pnpm check

# 生产环境静态打包 (编译输出至 dist/ 目录)
pnpm build

# 本地预览打包产物
pnpm preview

# WCAG AA 全色彩 Token 自动化对比度测试
pnpm check:contrast

# 全站死链扫描 (要求 0 dead links)
pnpm dlx linkinator@8.1.0 dist --recurse --skip "^https?://(?!(localhost|127\.0\.0\.1|\[::1\])[:/])"
```

---

## 🌐 生产部署

本项目为纯静态产物（SSG），无缝支持部署到任意现代静态云平台：

### Cloudflare Pages
1. 在 Cloudflare 控制台连接本 Git 仓库；
2. 构建设置：
   - **Framework Preset**：`Astro`
   - **Build command**：`pnpm build`
   - **Build output directory**：`dist`
3. 绑定正式域名 `githubzhinan.blog`，开启“始终使用 HTTPS”并配置裸域 301 重定向。

### Vercel
直接导入仓库，Vercel 会自动识别 Astro 预设，构建命令填入 `pnpm build`，输出目录指向 `dist`。

---

## 🔍 SEO 与各大站长平台提交指南

构建后自动生成的索引端点：
- **Sitemap 索引**：`https://githubzhinan.blog/sitemap.xml`
- **Sitemap 清单**：`https://githubzhinan.blog/sitemap-index.xml`
- **Robots 规则**：`https://githubzhinan.blog/robots.txt`
- **RSS 订阅源**：`https://githubzhinan.blog/rss.xml`

站长平台所有权验证 Meta 预留在 `src/config.ts` 中的 `seo.verification` 字段，可直接配置 Google、Bing、百度及神马搜索平台。

---

## 📄 开源许可证

本项目采用 [MIT License](LICENSE) 授权许可开源。
