import { Language } from "../types";

export const getLayoutPageContent = (lang: Language) =>
  ({
    en: {
      brandDescription:
        "Empowering international students to prepare for CSCA with clearer direction, practical resources, and structured support.",
      languageDesktop: "中文",
      languageMobile: "Switch to 中文",
      footerSections: [
        {
          title: "Home & Guide",
          links: [
            { label: "Home", path: `/${lang}` },
            { label: "CSCA Guide", path: `/${lang}/csca` },
          ],
        },
        {
          title: "PrepPals Resources",
          links: [
            { label: "Overview", path: `/${lang}/resources` },
            { label: "Mathematics", path: `/${lang}/resources/math` },
            { label: "Physics", path: `/${lang}/resources/physics` },
            { label: "Chemistry", path: `/${lang}/resources/chemistry` },
          ],
        },
        {
          title: "PrepPals Tutoring",
          links: [
            {
              label: "STEM System Class",
              path: `/${lang}/tutoring/stem-classes`,
            },
            {
              label: "Chinese System Class",
              path: `/${lang}/tutoring/chinese-classes`,
            },
            {
              label: "1-on-1 Private Tutoring",
              path: `/${lang}/tutoring/one-to-one`,
            },
          ],
        },
        {
          title: "More",
          links: [
            { label: "Blog", path: `/${lang}/blog` },
            { label: "About Us", path: `/${lang}/about` },
            { label: "Contact Us", path: `/${lang}/contact` },
          ],
        },
      ],
    },

    zh: {
      brandDescription:
        "帮助国际学生用更清晰的方向、实用的资源和结构化支持来准备 CSCA。",
      languageDesktop: "EN",
      languageMobile: "切换到 English",
      footerSections: [
        {
          title: "首页与指南",
          links: [
            { label: "首页", path: `/${lang}` },
            { label: "CSCA 指南", path: `/${lang}/csca` },
          ],
        },
        {
          title: "Preppals 学习资源",
          links: [
            { label: "资源概览", path: `/${lang}/resources` },
            { label: "数学", path: `/${lang}/resources/math` },
            { label: "物理", path: `/${lang}/resources/physics` },
            { label: "化学", path: `/${lang}/resources/chemistry` },
          ],
        },
        {
          title: "PrepPals 备考补习班",
          links: [
            {
              label: "理科系统学习班",
              path: `/${lang}/tutoring/stem-classes`,
            },
            {
              label: "专业中文系统学习班",
              path: `/${lang}/tutoring/chinese-classes`,
            },
            {
              label: "一对一私教补习",
              path: `/${lang}/tutoring/one-to-one`,
            },
          ],
        },
        {
          title: "更多信息",
          links: [
            { label: "博客", path: `/${lang}/blog` },
            { label: "关于我们", path: `/${lang}/about` },
            { label: "联系我们", path: `/${lang}/contact` },
          ],
        },
      ],
    },
  })[lang];