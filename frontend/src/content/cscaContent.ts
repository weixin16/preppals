export type Lang = "en" | "zh";
export type ProgramKey = "english-taught" | "chinese-taught";
export type TrackKey = "business" | "stem" | "medicine";
export type TimelineKey = "exploring" | "1-3-months" | "within-1-month";
export type SubjectKey = "math" | "physics" | "chemistry" | "chinese";

export type SubjectFinderResult = {
  title: string;
  subjects: SubjectKey[];
  notes: string[];
};

export type TimelineAction = {
  title: string;
  cta: string;
  link: string;
};

const cscaContent = {
  en: {
    metaTitle: "CSCA Guide - PrepPals",
    hero: {
      pill: "CSCA Guide",
      title: "CSCA — China Scholastic Competency Assessment",
      subtitle:
        "A clearer, calmer guide for international students: understand the exam, estimate your likely subject combination, and know what to do next.",
      primary: "Find my likely subjects",
      secondary: "Browse exam structure",
      boardTitle: "Next exam snapshot",
      boardStatus: "Updated",
      boardDateLabel: "Next official sitting",
      boardDate: "25 Apr 2026",
      boardTimezone: "Beijing Time · official schedule",
      boardItems: [
        { label: "Registration", value: "1 Apr – 9 Apr, 12:00" },
        { label: "Exam cycle", value: "5 sessions / year" },
        { label: "Format", value: "Online + test centres" },
        { label: "Results", value: "7–14 working days" },
      ],
      boardNoteTitle: "Important note",
      boardNote:
        "Subject requirements can vary by university, scholarship route, and intended major. Always confirm the latest rule with your target school and the official CSCA site.",
      boardUpdated: "Last updated: 22 Mar 2026",
    },

    strip: [
      { label: "Math", value: "Usually mandatory" },
      { label: "Chinese", value: "Common for Chinese-taught programs" },
      { label: "Question type", value: "Mostly multiple-choice" },
      { label: "Paper language", value: "Math / Physics / Chemistry in EN or 中文" },
    ],

    roadmap: {
      pill: "How to read this page",
      title: "Start with direction, not panic",
      subtitle:
        "This page is structured like a route map: understand the exam, narrow your likely papers, check what each paper looks like, then choose how to prepare.",
      steps: [
        {
          index: "01",
          eyebrow: "Structure first",
          title: "Understand the four papers",
          desc:
            "CSCA revolves around Professional Chinese, Mathematics, Physics, and Chemistry — but most students will not take all four.",
        },
        {
          index: "02",
          eyebrow: "Match your application",
          title: "Check teaching language and major",
          desc:
            "Chinese-taught and English-taught programs often lead to different paper combinations, especially once your major is considered.",
        },
        {
          index: "03",
          eyebrow: "Reduce uncertainty",
          title: "Estimate your likely subject mix",
          desc:
            "Use the subject finder below as a practical planning shortcut before you start collecting materials randomly.",
        },
        {
          index: "04",
          eyebrow: "Move into preparation",
          title: "Choose the right support path",
          desc:
            "Once your likely combination is clear, decide whether self-study resources are enough or whether you need guided help.",
        },
      ],
    },

    finder: {
      pill: "Subject finder",
      title: "Which CSCA papers might you need?",
      subtitle:
        "Use this as a planning tool, not as a final official ruling. Your university’s latest admission notice should always be the final reference.",
      labels: {
        program: "Program language",
        track: "Intended major",
        timeline: "Your timeline",
        result: "Likely direction",
        subjects: "Most likely papers",
        why: "Why this usually happens",
        next: "Suggested next step",
      },
      programOptions: [
        { value: "english-taught", label: "English-taught" },
        { value: "chinese-taught", label: "Chinese-taught" },
      ] as { value: ProgramKey; label: string }[],
      trackOptions: [
        { value: "business", label: "Business / Humanities" },
        { value: "stem", label: "STEM / Engineering" },
        { value: "medicine", label: "Medicine / Life Sciences" },
      ] as { value: TrackKey; label: string }[],
      timelineOptions: [
        { value: "exploring", label: "Just exploring" },
        { value: "1-3-months", label: "1–3 months to prepare" },
        { value: "within-1-month", label: "Less than 1 month" },
      ] as { value: TimelineKey; label: string }[],
      results: {
        "english-taught": {
          business: {
            title: "English-taught business or humanities",
            subjects: ["math"],
            notes: [
              "Mathematics is the most common baseline paper for undergraduate applicants.",
              "Professional Chinese is often not required for fully English-taught pathways.",
            ],
          },
          stem: {
            title: "English-taught STEM or engineering",
            subjects: ["math", "physics"],
            notes: [
              "Math is usually the academic anchor paper.",
              "Physics is commonly requested for engineering, computing, and technical majors.",
            ],
          },
          medicine: {
            title: "English-taught medicine or life sciences",
            subjects: ["math", "chemistry"],
            notes: [
              "Math still appears frequently as a baseline paper.",
              "Chemistry is commonly relevant for medicine, pharmacy, biotech, and life-science routes.",
            ],
          },
        },
        "chinese-taught": {
          business: {
            title: "Chinese-taught business or humanities",
            subjects: ["chinese", "math"],
            notes: [
              "Chinese-taught applicants usually need the corresponding Professional Chinese paper.",
              "Math remains one of the most common academic readiness papers.",
            ],
          },
          stem: {
            title: "Chinese-taught STEM or engineering",
            subjects: ["chinese", "math", "physics"],
            notes: [
              "Chinese-taught STEM routes often combine Professional Chinese with foundational science testing.",
              "Physics is one of the most common additional papers for technical majors.",
            ],
          },
          medicine: {
            title: "Chinese-taught medicine or life sciences",
            subjects: ["chinese", "math", "chemistry"],
            notes: [
              "Chinese-taught health and life-science pathways often need Professional Chinese plus core academic papers.",
              "Chemistry commonly appears for medicine, pharmacy, biology, and materials-related majors.",
            ],
          },
        },
      } as Record<ProgramKey, Record<TrackKey, SubjectFinderResult>>,
      timelineActions: {
        exploring: {
          title: "Start by understanding the papers and browsing the subject pages before you commit to a heavy study plan.",
          cta: "Browse resources first",
          link: "/resources",
        },
        "1-3-months": {
          title: "You still have enough time to enter a more structured preparation rhythm and choose the tutoring format that suits you best.",
          cta: "Explore tutoring options",
          link: "/tutoring?timeline=1-3-months&from=csca-finder",
        },
        "within-1-month": {
          title: "At this stage, the priority is not more materials — it is sharper prioritisation and direct support to focus on what matters most.",
          cta: "Explore 1-to-1 tutoring",
          link: "/tutoring/one-to-one?timeline=within-1-month&from=csca-finder",
        },
      } as Record<TimelineKey, TimelineAction>,
    },

    papers: {
      pill: "Exam Structure",
      title: "What each paper usually looks like",
      subtitle:
        "Instead of showing four repetitive cards, this section works like a compact editorial brief so students can compare the papers more easily.",
      rows: [
        {
          key: "chinese" as SubjectKey,
          title: "Professional Chinese",
          who: "Usually for Chinese-taught applicants",
          language: "Chinese only",
          duration: "90 min",
          questions: "80 MCQ",
          scorerange: "0-100%",
          note: "Commonly split into Humanities Chinese and STEM Chinese according to intended major.",
        },
        {
          key: "math" as SubjectKey,
          title: "Mathematics",
          who: "Most common baseline paper",
          language: "Chinese / English",
          duration: "60 min",
          questions: "48 MCQ",
          scorerange: "0-100%",
          note: "Often the first paper students should understand clearly, no matter the major.",
        },
        {
          key: "physics" as SubjectKey,
          title: "Physics",
          who: "Often needed for engineering or technical majors",
          language: "Chinese / English",
          duration: "60 min",
          questions: "48 MCQ",
          scorerange: "0-100%",
          note: "Frequently relevant for engineering, computing, physics, and broader technical pathways.",
        },
        {
          key: "chemistry" as SubjectKey,
          title: "Chemistry",
          who: "Often needed for medicine or life-science tracks",
          language: "Chinese / English",
          duration: "60 min",
          questions: "48 MCQ",
          scorerange: "0-100%",
          note: "Common for medicine, pharmacy, biology, biotech, and materials-related routes.",
        },
      ],
    },

    format: {
      pill: "Exam format",
      title: "A few details worth knowing",
      items: [
        {
          label: "Testing modes",
          value: "Home-based, computer-based, or paper-based depending on the session and centre.",
        },
        {
          label: "Score release",
          value: "Home-based and computer-based results are usually faster; paper-based results can take longer.",
        },
        {
          label: "Mindset",
          value: "The biggest early mistake is often confusion — not difficulty. Clarify your subject path before you overload yourself.",
        },
      ],
    },

    mistakes: {
      pill: "Common mistakes",
      title: "What many students misunderstand at first",
      items: [
        {
          title: "Assuming everyone takes all four papers",
          desc:
            "Most students do not need the exact same combination. The final subject set depends on teaching language, major, and university rules.",
        },
        {
          title: "Choosing materials before confirming the subject mix",
          desc:
            "This often wastes time. Confirm the requirement logic first, then choose resources and mock practice more intelligently.",
        },
        {
          title: "Ignoring the registration window",
          desc:
            "Because CSCA runs in sessions, knowing the next registration dates matters almost as much as knowing the syllabus.",
        },
        {
          title: "Preparing without a timeline strategy",
          desc:
            "A student with three months left should revise very differently from someone preparing in the final few weeks.",
        },
      ],
    },

    routes: {
      title: "Choose the path that fits you now",
      subtitle:
        "Some students mainly need clarity and materials. Others need a shorter, more guided path. Pick the route that matches your situation.",
      self: {
        eyebrow: "Route A",
        title: "I mostly need resources and direction",
        desc:
          "Start with the subject pages, sample materials, and a more focused self-study plan once your paper mix is clear.",
        cta: "Explore resources",
        link: "/resources",
      },
      guided: {
        eyebrow: "Route B",
        title: "I need a clearer prep path or support",
        desc:
          "Best for students with uneven foundations, limited time, or uncertainty about how to prioritise effectively.",
        cta: "Talk to us",
        link: "/contact?intent=csca-guidance",
      },
    },
  },

  zh: {
    metaTitle: "CSCA指南 - PrepPals",
    hero: {
      pill: "CSCA 指南",
      title: "CSCA——来华留学本科入学学业水平测试",
      subtitle:
        "给国际学生清晰的备考指南：先了解考试，再判断自己大概率要考哪些科目，最后决定下一步怎么准备。",
      primary: "查看我可能需要的科目",
      secondary: "浏览考试结构",
      boardTitle: "下一场考试提醒",
      boardStatus: "已更新",
      boardDateLabel: "下一场官方考试",
      boardDate: "2026 年 4 月 25 日",
      boardTimezone: "北京时间 · 官方安排",
      boardItems: [
        { label: "报名时间", value: "4 月 1 日 – 4 月 9 日 12:00" },
        { label: "考试频率", value: "每年 5 场" },
        { label: "考试形式", value: "线上 + 考点" },
        { label: "成绩公布", value: "约 7–14 个工作日" },
      ],
      boardNoteTitle: "重要提醒",
      boardNote:
        "不同学校、奖学金项目、专业方向的科目要求会不一样。最终仍需以目标院校最新招生说明和 CSCA 官网为准。",
      boardUpdated: "最后更新：2026 年 3 月 24 日",
    },

    strip: [
      { label: "数学", value: "多数专业必考" },
      { label: "中文", value: "中文授课专业通常需要" },
      { label: "题型", value: "以选择题为主" },
      { label: "试卷语言", value: "数学 / 物理 / 化学可选英文或中文" },
    ],

    roadmap: {
      pill: "如何使用这一页",
      title: "先弄清方向，再开始备考",
      subtitle:
        "这页不是单纯的考试介绍，而是一张路线图：先看考试结构，再判断自己需要考哪些科目，最后决定如何开始准备。",
      steps: [
        {
          index: "01",
          eyebrow: "先看结构",
          title: "先了解四张试卷",
          desc:
            "CSCA 主要考专业中文、数学、物理、化学四门科目，但大多数学生并不需要四门全考。",
        },
        {
          index: "02",
          eyebrow: "匹配申请方向",
          title: "先看授课语言和专业类别",
          desc:
            "中文授课和英文授课往往对应不同的科目组合，专业方向也会进一步影响要求。",
        },
        {
          index: "03",
          eyebrow: "缩小考试范围",
          title: "先估计自己可能要考什么",
          desc:
            "先用下方的科目判断器做一个大致判断，再去找对应资料，会比盲目搜集材料更有效。",
        },
        {
          index: "04",
          eyebrow: "进入备考",
          title: "再决定要不要额外的备考辅助",
          desc:
            "当你大致知道自己的科目组合后，就可以判断自学是否足够，还是需要更明确的辅导方式。",
        },
      ],
    },

    finder: {
      pill: "科目判断器",
      title: "你可能需要考哪些 CSCA 科目？",
      subtitle:
        "这里更适合作为备考规划工具，不是最终官方结论。最终仍要以目标学校最新招生要求为准。",
      labels: {
        program: "授课语言",
        track: "目标专业方向",
        timeline: "你的备考时间",
        result: "推测方向",
        subjects: "可能需要的科目",
        why: "为什么",
        next: "下一步建议",
      },
      programOptions: [
        { value: "english-taught", label: "英文授课" },
        { value: "chinese-taught", label: "中文授课" },
      ] as { value: ProgramKey; label: string }[],
      trackOptions: [
        { value: "business", label: "商科 / 人文" },
        { value: "stem", label: "理工 / 工程" },
        { value: "medicine", label: "医学 / 生命科学" },
      ] as { value: TrackKey; label: string }[],
      timelineOptions: [
        { value: "exploring", label: "刚开始了解" },
        { value: "1-3-months", label: "还有 1–3 个月" },
        { value: "within-1-month", label: "不到 1 个月" },
      ] as { value: TimelineKey; label: string }[],
      results: {
        "english-taught": {
          business: {
            title: "英文授课商科或人文方向",
            subjects: ["math"],
            notes: [
              "数学是本科申请中最常见的基础科目。",
              "如果选择全英文授课，通常不需要考专业中文。",
            ],
          },
          stem: {
            title: "英文授课理工或工程方向",
            subjects: ["math", "physics"],
            notes: [
              "数学通常仍然是核心基础科目。",
              "工程、计算机和技术类专业通常会要求考物理。",
            ],
          },
          medicine: {
            title: "英文授课医学或生命科学方向",
            subjects: ["math", "chemistry"],
            notes: [
              "数学通常仍会作为基础学术能力科目出现。",
              "医学、药学、生物技术和生命科学方向通常需要考化学。",
            ],
          },
        },
        "chinese-taught": {
          business: {
            title: "中文授课商科或人文方向",
            subjects: ["chinese", "math"],
            notes: [
              "中文授课项目通常会要求对应方向的专业中文。",
              "数学依然是最常见的基础学术科目之一。",
            ],
          },
          stem: {
            title: "中文授课理工或工程方向",
            subjects: ["chinese", "math", "physics"],
            notes: [
              "中文授课理工方向往往会把专业中文和基础理科能力一起考察。",
              "技术类专业中，物理是最常见的附加科目之一。",
            ],
          },
          medicine: {
            title: "中文授课医学或生命科学方向",
            subjects: ["chinese", "math", "chemistry"],
            notes: [
              "中文授课的医学生命科学方向通常需要专业中文加核心学术科目。",
              "医学、药学、生物和材料等方向中，化学很常见。",
            ],
          },
        },
      } as Record<ProgramKey, Record<TrackKey, SubjectFinderResult>>,
      timelineActions: {
        exploring: {
          title: "先理解考试结构，再看对应科目的资源，会比一开始就堆资料更有效。",
          cta: "先看资源",
          link: "/resources",
        },
        "1-3-months": {
          title: "还有时间系统备考。先看看哪种辅导方式更适合你。",
          cta: "查看辅导方式",
          link: "/tutoring?timeline=1-3-months&from=csca-finder",
        },
        "within-1-month": {
          title: "这个阶段可能更需要的是更清晰的 1 对 1 辅导，以及更直接的针对性支持，而不是继续不断换资料。",
          cta: "查看 1 对 1 辅导",
          link: "/tutoring/one-to-one?timeline=within-1-month&from=csca-finder",
        },
      } as Record<TimelineKey, TimelineAction>,
    },

    papers: {
      pill: "试卷结构",
      title: "各科试卷通常是怎么样的",
      subtitle:
        "快速对比四门科目的区别，一目了然。",
      rows: [
        {
          key: "chinese" as SubjectKey,
          title: "专业中文",
          who: "通常对应中文授课申请者",
          language: "仅中文",
          duration: "90 分钟",
          questions: "80 道选择题",
          scorerange: "0-100分",
          note: "通常会区分文科中文和理工中文，按申请方向选择。",
        },
        {
          key: "math" as SubjectKey,
          title: "数学",
          who: "最常见的基础科目",
          language: "中文 / 英文",
          duration: "60 分钟",
          questions: "48 道选择题",
          scorerange: "0-100分",
          note: "无论专业是什么，通常都值得最先把数学要求看清楚。",
        },
        {
          key: "physics" as SubjectKey,
          title: "物理",
          who: "理工、工程技术方向较常见",
          language: "中文 / 英文",
          duration: "60 分钟",
          questions: "48 道选择题",
          scorerange: "0-100分",
          note: "工程、计算机、物理以及更广的技术类专业常考。",
        },
        {
          key: "chemistry" as SubjectKey,
          title: "化学",
          who: "医学、生命科学方向较常见",
          language: "中文 / 英文",
          duration: "60 分钟",
          questions: "48 道选择题",
          scorerange: "0-100分",
          note: "医学、药学、生物技术、生物、材料等方向常考。",
        },
      ],
    },

    format: {
      pill: "考试形式",
      title: "还有几件很值得提前知道的事",
      items: [
        {
          label: "考试模式",
          value: "根据场次和考点情况来定，可能是居家线上、机考或纸笔考试。",
        },
        {
          label: "出分节奏",
          value: "线上和机考通常更快，纸笔考试一般会更久一些。",
        },
        {
          label: "常见问题",
          value: "很多学生前期最大的困难并不是题难，而是不知道自己到底该怎么开始。先理清备考思路更重要。",
        },
      ],
    },

    mistakes: {
      pill: "常见误区",
      title: "很多学生一开始都会误会的地方",
      items: [
        {
          title: "以为所有人都要考四门",
          desc:
            "大多数学生的科目组合并不完全一样，最终仍取决于授课语言、专业方向和学校要求。",
        },
        {
          title: "还没确认科目就先疯狂找资料",
          desc:
            "这样很容易浪费时间。先想清楚需要考什么，再有针对性地找资源和做题会更高效。",
        },
        {
          title: "忽视报名时间",
          desc:
            "CSCA 是分场次进行的，错过一场就要等下一场。关注下一场的报名时间几乎和看考试大纲一样重要。",
        },
        {
          title: "不根据剩余时间调整策略",
          desc:
            "还有三个月和只剩几周，复习方式应该完全不一样。",
        },
      ],
    },

    routes: {
      title: "选择现在更适合你的路径",
      subtitle:
        "有些学生主要缺的是方向和资料，有些学生更需要一个更短、更明确的备考路径。选更适合你当前状态的那条。",
      self: {
        eyebrow: "自学为主",
        title: "我主要需要资源和方向",
        desc:
          "先看科目介绍、样例资料，按明确的自学方式走。当你的科目组合更明确之后，自学效率会更高。",
        cta: "浏览资源",
        link: "/resources",
      },
      guided: {
        eyebrow: "需要指导",
        title: "我需要更清晰的备考建议或支持",
        desc:
          "更适合基础不均衡、时间紧、或者不知道如何优先安排复习内容的学生。",
        cta: "联系我们",
        link: "/contact?intent=csca-guidance",
      },
    },
  },
} as const;

export const getCSCAContent = (lang: Lang) =>
  lang === "zh" ? cscaContent.zh : cscaContent.en;
