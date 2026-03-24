import { Language } from "../types";

export type TutoringOverviewCard = {
  key: "stem" | "chinese" | "oneOnOne";
  badge: string;
  title: string;
  desc: string;
  href: string;
  iconColor: "blue" | "green" | "orange";
};

export type SmallGroupTrack = {
  title: string;
  subtitle: string;
  meta: {
    label: string;
    value: string;
  }[];
  ctaLabel: string;
  href: string;
};

export type SmallGroupStructureRow = {
  week: string;
  title: string;
  hours: string;
};

export type OneOnOneDeliverable = {
  title: string;
  desc: string;
};

type CompareRecommendedLink = {
  label: string;
  href: string;
};

type CompareRow = {
  studentType: string;
  needs: string;
  recommendedLinks: CompareRecommendedLink[];
};

export type TutoringPageContent = {
  hero: {
    breadcrumb: string;
    title1: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };

  offer: {
    title: string;
    subtitle: string;
    cards: TutoringOverviewCard[];
  };

  smallGroup: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tracks: SmallGroupTrack[];
    structureTitle: string;
    structureRows: SmallGroupStructureRow[];
    outcomesTitle: string;
    outcomes: string[];
    cta: string;
    ctaHref: string;
  };

  oneOnOne: {
    badge: string;
    title: string;
    subtitle: string;
    deliverables: OneOnOneDeliverable[];
    subjectLine: string;
    cta: string;
    ctaHref: string;
  };

  compare: {
    title: string;
    headers: {
      studentType: string;
      needs: string;
      recommended: string;
    };
    rows: CompareRow[];
  };

  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
  };
};

export const getTutoringPageContent = (lang: Language): TutoringPageContent => {
  const isZh = lang === "zh";

  return isZh
    ? {
        hero: {
          breadcrumb: "备考补习班",
          title1: "PrepPals CSCA",
          title: "备考补习班概览",
          subtitle:
            "从理科系统学习班、专业中文系统学习班，到更高端、更定制化的一对一私教补习，找到最适合你当前阶段的备考方式。",
          primaryCta: "了解 系统学习班",
          primaryHref: "#systematic-classes",
          secondaryCta: "了解 一对一私教补习",
          secondaryHref: "#one-to-one",
        },

        offer: {
          title: "哪个补习班适合你？",
          subtitle: "三种不同的补习方式，对应不同基础、科目方向与备考节奏。",
          cards: [
            {
              key: "stem",
              badge: "小班制 · 系统推进",
              title: "理科系统学习班",
              desc: "面向数学、物理、化学的小班制课程，适合希望跟着课堂节奏系统推进、提升解题速度与准确率的学生。",
              href: `/${lang}/tutoring/stem-classes`,
              iconColor: "blue",
            },
            {
              key: "chinese",
              badge: "小班制 · 互动密集",
              title: "专业中文系统学习班",
              desc: "包括理科中文与文科中文，更强调互动、模拟考、讲义资料与作业批改。",
              href: `/${lang}/tutoring/chinese-classes`,
              iconColor: "green",
            },
            {
              key: "oneOnOne",
              badge: "高阶定制辅导",
              title: "一对一私教补习",
              desc: "更私密、更灵活、更个性化的高阶辅导路线，适合需要针对性支持和更直接反馈的学生。",
              href: `/${lang}/tutoring/one-to-one`,
              iconColor: "orange",
            },
          ],
        },

        smallGroup: {
          eyebrow: "系统学习班",
          title: "两种方向，按需选择",
          subtitle:
            "面向需要课堂节奏和在专业指导下系统化学习的学生。你可以根据科目方向选择理科系统学习班或专业中文系统学习班。",
          tracks: [
            {
              title: "理科系统学习班",
              subtitle: "数学、物理、化学",
              meta: [
                { label: "班级容量", value: "10–15 人" },
                { label: "总课时", value: "24 小时" },
                { label: "上课次数", value: "12 次 × 2 小时" },
              ],
              ctaLabel: "了解理科系统学习班",
              href: `/${lang}/tutoring/stem-classes`,
            },
            {
              title: "专业中文系统学习班",
              subtitle: "理科中文、文科中文",
              meta: [
                { label: "班级容量", value: "4–5 人" },
                { label: "总课时", value: "28 小时" },
                { label: "上课次数", value: "14 次 × 2 小时" },
              ],
              ctaLabel: "了解专业中文系统学习班",
              href: `/${lang}/tutoring/chinese-classes`,
            },
          ],
          structureTitle: "课程结构",
          structureRows: [
            { week: "Part 1", title: "核心概念梳理", hours: "6–8 小时" },
            { week: "Part 2", title: "高频题型训练", hours: "6–8 小时" },
            { week: "Part 3", title: "速度与准确率提升", hours: "6–8 小时" },
            { week: "Part 4", title: "模考与策略调整", hours: "4–6 小时" },
          ],
          outcomesTitle: "你会获得什么",
          outcomes: [
            "系统理解核心概念与高频考点",
            "提升解题速度与准确率",
            "更熟悉 CSCA 常见题型与问法",
            "在课堂节奏中更稳定地推进复习",
          ],
          cta: "了解系统学习班",
          ctaHref: `/${lang}/tutoring/stem-classes`,
        },

        oneOnOne: {
          badge: "你会获得什么",
          title: "真正围绕你个人情况设计的专属方案",
          subtitle:
            "这不是统一节奏的班课，而是围绕你的基础、弱项、考试时间线与目标来安排的 1 对 1 专属辅导方式。",
          deliverables: [
            {
              title: "按你当前基础制定学习计划",
              desc: "先看你的基础与时间线，再决定应该把时间放在哪里。",
            },
            {
              title: "针对弱项逐个突破",
              desc: "把最拖后腿的知识点和题型优先处理掉。",
            },
            {
              title: "高频考点重点强化",
              desc: "把时间花在更有可能影响得分的题型上。",
            },
            {
              title: "真题思路拆解 + 解题训练",
              desc: "不仅知道答案，还知道为什么这样做、下次怎么做。",
            },
          ],
          subjectLine: "可选科目包括：中文、数学、化学、物理。",
          cta: "了解 一对一私教补习",
          ctaHref: `/${lang}/tutoring/one-to-one`,
        },

        compare: {
          title: "我适合哪一种补习方式？",
          headers: {
            studentType: "你的情况",
            needs: "适合什么样的辅导",
            recommended: "推荐辅导方案",
          },
          rows: [
            {
              studentType: "需要系统的复习节奏",
              needs: "我希望跟着课堂节奏推进、建立更清晰的复习思路。",
              recommendedLinks: [
                {
                  label: "理科补习班",
                  href: `/${lang}/tutoring/stem-classes`,
                },
                {
                  label: "专业中文补习班",
                  href: `/${lang}/tutoring/chinese-classes`,
                },
              ],
            },
            {
              studentType: "需要学习专业中文",
              needs: "我希望学会中文、获得中文讲义资料和作业批改。",
              recommendedLinks: [
                {
                  label: "专业中文补习班",
                  href: `/${lang}/tutoring/chinese-classes`,
                },
              ],
            },
            {
              studentType: "时间更紧迫 / 我需要更个性化支持",
              needs: "我希望完全围绕自己的问题、时间线和目标来安排。",
              recommendedLinks: [
                {
                  label: "一对一私教补习",
                  href: `/${lang}/tutoring/one-to-one`,
                },
              ],
            },
          ],
        },

        finalCta: {
          title: "还不确定哪一种补习方式更适合你？",
          subtitle:
            "告诉我们你的科目方向、目前情况和备考时间线，我们会帮你判断更适合的下一步。",
          primary: "获取推荐方案",
          primaryHref:
            "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20%E6%88%91%E6%83%B3%E5%92%A8%E8%AF%A2%E4%BD%A0%E4%BB%AC%E7%9A%84%20CSCA%20%E8%A1%A5%E4%B9%A0%E7%8F%AD%E3%80%82%E5%8F%AF%E4%BB%A5%E6%A0%B9%E6%8D%AE%E6%88%91%E7%9A%84%E7%A7%91%E7%9B%AE%E6%96%B9%E5%90%91%E3%80%81%E7%9B%AE%E5%89%8D%E6%83%85%E5%86%B5%E5%92%8C%E5%A4%87%E8%80%83%E6%97%B6%E9%97%B4%E7%BA%BF%EF%BC%8C%E5%B8%AE%E6%88%91%E6%8E%A8%E8%8D%90%E6%9B%B4%E9%80%82%E5%90%88%E7%9A%84%E8%BE%85%E5%AF%BC%E6%96%B9%E5%BC%8F%E5%90%97%EF%BC%9F&type=phone_number&app_absent=0",
          secondary: "联系我们",
          secondaryHref:
            "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20I%20would%20like%20to%20learn%20more%20about%20your%20CSCA%20tutoring%20program.%20Could%20you%20share%20more%20details%20with%20me%3F&type=phone_number&app_absent=0",
        },
      }
    : {
        hero: {
          breadcrumb: "Tutoring",
          title1: "PrepPals CSCA",
          title: "Tutoring Overview",
          subtitle:
            "From STEM Classes and Professional Chinese Classes to more premium one-to-one tutoring session, start with the tutoring route that best matches your current stage.",
          primaryCta: "Explore Systematic Classes",
          primaryHref: "#systematic-classes",
          secondaryCta: "Explore One-to-One Tutoring",
          secondaryHref: "#one-to-one",
        },

        offer: {
          title: "What We Offer",
          subtitle:
            "Three different tutoring options for different subjects, foundations, and revision rhythms.",
          cards: [
            {
              key: "stem",
              badge: "Structured Revision",
              title: "STEM Classes",
              desc: "Small-group classes for Mathematics, Physics, and Chemistry, ideal for students who want a clearer class rhythm and stronger exam-focused practice.",
              href: `/${lang}/tutoring/stem-classes`,
              iconColor: "blue",
            },
            {
              key: "chinese",
              badge: "Smaller & More Intensive",
              title: "Professional Chinese Classes",
              desc: "Includes STEM Chinese and Humanities Chinese, with stronger interaction, mock exams, materials, and homework correction.",
              href: `/${lang}/tutoring/chinese-classes`,
              iconColor: "green",
            },
            {
              key: "oneOnOne",
              badge: "Premium Support",
              title: "One-to-One Tutoring",
              desc: "A more private, flexible, and personalized way of studying for students who need targeted help and more direct feedback.",
              href: `/${lang}/tutoring/one-to-one`,
              iconColor: "orange",
            },
          ],
        },

        smallGroup: {
          eyebrow: "Systematic Classes",
          title: "Systematic Class Overview",
          subtitle:
            "Designed for students who benefit from structure, teacher-led rhythm, and guided practice. Choose between STEM Classes and Professional Chinese Classes based on your subject path.",
          tracks: [
            {
              title: "STEM Classes",
              subtitle: "Mathematics, Physics, Chemistry",
              meta: [
                { label: "Class Size", value: "10–15 students" },
                { label: "Hours", value: "24 hours" },
                { label: "Sessions", value: "12 × 2 hours" },
              ],
              ctaLabel: "View STEM Classes Details",
              href: `/${lang}/tutoring/stem-classes`,
            },
            {
              title: "Professional Chinese Classes",
              subtitle: "STEM Chinese, Humanities Chinese",
              meta: [
                { label: "Class Size", value: "4–5 students" },
                { label: "Hours", value: "28 hours" },
                { label: "Sessions", value: "14 × 2 hours" },
              ],
              ctaLabel: "View Professional Chinese Classes Details",
              href: `/${lang}/tutoring/chinese-classes`,
            },
          ],
          structureTitle: "Class Structure Overview",
          structureRows: [
            { week: "Part 1", title: "Core Concepts Review", hours: "6–8 Hrs" },
            {
              week: "Part 2",
              title: "High-Frequency Question Practice",
              hours: "6–8 Hrs",
            },
            { week: "Part 3", title: "Speed & Accuracy Training", hours: "6–8 Hrs" },
            { week: "Part 4", title: "Mock & Strategy Refinement", hours: "4–6 Hrs" },
          ],
          outcomesTitle: "What You Will Achieve",
          outcomes: [
            "Build a clearer grasp of core concepts and high-frequency topics",
            "Improve speed and accuracy through guided practice",
            "Become more familiar with common CSCA question styles",
            "Move through revision with a stronger class rhythm",
          ],
          cta: "See Systematic Class Details",
          ctaHref: `/${lang}/tutoring/stem-classes`,
        },

        oneOnOne: {
          badge: "What you'll get",
          title: "A tutoring path built fully around your own needs",
          subtitle:
            "This is not a one-size-fits-all class format. Your tutoring is shaped around your current level, weak areas, exam timeline, and priorities.",
          deliverables: [
            {
              title: "A study plan tailored to your current level",
              desc: "Start with your actual situation and build from there.",
            },
            {
              title: "Focused sessions to fix your weak areas",
              desc: "Spend more time on the topics and question types that are holding you back.",
            },
            {
              title: "Reinforcement of high-frequency exam topics",
              desc: "Put effort into the content that matters most for actual exam performance.",
            },
            {
              title: "Past paper breakdown and problem-solving training",
              desc: "Learn not only what the answer is, but how to think through it more effectively.",
            },
          ],
          subjectLine: "Available for Chinese, Mathematics, Chemistry, and Physics.",
          cta: "Explore One-to-One Tutoring",
          ctaHref: `/${lang}/tutoring/one-to-one`,
        },

        compare: {
          title: "Which Tutoring Path Fits You?",
          headers: {
            studentType: "Student Type",
            needs: "Best For",
            recommended: "Recommended Route",
          },
          rows: [
            {
              studentType: "Needs Structure",
              needs: "Wants teacher-led rhythm, guided revision, and a clearer study structure.",
              recommendedLinks: [
                {
                  label: "STEM Classes",
                  href: `/${lang}/tutoring/stem-classes`,
                },
                {
                  label: "Professional Chinese Classes",
                  href: `/${lang}/tutoring/chinese-classes`,
                },
              ],
            },
            {
              studentType: "Needs Chinese Academic Support",
              needs: "Wants Chinese-taught support, materials, and homework correction.",
              recommendedLinks: [
                {
                  label: "Professional Chinese Classes",
                  href: `/${lang}/tutoring/chinese-classes`,
                },
              ],
            },
            {
              studentType: "Needs Flexibility / Personalization",
              needs: "Wants tutoring built around personal weak points, timeline, and goals.",
              recommendedLinks: [
                {
                  label: "One-to-One Tutoring",
                  href: `/${lang}/tutoring/one-to-one`,
                },
              ],
            },
          ],
        },

        finalCta: {
          title: "Not sure which tutoring path suits you best?",
          subtitle:
            "Tell us your subjects, current situation, and revision timeline — we’ll help you choose the most suitable next step.",
          primary: "Ask for a Recommendation",
          primaryHref:
            "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20I%20am%20interested%20in%20your%20CSCA%20tutoring%20program.%20Could%20you%20recommend%20the%20most%20suitable%20route%20based%20on%20my%20subjects%2C%20current%20situation%2C%20and%20revision%20timeline%3F&type=phone_number&app_absent=0",
          secondary: "Contact Us",
          secondaryHref:
            "https://api.whatsapp.com/send/?phone=8618813052817&text=Hi%20PrepPals!%20I%20would%20like%20to%20learn%20more%20about%20your%20CSCA%20tutoring%20program.%20Could%20you%20share%20more%20details%20with%20me%3F&type=phone_number&app_absent=0",
        },
      };
};
