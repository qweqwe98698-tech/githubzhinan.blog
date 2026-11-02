// src/config.ts — single entry point for site settings. Everything site-specific lives here; never hardcode in components.
export const site = {
  name: 'GitHub 指南',
  description: '面向开发者的全球网络加速与机场测速实测指南。深入评测 42 家主流机场，提供真实晚高峰测速、流媒体与 ChatGPT/Claude 解锁报告及客户端配置教程。',
  url: 'https://githubzhinan.blog',
  locale: 'zh-CN', // BCP 47
  author: 'GitHub 指南团队',
  defaultOgImage: '/og-default.png',
} as const;

export const nav = {
  header: [
    { label: '42家品牌', href: '/brands' },
    { label: '选型矩阵', href: '/pricing' },
    { label: '客户端', href: '/clients' },
    { label: '免费防坑', href: '/free' },
    { label: '跑路预警', href: '/risk-warning' },
    { label: '全景 FAQ', href: '/faq' },
    { label: '深度测评', href: '/blog' },
  ],
  // Header call to action
  cta: { label: '主推：光速云', href: '/brands/guangsu' },
  footer: [
    {
      title: '机场评测与专栏',
      links: [
        { label: '42家品牌完整大表', href: '/brands' },
        { label: '主推第1名：光速云', href: '/brands/guangsu' },
        { label: '暮光加速深度实测', href: '/brands/muguang' },
        { label: '飞猫云新手实测', href: '/brands/feimao' },
        { label: '微风网络实测', href: '/brands/weifeng' },
        { label: '星岛梦实测', href: '/brands/xingdaomeng' },
      ],
    },
    {
      title: '专题矩阵与知识库',
      links: [
        { label: '全平台客户端下载', href: '/clients' },
        { label: '场景选型决策矩阵', href: '/pricing' },
        { label: '免费节点防坑指南', href: '/free' },
        { label: '跑路避坑预警情报库', href: '/risk-warning' },
        { label: '网络工程全景 FAQ', href: '/faq' },
      ],
    },
    {
      title: '合规与政策说明',
      links: [
        { label: '推广返利透明声明', href: '/terms' },
        { label: '隐私政策与数据保护', href: '/privacy' },
        { label: '联系与意见反馈', href: '/contact' },
        { label: 'RSS 订阅', href: '/rss.xml' },
      ],
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/', icon: 'lucide:github' },
  ],
} as const;

export const seo = {
  titleTemplate: '%s · GitHub 指南',
  twitterHandle: '',
  jsonLd: { type: 'Organization' as 'Person' | 'Organization', name: site.name },
  verification: {
    google: '',
    bing: '',
    baidu: '',
    shenma: '',
  },
};

export const blog = {
  postsPerPage: 10,
  showReadingTime: true,
};

export const contact = {
  formEndpoint: 'https://formspree.io/f/contact',
  email: 'contact@githubzhinan.blog',
  responseTime: '工作日 24 小时内回复',
};

export const features = {
  darkMode: true,
  marginalIndex: true,
};

export const analytics = {
  provider: null as null | 'plausible' | 'ga4' | 'umami',
  id: '',
  host: '',
};

export const ui = {
  skipToContent: '跳转到主要内容',
  mainNav: '主导航',
  rss: 'RSS 订阅',
  theme: { system: '跟随系统', light: '浅色', dark: '深色' },
  updated: '更新于',
  lastUpdated: (date: string) => `最近更新于 ${date}`,
  pagination: '分页导航',
  blog: {
    title: '深度测评专栏',
    page: (page: number) => `测评文章 · 第 ${page} 页`,
    description: '深入剖析主流机场节点测速、晚高峰延迟稳定性与 AI 工具解锁表现。',
    intro:
      '基于真实测试环境与机器人在特定时间抓取的节点测速、丢包率与流媒体解锁实测报告。拒绝虚构推荐，坚持用数据说话。',
    newer: '上一页',
    older: '下一页',
    pageOf: (page: number, last: number) => `第 ${page} 页 / 共 ${last} 页`,
    minutes: (count: number) => `${count} 分钟阅读`,
    all: '全部文章',
    tag: '标签分类',
    tagDescription: (tag: string) => `关于 ${tag} 的所有评测与教程。`,
    posts: (count: number) => `共 ${count} 篇文章`,
    feed: `${site.name} — 测评专栏`,
  },
  pricing: {
    month: ' / 月',
    twelveMonths: (price: string) => `年付折合 ${price}`,
    featured: '重点推荐',
  },
  contact: {
    title: '联系交流',
    description: `与 ${site.name} 团队取得联系，反馈测速数据或咨询合作。`,
    heading: '致信我们',
    intro:
      '如果您发现某个机场节点数据有变动、跑路预警，或有优质新线路推荐，欢迎随时向我们反馈。',
    name: '您的称呼',
    email: '电子邮箱',
    message: '留言内容',
    messageHint:
      '请说明您要反馈的机场名称、测试时间及具体问题，以便我们核实复测。',
    send: '提交反馈',
    reply: '回复时效',
    byMail: '直接致信',
    bugs: '社区互动',
    bugsText:
      '亦可访问我们的 <a href="{issues}" target="_blank" rel="nofollow noopener noreferrer">GitHub 仓库</a> 提交 Issue 反馈最新节点情报。',
  },
  notFound: {
    title: '页面未找到',
    heading: '404 · 页面未找到',
    text: '您访问的页面不存在或已被移除，请检查输入的链接是否正确。',
    blog: '测评专栏',
    pricing: '选型矩阵',
    home: '返回首页',
  },
};
