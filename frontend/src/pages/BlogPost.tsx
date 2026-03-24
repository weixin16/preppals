import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Tag, ArrowLeft, Menu, X, ChevronRight, Instagram, ArrowUpRight } from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import { CONTENT } from "../constants";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";
import { getContactPageContent } from "../content/contactContent";

const BlogPost: React.FC = () => {
  const { lang = "en", slug } = useParams<{ lang: string; slug: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const t = CONTENT[validLang].blog;

  const post = t.posts.find((p) => p.slug === slug) || t.posts[0];
  const [isTocOpen, setIsTocOpen] = useState(false);

  useEffect(() => {
    document.title = `${post.title} - PrepPals`;
    window.scrollTo(0, 0);
  }, [post.title]);

  const tocItems = [
    { id: "basics", label: "1. Understand the Basics" },
    { id: "structure", label: "2. Structure Your Time" },
    { id: "practice", label: "3. Practice Effectively" },
    { id: "takeaways", label: "Key Takeaways" },
  ];


  const INSTAGRAM_LINK = "https://www.instagram.com/csca_preppals/";

  // const contact = getContactPageContent(validLang);
  // const instagramHref =
  //   contact.channels.find((item) => item.key === "instagram")?.href ||
  //   "https://www.instagram.com/csca_preppals/";
  // const redNoteHref =
  //   contact.channels.find((item) => item.key === "xiaohongshu")?.href ||
  //   "https://www.xiaohongshu.com/";

  const copy = {
      en: {
        title: t.title,
        subtitle:
          "We’re preparing this blog section properly before publishing articles. When it goes live, it will focus on practical CSCA prep guidance, study direction, and revision insights.",
        pill: "PrepPals Notes",
        overlayBadge: "Coming soon",
        overlayTitle: "Our blog is still being prepared",
        overlayText:
          "We’ll soon share prep articles, study tips, exam observations, and subject-specific guidance here. For now, you can still follow our updates on Instagram and Red Note.",
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
          "之后这里会陆续整理并发布备考建议、学习方法、考试观察和分科内容。现在你也可以先去 Instagram 和小红书看，因为这些类型的不少内容我们其实已经先发布在那里了。",
        instagram: "前往 Instagram",
        redNote: "前往小红书",
        locked: "当前内容仅作版面预览，暂不可点击；相关备考内容可先到 IG / 小红书查看",
        readMore: t.readMore,
      },
    }[validLang];

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Blog Hero with Curve */}
      <div
        className="relative pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: HERO_STYLES.clean.background }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link
            to={`/${validLang}/blog`}
            className="inline-flex items-center text-sm font-bold text-navy-600 hover:text-coral-500 mb-8 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/60 border border-navy-900/5 text-navy-800 text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-navy-950 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-medium text-navy-900/60">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-navy-900 text-white flex items-center justify-center text-[10px] font-bold">
                P
              </div>
              <span>PrepPals Team</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-navy-300"></span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
          </div>
        </div>
        {/* Curve matching next section (#FFFFFF) */}
        <HeroCurve fillColor={HERO_STYLES.clean.curveFill} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_300px] gap-12 py-12 md:py-20 relative">
        {/* Mobile TOC Toggle */}
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
        <div className="md:hidden mb-8 border-b border-gray-100 pb-8">
          <button
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="w-full flex items-center justify-between p-4 bg-cream-50 rounded-xl font-bold text-navy-900 border border-cream-200"
          >
            <span>{t.tocTitle || "On this page"}</span>
            {isTocOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          {isTocOpen && (
            <div className="mt-2 p-4 bg-white border border-gray-100 rounded-xl shadow-sm space-y-3">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsTocOpen(false)}
                  className="block text-sm text-navy-700 hover:text-coral-500 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Main Article Content */}
        <article className="prose prose-lg prose-slate max-w-none text-navy-900/80">
          <p className="lead text-xl text-navy-900 font-medium mb-10 border-l-4 border-coral-500 pl-6 italic">
            {post.excerpt}
          </p>

          {/* Content Placeholders with IDs for TOC */}
          <div className="space-y-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2
              id="basics"
              className="text-2xl font-bold text-navy-950 mt-12 mb-6 scroll-mt-32"
            >
              1. Understand the Basics
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className="bg-cream-50 border border-cream-200 p-6 rounded-2xl my-8">
              <strong className="text-navy-900 block mb-2 font-bold">
                Pro Tip:
              </strong>
              <span className="text-navy-700">
                Always double check your units in Physics problems. It is the
                most common mistake students make.
              </span>
            </div>

            <h2
              id="structure"
              className="text-2xl font-bold text-navy-950 mt-12 mb-6 scroll-mt-32"
            >
              2. Structure Your Time
            </h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <h2
              id="practice"
              className="text-2xl font-bold text-navy-950 mt-12 mb-6 scroll-mt-32"
            >
              3. Practice Effectively
            </h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>

            <h3
              id="takeaways"
              className="text-xl font-bold text-navy-950 mt-12 mb-6 scroll-mt-32"
            >
              Key Takeaways
            </h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-coral-500">
              <li>Focus on high-yield topics first.</li>
              <li>Practice with timed conditions.</li>
              <li>Review your mistakes thoroughly.</li>
            </ul>
            <p className="mt-8">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </article>

        {/* Desktop Sticky Sidebar TOC */}
        <aside className="hidden md:block">
          <div className="sticky top-32 space-y-8">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-navy-950 mb-4 text-sm uppercase tracking-wider">
                {t.tocTitle || "Table of Contents"}
              </h4>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center justify-between text-sm font-medium text-muted hover:text-coral-600 transition-colors group"
                    >
                      {item.label}
                      <ChevronRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Promo Card */}
            <div className="bg-navy-900 text-white rounded-2xl p-6 text-center shadow-lg shadow-navy-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="relative z-10">
                <h4 className="font-bold mb-3 text-lg">
                  Need personalized help?
                </h4>
                <p className="text-sm text-blue-200 mb-6 leading-relaxed">
                  Our top-scoring tutors are ready to guide you through these
                  topics.
                </p>
                <Link
                  to={`/${validLang}/contact`}
                  className="block w-full py-3 bg-white text-navy-900 rounded-xl font-bold text-sm hover:bg-cream-50 transition-colors"
                >
                  Book a Session
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Resources (White Background) */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-navy-950 mb-8">
            {t.relatedTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all group cursor-pointer"
              >
                <div className="h-40 bg-cream-100 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-navy-900/10 font-black text-4xl">
                    IMG
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-coral-500 mb-2 uppercase tracking-wide">
                  Study Tip
                </div>
                <h4 className="font-bold text-navy-950 mb-2 group-hover:text-coral-600 transition-colors line-clamp-2">
                  How to Master Calculus in 3 Weeks
                </h4>
                <p className="text-sm text-muted line-clamp-2">
                  A practical guide to structuring your revision timeline
                  effectively.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
