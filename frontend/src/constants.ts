import { Content, Language } from "./types";

export const HERO_STYLES = {
  home: {
    background:
      "radial-gradient(900px circle at 50% 10%, rgba(255,107,107,0.10) 0%, rgba(255,107,107,0) 55%), linear-gradient(180deg, #0D2A66 0%, #123A86 55%, #0B1B45 100%)",
    curveFill: "#F6F8FF",
    textClass: "text-white",
  },
  csca: {
    background:
      "linear-gradient(120deg, #fad6b2 0%, #F8E5D4 20%, #f0ddd5 38%, #DCE6FA 68%, #C9DAFF 100%)",
    curveFill: "#FFFFFF",
    textClass: "text-navy-950",
  },
  resources: {
    background:
      "radial-gradient(900px circle at 70% 0%, rgba(234,242,255,0.45) 0%, rgba(234,242,255,0) 60%), linear-gradient(180deg, #f9ead8 0%, #fff1e3 50%, #FFFFFF 100%)",
    curveFill: "#FFFFFF",
    textClass: "text-[#000000]",
  },
  tutoring: {
    background:
     "radial-gradient(900px circle at 70% 0%, rgba(234,242,255,0.45) 0%, rgba(234,242,255,0) 60%), linear-gradient(180deg, #f9ead8 0%, #fff1e3 50%, #FFFFFF 100%)",
      // "radial-gradient(900px circle at 70% 0%, rgba(234,242,255,0.45) 0%, rgba(234,242,255,0) 60%), linear-gradient(180deg, #FBF3EA 0%, #FFF8F1 70%, #FFFFFF 100%)",
    curveFill: "#FFFFFF",
    textClass: "text-navy-950",
  },
  about: {
    background:
      "radial-gradient(900px circle at 50% 0%, rgba(11,27,69,0.06) 0%, rgba(11,27,69,0) 60%), linear-gradient(180deg, #FFFFFF 0%, #F2F7FF 60%, #EAF2FF 100%)",
    curveFill: "#FFFFFF",
    textClass: "text-navy-950",
  },
  clean: {
    background:
      "radial-gradient(900px circle at 50% 0%, rgba(11,27,69,0.06) 0%, rgba(11,27,69,0) 60%), linear-gradient(180deg, #FFFFFF 0%, #F6FAFF 100%)",
    curveFill: "#FFFFFF",
    textClass: "text-navy-950",
  },
};

export const CONTENT: Record<Language, Content> = {
  en: {
    nav: {
      home: "Home",
      csca: "CSCA Guide",
      resources: "Resources",
      resourcesDropdown: {
        overview: "Overview",
        math: "Math",
        physics: "Physics",
        chemistry: "Chemistry",
        chinese: "Chinese",
      },
      tutoring: "Tutoring",
      tutoringDropdown: {
        overview: "Overview",
        stem: "STEM Classes",
        chinese: "Chinese Classes",
        oneOnOne: "1-to-1 Tutoring",
      },
      about: "About Us",
      blog: "Blog",
      contact: "Contact",
      contactBtn: "Contact Us",
    },
    home: {
      hero: {
        title: "Master the CSCA with Confidence",
        subtitle:
          "Expert resources, personalized tutoring, and a supportive community to help you succeed.",
        ctaPrimary: "Explore Resources",
        ctaSecondary: "Find a Tutor",
      },
      offer: {
        title: "What We Offer",
        cards: [
          {
            title: "Exam Intel",
            desc: "Deep dive analysis of past exam trends.",
          },
          {
            title: "Study Packs",
            desc: "Curated practice problems with detailed solutions.",
          },
          {
            title: "Community",
            desc: "Join 100+ students in our daily study groups.",
          },
          {
            title: "1-on-1 Tutoring",
            desc: "Personalized guidance from top scorers.",
          },
        ],
      },
      how: {
        title: "How It Works",
        steps: [
          {
            title: "Assess",
            desc: "Identify your weak spots with our free diagnostic tool.",
          },
          { title: "Plan", desc: "Get a customized 21-day study roadmap." },
          {
            title: "Execute",
            desc: "Practice daily with our resources and get feedback.",
          },
        ],
      },
      resources: {
        title: "Featured Resources",
        desc: "Everything you need to study effectively, from quick sheets to full mock exams.",
        cta: "View All Resources",
      },
      tutoring: {
        title: "Expert Tutoring",
        desc: "Struggling with a specific topic? Our tutors break it down simply.",
        cta: "Meet Tutors",
      },
      story: {
        title: "Our Mission",
        content:
          "PrepPals was born from one simple idea — that no student should prepare for CSCA alone. We believe in clarity, empathy, and growth.",
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "Is this official?",
            answer: "No, we are an independent preparation provider.",
          },
          {
            question: "How long is the course?",
            answer: "Self-paced, but typically 3-4 weeks.",
          },
          {
            question: "Do you offer refunds?",
            answer: "Yes, within 7 days for digital products.",
          },
          {
            question: "Is tutoring online?",
            answer: "Yes, all sessions are via Zoom/Google Meet.",
          },
          {
            question: "Can I pay in RMB?",
            answer: "Yes, we accept WeChat Pay and Alipay.",
          },
          {
            question: "Is the material updated?",
            answer: "Yes, updated for the 2026 syllabus.",
          },
        ],
      },
    },
    resources: {
      title: "Study Resources",
      subtitle: "Select a subject to find specialized study packs and guides.",
      cards: [
        {
          title: "Mathematics",
          desc: "Calculus, Statistics, and Algebra tailored for CSCA.",
          link: "math",
        },
        {
          title: "Physics",
          desc: "Mechanics and Waves focused practice packs.",
          link: "physics",
        },
        {
          title: "Chemistry",
          desc: "Organic and Inorganic chemistry exam strategies.",
          link: "chemistry",
        },
        {
          title: "Chinese",
          desc: "Vocabulary lists and reading comprehension drills.",
          link: "chinese",
        },
      ],
    },
    resourceSubject: {
      sections: {
        free: {
          title: "Starter Pack",
          desc: "Essential formulas and a diagnostic test.",
          status: "Free (Coming Soon)",
        },
        selfStudy: {
          title: "Self-Study Pack",
          desc: "Includes Practice + Solutions and Exam Intel Panorama.",
          price: "$49 USD",
        },
        community: {
          title: "Community Membership",
          desc: "21-day plan, daily checklist, high-freq topics, Q&A.",
          price: "$99 USD",
        },
      },
      faqTitle: "Subject FAQs",
      cta: "Have questions about this subject?",
    },
    tutoring: {
      title: "Tutoring Services",
      subtitle: "Choose the learning format that works best for you.",
      cards: [
        {
          title: "STEM Small Group",
          desc: "Interactive classes for Math, Physics, and Chemistry (Max 15 students).",
          link: "stem-classes",
        },
        {
          title: "Chinese Small Group",
          desc: "Intensive language workshops (Max 5 students).",
          link: "chinese-classes",
        },
        {
          title: "1-on-1 Coaching",
          desc: "Fully personalized attention for targeted improvement.",
          link: "one-to-one",
        },
      ],
    },
    tutoringClass: {
      registrationFee: "Registration Fee: USD 4 / 25 RMB",
      officialRefer: "Refer to official site for exam fees.",
      lastUpdated: "Last updated: 2023-10-27",
      table: {
        headers: ["Feature", "Details"],
        rows: [], // Populated dynamically in component based on type
      },
    },
    tutoringOneOnOne: {
      title: "1-on-1 Coaching",
      subtitle: "Personalized guidance to maximize your score.",
      processTitle: "How it Works",
      steps: [
        {
          title: "Consultation",
          desc: "We analyze your past papers and current level.",
        },
        {
          title: "Matching",
          desc: "We pair you with a tutor who specializes in your weak areas.",
        },
        {
          title: "Scheduling",
          desc: "Flexible booking via our online calendar.",
        },
      ],
      timezoneNote:
        "Note: All sessions are scheduled in your local timezone. Rescheduling is available up to 24 hours in advance.",
    },
    about: {
      title: "About PrepPals",
      subtitle: "Empowering students worldwide.",
      storyTitle: "Our Story",
      storyText:
        "PrepPals started in a university library when two friends realized the lack of clear, accessible resources for the CSCA. We decided to change that.",
      missionTitle: "Our Mission",
      missionText:
        "To democratize access to high-quality exam preparation and foster a supportive global community.",
      valuesTitle: "Our Values",
      values: [
        { title: "Clarity", desc: "We make complex topics simple." },
        { title: "Empathy", desc: "We understand the stress of exams." },
        { title: "Growth", desc: "We focus on progress, not just results." },
        {
          title: "Togetherness",
          desc: "We believe studying is better together.",
        },
      ],
    },
    blog: {
      title: "PrepPals Blog",
      subtitle: "Latest insights, study tips, and exam updates.",
      posts: [
        {
          slug: "csca-study-plan",
          title: "The Ultimate 30-Day CSCA Study Plan",
          excerpt:
            "A week-by-week breakdown of what to study to maximize your efficiency.",
          date: "Oct 24, 2023",
          tags: ["Guide", "Planning"],
        },
        {
          slug: "csca-subjects-overview",
          title: "Overview of CSCA STEM Subjects",
          excerpt:
            "What you need to know about the difficulty curves of Math and Physics.",
          date: "Oct 10, 2023",
          tags: ["Insights"],
        },
      ],
      readMore: "Read Article",
      relatedTitle: "Related Resources",
      tocTitle: "Table of Contents",
    },
    contact: {
      title: "Tell us where you are in your CSCA prep",
      subtitle:
        "Share your timeline and what you need help with — we’ll point you to a suitable next step.",
      whatsapp: "Fastest way to reach us",
      emailFallback: "Best for detailed questions",
      whatNextTitle: "What happens next",
      whatNextSteps: [
        "We review your timeline, subjects, and what kind of help you need.",
        "We suggest a suitable next step instead of pushing the same option to everyone.",
        "We follow up through your preferred contact method.",
      ],
      disclaimer:
        "We do not guarantee scores. We focus on helping students prepare more clearly and more efficiently.",
      form: {
        name: "Full name",
        email: "Email address",
        whatsapp: "WhatsApp / preferred contact",
        country: "Country",
        timeline: "Exam timeline",
        timelinePlaceholder: "Select your timeline",
        timelineOptions: [
          { label: "Within 1 month", value: "within-1-month" },
          { label: "1–3 months", value: "1-3-months" },
          { label: "3+ months", value: "3-plus-months" },
          { label: "Just exploring", value: "just-exploring" },
        ],
        helpType: "What do you need help with?",
        helpPlaceholder: "Select one",
        helpOptions: [
          { label: "Free materials", value: "free-materials" },
          { label: "Resources", value: "resources" },
          { label: "Tutoring", value: "tutoring" },
          { label: "Study plan", value: "study-plan" },
          { label: "Other", value: "other" },
        ],
        subjects: "Subjects needed",
        subjectOptions: [
          { label: "Math", value: "math" },
          { label: "Physics", value: "physics" },
          { label: "Chemistry", value: "chemistry" },
          { label: "Chinese", value: "chinese" },
        ],
        message: "Tell us a bit more",
        submit: "Send My Request",
      },
    },
    footer: {
      disclaimer:
        "Disclaimer: PrepPals is not affiliated with the official CSCA organization. All official information should be verified at the source.",
      rights: "© 2026 PrepPals. All rights reserved.",
    },
  },
  zh: {
    nav: {
      home: "首页",
      csca: "CSCA 指南",
      resources: "资源",
      resourcesDropdown: {
        overview: "概览",
        math: "数学",
        physics: "物理",
        chemistry: "化学",
        chinese: "中文",
      },
      tutoring: "补习班",
      tutoringDropdown: {
        overview: "概览",
        stem: "理科 系统学习班",
        chinese: "专业中文 系统学习班",
        oneOnOne: "1 对 1 私教补习",
      },
      about: "关于我们",
      blog: "博客",
      contact: "联系",
      contactBtn: "联系我们",
    },
    home: {
      hero: {
        title: "自信掌握 CSCA",
        subtitle: "专家资源，个性化辅导，以及支持您成功的社区。",
        ctaPrimary: "探索资源",
        ctaSecondary: "寻找导师",
      },
      offer: {
        title: "我们提供的服务",
        cards: [
          { title: "考试情报", desc: "深入分析过往考试趋势。" },
          { title: "学习包", desc: "精选练习题及详细解答。" },
          { title: "社区", desc: "加入100多名学生的每日学习小组。" },
          { title: "1对1辅导", desc: "来自高分考生的个性化指导。" },
        ],
      },
      how: {
        title: "如何运作",
        steps: [
          { title: "评估", desc: "使用我们的免费诊断工具找出薄弱环节。" },
          { title: "计划", desc: "获得定制的21天学习路线图。" },
          { title: "执行", desc: "利用我们的资源每日练习并获得反馈。" },
        ],
      },
      resources: {
        title: "精选资源",
        desc: "从速查表到全真模拟考试，您需要的一切都在这里。",
        cta: "查看所有资源",
      },
      tutoring: {
        title: "专家辅导",
        desc: "在特定主题上遇到困难？我们的导师为您深入浅出地讲解。",
        cta: "认识导师",
      },
      story: {
        title: "我们的使命",
        content:
          "PrepPals 诞生于一个简单的想法 —— 没有任何学生应该独自准备 CSCA。我们相信清晰、同理心和成长。",
      },
      faq: {
        title: "常见问题",
        items: [
          {
            question: "这是官方的吗？",
            answer: "不，我们是独立的备考提供商。",
          },
          { question: "课程多长时间？", answer: "自定进度，通常为3-4周。" },
          { question: "提供退款吗？", answer: "是的，数字产品7天内可退。" },
          {
            question: "辅导是线上的吗？",
            answer: "是的，所有课程通过 Zoom/Google Meet 进行。",
          },
          {
            question: "可以用人民币支付吗？",
            answer: "可以，我们接受微信支付和支付宝。",
          },
          {
            question: "材料有更新吗？",
            answer: "是的，已针对2026年大纲更新。",
          },
        ],
      },
    },
    resources: {
      title: "学习资源",
      subtitle: "选择学科以查找专门的学习包和指南。",
      cards: [
        {
          title: "数学",
          desc: "针对 CSCA 的微积分、统计和代数。",
          link: "math",
        },
        { title: "物理", desc: "力学和波动的专项练习包。", link: "physics" },
        { title: "化学", desc: "有机和无机化学考试策略。", link: "chemistry" },
        { title: "中文", desc: "词汇表和阅读理解训练。", link: "chinese" },
      ],
    },
    resourceSubject: {
      sections: {
        free: {
          title: "入门包",
          desc: "基本公式和诊断测试。",
          status: "免费 (即将推出)",
        },
        selfStudy: {
          title: "自学包",
          desc: "包括练习+解答和考试情报全景。",
          price: "$49 USD",
        },
        community: {
          title: "社区会员",
          desc: "21天计划，每日清单，高频话题，答疑。",
          price: "$99 USD",
        },
      },
      faqTitle: "学科常见问题",
      cta: "对这门学科有疑问？",
    },
    tutoring: {
      title: "辅导服务",
      subtitle: "选择最适合您的学习形式。",
      cards: [
        {
          title: "STEM 小班课",
          desc: "数学、物理和化学的互动课程（最多15人）。",
          link: "stem-classes",
        },
        {
          title: "中文小班课",
          desc: "强化语言研讨会（最多5人）。",
          link: "chinese-classes",
        },
        {
          title: "1对1 辅导",
          desc: "完全个性化的关注，针对性提升。",
          link: "one-to-one",
        },
      ],
    },
    tutoringClass: {
      registrationFee: "注册费：USD 4 / 25 RMB",
      officialRefer: "考试费用请参考官方网站。",
      lastUpdated: "最后更新：2023-10-27",
      table: {
        headers: ["项目", "详情"],
        rows: [],
      },
    },
    tutoringOneOnOne: {
      title: "1对1 辅导",
      subtitle: "个性化指导，最大化您的分数。",
      processTitle: "如何运作",
      steps: [
        { title: "咨询", desc: "我们分析您的过往试卷和当前水平。" },
        { title: "匹配", desc: "我们为您匹配专门针对您薄弱环节的导师。" },
        { title: "安排", desc: "通过我们的在线日历灵活预约。" },
      ],
      timezoneNote: "注意：所有课程按您的当地时区安排。提前24小时可改期。",
    },
    about: {
      title: "关于 PrepPals",
      subtitle: "赋能全球学生。",
      storyTitle: "我们的故事",
      storyText:
        "PrepPals 始于大学图书馆，当时两位朋友意识到缺乏清晰、易得的 CSCA 资源。我们决定改变这一现状。",
      missionTitle: "我们的使命",
      missionText:
        "让高质量的考试准备变得触手可及，并培养一个支持性的全球社区。",
      valuesTitle: "我们的价值观",
      values: [
        { title: "清晰", desc: "我们将复杂的话题简单化。" },
        { title: "同理心", desc: "我们理解考试的压力。" },
        { title: "成长", desc: "我们关注进步，而不仅仅是结果。" },
        { title: "团结", desc: "我们相信一起学习效果更好。" },
      ],
    },
    blog: {
      title: "PrepPals 博客",
      subtitle: "最新见解、学习技巧和考试更新。",
      posts: [
        {
          slug: "csca-study-plan",
          title: "终极30天 CSCA 学习计划",
          excerpt: "每周学习内容的详细分解，最大化效率。",
          date: "2023年10月24日",
          tags: ["指南", "计划"],
        },
        {
          slug: "csca-subjects-overview",
          title: "CSCA STEM 学科概览",
          excerpt: "你需要知道的关于数学和物理难度曲线的一切。",
          date: "2023年10月10日",
          tags: ["见解"],
        },
      ],
      readMore: "阅读文章",
      relatedTitle: "相关资源",
      tocTitle: "目录",
    },
    contact: {
      title: "告诉我们你目前的 CSCA 备考阶段",
      subtitle:
        "把你的时间线和需要的帮助告诉我们，我们会给你更合适的下一步建议。",
      whatsapp: "最快联系到我们的方式",
      emailFallback: "适合发送更详细的问题",
      whatNextTitle: "接下来会发生什么",
      whatNextSteps: [
        "我们会先看你的时间线、科目和你需要的帮助类型。",
        "我们会根据情况给你更适合的下一步建议，而不是把同一个方案给所有人。",
        "我们会通过你偏好的联系方式继续跟进。",
      ],
      disclaimer:
        "我们不保证分数。我们更重视帮助学生更清晰、更高效地准备考试。",
      form: {
        name: "姓名",
        email: "电子邮箱",
        whatsapp: "WhatsApp / 偏好的联系方式",
        country: "国家",
        timeline: "距离考试时间",
        timelinePlaceholder: "请选择你的时间线",
        timelineOptions: [
          { label: "1 个月内", value: "within-1-month" },
          { label: "1–3 个月", value: "1-3-months" },
          { label: "3 个月以上", value: "3-plus-months" },
          { label: "还在了解中", value: "just-exploring" },
        ],
        helpType: "你需要哪方面帮助？",
        helpPlaceholder: "请选择一项",
        helpOptions: [
          { label: "免费资料", value: "free-materials" },
          { label: "学习资源", value: "resources" },
          { label: "辅导支持", value: "tutoring" },
          { label: "学习计划", value: "study-plan" },
          { label: "其他", value: "other" },
        ],
        subjects: "需要的科目",
        subjectOptions: [
          { label: "数学", value: "math" },
          { label: "物理", value: "physics" },
          { label: "化学", value: "chemistry" },
          { label: "中文", value: "chinese" },
        ],
        message: "再告诉我们一些情况",
        submit: "发送我的需求",
      },
    },
    footer: {
      disclaimer:
        "免责声明：PrepPals 与官方 CSCA 组织无关。所有官方信息应在源头进行核实。",
      rights: "© 2026 PrepPals. 保留所有权利。",
    },
  },
};
