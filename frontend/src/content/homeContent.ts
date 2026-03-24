import { Atom, BarChart3, BookOpen, Users, Calculator, FlaskConical, Languages, Globe2, FileText, UserCheck } from "lucide-react";
import { Language } from "../types";

export const getHomeContent = (validLang: Language) => ({
    en: {
      heroPill: "Independent CSCA prep support for international students",
      heroTitle1: "PrepPals, ",
      heroTitle2: "Your CSCA Study Partner.",
      heroSub:
        "PrepPals helps you prepare with selected materials, mock-based analysis, and tutoring support when you need more guidance.",
      heroPrimary: "Compare Tutoring Options",
      heroSecondary: "Explore CSCA Guide",

      pathTitle: "Start from where you are",
      pathSub:
        "Choose the route that fits your current stage instead of studying blindly.",
      paths: [
        {
          title: "I’m new to CSCA",
          desc: "Understand the exam, subjects, and where to begin.",
          cta: "See the CSCA Guide",
          link: `/${validLang}/csca`,
          icon: Globe2  ,
        },
        {
          title: "I need study materials",
          desc: "Browse resources by subject and find practical revision support.",
          cta: "Explore Resources",
          link: `/${validLang}/resources`,
          icon: FileText,
        },
        {
          title: "I want tutoring classes",
          desc: "Compare Systematic Classes and One-to-One Tutoring.",
          cta: "View Tutoring Overview",
          link: `/${validLang}/tutoring`,
          icon: UserCheck,
        },
      ],

      stageTitle: "How close is your exam?",
      stageSub:
        "When the exam gets closer, the biggest risk is not lack of effort — it’s studying without a clear direction.",
      stages: [
        {
          eyebrow: "Fastest way to start",
          title: "Within 1 month",
          desc: "Time is already tight, so it is better to focus first on the biggest score-impact areas.",
          cta: "Explore One-to-One Tutoring",
          link: `/${validLang}/tutoring/one-to-one`,
          tone: "urgent",
        },
        {
          eyebrow: "Best time to build a plan",
          title: "1–3 months",
          desc: "You still have time to move systematically, so this is the best stage to build a clear study rhythm and structure.",
          cta: "View Tutoring Overview",
          link: `/${validLang}/tutoring`,
          tone: "plan",
        },
        {
          eyebrow: "Best first step",
          title: "Just getting started",
          desc: "Start by understanding the exam and subject options clearly before deciding how much support you need.",
          cta: "Read the CSCA Guide",
          link: `/${validLang}/csca`,
          tone: "guide",
        },
      ],

      proofTitle: "Proof that our preparation is structured",
      proofSub:
        "We prefer showing what has already happened over making promises about what will happen next.",
      proof: {
        summaryCards: {
            students: {
            value: "300+",
            title: "International Students",
            note: "Guided through their first CSCA attempt.",
            },
            average: {
            eyebrow: "Latest Cohort Average (Math)",
            value: "88.44",
            suffix: "/ 100",
            note: "This represents the full-cohort average of our most recent tutoring group, not just top performers.",
            },
        },

        labLabel: "PrepPals Data Lab",
        reportTitle: "Exam Structure Prediction",
        reportSubtitle: "Comparing our 12.19 Mock against the 12.21 Official Exam.",

        structuralLabel: "Structural Fidelity",
        structuralValue: "83%",
        conceptLabel: "Concept Hit Rate",
        conceptValue: "96%",

        distributionTitle: "Distribution Alignment",
        officialLabel: "Official Exam",
        mockLabel: "PrepPals Mock",

        rows: [
            { label: "Analytic Geom & Vectors", off: 33, mock: 29 },
            { label: "Trigonometry", off: 21, mock: 23 },
            { label: "Functions", off: 15, mock: 19 },
            { label: "Algebra & Sets", off: 17, mock: 15 },
            { label: "Sequences", off: 12, mock: 12 },
            { label: "Probability", off: 2, mock: 2 },
        ],

        matchedModules: "Matched modules: 3 exact, 3 within ±2",
        coreWeight: "Core weight: 54% vs 52% (Geom + Trig)",
        conclusion: "We predicted the exam shape — before it happened.",

        footerNote: "More proof and updates can also be found on our Instagram.",
     },

      getTitle: "What you can get from PrepPals",
      getSub:
        "We keep our offering simple: materials, analysis, and guided support.",
      getItems: [
        {
          title: "Study Materials",
          desc: "Subject-based resources to help you revise more clearly and efficiently.",
          icon: BookOpen,
        },
        {
          title: "Mock-based Analysis",
          desc: "A more structured way to understand topic weight, patterns, and what deserves attention.",
          icon: BarChart3,
        },
        {
          title: "Tutoring Support",
          desc: "Small-group classes and 1-on-1 help for students who need more guidance.",
          icon: Users,
        },
      ],

      subjectTitle: "Browse by subject",
      subjectSub: "Start with the subject you need most right now.",
      subjects: [
        {
          id: "math",
          label: "Mathematics",
          icon: Calculator,
          color: "text-blue-600 bg-blue-50",
        },
        {
          id: "physics",
          label: "Physics",
          icon: Atom,
          color: "text-purple-600 bg-purple-50",
        },
        {
          id: "chemistry",
          label: "Chemistry",
          icon: FlaskConical,
          color: "text-teal-600 bg-teal-50",
        },
        {
          id: "chinese",
          label: "Chinese (文 & 理)",
          icon: Languages,
          color: "text-red-600 bg-red-50",
        },
      ],
      subjectExtra: "Not sure where to start? Let us suggest a study path.",

      tutoringTitle: "Need more support? Choose your tutoring path",
      tutoringSub:
        "Choose between Systematic Classes and One-to-One Tutoring based on how much structure, flexibility, and personalization you need.",
      tutoringOptions: [
        {
          title: "Systematic Classes",
          badge: "Structured revision",
          desc: "Best for students who want a clearer revision structure, teacher-led rhythm, and a more stable guided learning route.",
          points: [
            "Fixed rhythm and class structure",
            "Better for broader revision",
            "Includes STEM Classes and Professional Chinese Classes",
          ],
          cta: "View Systematic Classes",
          link: `/${validLang}/tutoring#systematic-classes`,
          featured: false,
        },
        {
          title: "One-to-One Tutoring",
          badge: "Most personalized",
          desc: "Best for students with limited time, uneven foundations, or specific weak areas that need targeted attention.",
          points: [
            "Personalized pacing and focus",
            "Targeted work on weak topics",
            "More flexible scheduling",
          ],
          cta: "Explore One-to-One Tutoring",
          link: `/${validLang}/tutoring/one-to-one`,
          featured: true,
        },
      ],

      testimonials: {
        title: "What students say",
        subtitle:
            "The hardest part of the CSCA is not always the Math — it is often the uncertainty and isolation. We try to offer both direction and support.",

        featured: {
            quote:
            "Math used to be my weakest subject. I was overwhelmed by the syllabus. PrepPals helped me stop studying blindly and focus on what really matters. Now I finally know where to start.",
            highlight: "Now I finally know where to start.",
            name: "Helen",
            meta: "Student from Panama",
            initial: "H",
        },

        examFeedback: {
            badge: "Exam Feedback",
            quote:
            "The recall questions felt extremely close to the real CSCA exam. Recognizing question types saved me.",
            name: "Jason",
            meta: "Indonesia",
            initial: "J",
        },

        improvement: {
            eyebrow: "More Efficient Review",
            value: "No More Blind Practice",
            note:
            "Studying with structure is far more effective than just grinding through problems. This is one of the most common changes our students mention.",
        },

        mockFeedback: {
            quote:
            "I thought I was prepared, but the mock exams showed me my blind spots. That made my revision much more focused.",
            name: "Chloe",
            meta: "Malaysia",
            initial: "C",
        },

        community: {
            eyebrow: "Global Community",
            quote:
            "Students from different countries prepared with us through shared notes, mock review, and peer encouragement.",
        },
     },

      faqTitle: "Frequently asked questions",
      faqs: [
        {
          q: "Is PrepPals official?",
          a: "No. PrepPals is an independent CSCA preparation brand and is not affiliated with the official CSCA organizers.",
        },
        {
          q: "Do you provide free materials?",
          a: "Yes. We share selected free content and may offer sample materials or mock-related content before students decide whether they need more support.",
        },
        {
          q: "What’s the difference between resources and tutoring?",
          a: "Resources are self-study oriented. Tutoring is for students who want more guidance, structure, feedback, or targeted help.",
        },
        {
          q: "Can I contact you before deciding?",
          a: "Yes. You can reach out through WhatsApp, Instagram, or the contact form before choosing any materials or tutoring option.",
        },
        {
          q: "Do you guarantee results?",
          a: "No. We do not guarantee scores or outcomes. We focus on helping students prepare more clearly and more efficiently.",
        },
      ],

      groupTitle: "Want updates, reminders, and peer support?",
      groupSub:
        "Join our WhatsApp study group to stay closer to updates, reminders, and the PrepPals learning community.",
      groupPrimary: "Join WhatsApp Group",

      finalTitle: "Not sure what your next step should be?",
      finalSub:
        "Tell us your exam timeline and subjects, and we’ll point you to a suitable next step.",
      finalPrimary: "Chat on WhatsApp",
      finalSecondary: "Send My Request",

      proofButton1: "See our exam analysis",
      proofButton2: "See selected results",
      instagramNote: "More proof and updates can also be found on our Instagram.",
      subjectCta: "View Resources",
      tutoringCta: "Learn More",
    },

    zh: {
      heroPill: "面向国际学生的独立 CSCA 备考帮助",
      heroTitle1: "PrepPals",
      heroTitle2: "你的 CSCA 备考伙伴。",
      heroSub:
        "PrepPals 通过精选资料、基于模考的分析，以及在需要时提供的辅导支持，帮助你更有效地准备 CSCA。",
      heroPrimary: "查看辅导课程",
      heroSecondary: "浏览CSCA指南",

      pathTitle: "从你现在的阶段开始",
      pathSub: "根据你的情况选择适合的路径，不再盲目备考。",
      paths: [
        {
          title: "我刚开始了解 CSCA",
          desc: "先了解考试、科目和如何开始准备。",
          cta: "查看 CSCA 指南",
          link: `/${validLang}/csca`,
          icon: Globe2,
        },
        {
          title: "我需要学习资料",
          desc: "按学科浏览资源，找到更实际的复习支持。",
          cta: "浏览资源",
          link: `/${validLang}/resources`,
          icon: FileText,
        },
        {
          title: "我要报名备考补习班",
          desc: "比较“系统学习班”和“一对一私教补习”。",
          cta: "查看补习班咨询",
          link: `/${validLang}/tutoring`,
          icon: UserCheck,
        },
      ],

      stageTitle: "距离考试还有多久？",
      stageSub:
        "越临近考试，最大的风险往往不是不够努力，而是复习没有方向。",
      stages: [
        {
          eyebrow: "最快进入状态",
          title: "1 个月内",
          desc: "时间已经很紧，更适合先解决最影响分数的重点问题。",
          cta: "了解一对一私教补习",
          link: `/${validLang}/tutoring/one-to-one`,
          tone: "urgent",
        },
        {
          eyebrow: "最适合建立计划",
          title: "1–3 个月",
          desc: "还有时间系统推进，现在最适合建立清晰的复习节奏和学习结构。",
          cta: "查看补习班方案",
          link: `/${validLang}/tutoring`,
          tone: "plan",
        },
        {
          eyebrow: "最适合先了解清楚",
          title: "刚开始准备",
          desc: "先把考试内容和科目方向看清楚，再决定要不要加入更多支持。",
          cta: "浏览 CSCA 指南",
          link: `/${validLang}/csca`,
          tone: "guide",
        },
      ],
      
      subjectTitle: "按学科浏览",
      subjectSub: "从你最需要提升的学科开始。",
      subjects: [
          {
          id: "math",
          label: "数学",
          icon: Calculator,
          color: "text-blue-600 bg-blue-50",
        },
        {
            id: "physics",
          label: "物理",
          icon: Atom,
          color: "text-purple-600 bg-purple-50",
        },
        {
          id: "chemistry",
          label: "化学",
          icon: FlaskConical,
          color: "text-teal-600 bg-teal-50",
        },
        {
            id: "chinese",
            label: "中文（文 & 理）",
            icon: Languages,
            color: "text-red-600 bg-red-50",
        },
    ],
    subjectExtra: "不确定从哪里开始？我们可以帮你找到适合的方向。",
    
    tutoringTitle: "需要更多帮助？",
    tutoringSub: "两种方式，总有一种适合你。",
    tutoringOptions: [
      {
        title: "系统学习班",
        badge: "更适合系统化复习",
        desc: "更适合希望有清晰复习思路、课堂节奏和更稳定带练支持的学生。",
        points: [
          "固定节奏与课程安排",
          "更适合系统性复习",
          "理科 & 中文专业方向课程",
        ],
        cta: "了解系统学习班",
        link: `/${validLang}/tutoring#systematic-classes`,
        featured: false,
      },
      {
        title: "一对一私教补习",
        badge: "最个性化",
        desc: "更适合时间紧、基础不好，或有明确弱项需要针对性突破的学生。",
        points: [
          "个性化进度与重点",
          "针对薄弱项集中提升",
          "时间安排更灵活",
        ],
        cta: "浏览一对一私教补习",
        link: `/${validLang}/tutoring/one-to-one`,
        featured: true,
      },
    ],

      proofTitle: "用已经发生的结果建立信任",
      proofSub:
        "我们展示真实的结果，而不是空头承诺。",
      proof: {
        summaryCards: {
            students: {
            value: "300+",
            title: "国际学生",
            note: "已为 300+ 国际学生提供首次 CSCA 备考帮助",
            },
            average: {
            eyebrow: "最近一期辅导班 · 数学平均分",
            value: "88.44",
            suffix: "/ 100",
            note: "包含所有学生，不仅是高分案例",
            },
        },

        labLabel: "PrepPals 数据洞察",
        reportTitle: "考试结构预测分析",
        reportSubtitle: "对比我们 12.19 模拟题与 12.21 正式考试。",

        structuralLabel: "结构匹配度",
        structuralValue: "83%",
        conceptLabel: "考点命中率",
        conceptValue: "96%",

        distributionTitle: "模块分布对齐",
        officialLabel: "正式考试",
        mockLabel: "PrepPals 模拟题",

        rows: [
            { label: "解析几何 & 向量", off: 33, mock: 29 },
            { label: "三角函数", off: 21, mock: 23 },
            { label: "函数", off: 15, mock: 19 },
            { label: "代数 & 集合", off: 17, mock: 15 },
            { label: "数列", off: 12, mock: 12 },
            { label: "概率", off: 2, mock: 2 },
        ],

        matchedModules: "模块匹配：3 个完全一致，3 个差距在 ±2 以内",
        coreWeight: "核心权重：54% vs 52%（解析几何 + 三角函数）",
        conclusion: "我们在考试前就准确预测了试卷结构",

        footerNote: "更多真实案例和最新动态，请关注我们的 Instagram。",
      },

      testimonials: {
        title: "来自学生的反馈",
        subtitle:
            "CSCA 最难的部分很多时候不只是数学本身，而是不确定感和孤立感。我们希望提供的不只是资料，还有方向与支持。",

        featured: {
            quote:
            "数学曾经是我最弱的一科。面对整个大纲时，我完全不知道该从哪里开始。PrepPals 让我不再盲目复习，而是把精力放在真正重要的地方。现在我终于知道该从哪里开始了。",
            highlight: "现在我终于知道该从哪里开始了。",
            name: "Helen",
            meta: "来自巴拿马的学生",
            initial: "H",
        },

        examFeedback: {
            badge: "考试反馈",
            quote:
            "回忆题和真实 CSCA 考试真的非常接近。能提前认出题型，帮了我很大的忙。",
            name: "Jason",
            meta: "印度尼西亚",
            initial: "J",
        },

        improvement: {
            eyebrow: "复习效率提高",
            value: "不再盲目刷题",
            note:
            "有了清晰的复习路径，不再像无头苍蝇一样到处找资料。",
        },

        mockFeedback: {
            quote:
            "我原本以为自己已经准备好了，但模考让我发现了自己的盲点，也让后续复习更有针对性。",
            name: "Chloe",
            meta: "马来西亚",
            initial: "C",
        },

        community: {
            eyebrow: "全球学习社群",
            quote:
            "来自不同国家的学生通过共享笔记、模考复盘和同伴鼓励，一起准备 CSCA。",
        },
     },

      faqTitle: "常见问题",
      faqs: [
        {
          q: "PrepPals 是官方机构吗？",
          a: "不是。PrepPals 是独立的 CSCA 备考品牌，与官方 CSCA 主办方没有隶属关系。",
        },
        {
          q: "你们的回忆题是怎么样的呢？",
          a: "我们会提供免费的回忆题样例，方便你在决定前先了解我们的内容质量。",
        },
        {
          q: "资源和系统学习班有什么区别？",
          a: "资源更偏向自学；系统学习班更适合需要更多方向或针对性帮助的学生。",
        },
        {
          q: "我可以先联系再决定吗？",
          a: "可以。你可以先通过 WhatsApp、Instagram 或联系表单来询问，再决定是否需要资料或辅导。",
        },
        {
          q: "你们保证成绩吗？",
          a: "不保证。我们不承诺分数，我们承诺的是帮你更清晰、更有效地备考。",
        },
      ],

      groupTitle: "想获取更新、提醒和同伴支持？",
      groupSub:
        "加入我们的 WhatsApp 学习群，获取最新通知、备考提醒和 PrepPals 学习社群支持。",
      groupPrimary: "加入 WhatsApp 群聊",


      finalTitle: "还不确定下一步该怎么做？",
      finalSub:
        "告诉我们你的考试时间和需要的科目，我们会给你一个更合适的下一步建议。",
      finalPrimary: "WhatsApp 咨询",
      finalSecondary: "发送我的需求",

      proofButton1: "查看考试分析",
      proofButton2: "查看成绩案例",
      instagramNote: "更多证据内容和更新也可以在我们的 Instagram 查看。",
      subjectCta: "查看资源",
      tutoringCta: "了解更多",
    },
  }[validLang]);