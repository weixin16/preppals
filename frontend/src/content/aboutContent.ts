import { Language } from "../types";

export const getAboutPageContent = (lang: Language) =>
  ({
    en: {
      metaTitle: "About Us - PrepPals",

      heroPill: "About PrepPals",
      heroTitle: "About Us",
      heroSubtitle:
        "PrepPals was built around one simple belief — no student should prepare for CSCA without direction, support, or a sense of community.",
      heroPrimary: "Join WhatsApp Group",
      heroSecondary: "Contact Us",
      whatsappLink:
        "https://chat.whatsapp.com/IhRFCNSJhhTBg9ZjdHsxrq?mode=wwc",

      story: {
        eyebrow: "Why we started",
        title: "We built the kind of support we wished we had.",
        lead: "PrepPals began with one simple idea: no student should have to prepare for CSCA alone.",
        body:
          "We’re a small team of international graduates who went through the same confusion ourselves — limited materials, unclear formats, and too much uncertainty about where to begin. PrepPals was created to make that journey feel more structured, more practical, and less lonely.",
      },

      challengesTitle: "What students often face",
      challenges: [
        "Scattered materials with no clear order of priority.",
        "Uncertainty about exam structure, topic weight, and where to begin.",
        "Studying alone without feedback, accountability, or peer support.",
      ],

      offer: {
        eyebrow: "What PrepPals offers",
        title: "More clarity, less guesswork.",
        items: [
          {
            key: "direction",
            title: "Clearer direction",
            text: "We help students understand what matters, what to focus on first, and how to move through preparation with a better sense of priority.",
          },
          {
            key: "structure",
            title: "Practical support",
            text: "From subject resources to tutoring options, we aim to make revision feel more organised, targeted, and realistic.",
          },
          {
            key: "community",
            title: "A sense of community",
            text: "Preparation feels lighter when you are not doing it alone. We want students to feel supported, not isolated.",
          },
        ],
      },

      mission: {
        eyebrow: "Our mission",
        text: "To help international students prepare for CSCA with confidence, clarity, and community.",
      },

      values: {
        eyebrow: "What we value",
        title: "The principles behind how we build PrepPals",
        items: [
          {
            key: "clarity",
            title: "Clarity",
            text: "We simplify what feels confusing and help students see a clearer next step.",
          },
          {
            key: "empathy",
            title: "Empathy",
            text: "We remember how overwhelming exam preparation can feel, especially without the right support.",
          },
          {
            key: "growth",
            title: "Growth",
            text: "We care about real learning, not just surface-level memorisation.",
          },
          {
            key: "togetherness",
            title: "Togetherness",
            text: "Because studying is easier when you have guidance, encouragement, and people beside you.",
          },
        ],
      },

      cta: {
        title: "Want to stay connected with other CSCA students?",
        text: "Join our WhatsApp group for updates, shared motivation, and a stronger sense of community — or send us a message if you need more specific help.",
        primary: "Join WhatsApp Group",
        secondary: "Send My Request",
      },
    },

    zh: {
      metaTitle: "关于我们 - PrepPals",

      heroPill: "关于 PrepPals",
      heroTitle: "关于我们",
      heroSubtitle:
        "PrepPals 的出发点很简单——我们相信，没有学生应该在缺少方向、支持和陪伴的情况下独自准备 CSCA。",
      heroPrimary: "加入 WhatsApp 群聊",
      heroSecondary: "联系我们",
      whatsappLink:
        "https://chat.whatsapp.com/IhRFCNSJhhTBg9ZjdHsxrq?mode=wwc",

      story: {
        eyebrow: "我们为什么开始做这件事",
        title: "我们做出了自己当初最希望拥有的备考支持。",
        lead: "PrepPals 的诞生源于一个很简单的想法：没有学生应该独自备考 CSCA。",
        body:
          "我们是一支由国际毕业生组成的小团队，也曾亲身经历过同样的困惑——资料零散、题型不清楚、备考方向不明确，也不知道该从哪里开始。PrepPals 的存在，就是希望把这段过程变得更有结构、更务实，也不再那么孤单。",
      },

      challengesTitle: "很多学生在备考时会遇到的问题",
      challenges: [
        "资料很多，但缺少清晰的优先顺序。",
        "不确定考试结构、考点权重，也不知道该先从哪里开始。",
        "一个人准备，没有反馈、没有监督，也缺少同伴支持。",
      ],

      offer: {
        eyebrow: "PrepPals 想提供什么",
        title: "更清晰的方向，更少的盲目摸索。",
        items: [
          {
            key: "direction",
            title: "更清晰的方向",
            text: "帮助学生判断什么更重要、应该先做什么，以及如何带着优先级去准备，而不是被零散信息带着走。",
          },
          {
            key: "structure",
            title: "更务实的支持",
            text: "从分科资源到辅导选项，我们希望让复习过程更有条理、更有针对性，也更贴近真实备考需要。",
          },
          {
            key: "community",
            title: "更有陪伴感的过程",
            text: "备考本来就不轻松，而有人一起准备，会让这件事变得更容易坚持，也更不容易陷入孤立感。",
          },
        ],
      },

      mission: {
        eyebrow: "我们的使命",
        text: "帮助国际学生以更强的自信、更清晰的方向和更有陪伴感的方式准备 CSCA。",
      },

      values: {
        eyebrow: "我们的价值观",
        title: "这些原则决定了我们如何做 PrepPals",
        items: [
          {
            key: "clarity",
            title: "清晰",
            text: "把复杂和混乱的内容整理得更易理解，让学生看见明确的下一步。",
          },
          {
            key: "empathy",
            title: "共情",
            text: "我们记得备考时那种压力和迷茫，所以更在意学生真正需要的支持。",
          },
          {
            key: "growth",
            title: "成长",
            text: "我们希望学生获得真实的理解和进步，而不只是表面的记忆。",
          },
          {
            key: "togetherness",
            title: "陪伴",
            text: "因为有人指导、有人鼓励、有人一起走，会让学习这件事轻松很多。",
          },
        ],
      },

      cta: {
        title: "想和其他 CSCA 学生保持连接吗？",
        text: "欢迎加入我们的 WhatsApp 群聊，获取更新、学习动力和更多陪伴感；如果你有更具体的问题，也可以直接联系我们。",
        primary: "加入 WhatsApp 群聊",
        secondary: "发送我的需求",
      },
    },
  })[lang];