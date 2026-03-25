import { Language } from "../types";

type DetailRow = {
  label: string;
  value: string;
};

type OverviewPoint = {
  title: string;
  desc: string;
};

type OverviewContent = {
  eyebrow: string;
  title: string;
  lead: string;
  points: OverviewPoint[];
  asideTitle: string;
  asideList: string[];
};

type ResultCard = {
  subject: string;
  language: string;
  score: string;
};

type ResultsContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  averageLabel: string;
  average: string;
  averageSuffix: string;
  updated: string;
  cards: ResultCard[];
  disclaimer: string;
};

type FinalCtaContent = {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

type TutoringClassContent = {
  breadcrumbParent: string;
  breadcrumbCurrent: string;
  title1: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  detailsTitle: string;
  detailsIntro: string;
  detailsCtaLabel: string;
  detailsWhatsappKey: "stemClasses" | "chineseClasses";
  detailRows: DetailRow[];
  overview: OverviewContent;
  results?: ResultsContent;
  finalCta: FinalCtaContent;
};

type OneOnOnePainPoint = {
  title: string;
};

type OneOnOneStage = {
  stage: string;
  title: string;
  desc: string;
  number: string;
};

type OneOnOneAddOn = {
  label: string;
  icon: "focus" | "plan" | "feedback" | "flexible";
};

type OneOnOneContent = {
  breadcrumbParent: string;
  breadcrumbCurrent: string;

  categoryLine: string;
  title: string;
  subtitle: string;

  heroLinkLabel: string;
  heroLinkHref: string;

  painTitle: string;
  painIntro: string;
  painPoints: OneOnOnePainPoint[];

  processBadge: string;
  processTitle: string;
  processSubtitle: string;
  stages: OneOnOneStage[];

  addOnsTitle: string;
  addOnsSubtitle: string;
  addOnsGrid: OneOnOneAddOn[];
  addOnsList: string[];

  ctaLabel: string;
  ctaHref: string;

  finalCtaTitle: string;
  finalCtaSubtitle: string;
  finalSecondaryLabel: string;
  finalSecondaryHref: string;
};

const isChineseTrack = (type: string) => type === "chinese-classes";

export const getTutoringClassContent = (
  lang: Language,
  type: string,
): TutoringClassContent => {
  const chineseTrack = isChineseTrack(type);

  if (lang === "zh") {
    return chineseTrack
      ? {
          breadcrumbParent: "补习班",
          breadcrumbCurrent: "专业中文系统学习班",
          title1: "PrepPals CSCA",
          title: "专业中文系统学习班",
          subtitle:
            "分理科中文与文科中文，小班制、高互动。包含模拟考、讲义资料与作业批改，适合希望在更小班环境中得到持续反馈的学生。",
          ctaLabel: "咨询专业中文系统学习班",
          ctaHref: `/${lang}/contact?intent=chinese-classes`,
          detailsTitle: "课程结构与安排",
          detailsIntro: "用更清晰的方式快速了解专业中文系统学习班的基本安排。",
          detailsCtaLabel: "咨询报名费用与名额",
          detailsWhatsappKey: "chineseClasses",
          detailRows: [
            { label: "班级容量", value: "4–5 人" },
            { label: "总课时", value: "28 小时" },
            { label: "上课次数", value: "14 次 × 2 小时" },
            { label: "课程方向", value: "理科中文 / 文科中文" },
            { label: "课程包含", value: "直播课、模拟考、讲义资料、作业批改" },
          ],
          overview: {
            eyebrow: "为什么选择小班制",
            title: "中文科目，更需要互动",
            lead:
              "中文类科目中，表达方式、文章结构和答题组织很容易出问题。小班互动让老师能及时发现并帮你调整。",
            points: [
              {
                title: "更多课堂互动",
                desc: "小班制的环境让提问、讨论都能得到及时的反馈，不容易被大班节奏带着走。",
              },
              {
                title: "及时发现问题",
                desc: "老师能更清楚地看到你的表达、用词和语法上的问题。",
              },
              {
                title: "持续进步",
                desc: "模拟考、作业批改与课堂讲解，让你每个时候都知道自己哪里需要改进。",
              },
            ],
            asideTitle: "更适合这样的学生",
            asideList: [
              "想在小班环境中获得更多老师关注",
              "需要更及时的表达与答题反馈",
              "对专业中文还不熟悉，刚开始接触的学生",
            ],
          },
          finalCta: {
            title: "想先判断你更适合理科中文还是文科中文？",
            subtitle:
              "告诉我们你的科目方向、基础情况和考试时间线，我们会帮你判断更适合哪一种班型。",
            primaryLabel: "获取课程建议",
            primaryHref: `/${lang}/contact?intent=chinese-classes`,
            secondaryLabel: "联系我们",
            secondaryHref: `/${lang}/contact?intent=chinese-classes`,
          },
        }
      : {
          breadcrumbParent: "补习班",
          breadcrumbCurrent: "理科系统学习班",
          title1: "PrepPals CSCA ",
          title: "理科系统学习班",
          subtitle:
            "数学、物理、化学的系统化学习，适合希望建立清晰复习方式、掌握高频题型并提升速度与准确率的学生。",
          ctaLabel: "咨询理科系统学习班",
          ctaHref: `/${lang}/contact?intent=stem-classes`,
          detailsTitle: "课程结构与安排",
          detailsIntro: "用更清晰的方式快速了解理科系统学习班的基本安排。",
          detailsCtaLabel: "咨询报名费用与名额",
          detailsWhatsappKey: "stemClasses",
          detailRows: [
            { label: "班级容量", value: "10–15 人" },
            { label: "总课时", value: "28 小时" },
            { label: "上课次数", value: "14 次 × 2 小时" },
            { label: "科目方向", value: "数学 / 物理 / 化学" },
            {
              label: "课程重点",
              value: "核心概念讲解、高频题型训练、思路梳理、速度与准确率提升",
            },
          ],
          overview: {
            eyebrow: "为什么这种方式更有效",
            title: "更有结构的备考推进方式",
            lead:
              "这类系统学习班更适合需要老师引导、而不是独自盲目刷题的学生。重点不只是讲知识点，而是帮助你建立更清晰的复习路径。",
            points: [
              {
                title: "更清楚的复习主线",
                desc: "把零散知识点串成更完整的复习框架，减少学了却不会用的感觉。",
              },
              {
                title: "高频题型重点训练",
                desc: "把时间花在真正常见、容易拉开差距的题型上，而不是平均分散的题目。",
              },
              {
                title: "速度与准确率一起提升",
                desc: "通过讲解、练习与思路梳理，让做题节奏与准确率一起提升。",
              },
            ],
            asideTitle: "这门班更适合谁",
            asideList: [
              "想要更系统的复习方式",
              "需要老师引导，推进节奏",
              "希望更清楚知道该优先复习什么",
            ],
          },
          results: {
            eyebrow: "真实结果",
            title: "学生成绩展示",
            subtitle:
              "以下为 PrepPals CSCA 数学系统学习班学员自愿分享的部分成绩记录。",
            averageLabel: "最新数学班平均分",
            average: "88.44",
            averageSuffix: "/100",
            updated: "更新于2026年3月",
            cards: [
              { subject: "数学", language: "中文", score: "97.5/100" },
              { subject: "数学", language: "中文", score: "92.5/100" },
              { subject: "数学", language: "中文", score: "92.5/100" },
              { subject: "数学", language: "中文", score: "87.5/100" },
              { subject: "数学", language: "中文", score: "87.5/100" },
              { subject: "数学", language: "英文", score: "100/100" },
            ],
            disclaimer: "成绩是已发生的结果，不是对未来的承诺。",
          },
          finalCta: {
            title: "还不确定理科系统学习班是否适合你？",
            subtitle:
              "告诉我们你的科目、当前基础和考试时间线，我们会帮你判断更适合系统学习班还是一对一私教补习。",
            primaryLabel: "咨询理科系统学习班",
            primaryHref: `/${lang}/contact?intent=stem-classes`,
            secondaryLabel: "联系我们",
            secondaryHref: `/${lang}/contact?intent=stem-classes`,
          },
        };
  }

  return chineseTrack
    ? {
        breadcrumbParent: "Tutoring",
        breadcrumbCurrent: "Professional Chinese Classes",
        title1: "PrepPals CSCA",
        title: "Professional Chinese Systematic Classes",
        subtitle:
          "High-interaction small-group classes for STEM Chinese and Humanities Chinese, with mock exams, class materials, and homework correction included.",
        ctaLabel: "Ask About Chinese Classes",
        ctaHref: `/${lang}/contact?intent=chinese-classes`,
        detailsTitle: "Course structure and format",
        detailsIntro:
          "A clearer view of how Professional Chinese systematic class is structured and delivered.",
        detailsCtaLabel: "Ask About Fees & Enrollment",
        detailsWhatsappKey: "chineseClasses",
        detailRows: [
          { label: "Class Size", value: "4–5 Students" },
          { label: "Total Duration", value: "28 Hours" },
          { label: "Sessions", value: "14 sessions × 2 hours" },
          { label: "Directions", value: "STEM Chinese / Humanities Chinese" },
          {
            label: "Includes",
            value: "Live classes, mock exams, class materials, homework correction",
          },
        ],
        overview: {
          eyebrow: "Why this method works",
          title: "A more interactive small-group format for Chinese subjects",
          lead:
            "Chinese subjects often benefit more from immediate feedback on expression, structure, and answer organization, which is why a smaller and more interactive class format works especially well here.",
          points: [
            {
              title: "More interaction during class",
              desc: "A smaller group creates more space for questions, discussion, and direct teacher follow-up.",
            },
            {
              title: "Expression issues are easier to spot",
              desc: "Teachers can more easily notice language use, answer structure, and clarity problems as they appear.",
            },
            {
              title: "Feedback continues beyond class",
              desc: "Mock exams, homework correction, and class teaching work together as one feedback loop.",
            },
          ],
          asideTitle: "Best suited for students who",
          asideList: [
            "want more teacher attention in a smaller class",
            "need more feedback on expression and answer quality",
            "are not yet sure whether STEM Chinese or Humanities Chinese fits better",
          ],
        },
        finalCta: {
          title: "Not sure whether STEM Chinese or Humanities Chinese fits you better?",
          subtitle:
            "Tell us your subject direction, current level, and exam timeline, and we can suggest the most suitable class path.",
          primaryLabel: "Get Class Advice",
          primaryHref: `/${lang}/contact?intent=chinese-classes`,
          secondaryLabel: "Contact Us",
          secondaryHref: `/${lang}/contact?intent=chinese-classes`,
        },
      }
    : {
        breadcrumbParent: "Tutoring",
        breadcrumbCurrent: "STEM Classes",
        title1: "PrepPals CSCA",
        title: "STEM Systematic Classes",
        subtitle:
          "Structured small-group classes for Mathematics, Physics, and Chemistry — designed for students who want a clearer revision path, stronger question-solving logic, and better speed and accuracy.",
        ctaLabel: "Ask About STEM Classes",
        ctaHref: `/${lang}/contact?intent=stem-classes`,
        detailsTitle: "Course structure and format",
        detailsIntro: "A clearer view of how STEM systematic class is structured and delivered.",
        detailsCtaLabel: "Ask About Fees & Enrollment",
        detailsWhatsappKey: "stemClasses",
        detailRows: [
          { label: "Class Size", value: "10–15 Students" },
          { label: "Total Duration", value: "28 Hours" },
          { label: "Sessions", value: "14 sessions × 2 hours" },
          { label: "Subjects", value: "Mathematics / Physics / Chemistry" },
          {
            label: "Focus",
            value:
              "Core concepts, high-frequency question training, method clarity, stronger speed and accuracy",
          },
        ],
        overview: {
          eyebrow: "Why this method works",
          title: "A more structured way to revise",
          lead:
            "Designed for students who do better with a clear teacher-led rhythm instead of revising blindly alone. The goal is not only to cover content, but to build a stronger and more effective revision path.",
          points: [
            {
              title: "Clearer revision structure",
              desc: "Connect scattered topics into a more organized revision framework.",
            },
            {
              title: "High-frequency question focus",
              desc: "Spend more time on the question types that matter most in actual exam.",
            },
            {
              title: "Better speed and accuracy",
              desc: "Use explanation, guided practice, and method breakdown to make performance more stable.",
            },
          ],
          asideTitle: "What this class is best for",
          asideList: [
            "students who want a more systematic revision path",
            "students who need teacher-led momentum",
            "students who want clearer practice priorities",
          ],
        },
        results: {
          eyebrow: "Proven Results",
          title: "Selected Student Score Snapshots",
          subtitle:
            "Real score records voluntarily shared by students from PrepPals CSCA Mathematics Systematic Classes. Only selected results are shown.",
          averageLabel: "Latest Mathematics Class Average",
          average: "88.44",
          averageSuffix: "/100",
          updated: "Latest selected update",
          cards: [
            { subject: "Mathematics", language: "Chinese", score: "97.5/100" },
            { subject: "Mathematics", language: "Chinese", score: "92.5/100" },
            { subject: "Mathematics", language: "Chinese", score: "92.5/100" },
            { subject: "Mathematics", language: "Chinese", score: "87.5/100" },
            { subject: "Mathematics", language: "Chinese", score: "87.5/100" },
            { subject: "Mathematics", language: "English", score: "100/100" },
          ],
          disclaimer:
            "Results are not promises — they are outcomes that have already happened.",
        },
        finalCta: {
          title: "Still not sure whether STEM Classes are right for you?",
          subtitle:
            "Tell us your subject, current level, and exam timeline, and we can suggest whether a systematic class or 1-on-1 tutoring is the better fit.",
          primaryLabel: "Ask About STEM Classes",
          primaryHref: `/${lang}/contact?intent=stem-classes`,
          secondaryLabel: "Contact Us",
          secondaryHref: `/${lang}/contact?intent=stem-classes`,
        },
      };
};

export const getTutoringOneOnOneContent = (
  lang: Language,
): OneOnOneContent => {
  if (lang === "zh") {
    return {
      breadcrumbParent: "补习班",
      breadcrumbCurrent: "一对一私教补习",

      categoryLine: "高阶定制辅导",
      title: "一对一私教补习",
      subtitle:
        "更聚焦、更高效、更定制化的私教补习方式，适合希望围绕个人弱项、时间线与目标更快推进的学生。",

      heroLinkLabel: "了解更多",
      heroLinkHref: "#private-support",

      painTitle: "你是不是也卡在这些地方？",
      painIntro:
        "如果你已经在准备 CSCA，但总觉得努力很多、推进却不够明显，一对一私教补习更适合用来处理这些真正卡住你的问题。",
      painPoints: [
        { title: "有些知识点一直搞不懂" },
        { title: "做题总卡在同一类题型" },
        { title: "明明很努力，但分数上不去" },
        { title: "时间不多了，却不知道该怎么高效冲刺" },
      ],

      processBadge: "高阶定制辅导",
      processTitle: "一对一私教补习",
      processSubtitle:
        "完全围绕你的弱项、时间线和目标来安排。适合需要更聚焦、更定制化的指导的学生。",
      stages: [
        {
          stage: "阶段 1",
          title: "了解情况",
          desc: "先了解你的基础、目标和当前最需要解决的问题。",
          number: "1",
        },
        {
          stage: "阶段 2",
          title: "定制方向",
          desc: "根据你的时间线、弱项与目标，确定更合适的辅导重点。",
          number: "2",
        },
        {
          stage: "阶段 3",
          title: "专属推进",
          desc: "围绕你的情况安排更有针对性的辅导节奏与训练内容。",
          number: "3",
        },
        {
          stage: "阶段 4",
          title: "高效冲刺",
          desc: "在更清晰的节奏下集中突破最影响得分的部分。",
          number: "4",
        },
      ],

      addOnsTitle: "一对一有什么不同？",
      addOnsSubtitle:
        "一对一不是把班课换成单独上课，而是把辅导真正建立在你的当前情况、时间线与目标之上。",
      addOnsGrid: [
        { label: "专属节奏推进", icon: "focus" },
        { label: "针对弱项强化", icon: "plan" },
        { label: "时间安排更灵活", icon: "flexible" },
        { label: "反馈更直接", icon: "feedback" },
      ],
      addOnsList: [
        "适合时间更紧张的学生",
        "适合问题更集中、更具体，需要针对性突破的学生",
        "适合希望获得专属为自己量身定制方案的学生",
      ],

      ctaLabel: "咨询一对一私教补习",
      ctaHref:
        "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20%E6%88%91%E6%83%B3%E5%92%A8%E8%AF%A2%E4%BD%A0%E4%BB%AC%E7%9A%84%20CSCA%20%E4%B8%80%E5%AF%B9%E4%B8%80%E7%A7%81%E6%95%99%E8%A1%A5%E4%B9%A0%E3%80%82%E5%8F%AF%E4%BB%A5%E5%8F%91%E6%88%91%E7%A7%91%E7%9B%AE%E5%AE%89%E6%8E%92%E3%80%81%E6%8A%A5%E5%90%8D%E8%B4%B9%E7%94%A8%E5%92%8C%E9%A2%84%E7%BA%A6%E6%96%B9%E5%BC%8F%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0",
      finalCtaTitle: "想先看看一对一私教补习是否适合你？",
      finalCtaSubtitle:
      "告诉我们你的科目、当前基础和考试时间线，我们会帮你判断最适合的辅导方向。",
      finalSecondaryLabel: "联系我们",
      finalSecondaryHref: `/${lang}/contact`,
    };
  }

  return {
    breadcrumbParent: "Tutoring",
    breadcrumbCurrent: "One-to-One Tutoring",

    categoryLine: "Premium 1-to-1 Support",
    title: "One-to-One Tutoring",
    subtitle:
      "A more focused and premium tutoring path  for students who need faster progress through targeted, fully personalized support.",

    heroLinkLabel: "Explore the service",
    heroLinkHref: "#private-support",

    painTitle: "Already preparing, but still feel stuck?",
    painIntro:
      "If your effort is going in but your progress still feels slow or unclear, one-to-one tutoring is often the more effective route for solving those specific bottlenecks.",
    painPoints: [
      { title: "Some topics still never fully click" },
      { title: "You keep getting stuck on the same question types" },
      { title: "You are putting in effort, but your scores are not improving" },
      { title: "Time is running out, and you are not sure how to revise effectively" },
    ],

    processBadge: "Premium Route",
    processTitle: "One-to-One Tutoring",
    processSubtitle:
      "A more focused, more effective way of studying for students who need flexibility, direct feedback, and support built around their own priorities.",
    stages: [
      {
        stage: "Stage 1",
        title: "Understanding",
        desc: "We first understand your current level, timeline, and biggest weak points.",
        number: "1",
      },
      {
        stage: "Stage 2",
        title: "Direction",
        desc: "We shape a more suitable studying approach based on your subjects, weak areas, and priorities.",
        number: "2",
      },
      {
        stage: "Stage 3",
        title: "Personalized Support",
        desc: "Tutoring is then built around your own pace, goals, and exam needs.",
        number: "3",
      },
      {
        stage: "Stage 4",
        title: "Acceleration",
        desc: "Move faster by focusing on the parts that matter most to your performance.",
        number: "4",
      },
    ],

    addOnsTitle: "Why it feels different from a normal class route",
    addOnsSubtitle:
      "One-to-one tutoring is not simply private lessons. It is a more premium studying path built around your actual situation.",
    addOnsGrid: [
      { label: "Private pacing", icon: "focus" },
      { label: "Targeted weak-point focus", icon: "plan" },
      { label: "Flexible scheduling", icon: "flexible" },
      { label: "More direct feedback", icon: "feedback" },
    ],
    addOnsList: [
      "Better for tighter timelines",
      "Better for more specific weak points",
      "Better for students who want a more tailored plan",
    ],

    ctaLabel: "Start One-to-One Consultation",
    ctaHref:
      "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20I%20am%20interested%20in%20your%20CSCA%20One-to-One%20Tutoring.%20Could%20you%20share%20the%20available%20subjects%2C%20fees%2C%20and%20booking%20details%20with%20me%3F&type=phone_number&app_absent=0",
    
    finalCtaTitle: "Want to see whether one-to-one tutoring is the right fit for you?",
    finalCtaSubtitle:
      "Tell us your subject, current level, and exam timeline, and we can suggest the most suitable next step.",
    finalSecondaryLabel: "Contact Us",
    finalSecondaryHref: `/${lang}/contact`,
  };
};
