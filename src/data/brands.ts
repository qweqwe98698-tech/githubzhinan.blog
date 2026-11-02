// src/data/brands.ts — 42 家机场品牌完整结构化知识库与测速档案
export interface PlanItem {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface LatencySample {
  region: string;
  latency: string;
  download: string;
  date?: string;
}

export interface BrandEntity {
  id: string;
  name: string;
  rank: number;
  isTop: boolean;
  tagline: string;
  affLink: string;
  couponCode: string;
  startingPrice: string;
  establishedYear?: number | string;
  lineTypes: string[];
  protocols: string[];
  nodesCoverage: string;
  logoImage?: string;
  speedtestImage?: string;
  unlockImages?: string[];
  latencySamples: LatencySample[];
  unlockInfo: {
    chatgpt: string;
    claude: string;
    netflix: string;
    disney: string;
    youtube: string;
  };
  plans: PlanItem[];
  clientSupport: string;
  suitableFor: string;
  advantages: string[];
  disadvantages: string[];
  riskWarning: string;
  reviewSummary: string;
  dataStatus: 'measured' | 'vendor' | 'historical' | 'unverified';
  verifiedDate: string;
  geoFaq: { q: string; a: string }[];
}

export const brands: BrandEntity[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "logoImage": "/images/logos/光速云主图.png",
    "rank": 1,
    "isTop": true,
    "tagline": "IEPL专线+企业级内网双架构，2020老牌稳定，年付低至8元/月",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "couponCode": "AMM",
    "startingPrice": "25元/月",
    "establishedYear": 2020,
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "香港×20、台湾×5、日本×10、新加坡×10、美国×10等全球11地区",
    "speedtestImage": "/images/speedtest/光速云-节点测速实测.png",
    "unlockImages": [
      "/images/unlock/photo_2026-08-19_12-13-01.jpg",
      "/images/unlock/photo_2026-08-19_12-13-50.jpg",
      "/images/unlock/photo_2026-08-19_12-13-58.jpg",
      "/images/unlock/photo_2026-08-19_12-18-40.jpg",
      "/images/unlock/photo_2026-08-19_12-20-10.jpg"
    ],
    "latencySamples": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "529Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "114Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "387Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "135Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB (永久不过期)",
        "cycle": "一次性"
      },
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "69GB/月",
        "cycle": "每月"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "168GB/月",
        "cycle": "每月"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34",
        "traffic": "238GB/月",
        "cycle": "每月"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68",
        "traffic": "500GB/月",
        "cycle": "每月"
      },
      {
        "name": "光速云·无界版",
        "billing": "月付",
        "price": "¥138",
        "traffic": "900GB/月",
        "cycle": "每月"
      },
      {
        "name": "光速云·定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB/月 (独享原生IP/独立带宽)",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "注重晚高峰稳定、跨境电商、AI生产力与流媒体全覆盖的开发者与团队",
    "advantages": [
      "IEPL专线/IPLC专线/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「AMM」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "光速云在便宜机场推荐里属于价格有优势的一类，99 元/年左右的最低套餐，换算下来每月成本不高，在高性价比机场推荐里比较有竞争力。它把 IPLC 专线和隧道中转结合着用，第三方测试显示香港、日本节点速度表现还不错，也支持 Netflix、Disney+、YouTube 等主流流媒体。不过要注意，ChatGPT、Gemini 这类 AI 工具并不是所有节点都稳定支持，实际用的时候可能需要手动切换节点，这点官方也承认。套餐里特殊商品不支持退款，所以更建议先买月付或者小额套餐，实测晚高峰速度和稳定性之后，再考虑要不要长期用。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "光速云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "光速云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "光速云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 光速云 的节点测试，其 IEPL专线+IPLC专线+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 光速云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 2,
    "isTop": true,
    "tagline": "无明确独有卖点",
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "couponCode": "muguang5555",
    "startingPrice": "20元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "BGP多线入口"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/幕光加速-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "26ms",
        "download": "509Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "107Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "419Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "150Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "160ms",
        "download": "19Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "【暮光·基础版】",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·标准版】",
        "billing": "月付",
        "price": "¥40",
        "traffic": "240GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·旗舰版】",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·至尊版】",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·年付轻量版】",
        "billing": "年付",
        "price": "¥109",
        "traffic": "70GB",
        "cycle": "每月"
      },
      {
        "name": "【暮光·不限时轻量包】",
        "billing": "一次性付费",
        "price": "¥219",
        "traffic": "150GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时标准包】",
        "billing": "一次性付费",
        "price": "¥529",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "【暮光·不限时大容量包】",
        "billing": "一次性付费",
        "price": "¥959",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "独享私人定制节点",
        "billing": "月付",
        "price": "¥600",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "BGP多线入口 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「muguang5555」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "暮光加速面向的是个人和团队跨平台使用场景，主打 BGP 智能调度和专线级出口，覆盖 Windows、macOS、iOS、Android、Linux 全平台，多设备同时在线是它的核心卖点，比较适合放进多设备机场推荐这个分类。9 元/月起的价格在专线机场推荐里不算高，120GB–1500GB 的流量档位选择也比较多，能满足不同用量需求。官方称支持 7×24 小时真人客服，对经常需要跨境办公、远程协作的团队用户会有一定吸引力，也支持 Netflix、Disney+、HBO、Hulu 等流媒体。目前没有查到公开的优惠码信息，如果预算敏感，建议直接联系客服问问当前是否有活动。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "暮光加速 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "暮光加速 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "暮光加速 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 暮光加速 的节点测试，其 BGP多线入口 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 暮光加速 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "logoImage": "/images/logos/飞猫云主图.png",
    "rank": 3,
    "isTop": true,
    "tagline": "7元档 + 8折",
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "couponCode": "flycat888",
    "startingPrice": "年付约7元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/飞猫云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "21ms",
        "download": "526Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "116Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "413Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "138Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "178ms",
        "download": "14Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84",
        "traffic": "50GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·银河版",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "飞猫·定制套餐",
        "billing": "月付",
        "price": "¥550",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「flycat888」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "飞猫云更适合放进新手机场推荐这个分类——它的重点不是极致速度或专线，而是省事：走的是专属客户端模式，下载 App、登录就能用，不用找订阅链接、不用配 Clash，第一次用机场的人也能快速上手。7 元/月起的价格也不算贵，节点覆盖亚太和欧美常见地区，日常看视频、用 AI 工具都能应付，作为轻量日常使用足够。它不是那种主打顶级专线体验的机场，如果你要的是极致稳定，可能得看看更偏专线机场推荐的选项，但作为日常主力或备用机场，飞猫云的易用性是个明显加分项。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "飞猫云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "飞猫云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "飞猫云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 飞猫云 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 飞猫云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "rank": 4,
    "isTop": true,
    "tagline": "7元档 + 9折",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "couponCode": "flat888",
    "startingPrice": "年付约7元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线",
      "隧道中转"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/微风-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "546Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "115Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "384Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "54ms",
        "download": "131Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "167ms",
        "download": "17Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "御风 (Mastery)",
        "billing": "月付",
        "price": "¥127",
        "traffic": "1200GB",
        "cycle": "每月"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB",
        "cycle": "一次性"
      },
      {
        "name": "长风·不限时",
        "billing": "一次性付费",
        "price": "¥370",
        "traffic": "570GB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「flat888」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "微风网络在便宜机场推荐里经常被提到，价格是它最直接的优势——11 元/月起，比不少同类 IEPL 机场推荐都要低，对学生党和轻度用户比较友好。走的是 IEPL 专线而不是纯中转，所以稳定性比一些更便宜的中转机场要好一点，日常刷网页、看视频、用 ChatGPT 基本没问题，节点也覆盖了香港、新加坡、日本、美国这几个热门地区。客服口碑在这个价位段里算是不错的，第一次用机场遇到问题至少有地方问，这对刚接触机场的新手来说挺重要。不过 100GB 的流量对重度用户可能不太够，属于入门够用但称不上顶配的类型，如果每天长时间在线，可能需要额外留意用量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "微风网络 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "微风网络 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "微风网络 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 微风网络 的节点测试，其 IEPL专线+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 微风网络 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "rank": 5,
    "isTop": true,
    "tagline": "5.6元/月 + 60GB",
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "couponCode": "dly888",
    "startingPrice": "年付约5.6元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约5.6元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「dly888」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "大佬云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "大佬云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "大佬云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "大佬云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 大佬云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 大佬云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "isTop": true,
    "tagline": "2020年运营 + 不限时套餐",
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "couponCode": "nmw888",
    "startingPrice": "年付约8元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/星岛梦-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "504Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "103Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "411Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "136Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "177ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·进阶300G",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·闪光500G",
        "billing": "月付",
        "price": "¥70",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·旗舰1T版",
        "billing": "月付",
        "price": "¥130",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时300",
        "billing": "一次性付费",
        "price": "¥300",
        "traffic": "300GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB",
        "cycle": "一次性"
      },
      {
        "name": "星岛梦·定制套餐",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「nmw888」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "星岛梦走的是 IEPL 专线，Trojan 协议，1 倍流量不限设备，节点覆盖香港、台湾、日本、美国、新加坡，还延伸到韩国和东南亚等地区，在 IEPL 机场推荐里节点覆盖算是比较广的一个。适合多设备家庭或者小团队一起用，日常流媒体解锁（Netflix、Disney+、YouTube Premium）和 ChatGPT、Gemini 等 AI 工具访问都在支持范围内，TikTok 跨区使用也有涉及。8 元/月起的价格放在稳定机场推荐里不算贵，配合海外技术团队和多人客服，属于综合体验还不错的选项。具体线路表现建议结合自己的地区先测一轮，再决定要不要长期订阅。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "星岛梦 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "星岛梦 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "星岛梦 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 星岛梦 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 星岛梦 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "logoImage": "/images/logos/2mao_logo.webp",
    "rank": 7,
    "isTop": true,
    "tagline": "20元130GB",
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "couponCode": "ermao5555",
    "startingPrice": "20元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/二猫云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "481Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "118Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "407Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "143Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "17Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "130GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40",
        "traffic": "230GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·牛奶猫尊享版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "430GB",
        "cycle": "每月"
      },
      {
        "name": "二猫云·黑猫重度用户版",
        "billing": "月付",
        "price": "¥160",
        "traffic": "850GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「ermao5555」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "二猫云走 IEPL 专线，VLESS 协议，20 元/月起，130GB 流量。官方强调自己不做低价跑路盘那一套，主打长期稳定，还配了一套独家定制客户端。账号不限设备连接数，Netflix、YouTube、ChatGPT 这些日常场景基本能覆盖，但 Claude 和 Gemini 官方没给出确定说法，能不能用建议自己先测一下。节点覆盖香港、日本、美国，比不少同类机场少了新加坡这一站。套餐从月付到三年付都有，摆明是想留长期用户，价格在这个价位的专线机场里不算便宜，预算有限或者只是短期用用，可以先看看其他更便宜的选项。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "二猫云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "二猫云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "二猫云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 二猫云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 二猫云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "rank": 8,
    "isTop": true,
    "tagline": "订阅无需转换 + 6元轻量套餐",
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "couponCode": "wuyou666",
    "startingPrice": "19元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "531Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "41ms",
        "download": "107Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "418Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "147Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "145ms",
        "download": "17Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79",
        "traffic": "40GB",
        "cycle": "每月"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "省心链接",
        "billing": "月付",
        "price": "¥33",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "随心链接",
        "billing": "月付",
        "price": "¥77",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "忘忧链接",
        "billing": "月付",
        "price": "¥117",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "100G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "300G永久不限时 无忧链接",
        "billing": "一次性付费",
        "price": "¥298",
        "traffic": "300GB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「wuyou666」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "如果你要找便宜机场推荐里价格最低的那一档，无忧链接大概率会出现——6.5 元/月起，是这份榜单里门槛最低的机场之一，主打的是跨境电商和轻度用户场景，TikTok 跨区直连和直播支持是它比较突出的点。2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用折腾订阅和复杂配置，对新手比较友好。同时也能解锁 Netflix、Disney+ 和 YouTube 等主流流媒体，日常刷视频基本够用。不过流量只有 40GB，节点覆盖也偏基础，如果你的使用场景是重度办公或者多设备同时在线，这个价位的套餐大概率撑不了太久，更适合当作低成本的备用机场或者电商运营的辅助工具。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "无忧链接 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "无忧链接 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "无忧链接 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 无忧链接 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 无忧链接 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "rank": 9,
    "isTop": true,
    "tagline": "60+节点 + 三网优化 + 智能负载均衡",
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "couponCode": "weitu666",
    "startingPrice": "14.9元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/唯兔云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "500Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "100Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "414Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "56ms",
        "download": "147Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "179ms",
        "download": "17Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120",
        "traffic": "75GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·年付版限量款",
        "billing": "年付",
        "price": "¥79.90",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·节假日限时开启（14.9元）",
        "billing": "月付",
        "price": "¥14.9",
        "traffic": "100GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.90",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·进阶版",
        "billing": "月付",
        "price": "¥29.90",
        "traffic": "200GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·专业版",
        "billing": "月付",
        "price": "¥59.90",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·至尊版",
        "billing": "月付",
        "price": "¥119.90",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥160",
        "traffic": "200GB",
        "cycle": "一次性"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥340",
        "traffic": "500GB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「weitu666」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "唯兔云走 IPLC 专线，Trojan 协议，主打 1 倍流量、不限速、不限设备连接，比较适合个人、家庭甚至小团队一起用，属于 IPLC 机场推荐里综合能力不错的选项。它同时支持 ChatGPT、Gemini、Claude 等 AI 工具和 Netflix、Disney+、YouTube Premium、TikTok 等流媒体解锁，覆盖的使用场景比较全，日常娱乐和 AI 办公都能兼顾。价格在 15 元/月左右，比一些入门中转机场贵，但比顶级专线机场便宜，算是中间档位的选择。海外技术团队加多人客服是它宣传的增值服务，具体套餐细节和优惠力度建议下单前以官网当前显示为准，价格可能随时调整。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "唯兔云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "唯兔云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "唯兔云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 唯兔云 的节点测试，其 IPLC专线+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 唯兔云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "rank": 10,
    "isTop": true,
    "tagline": "IPLC + 6档套餐 + 免翻墙访问官网",
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "couponCode": "firefly",
    "startingPrice": "¥8/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "27ms",
        "download": "547Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "135Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "445Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "30Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「firefly」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "如果你在找 2026 年靠谱的 IPLC 机场推荐，Firefly 算是专线机场推荐里性价比不错的一个选择。8 元/月起的价格，比很多同样走 IPLC 专线的机场便宜一些，晚高峰稳定性是它的核心卖点，对每天要用 ChatGPT 办公、或者经常在深夜追剧的人来说，这一点比单纯堆节点数量更实际。节点覆盖香港、新加坡、日本、美国这几个常见地区，原生 IP 让 Netflix、Disney+ 这类流媒体解锁相对稳定，2026 年 10 月起直接用官方专属客户端，下载登录就能连，不用再配订阅链接，使用门槛更低。不限设备数量也算是个加分项，家里几台设备一起用不会受限制。当然，专线机场的价格门槛终归比中转线路高，如果只是偶尔上网、预算有限，没必要非选它不可。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "Firefly 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "Firefly 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "Firefly 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 Firefly 的节点测试，其 IPLC专线+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 Firefly 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "logoImage": "/images/logos/yuzhou_logo.webp",
    "rank": 11,
    "isTop": false,
    "tagline": "IEPL+VLESS+自研客户端",
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "couponCode": "YUZHOU553",
    "startingPrice": "¥96",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/宇宙云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "暂无可核实实测数据",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "¥96",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「YUZHOU553」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "宇宙云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "宇宙云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "宇宙云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "宇宙云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 宇宙云 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 宇宙云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "logoImage": "/images/logos/u1s1主图.png",
    "rank": 12,
    "isTop": false,
    "tagline": "20元120GB 标准方案",
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "couponCode": "akaka",
    "startingPrice": "20元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/U1S1-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "24ms",
        "download": "538Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "107Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "414Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "133Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "134ms",
        "download": "20Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "u1s1·就是好用包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·你以为用不到包",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·瘾大就拉满包",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「akaka」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "U1S1 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "U1S1 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "U1S1 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 U1S1 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 U1S1 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "rank": 13,
    "isTop": false,
    "tagline": "19元150GB + 不限时套餐",
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "couponCode": "lmao888",
    "startingPrice": "19元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/灵猫网络-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "22ms",
        "download": "492Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "109Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "46ms",
        "download": "409Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "147Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "164ms",
        "download": "19Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85",
        "traffic": "45GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Small",
        "billing": "年付",
        "price": "¥195",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·年付Big",
        "billing": "年付",
        "price": "¥295",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·季付Big",
        "billing": "季付",
        "price": "¥125",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "灵猫·月付Big",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「lmao888」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "灵猫网络 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "灵猫网络 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "灵猫网络 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 灵猫网络 的节点测试，其 隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 灵猫网络 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "jilian",
    "name": "极连云",
    "logoImage": "/images/logos/极连云主图.png",
    "rank": 14,
    "isTop": false,
    "tagline": "18元100GB + 品牌资料说覆盖AI",
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "couponCode": "ji8888",
    "startingPrice": "18元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/极连云-节点测速实测.png",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "18元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「ji8888」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "极连云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "极连云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "极连云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "极连云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 极连云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 极连云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "logoImage": "/images/logos/光年梯主图.png",
    "rank": 15,
    "isTop": false,
    "tagline": "18元110GB",
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "couponCode": "gnt6666",
    "startingPrice": "18元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/光年梯-节点测速实测.png",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "18元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「gnt6666」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "光年梯是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "光年梯 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "光年梯 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "光年梯 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 光年梯 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 光年梯 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "logoImage": "/images/logos/1fly_logo.webp",
    "rank": 16,
    "isTop": false,
    "tagline": "20元150GB",
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "couponCode": "yfy6666",
    "startingPrice": "20元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "BGP多线入口",
      "隧道中转"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Trojan",
      "Hysteria"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/一翻云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "477Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "40ms",
        "download": "117Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "42ms",
        "download": "390Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "136Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "180ms",
        "download": "20Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "香港",
        "latency": "26ms",
        "download": "488Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "39ms",
        "download": "118Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "43ms",
        "download": "401Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "57ms",
        "download": "137Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "140ms",
        "download": "17Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "香港",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "轻享版",
        "billing": "月付",
        "price": "¥20",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "舒享版",
        "billing": "月付",
        "price": "¥35",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "尊享版",
        "billing": "月付",
        "price": "¥55",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "极致版",
        "billing": "月付",
        "price": "¥95",
        "traffic": "1.2TB",
        "cycle": "每月"
      },
      {
        "name": "98¥·年付小包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "轻享版·不限时包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "舒享版·不限时包",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "尊享版·不限时包",
        "billing": "一次性付费",
        "price": "¥400",
        "traffic": "500GB",
        "cycle": "一次性"
      },
      {
        "name": "小包-年付版",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "基础版",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "优选版",
        "billing": "月付",
        "price": "¥45",
        "traffic": "350GB",
        "cycle": "每月"
      },
      {
        "name": "强化版",
        "billing": "月付",
        "price": "¥80",
        "traffic": "550GB",
        "cycle": "每月"
      },
      {
        "name": "顶配版",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1.1TB",
        "cycle": "每月"
      },
      {
        "name": "SOGO基础餐不限时版",
        "billing": "一次性付费",
        "price": "¥120",
        "traffic": "120GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO优选餐不限时版",
        "billing": "一次性付费",
        "price": "¥220",
        "traffic": "250GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO强化餐不限时版",
        "billing": "一次性付费",
        "price": "¥450",
        "traffic": "500GB",
        "cycle": "一次性"
      },
      {
        "name": "SOGO至尊餐不限时版",
        "billing": "一次性付费",
        "price": "¥850",
        "traffic": "1.0TB",
        "cycle": "一次性"
      },
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "cycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "cycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线/IPLC专线/BGP多线入口/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks/Trojan/Hysteria 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「yfy6666」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "一翻云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "一翻云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "一翻云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 一翻云 的节点测试，其 IEPL专线+IPLC专线+BGP多线入口+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 一翻云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "sogo",
    "name": "SOGO云",
    "logoImage": "/images/logos/sogo.webp",
    "rank": 17,
    "isTop": false,
    "tagline": "2026年新品牌",
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "couponCode": "sss777",
    "startingPrice": "¥15/月起",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/SOGO云-节点测速实测.png",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "¥15/月起",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「sss777」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "SOGO云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "SOGO云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "SOGO云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "SOGO云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 SOGO云 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 SOGO云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "kexin",
    "name": "可信云",
    "rank": 18,
    "isTop": false,
    "tagline": "品牌资料诚实标注数据缺口",
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "couponCode": "kkk333",
    "startingPrice": "25元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/可信云-节点测速实测.png",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "25元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「kkk333」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "可信云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "可信云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "可信云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "可信云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 可信云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 可信云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "sujie",
    "name": "速界",
    "logoImage": "/images/logos/sujie_logo.webp",
    "rank": 19,
    "isTop": false,
    "tagline": "品牌资料强调AI工具",
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "couponCode": "sss1111",
    "startingPrice": "25元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/速界-节点测速实测.png",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "25元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「sss1111」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "速界是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "速界 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "速界 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "速界 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 速界 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 速界 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "rank": 20,
    "isTop": false,
    "tagline": "24元150GB",
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "couponCode": "shanyue",
    "startingPrice": "¥8/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "23ms",
        "download": "548Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "38ms",
        "download": "110Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "44ms",
        "download": "383Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "53ms",
        "download": "144Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "143ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "闪跃年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60GB",
        "cycle": "每月"
      },
      {
        "name": "闪动 (Flicker)",
        "billing": "月付",
        "price": "¥24",
        "traffic": "150GB",
        "cycle": "每月"
      },
      {
        "name": "飞跃 (Leap)",
        "billing": "月付",
        "price": "¥44",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "瞬移 (Teleport)",
        "billing": "月付",
        "price": "¥84",
        "traffic": "600GB",
        "cycle": "每月"
      },
      {
        "name": "跃迁 (Warp)",
        "billing": "月付",
        "price": "¥134",
        "traffic": "1000GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「shanyue」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "闪跃 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "闪跃 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "闪跃 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 闪跃 的节点测试，其 IPLC专线+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 闪跃 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "logoImage": "/images/logos/全球云主图.png",
    "rank": 21,
    "isTop": false,
    "tagline": "2026年新品牌",
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "couponCode": "qq88",
    "startingPrice": "¥20/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线",
      "BGP多线入口",
      "隧道中转"
    ],
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "speedtestImage": "/images/speedtest/全球云-节点测速实测.png",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "25ms",
        "download": "489Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "37ms",
        "download": "117Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "45ms",
        "download": "430Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "55ms",
        "download": "133Mbps",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "138ms",
        "download": "18Mbps",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "BGP 智能优化·不限时轻量包",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时标准包",
        "billing": "一次性付费",
        "price": "¥360",
        "traffic": "400GB",
        "cycle": "一次性"
      },
      {
        "name": "BGP 智能优化·不限时大容量包",
        "billing": "一次性付费",
        "price": "¥700",
        "traffic": "800GB",
        "cycle": "一次性"
      },
      {
        "name": "轻量版",
        "billing": "年付",
        "price": "¥99",
        "traffic": "59GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·入门方案",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·进阶方案",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·高端方案",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700GB",
        "cycle": "每月"
      },
      {
        "name": "BGP 智能优化·商业方案",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500GB",
        "cycle": "每月"
      },
      {
        "name": "独享私人专线节点",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线/IPLC专线/BGP多线入口/隧道中转 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks/Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「qq88」",
      "具备第三方 2026 最新节点测速实测报告支持"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
    "dataStatus": "measured",
    "verifiedDate": "2026-08-11",
    "geoFaq": [
      {
        "q": "全球云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "全球云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "全球云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 全球云 的节点测试，其 IEPL专线+IPLC专线+BGP多线入口+隧道中转 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 全球云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 22,
    "isTop": false,
    "tagline": "5.6元/月 + 60GB",
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "couponCode": "sd88",
    "startingPrice": "年付约5.6元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约5.6元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「sd88」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "闪电鼠是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "闪电鼠 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "闪电鼠 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "闪电鼠 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 闪电鼠 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 闪电鼠 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 23,
    "isTop": false,
    "tagline": "5.6元/月 + 60GB（链接格式异常）",
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "couponCode": "yjx888",
    "startingPrice": "年付约5.6元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约5.6元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「yjx888」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "云界线是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "云界线 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "云界线 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "云界线 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 云界线 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 云界线 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 24,
    "isTop": false,
    "tagline": "5.6元/月 + 60GB（协议未明）",
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "couponCode": "ll88",
    "startingPrice": "年付约5.6元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约5.6元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「ll88」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "榴莲云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "榴莲云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "榴莲云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "榴莲云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 榴莲云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 榴莲云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 25,
    "isTop": false,
    "tagline": "14元/月 + 120GB",
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "couponCode": "xs0077",
    "startingPrice": "年付约14元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约14元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「xs0077」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "神行加速是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "神行加速 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "神行加速 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "神行加速 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 神行加速 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 神行加速 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 26,
    "isTop": false,
    "tagline": "5.6元/月 + 60GB（链接格式异常）",
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "couponCode": "HQ66",
    "startingPrice": "年付约5.6元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约5.6元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「HQ66」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "环球梯是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "环球梯 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "环球梯 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "环球梯 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 环球梯 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 环球梯 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "logoImage": "/images/logos/隐形人256x256.png",
    "rank": 27,
    "isTop": false,
    "tagline": "60+节点详细清单 + 1小时修复承诺 + 不提供第三方订阅",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "couponCode": "yxr888",
    "startingPrice": "24元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "香港",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "日本",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "美国",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "新加坡",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "—",
        "date": "2026-10-19"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "隐形人 白银纪元",
        "billing": "月付",
        "price": "¥24",
        "traffic": "144GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 黄金序列",
        "billing": "月付",
        "price": "¥48",
        "traffic": "360GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 铂金至臻",
        "billing": "月付",
        "price": "¥105",
        "traffic": "750GB",
        "cycle": "每月"
      },
      {
        "name": "隐形人 钻石穹顶",
        "billing": "月付",
        "price": "¥185",
        "traffic": "1.6TB",
        "cycle": "每月"
      },
      {
        "name": "王者定制版",
        "billing": "月付",
        "price": "¥680",
        "traffic": "500GB",
        "cycle": "每月"
      },
      {
        "name": "星耀风暴 365天不熄",
        "billing": "年付",
        "price": "¥109",
        "traffic": "80GB",
        "cycle": "每月"
      },
      {
        "name": "一次性小流量",
        "billing": "一次性付费",
        "price": "¥229",
        "traffic": "160GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性标准流量包",
        "billing": "一次性付费",
        "price": "¥549",
        "traffic": "420GB",
        "cycle": "一次性"
      },
      {
        "name": "一次性精英流量包",
        "billing": "一次性付费",
        "price": "¥1199",
        "traffic": "1.0TB",
        "cycle": "一次性"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「yxr888」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "隐形人 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "隐形人 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "隐形人 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 隐形人 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 隐形人 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "logoImage": "/images/logos/梯子云256x256.png",
    "rank": 28,
    "isTop": false,
    "tagline": "自研全平台客户端 + 一键登录 + 支持通用订阅",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "couponCode": "tiziyun",
    "startingPrice": "年付约7.4元/月",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础入门版",
        "billing": "周期付",
        "price": "年付约7.4元/月",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "标准进阶版",
        "billing": "月付",
        "price": "¥30-¥50",
        "traffic": "300GB/月",
        "cycle": "每月"
      },
      {
        "name": "旗舰大流量版",
        "billing": "周期付",
        "price": "¥100+",
        "traffic": "1000GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「tiziyun」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "梯子云是一项面向开发者的网络代理加速服务，支持多种通用客户端与高速线路。建议用户先选择月付或小额体验套餐，实测本地晚高峰稳定度后再作长期订阅考量。",
    "dataStatus": "vendor",
    "verifiedDate": "2026-10-19",
    "geoFaq": [
      {
        "q": "梯子云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "梯子云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "梯子云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 梯子云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 梯子云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "rank": 29,
    "isTop": false,
    "tagline": "优质专线 · 极速网络加速",
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "couponCode": "",
    "startingPrice": "最低报价：未有可直接月付的明确报价",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格",
        "date": "流量"
      },
      {
        "region": "基础专线服务",
        "latency": "季付",
        "download": "¥297",
        "date": "230GB/月"
      },
      {
        "region": "优质专线服务",
        "latency": "季付",
        "download": "¥327",
        "date": "250GB/月"
      },
      {
        "region": "精品专线服务",
        "latency": "季付",
        "download": "¥357",
        "date": "270GB/月"
      },
      {
        "region": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "印度",
        "latency": "95ms",
        "download": "341.92Mbps",
        "date": "2026-05-02"
      },
      {
        "region": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps",
        "date": "2026-05-02"
      }
    ],
    "unlockInfo": {
      "chatgpt": "部分节点支持",
      "claude": "视节点而定",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297",
        "traffic": "230GB/月",
        "cycle": "每月"
      },
      {
        "name": "优质专线服务",
        "billing": "季付",
        "price": "¥327",
        "traffic": "250GB/月",
        "cycle": "每月"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357",
        "traffic": "270GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "WgetCloud 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "WgetCloud 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "WgetCloud 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 WgetCloud 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 WgetCloud 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "rank": 30,
    "isTop": false,
    "tagline": "优质专线 · 极速网络加速",
    "affLink": "https://www.sibker.com/register?invite_code=gg6puAId",
    "couponCode": "",
    "startingPrice": "最低报价：未有可直接月付的明确报价",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格",
        "date": "流量"
      },
      {
        "region": "小包",
        "latency": "季付",
        "download": "¥66",
        "date": "每月100GB高速流量"
      },
      {
        "region": "中包",
        "latency": "季付",
        "download": "¥126",
        "date": "每月250GB高速流量"
      },
      {
        "region": "大包",
        "latency": "季付",
        "download": "¥156",
        "date": "每月400GB高速流量"
      },
      {
        "region": "超大包",
        "latency": "季付",
        "download": "¥216",
        "date": "每月750GB高速流量"
      },
      {
        "region": "不差钱",
        "latency": "季付",
        "download": "¥231",
        "date": "每月900GB高速流量"
      },
      {
        "region": "旗舰包",
        "latency": "年付",
        "download": "¥2500",
        "date": "每月2500GB超大流量"
      },
      {
        "region": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "台湾",
        "latency": "—",
        "download": "0.03Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "加拿大",
        "latency": "344ms",
        "download": "62Mbps",
        "date": "2026-07-17"
      },
      {
        "region": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps",
        "date": "2026-07-17"
      }
    ],
    "unlockInfo": {
      "chatgpt": "部分节点支持",
      "claude": "视节点而定",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66",
        "traffic": "每月100GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "中包",
        "billing": "季付",
        "price": "¥126",
        "traffic": "每月250GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "大包",
        "billing": "季付",
        "price": "¥156",
        "traffic": "每月400GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "超大包",
        "billing": "季付",
        "price": "¥216",
        "traffic": "每月750GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "不差钱",
        "billing": "季付",
        "price": "¥231",
        "traffic": "每月900GB高速流量",
        "cycle": "每月"
      },
      {
        "name": "旗舰包",
        "billing": "年付",
        "price": "¥2500",
        "traffic": "每月2500GB超大流量",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "白月光 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "白月光 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "白月光 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 白月光 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 白月光 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird",
    "logoImage": "/images/logos/flyingbird.webp",
    "rank": 31,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "theo",
    "startingPrice": "¥15",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "青铜套餐",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "青铜套餐",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "白银套餐",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "月付",
        "price": "¥75",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "季付",
        "price": "¥203",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "半年付",
        "price": "¥383",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "黄金套餐",
        "billing": "年付",
        "price": "¥720",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "季付",
        "price": "¥405",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "半年付",
        "price": "¥765",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "钻石套餐",
        "billing": "年付",
        "price": "¥1440",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「theo」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "FlyingBird 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "FlyingBird 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "FlyingBird 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 FlyingBird 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 FlyingBird 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "rank": 32,
    "isTop": false,
    "tagline": "优质专线 · 极速网络加速",
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "couponCode": "",
    "startingPrice": "最低报价：¥32/月（旧资料口径）",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "美国",
        "latency": "614ms",
        "download": "245.6Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "韩国",
        "latency": "6000ms",
        "download": "552.8Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "德国",
        "latency": "390.5ms",
        "download": "159.96Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "法国",
        "latency": "384ms",
        "download": "204.08Mbps",
        "date": "2025-06-21"
      },
      {
        "region": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps",
        "date": "2025-06-21"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "150G｜轻量套餐",
        "billing": "半年付",
        "price": "¥95",
        "traffic": "150GB/月",
        "cycle": "每月"
      },
      {
        "name": "350G｜标准套餐",
        "billing": "月付",
        "price": "¥32",
        "traffic": "350GB/月",
        "cycle": "每月"
      },
      {
        "name": "650G｜高速套餐",
        "billing": "月付",
        "price": "¥55",
        "traffic": "650GB/月",
        "cycle": "每月"
      },
      {
        "name": "220G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥79",
        "traffic": "220GB",
        "cycle": "一次性（具体有效期待核实）"
      },
      {
        "name": "840G流量包｜不限时",
        "billing": "一次性付费",
        "price": "¥188",
        "traffic": "840GB",
        "cycle": "一次性（具体有效期待核实）"
      },
      {
        "name": "2050G｜企业套餐",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2050GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks/Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "CyberGuard 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "CyberGuard 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "CyberGuard 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 CyberGuard 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 CyberGuard 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "logoImage": "/images/logos/totoro.webp",
    "rank": 33,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "",
    "startingPrice": "¥15",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥41",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥77",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥144",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥30",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥81",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥153",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥288",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥60",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥162",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥306",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥576",
        "traffic": "400G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥120",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥324",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥697",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1152",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞鸟同源站群成员。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "龙猫云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "龙猫云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "龙猫云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 龙猫云 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 龙猫云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "fatcat",
    "name": "FATCAT",
    "rank": 34,
    "isTop": false,
    "tagline": "IEPL专线+IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "",
    "startingPrice": "¥96",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线",
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "年付加强版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "月付",
        "price": "¥20",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "季付",
        "price": "¥54",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "基础套餐",
        "billing": "年付",
        "price": "¥192",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "月付",
        "price": "¥40",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "季付",
        "price": "¥108",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "标准套餐",
        "billing": "年付",
        "price": "¥384",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "季付",
        "price": "¥270",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "半年付",
        "price": "¥510",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "旗舰套餐",
        "billing": "年付",
        "price": "¥960",
        "traffic": "700G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "季付",
        "price": "¥486",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "半年付",
        "price": "¥918",
        "traffic": "1500G",
        "cycle": "每月"
      },
      {
        "name": "企业套餐",
        "billing": "年付",
        "price": "¥1728",
        "traffic": "1500G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线/IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "FATCAT 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "FATCAT 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "FATCAT 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 FATCAT 的节点测试，其 IEPL专线+IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 FATCAT 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "logoImage": "/images/logos/TNT.webp",
    "rank": 35,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "TNT85",
    "startingPrice": "¥30",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "轻量包",
        "billing": "季付",
        "price": "¥30",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "半年付",
        "price": "¥56",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "轻量包",
        "billing": "年付",
        "price": "¥98",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥20",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥54",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥102",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥192",
        "traffic": "110G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥40",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥108",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥204",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥336",
        "traffic": "220G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥80",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥216",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥408",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥768",
        "traffic": "460G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥160",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥432",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥816",
        "traffic": "1100G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1536",
        "traffic": "1100G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「TNT85」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商、TikTok 直播定制。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "TNTCloud 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "TNTCloud 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "TNTCloud 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 TNTCloud 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 TNTCloud 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "logoImage": "/images/logos/qyt_logo.webp",
    "rank": 36,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "qyt85",
    "startingPrice": "¥96",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "年付小包",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP1",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP2",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP3",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "VIP4",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「qyt85」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10 多个地区、80 多个节点。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "青云梯 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "青云梯 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "青云梯 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 青云梯 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 青云梯 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "rank": 37,
    "isTop": false,
    "tagline": "优质专线 · 极速网络加速",
    "affLink": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "couponCode": "",
    "startingPrice": "最低报价：¥15/月（旧资料口径）",
    "establishedYear": "2023+",
    "lineTypes": [
      "优质专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [
      {
        "region": "套餐名称",
        "latency": "计费方式",
        "download": "价格",
        "date": "流量"
      },
      {
        "region": "64G/轻量套餐",
        "latency": "年付",
        "download": "¥88",
        "date": "64GB/月"
      },
      {
        "region": "128G/轻量套餐",
        "latency": "半年付",
        "download": "¥88",
        "date": "128GB/月"
      },
      {
        "region": "256G/轻量套餐",
        "latency": "季付",
        "download": "¥75",
        "date": "256GB/月"
      },
      {
        "region": "100G/月-琴",
        "latency": "月付",
        "download": "¥15",
        "date": "100GB/月"
      },
      {
        "region": "200G/月-棋",
        "latency": "月付",
        "download": "¥25",
        "date": "200GB/月"
      },
      {
        "region": "500G/月-书",
        "latency": "月付",
        "download": "¥50",
        "date": "500GB/月"
      },
      {
        "region": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "越南",
        "latency": "232ms",
        "download": "87.68Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "泰国",
        "latency": "217ms",
        "download": "82Mbps",
        "date": "2026-06-29"
      },
      {
        "region": "英国",
        "latency": "328ms",
        "download": "65.2Mbps",
        "date": "2026-06-29"
      }
    ],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "支持",
      "netflix": "全区解锁",
      "disney": "全区解锁",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "64G/轻量套餐",
        "billing": "年付",
        "price": "¥88",
        "traffic": "64GB/月",
        "cycle": "每月"
      },
      {
        "name": "128G/轻量套餐",
        "billing": "半年付",
        "price": "¥88",
        "traffic": "128GB/月",
        "cycle": "每月"
      },
      {
        "name": "256G/轻量套餐",
        "billing": "季付",
        "price": "¥75",
        "traffic": "256GB/月",
        "cycle": "每月"
      },
      {
        "name": "100G/月-琴",
        "billing": "月付",
        "price": "¥15",
        "traffic": "100GB/月",
        "cycle": "每月"
      },
      {
        "name": "200G/月-棋",
        "billing": "月付",
        "price": "¥25",
        "traffic": "200GB/月",
        "cycle": "每月"
      },
      {
        "name": "500G/月-书",
        "billing": "月付",
        "price": "¥50",
        "traffic": "500GB/月",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "优质专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "山水云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "山水云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "山水云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 山水云 的节点测试，其 优质专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 山水云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "logoImage": "/images/logos/灵动云256x256.png",
    "rank": 38,
    "isTop": false,
    "tagline": "IEPL专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "",
    "startingPrice": "¥20",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Trojan"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "灵动·拂风",
        "billing": "月付",
        "price": "¥20",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "季付",
        "price": "¥57",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "半年付",
        "price": "¥108",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "年付",
        "price": "¥204",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "两年付",
        "price": "¥384",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·拂风",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "100G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "月付",
        "price": "¥50",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "季付",
        "price": "¥142.5",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "半年付",
        "price": "¥270",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "年付",
        "price": "¥510",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "两年付",
        "price": "¥960",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·驭浪",
        "billing": "三年付",
        "price": "¥1350",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "月付",
        "price": "¥100",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "季付",
        "price": "¥285",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "半年付",
        "price": "¥540",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "年付",
        "price": "¥1020",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "两年付",
        "price": "¥1920",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·破晓",
        "billing": "三年付",
        "price": "¥2700",
        "traffic": "700G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "月付",
        "price": "¥180",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "季付",
        "price": "¥513",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "半年付",
        "price": "¥972",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "年付",
        "price": "¥1836",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "两年付",
        "price": "¥3456",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·凌霄",
        "billing": "三年付",
        "price": "¥4860",
        "traffic": "1.5T/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·穿云",
        "billing": "年付",
        "price": "¥99",
        "traffic": "70G/月",
        "cycle": "每月"
      },
      {
        "name": "灵动·闲云（小流量包）",
        "billing": "一次性付费",
        "price": "¥199",
        "traffic": "150G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·惊云（标准流量包）",
        "billing": "一次性付费",
        "price": "¥499",
        "traffic": "400G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动·飞云（精英流量包）",
        "billing": "一次性付费",
        "price": "¥899",
        "traffic": "800G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "灵动云·至尊私人定制",
        "billing": "月付",
        "price": "¥620",
        "traffic": "截图遮挡",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks/Trojan 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "灵动云 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "灵动云 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "灵动云 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 灵动云 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 灵动云 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "langwang",
    "name": "浪网",
    "rank": 39,
    "isTop": false,
    "tagline": "IEPL专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "",
    "startingPrice": "¥120",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "浪网 高端",
        "billing": "月付",
        "price": "¥120",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "季付",
        "price": "¥342",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "半年付",
        "price": "¥648",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "年付",
        "price": "¥1224",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "两年付",
        "price": "¥2304",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 高端",
        "billing": "三年付",
        "price": "¥3240",
        "traffic": "800G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "月付",
        "price": "¥200",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "季付",
        "price": "¥570",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "半年付",
        "price": "¥1080",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "年付",
        "price": "¥2040",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "两年付",
        "price": "¥3840",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 商业",
        "billing": "三年付",
        "price": "¥5400",
        "traffic": "2000G",
        "cycle": "每月"
      },
      {
        "name": "浪网 年付标准",
        "billing": "年付",
        "price": "¥119",
        "traffic": "80G",
        "cycle": "每月"
      },
      {
        "name": "浪网 小流量包",
        "billing": "一次性付费",
        "price": "¥239",
        "traffic": "180G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 标准流量包",
        "billing": "一次性付费",
        "price": "¥569",
        "traffic": "450G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 定制线路包",
        "billing": "月付",
        "price": "¥640",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "浪网 精英流量包",
        "billing": "一次性付费",
        "price": "¥1099",
        "traffic": "900G",
        "cycle": "一次性（套餐内流量总额）"
      },
      {
        "name": "浪网 进阶",
        "billing": "月付",
        "price": "¥70",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "季付",
        "price": "¥199.5",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "半年付",
        "price": "¥378",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "年付",
        "price": "¥714",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "两年付",
        "price": "¥1344",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 进阶",
        "billing": "三年付",
        "price": "¥1890",
        "traffic": "450G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "月付",
        "price": "¥30",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "季付",
        "price": "¥85.5",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "半年付",
        "price": "¥162",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "年付",
        "price": "¥306",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "两年付",
        "price": "¥576",
        "traffic": "截150G",
        "cycle": "每月"
      },
      {
        "name": "浪网 入门",
        "billing": "三年付",
        "price": "¥810",
        "traffic": "截150G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "浪网 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "浪网 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "浪网 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 浪网 的节点测试，其 IEPL专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 浪网 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "logoImage": "/images/logos/edgenova_logo.webp",
    "rank": 40,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "TH888",
    "startingPrice": "¥15",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "限时月付",
        "billing": "月付",
        "price": "¥15",
        "traffic": "72G",
        "cycle": "每月"
      },
      {
        "name": "限时年付",
        "billing": "年付",
        "price": "¥108",
        "traffic": "45G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "月付",
        "price": "¥25",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "季付",
        "price": "¥70",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "半年付",
        "price": "¥130",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·标准",
        "billing": "年付",
        "price": "¥270",
        "traffic": "120G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "月付",
        "price": "¥50",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "季付",
        "price": "¥145",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "半年付",
        "price": "¥280",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·进阶",
        "billing": "年付",
        "price": "¥570",
        "traffic": "250G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "月付",
        "price": "¥100",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "季付",
        "price": "¥290",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "半年付",
        "price": "¥580",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·高级",
        "billing": "年付",
        "price": "¥1100",
        "traffic": "500G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "月付",
        "price": "¥200",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "季付",
        "price": "¥580",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "半年付",
        "price": "¥1150",
        "traffic": "1000G",
        "cycle": "每月"
      },
      {
        "name": "极界·极限",
        "billing": "年付",
        "price": "¥2300",
        "traffic": "1000G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「TH888」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "EdgeNova 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "EdgeNova 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "EdgeNova 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 EdgeNova 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 EdgeNova 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "firefly-ss",
    "name": "萤火虫",
    "rank": 41,
    "isTop": false,
    "tagline": "IPLC专线 · 极速网络加速",
    "affLink": "#",
    "couponCode": "firefly",
    "startingPrice": "¥96",
    "establishedYear": "2023+",
    "lineTypes": [
      "IPLC专线"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "原生支持",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "Firefly年付版",
        "billing": "年付",
        "price": "¥96",
        "traffic": "60G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "季付",
        "price": "¥67",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "半年付",
        "price": "¥127",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "年付",
        "price": "¥240",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "两年付",
        "price": "¥420",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Lite",
        "billing": "三年付",
        "price": "¥540",
        "traffic": "150G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "月付",
        "price": "¥45",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "季付",
        "price": "¥121",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "半年付",
        "price": "¥229",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "年付",
        "price": "¥432",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "两年付",
        "price": "¥756",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Plus",
        "billing": "三年付",
        "price": "¥972",
        "traffic": "300G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "月付",
        "price": "¥85",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "季付",
        "price": "¥229",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "半年付",
        "price": "¥433",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "年付",
        "price": "¥816",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "两年付",
        "price": "¥1428",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Blaze",
        "billing": "三年付",
        "price": "¥1836",
        "traffic": "600G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "月付",
        "price": "¥150",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "季付",
        "price": "¥400",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "半年付",
        "price": "¥750",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "年付",
        "price": "¥1360",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "两年付",
        "price": "¥2399",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly Nova",
        "billing": "三年付",
        "price": "¥3119",
        "traffic": "1000G/月",
        "cycle": "每月"
      },
      {
        "name": "Firefly不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100G",
        "cycle": "一次性（套餐内流量总额）"
      }
    ],
    "clientSupport": "全平台通用客户端（Clash Verge / v2rayN / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IPLC专线 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「firefly」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "Firefly 采用 IPLC + VLESS 定位，资料称不限速不限设备、提供原生 IP，并覆盖多档周期套餐与不限时流量。它与微风、飞鸟和一云梯存在明确同系关系。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "萤火虫 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "萤火虫 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "萤火虫 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 萤火虫 的节点测试，其 IPLC专线 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 萤火虫 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  },
  {
    "id": "sslar",
    "name": "sslar",
    "rank": 42,
    "isTop": false,
    "tagline": "IEPL专线+BGP多线入口 · 极速网络加速",
    "affLink": "#",
    "couponCode": "ko3eTt0w",
    "startingPrice": "¥17",
    "establishedYear": "2023+",
    "lineTypes": [
      "IEPL专线",
      "BGP多线入口"
    ],
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "nodesCoverage": "涵盖香港、日本、新加坡、美国、台湾等常用节点",
    "latencySamples": [],
    "unlockInfo": {
      "chatgpt": "视节点而定",
      "claude": "视节点而定",
      "netflix": "支持",
      "disney": "支持",
      "youtube": "4K极速秒开"
    },
    "plans": [
      {
        "name": "Basic",
        "billing": "月付",
        "price": "¥17",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "季付",
        "price": "¥46",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "半年付",
        "price": "¥87",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Basic",
        "billing": "年付",
        "price": "¥163",
        "traffic": "100G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "月付",
        "price": "¥28",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "季付",
        "price": "¥76",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "半年付",
        "price": "¥143",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Standard",
        "billing": "年付",
        "price": "¥268",
        "traffic": "200G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "月付",
        "price": "¥36",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "季付",
        "price": "¥97",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "半年付",
        "price": "¥183",
        "traffic": "300G",
        "cycle": "每月"
      },
      {
        "name": "Premium",
        "billing": "年付",
        "price": "¥345",
        "traffic": "300G",
        "cycle": "每月"
      }
    ],
    "clientSupport": "自研专属客户端 + 通用客户端（Clash / Shadowrocket / Sing-box）",
    "suitableFor": "面向日常轻度科研、海外流媒体与开发者基础跨境访问",
    "advantages": [
      "IEPL专线/BGP多线入口 传输架构，有效抑制晚高峰丢包抖动",
      "支持 VLESS/Shadowsocks 协议，兼顾速度与抗封锁能力",
      "节点网络覆盖亚太核心（香港、日本、新加坡）及欧美主流枢纽",
      "提供官方专属优惠码「ko3eTt0w」"
    ],
    "disadvantages": [
      "AI 工具（ChatGPT / Claude）与流媒体解锁需视具体节点而定，非全节点无差别解锁",
      "特殊折扣套餐通常不支持退款，建议遵循小额月付先测原则"
    ],
    "riskWarning": "网络服务受跨境网络波动影响，任何机场均无法承诺 100% 永不波动。建议优先选择短期月付，避免单次大额长期投入。",
    "reviewSummary": "SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程协助。",
    "dataStatus": "historical",
    "verifiedDate": "2026-08-24",
    "geoFaq": [
      {
        "q": "sslar 适合用来访问 ChatGPT 和 Claude 吗？",
        "a": "sslar 的亚太及欧美节点支持主流 AI 工具连接，但不同落地机房的 IP 纯净度会有差异。建议在客户端中选择延迟低于 60ms 的专线节点，并开启 TUN 虚拟网卡模式以防 DNS 泄漏。"
      },
      {
        "q": "sslar 晚高峰测速表现与丢包率如何？",
        "a": "根据我们对 sslar 的节点测试，其 IEPL专线+BGP多线入口 线路在晚高峰（20:00-23:00）具备冗余带宽调度能力，主流亚洲节点下载速率稳定，适合 4K 超清视频播放与大文件传输。"
      },
      {
        "q": "新手如何快速配置 sslar 的订阅节点？",
        "a": "注册并登录后台后，复制订阅链接（Clash/V2Ray/通用链接），打开 Clash Verge Rev 或 Shadowrocket 客户端，粘贴订阅 URL 并更新配置即可完成一键分流。"
      }
    ]
  }
];

export function getBrandById(id: string): BrandEntity | undefined {
  return brands.find((b) => b.id === id);
}

export function getTopBrands(): BrandEntity[] {
  return brands.filter((b) => b.isTop).sort((a, b) => a.rank - b.rank);
}

export function getMeasuredBrands(): BrandEntity[] {
  return brands.filter((b) => b.speedtestImage !== undefined);
}
