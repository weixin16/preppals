import { Language } from "../types";
import { getWhatsAppHref } from "../utils/whatsapp";

export const getContactPageContent = (lang: Language) =>
  ({
    en: {
      metaTitle: "Contact Us - PrepPals",
      channels: [
        {
          key: "whatsapp",
          title: "WhatsApp",
          subtitle: "Fastest way to reach us",
          href: getWhatsAppHref("general", "en"),
          tone: "whatsapp",
        },
        {
          key: "instagram",
          title: "Instagram",
          subtitle: "@csca_preppals",
          href: "https://www.instagram.com/csca_preppals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          tone: "instagram",
        },
        {
          key: "email",
          title: "Email",
          subtitle: "preppals5@gmail.com",
          href: "mailto:preppals5@gmail.com",
          tone: "email",
        },
        // {
        //   key: "xiaohongshu",
        //   title: "Red Note",
        //   subtitle: "@CSCA PrepPals",
        //   href: "https://www.xiaohongshu.com/",
        //   tone: "xiaohongshu",
        // },
      ],
      submitSuccess:
        "Thanks! Your request has been sent. We’ll follow up soon.",
      submitError:
        "Something went wrong while sending your request. Please try again or contact us directly on WhatsApp.",
      missingBackend:
        "Add VITE_CONTACT_FORM_URL to connect this form to Google Sheets.",
    },

    zh: {
      metaTitle: "联系我们 - PrepPals",
      channels: [
        {
          key: "whatsapp",
          title: "WhatsApp",
          subtitle: "最快联系到我们的方式",
          href: getWhatsAppHref("general", "zh"),
          tone: "whatsapp",
        },
        {
          key: "instagram",
          title: "Instagram",
          subtitle: "@csca_preppals",
          href: "https://www.instagram.com/csca_preppals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          tone: "instagram",
        },
        {
          key: "email",
          title: "邮箱",
          subtitle: "preppals5@gmail.com",
          href: "mailto:preppals5@gmail.com",
          tone: "email",
        },
        // {
        //   key: "xiaohongshu",
        //   title: "小红书",
        //   subtitle: "@CSCA PrepPals",
        //   href: "https://www.xiaohongshu.com/",
        //   tone: "xiaohongshu",
        // },
      ],
      submitSuccess: "已成功提交，我们会尽快联系你。",
      submitError:
        "提交时出现问题，请稍后再试，或直接通过 WhatsApp 联系我们。",
      missingBackend: "请先配置 VITE_CONTACT_FORM_URL，把表单连接到 Google Sheets。",
    },
  })[lang];