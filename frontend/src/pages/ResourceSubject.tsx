import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronRight,
  Sparkles,
  Instagram,
  BookHeart,
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import HeroCurve from "../components/HeroCurve";
import Section from "../components/Section";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";
import { getContactPageContent } from "../content/contactContent";

type SubjectId = "math" | "physics" | "chemistry" | "chinese";

const ResourceSubject: React.FC = () => {
  const { lang = "en", subject = "math" } = useParams<{
    lang: string;
    subject: SubjectId;
  }>();

  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const validSubject: SubjectId =
    subject === "math" ||
    subject === "physics" ||
    subject === "chemistry" ||
    subject === "chinese"
      ? subject
      : "math";

  const contact = getContactPageContent(validLang);
  const instagramHref =
    contact.channels.find((item) => item.key === "instagram")?.href ||
    "https://www.instagram.com/csca_preppals/";
  const redNoteHref =
    contact.channels.find((item) => item.key === "xiaohongshu")?.href ||
    "https://www.xiaohongshu.com/";

  const labels = {
    en: {
      math: "Mathematics",
      physics: "Physics",
      chemistry: "Chemistry",
      chinese: "Chinese",
      crumb: "Resources",
      title: "Resources for this subject are coming soon",
      subtitle:
        "We’re still organizing this subject page into a clearer website version. Many of the related prep materials and updates are already being shared on our Instagram.",
      badge: "In progress",
      cardTitle: "What to expect later",
      points: [
        "Topic maps and syllabus guidance",
        "Question-type breakdowns",
        "Recall-style practice materials",
        "Structured exam intel packs",
      ],
      ig: "See this subject on Instagram",
      xhs: "See this subject on Red Note",
      back: "Back to Resources overview",
    },
    zh: {
      math: "数学",
      physics: "物理",
      chemistry: "化学",
      chinese: "中文",
      crumb: "学习资源",
      title: "这个科目的资源页也在准备中",
      subtitle:
        "我们正在把这个学科页面整理成更清晰的网站版本。其实相关的备考内容和更新已经陆续发布在 Instagram 上了。",
      badge: "正在整理",
      cardTitle: "之后这里会提供",
      points: [
        "考纲和重点模块整理",
        "题型结构拆解",
        "回忆题和练习资料",
        "更完整的考试全景资料包",
      ],
      ig: "去 Instagram 看相关内容",
      xhs: "去小红书看相关内容",
      back: "返回资源总览",
    },
  }[validLang];

  const subjectLabel = labels[validSubject];

  useEffect(() => {
    document.title = `${subjectLabel} Resources - PrepPals`;
    window.scrollTo(0, 0);
  }, [subjectLabel]);

  return (
    <div className="bg-white min-h-screen font-sans text-navy-950 selection:bg-coral-500/20">
      <div
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ background: HERO_STYLES.resources.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-navy-900/10 text-navy-900 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm backdrop-blur-sm">
            <Link
              to={`/${validLang}/resources`}
              className="hover:text-coral-500 transition-colors"
            >
              {labels.crumb}
            </Link>
            <ChevronRight size={12} />
            <span className="text-coral-500">{subjectLabel}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-950 mb-6 leading-[1.08] max-w-4xl mx-auto">
            {subjectLabel}
          </h1>

          <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto leading-relaxed font-medium">
            {labels.subtitle}
          </p>
        </div>

        <HeroCurve fillColor={HERO_STYLES.resources.curveFill} />
        <div className="pointer-events-none absolute -top-12 -right-12 w-72 h-72 bg-soft-orange/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="bg-white py-16 md:py-24 relative z-10 border-t border-gray-100/60">
        <Section noPadding>
          <div className="max-w-4xl mx-auto rounded-[2rem] bg-white border border-gray-100 shadow-soft p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(240,144,0,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,32,128,0.08),transparent_35%)] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-50 text-coral-600 text-[15px] font-bold uppercase tracking-wider mb-4 border border-coral-100">
                <Clock3 size={14} />
                {labels.badge}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                {labels.title}
              </h2>

              <div className="max-w-2xl mx-auto rounded-3xl bg-bg border border-gray-100 p-6 md:p-8 text-left mt-8 mb-8">
                <div className="inline-flex items-center gap-2 text-navy-900 text-sm font-bold mb-5">
                  <Sparkles size={16} className="text-coral-500" />
                  {labels.cardTitle}
                </div>

                <div className="space-y-4">
                  {labels.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm md:text-base text-navy-900">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-coral-500 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy-900 text-white font-bold hover:bg-navy-800 transition-colors"
                >
                  <Instagram size={18} />
                  {labels.ig}
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href={redNoteHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white border border-navy-200 text-navy-900 font-bold hover:bg-navy-50 transition-colors"
                >
                  <BookHeart size={18} />
                  {labels.xhs}
                  <ArrowUpRight size={16} />
                </a>
              </div> */}

              <div className="mt-8">
                <Link
                  to={`/${validLang}/resources`}
                  className="text-sm font-bold text-coral-500 hover:text-coral-600 transition-colors"
                >
                  {labels.back}
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ResourceSubject;
