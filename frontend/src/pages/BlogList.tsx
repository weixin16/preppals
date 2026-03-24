import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Calendar,
  Tag,
  Sparkles,
  Instagram,
  BookHeart,
  ArrowUpRight,
  Lock,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import { CONTENT } from "../constants";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";
import { getContactPageContent } from "../content/contactContent";
import logoIcon from "../assets/logo/logo-icon.png";

const BlogList: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const t = CONTENT[validLang].blog;
  const contact = getContactPageContent(validLang);

  // const instagramHref =
  //   contact.channels.find((item) => item.key === "instagram")?.href ||
  //   "https://www.instagram.com/csca_preppals/";
  // const redNoteHref =
  //   contact.channels.find((item) => item.key === "xiaohongshu")?.href ||
  //   "https://www.xiaohongshu.com/";

  const INSTAGRAM_LINK = "https://www.instagram.com/csca_preppals/";


  const copy = {
    en: {
      title: t.title,
      subtitle:
        "We’re preparing this blog section properly before publishing articles. When it goes live, it will focus on practical CSCA prep guidance, study direction, and revision insights.",
      pill: "PrepPals Notes",
      overlayBadge: "Coming soon",
      overlayTitle: "Our blog is still being prepared",
      overlayText:
        "We’ll soon share prep articles, study tips, exam observations, and subject-specific guidance here. For now, you can still follow our updates on Instagram.",
      instagram: "Go to Instagram",
      redNote: "Go to Red Note",
      locked: "Preview locked while we finish this section",
      readMore: t.readMore,
    },
    zh: {
      title: t.title,
      subtitle:
        "我们会在这个博客版块正式上线前，先把内容方向和结构整理好。之后这里会分享更多对 CSCA 备考真正有帮助的经验、资讯和学习建议。",
      pill: "PrepPals 备考笔记",
      overlayBadge: "即将上线",
      overlayTitle: "博客内容还在整理中",
      overlayText:
        "之后这里会陆续整理并发布备考建议、学习方法、考试观察和分科内容。现在你也可以先去 Instagram 看，因为这些类型的不少内容我们其实已经先发布在那里了。",
      instagram: "前往 Instagram",
      redNote: "前往小红书",
      locked: "当前内容仅作版面预览，暂不可点击；相关备考内容可先到 IG 查看",
      readMore: t.readMore,
    },
  }[validLang];

  useEffect(() => {
    document.title = `${copy.title} - PrepPals`;
  }, [copy.title]);

  return (
    <div className="font-sans text-navy-950 bg-white">
      <div
        className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden"
        style={{ background: HERO_STYLES.clean.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-navy-900/10 text-navy-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles size={14} className="text-coral-500" />
            <span>{copy.pill}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-950 mb-6">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto font-medium leading-relaxed">
            {copy.subtitle}
          </p>
        </div>
        <HeroCurve fillColor={HERO_STYLES.clean.curveFill} />
      </div>

      <div className="bg-white py-20 relative z-10 border-t border-gray-100/60">
        <Section noPadding>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pointer-events-none select-none opacity-80 blur-[1px]">
              {t.posts.map((post, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-2xl bg-gradient-to-tr from-gray-50 to-gray-200">
                      <img
                        src={logoIcon}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag size={12} /> {post.tags[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {post.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-primary text-sm font-semibold underline decoration-2 decoration-primary/20">
                      {copy.readMore}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center p-4 md:p-8">
              <div className="w-full max-w-3xl rounded-[2rem] border border-white/50 bg-white/45 backdrop-blur-2xl shadow-[0_25px_80px_rgba(12,27,71,0.18)] p-8 md:p-12 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-white/60 text-coral-600 text-[11px] font-bold uppercase tracking-wider mb-4">
                  <Lock size={14} />
                  {copy.overlayBadge}
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                  {copy.overlayTitle}
                </h2>

                <p className="text-navy-900/75 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  {copy.overlayText}
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
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/80 border border-navy-200 text-navy-900 font-bold hover:bg-white transition-colors"
                  >
                    <BookHeart size={18} />
                    {copy.redNote}
                    <ArrowUpRight size={16} />
                  </a> */}
                </div>

                <p className="text-sm text-muted mt-6">{copy.locked}</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default BlogList;
