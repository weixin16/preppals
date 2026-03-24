import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BookOpen,
  FileText,
  BarChart3,
  Layers3,
  Sparkles,
  Instagram,
  BookHeart,
  ArrowUpRight,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import { HERO_STYLES } from "../constants";
import { Language } from "../types";
import { getContactPageContent } from "../content/contactContent";

const ResourcesOverview: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const contact = getContactPageContent(validLang);

  const INSTAGRAM_LINK = "https://www.instagram.com/csca_preppals/";

  const copy = {
    en: {
      title: "Resources",
      subtitle:
        "A cleaner, more structured PrepPals resource hub is on the way. Many of these materials are already being shared on our Instagram , and the full website version is now being organized into a clearer subject-based library.",
      eyebrow: "PrepPals Library",
      badge: "Coming soon",
      sectionTitle: "What will be added here",
      sectionSub:
        "We’re building this section carefully so students can find the right materials faster, not get overwhelmed by too much at once.",
      items: [
        {
          icon: BookOpen,
          title: "Subject syllabi & key topic maps",
          desc: "A clearer starting point for Math, Physics, Chemistry, and Chinese.",
        },
        {
          icon: BarChart3,
          title: "Question-type structure by subject",
          desc: "A more visual way to understand how each subject is commonly tested.",
        },
        {
          icon: FileText,
          title: "Recall questions & revision packs",
          desc: "Selected recall-style materials and worked solutions for more focused practice.",
        },
        {
          icon: Layers3,
          title: "Exam intel panorama packs",
          desc: "Structured packs that combine topic weight, format observations, and practical study direction.",
        },
      ],
      noteTitle: "For now, you can still find updates here",
      noteText:
        "Many of the resource types mentioned above are already being shared on our Instagram, including prep updates, study notes, and selected subject content, while the full website hub is still being organized.",
      instagram: "Go to Instagram",
      redNote: "Go to Red Note",
      footerNote:
        "Subject subpages can stay online as placeholder pages for now, or you can temporarily redirect them back to this overview page.",
    },
    zh: {
      title: "学习资源",
      subtitle:
        "我们正在整理一个更清晰、更系统的 PrepPals 资源中心。其实其中不少备考内容已经在 Instagram 持续更新，网站这边则会进一步整理成更完整、更方便查找的分科资源库。",
      eyebrow: "PrepPals 资源库",
      badge: "即将上线",
      sectionTitle: "这里之后会有什么",
      sectionSub:
        "我们希望这个版块不是单纯堆资料，而是让同学更快找到真正需要的内容。",
      items: [
        {
          icon: BookOpen,
          title: "各科考纲与重点模块整理",
          desc: "帮助你更快建立数学、物理、化学、中文的复习框架。",
        },
        {
          icon: BarChart3,
          title: "各科题型结构与考查方式",
          desc: "更直观地了解每一科通常怎么考、重点落在哪里。",
        },
        {
          icon: FileText,
          title: "各科回忆题与解析资料",
          desc: "提供更贴近真实考试感觉的回忆题与更有方向的练习材料。",
        },
        {
          icon: Layers3,
          title: "各科考试全景包",
          desc: "把题型观察、模块权重和复习方向整理成更完整的资料包。",
        },
      ],
      noteTitle: "在这之前，你也可以先看这里",
      noteText:
        "上面提到的不少内容类型，其实我们已经在 Instagram 持续发布了，包括备考内容、学习笔记和部分分科资料；只是网站版的完整资源中心还在整理中。",
      instagram: "前往 Instagram",
      redNote: "前往小红书",
      footerNote:
        "分科页目前也可以先统一做成占位页，或者暂时全部跳回这个总览页。",
    },
  }[validLang];

  useEffect(() => {
    document.title = `${copy.title} - PrepPals`;
    window.scrollTo(0, 0);
  }, [copy.title]);

  return (
    <div className="font-sans text-navy-950 bg-white">
      <div
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
        style={{ background: HERO_STYLES.resources.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-navy-900/10 text-navy-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles size={14} className="text-coral-500" />
            <span>{copy.eyebrow}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-950 mb-6 leading-[1.1]">
            {copy.title}
          </h1>

          <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto leading-relaxed font-medium">
            {copy.subtitle}
          </p>
        </div>

        <HeroCurve fillColor={HERO_STYLES.resources.curveFill} />
        <div className="pointer-events-none absolute -top-20 -right-20 w-96 h-96 bg-soft-orange/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="bg-white py-16 md:py-24 relative z-10 border-t border-navy-900/5">
        <Section noPadding>
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] border border-navy-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,250,255,0.98)_100%)] p-8 md:p-12 shadow-[0_24px_60px_rgba(12,27,71,0.08)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-coral-300 via-blue-200 to-cream-200" />

              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-600 text-[15px] font-bold uppercase tracking-wider mb-4 border border-coral-100">
                  {copy.badge}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                  {copy.sectionTitle}
                </h2>
                <p className="text-muted text-lg max-w-3xl mx-auto">
                  {copy.sectionSub}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {copy.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/90 rounded-3xl border border-navy-100 p-6 md:p-7 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-900 flex items-center justify-center mb-5">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-navy-900/65 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mt-16 mx-auto rounded-[2rem] border border-gray-100 shadow-soft p-8 md:p-12 text-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(247,250,255,0.98)_100%)] p-8 md:p-12 shadow-[0_24px_60px_rgba(12,27,71,0.08)]">
            <div className="absolute top-0 right-0 w-72 h-72 bg-coral-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-950 mb-4">
                {copy.noteTitle}
              </h2>
              <p className="text-muted text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                {copy.noteText}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy-900 text-white font-bold hover:bg-navy-800 transition-colors"
                >
                  <Instagram size={18} />
                  {copy.instagram}
                  <ArrowUpRight size={16} />
                </a>

                {/* <a
                  href={redNoteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-navy-200 text-navy-900 font-bold hover:bg-navy-50 transition-colors"
                >
                  <BookHeart size={18} />
                  {copy.redNote}
                  <ArrowUpRight size={16} />
                </a> */}
              </div>

              {/* <p className="text-sm text-muted mt-8">{copy.footerNote}</p> */}
            </div>
          </div>
        </Section>
      </div>

    </div>
  );
};

export default ResourcesOverview;
