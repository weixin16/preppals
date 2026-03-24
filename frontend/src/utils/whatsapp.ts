export type WhatsAppCtaKey =
  | "stemClasses"
  | "chineseClasses"
  | "oneToOne"
  | "general";

const WHATSAPP_PHONE = "8618813052817";

const messages = {
  en: {
    stemClasses:
      "Hi PrepPals! I am interested in your CSCA STEM systematic classes. Could you share the class schedule, fees, and enrollment details with me?",
    chineseClasses:
      "Hi PrepPals! I am interested in your CSCA Professional Chinese systematic classes. Could you share the class schedule, fees, and enrollment details with me?",
    oneToOne:
      "Hi PrepPals! I am interested in your CSCA One-to-One Tutoring. Could you share the available subjects, fees, and booking details with me?",
    general:
      "Hi PrepPals! I am interested in your CSCA tutoring program. Could you share more details with me?",
  },
  zh: {
    stemClasses:
      "Hi PrepPals! 我想咨询你们的 CSCA 理科系统学习班。可以发我课程安排、报名费用、上课时间和报名方式吗？",
    chineseClasses:
      "Hi PrepPals! 我想咨询你们的 CSCA 专业中文系统学习班。可以发我课程安排、报名费用、上课时间和报名方式吗？",
    oneToOne:
      "Hi PrepPals! 我想咨询你们的 CSCA 一对一私教补习。可以发我科目安排、报名费用和预约方式吗？",
    general:
      "Hi PrepPals! 我想咨询你们的 CSCA 补习班。可以发我更多详情吗？",
  },
} as const;

export const buildWhatsAppLink = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;

export const getWhatsAppHref = (
  key: WhatsAppCtaKey,
  lang: "en" | "zh" = "en"
) => buildWhatsAppLink(messages[lang][key]);