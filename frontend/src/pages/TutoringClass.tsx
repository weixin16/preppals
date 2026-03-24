import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";
import { getTutoringClassContent } from "../content/tutoringDetailContent";
import { getWhatsAppHref } from "../utils/whatsapp";
import { getHomeContent } from "../content/homeContent";
import { Sparkles, CheckCircle2, BarChart3, Users, MessageCircle } from "lucide-react";

const TutoringClass: React.FC = () => {
  const { lang = "en", type = "stem-classes" } = useParams<{
    lang: string;
    type: string;
  }>();

  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const page = getTutoringClassContent(validLang, type);
  const homeContent = getHomeContent(validLang);
const INSTAGRAM_LINK = "https://www.instagram.com/csca_preppals/";

  useEffect(() => {
    document.title = `${page.breadcrumbCurrent} - PrepPals`;
    window.scrollTo(0, 0);
  }, [page.breadcrumbCurrent]);

  return (
    <div className="font-sans text-navy-950 bg-white min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes tutoring-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes tutoring-marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .results-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: tutoring-marquee 28s linear infinite;
          will-change: transform;
        }

        .results-track-reverse {
          animation: tutoring-marquee-reverse 32s linear infinite;
        }

        .results-track:hover,
        .results-track-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
        style={{ background: HERO_STYLES.tutoring.background }}
      >
        <div className="absolute right-[-40px] bottom-16 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-16 bottom-20 w-20 h-20 bg-white/45 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <HeroBreadcrumb
            className="mb-8"
            items={[
              {
                label: page.breadcrumbParent,
                to: `/${validLang}/tutoring`,
              },
              {
                label: page.breadcrumbCurrent,
                active: true,
              },
            ]}
          />

          <div className="max-w-5xl mx-auto">
            <p className="text-[2.3rem] md:text-[3.7rem] lg:text-[3.8rem] font-extrabold text-navy-950 mb-2 md:mb-4 leading-[1.02] tracking-[-0.02em]">
              {page.title1}
            </p>

            <h1 className="text-[2.8rem] md:text-[4.9rem] lg:text-[4.7rem] font-extrabold text-coral-500 mb-6 leading-[0.98] tracking-[-0.03em]">
              {page.title}
            </h1>

            <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto leading-relaxed font-medium">
              {page.subtitle}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={getWhatsAppHref(page.detailsWhatsappKey, validLang)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-navy-950 text-white font-bold shadow-[0_14px_34px_rgba(15,30,70,0.18)] hover:-translate-y-0.5 transition-all"
              >
                {page.ctaLabel}
              </a>

              <a
                href="#course-structure"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/80 backdrop-blur border border-[rgba(16,32,80,0.08)] text-navy-950 font-bold hover:bg-white transition-all"
              >
                {validLang === "zh" ? "查看课程安排" : "See Course Structure"}
              </a>
            </div>
          </div>
        </div>

        <HeroCurve fillColor={HERO_STYLES.tutoring.curveFill} />
      </div>

      <div className="bg-white py-16 md:py-24" id="course-structure">
        <Section noPadding>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                {page.detailsTitle}
              </h2>
              <p className="text-navy-900/65 text-lg max-w-2xl mx-auto leading-relaxed">
                {page.detailsIntro}
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_12px_34px_rgba(12,24,60,0.08)] ring-1 ring-[rgba(16,32,80,0.08)]">
              <div className="grid grid-cols-[0.9fr_1.1fr] bg-navy-950 text-white px-6 md:px-8 py-4 font-bold uppercase tracking-[0.18em]">
                <div>{validLang === "zh" ? "项目" : "Item"}</div>
                <div>{validLang === "zh" ? "内容" : "Details"}</div>
              </div>

              {page.detailRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-2 px-6 md:px-8 py-5 ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#FCFBF8]"
                  }`}
                >
                  <div className="font-bold text-navy-950">{row.label}</div>
                  <div className="text-navy-900/75 font-medium leading-relaxed">{row.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href={getWhatsAppHref(page.detailsWhatsappKey, validLang)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-coral-500 text-white font-bold shadow-[0_14px_34px_rgba(245,124,92,0.22)] hover:bg-coral-600 hover:-translate-y-0.5 transition-all"
              >
                {page.detailsCtaLabel}
              </a>
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-cream-20 py-16 md:py-24">
        <Section noPadding>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.12fr_0.88fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F7F8FC] text-navy-800 text-xs font-bold uppercase tracking-[0.18em] mb-5">
                {page.overview.eyebrow}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-5 leading-tight">
                {page.overview.title}
              </h2>

              <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl">
                {page.overview.lead}
              </p>

              <div className="mt-10 space-y-6">
                {page.overview.points.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[44px_1fr] gap-4 items-start">
                    <div className="w-11 h-11 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-extrabold shadow-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="pb-6 border-b border-navy-100/70 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-navy-950 mb-2">{item.title}</h3>
                      <p className="text-navy-900/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-navy-950 text-white p-8 md:p-10 overflow-hidden shadow-[0_18px_50px_rgba(10,22,60,0.18)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200 mb-4">
                  {validLang === "zh" ? "适合这样的学生" : "Best suited for"}
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6">
                  {page.overview.asideTitle}
                </h3>

                <div className="space-y-4">
                  {page.overview.asideList.map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="mt-1 w-2.5 h-2.5 rounded-full bg-coral-400 shrink-0" />
                      <p className="text-blue-100/85 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>


      {page.results && (
        <div className="bg-white py-16 md:py-24 overflow-hidden">
          <Section noPadding>
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-end mb-10">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-coral-50 text-coral-600 text-xs font-bold uppercase tracking-[0.18em] mb-5">
                    {page.results.eyebrow}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4 leading-tight">
                    {page.results.title}
                  </h2>

                  <p className="text-lg text-navy-900/70 leading-relaxed max-w-2xl">
                    {page.results.subtitle}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-navy-950 text-white p-8 md:p-9 relative overflow-hidden shadow-[0_18px_50px_rgba(10,22,60,0.18)]">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="relative z-10">
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-blue-200 mb-3">
                      {page.results.averageLabel}
                    </div>

                    <div className="flex items-end gap-2 mb-3">
                      <span className="text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                        {page.results.average}
                      </span>
                      <span className="text-2xl text-coral-300 font-bold mb-1">
                        {page.results.averageSuffix}
                      </span>
                    </div>

                    <p className="text-blue-100/80 leading-relaxed border-l-2 border-coral-400 pl-4">
                      {page.results.updated}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-4">
                {page.results.cards.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-[1.5rem] bg-[#FBF7F1] p-5 ring-1 ring-[rgba(16,32,80,0.08)]"
                  >
                    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wide mb-6">
                      <span className="text-navy-800">{item.subject}</span>
                      <span className="text-coral-500">{item.language}</span>
                    </div>

                    <div className="text-3xl font-extrabold text-navy-950 mb-2">{item.score}</div>

                    <p className="text-sm text-navy-900/55">
                      {validLang === "zh" ? "学生自愿分享成绩" : "Student-shared result"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="hidden md:block space-y-4">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  <div className="results-track py-2">
                    {[...page.results.cards, ...page.results.cards].map((item, idx) => (
                      <div
                        key={`${item.score}-${idx}`}
                        className="w-[260px] shrink-0 rounded-[1.75rem] bg-[#FBF7F1] p-6 ring-1 ring-[rgba(16,32,80,0.08)] shadow-[0_10px_24px_rgba(12,24,60,0.06)]"
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] mb-8">
                          <span className="text-navy-800">{item.subject}</span>
                          <span className="text-coral-500">{item.language}</span>
                        </div>

                        <div className="text-4xl font-extrabold text-navy-950 mb-2">{item.score}</div>

                        <p className="text-sm text-navy-900/55">
                          {validLang === "zh" ? "学生自愿分享成绩" : "Student-shared result"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                  <div className="results-track results-track-reverse py-2">
                    {[
                      ...page.results.cards.slice().reverse(),
                      ...page.results.cards.slice().reverse(),
                    ].map((item, idx) => (
                      <div
                        key={`${item.language}-${item.score}-${idx}`}
                        className="w-[240px] shrink-0 rounded-[1.75rem] bg-white p-6 ring-1 ring-[rgba(16,32,80,0.08)] shadow-[0_10px_24px_rgba(12,24,60,0.04)]"
                      >
                        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-coral-500 mb-6">
                          {item.language}
                        </div>

                        <div className="text-3xl font-extrabold text-navy-950 mb-2">{item.score}</div>

                        <p className="text-sm text-navy-900/60">{item.subject}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="inline-flex px-5 py-3 rounded-full bg-coral-50 text-coral-700 font-bold text-sm md:text-base">
                  {page.results.disclaimer}
                </p>
              </div>
            </div>
          </Section>

          <div className="bg-bg py-16 md:py-24 border-t border-gray-200/50">
            <Section noPadding>
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4 px-4">
                  {homeContent.proofTitle}
                </h2>
                <p className="text-muted text-lg max-w-3xl mx-auto">
                  {homeContent.proofSub}
                </p>
              </div>

              <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_260px] gap-6 items-start">
                {/* Main Report */}
                <div className="bg-white rounded-[2rem] border border-gray-100 shadow-soft overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-8 py-10 md:px-12 md:py-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-gray-50/30">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
                        <Sparkles size={14} className="text-coral-500" /> {homeContent.proof.labLabel}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950">
                        {homeContent.proof.reportTitle}
                      </h3>
                      <p className="text-muted mt-2 text-sm md:text-base">
                        {homeContent.proof.reportSubtitle}
                      </p>
                    </div>

                    <div className="flex gap-6 md:gap-10">
                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-extrabold text-navy-950">
                          {homeContent.proof.structuralValue}
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-navy-500 uppercase tracking-wider mt-1">
                          {homeContent.proof.structuralLabel}
                        </div>
                      </div>

                      <div className="w-px bg-gray-200"></div>

                      <div className="text-right">
                        <div className="text-3xl md:text-4xl font-extrabold text-blue-600">
                          {homeContent.proof.conceptValue}
                        </div>
                        <div className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-wider mt-1">
                          {homeContent.proof.conceptLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="p-8 md:p-12">
                    <h4 className="text-center text-sm font-bold text-navy-900 uppercase tracking-wider mb-8">
                      {homeContent.proof.distributionTitle}
                    </h4>

                    {/* Legend */}
                    <div className="flex justify-center gap-8 text-xs font-bold text-muted uppercase tracking-wider mb-8">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-navy-900"></div>
                        {homeContent.proof.officialLabel}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-sm bg-coral-500"></div>
                        {homeContent.proof.mockLabel}
                      </div>
                    </div>

                    {/* Mirrored Bars */}
                    <div className="space-y-4 max-w-3xl mx-auto">
                      {homeContent.proof.rows.map((row, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[1fr_130px_1fr] md:grid-cols-[1fr_180px_1fr] gap-3 md:gap-4 items-center"
                        >
                          {/* Left Bar */}
                          <div className="flex justify-end items-center gap-2 md:gap-3">
                            <span className="text-xs md:text-sm font-medium text-navy-600">
                              {row.off}%
                            </span>
                            <div
                              className="h-5 md:h-6 bg-navy-900 rounded-l-sm"
                              style={{ width: `${row.off * 2.5}%`, minWidth: "4px" }}
                            />
                          </div>

                          {/* Center Label */}
                          <div className="text-center text-[11px] md:text-sm font-bold text-navy-800 leading-tight">
                            {row.label}
                          </div>

                          {/* Right Bar */}
                          <div className="flex justify-start items-center gap-2 md:gap-3">
                            <div
                              className="h-5 md:h-6 bg-coral-500 rounded-r-sm"
                              style={{ width: `${row.mock * 2.5}%`, minWidth: "4px" }}
                            />
                            <span className="text-xs md:text-sm font-medium text-coral-600">
                              {row.mock}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Conclusion */}
                  <div className="p-8 md:p-10 bg-gray-50/50 flex flex-col justify-center">
                    <div className="flex flex-col gap-3 mb-6 text-sm">
                      <div className="flex items-center gap-3 text-navy-800 font-medium">
                        <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        {homeContent.proof.matchedModules}
                      </div>
                      <div className="flex items-center gap-3 text-navy-800 font-medium">
                        <BarChart3 size={18} className="text-blue-500 shrink-0" />
                        {homeContent.proof.coreWeight}
                      </div>
                    </div>

                    <div className="pt-5 border-t border-gray-200 text-sm font-bold text-navy-950">
                      {homeContent.proof.conclusion}
                    </div>
                  </div>
                </div>

                {/* Right Summary Cards */}
                <div className="flex flex-col gap-4 lg:pt-2">
                  <div className="rounded-[1.5rem] p-5 md:p-6 bg-[#FAF8F5] border border-[#EBE5DE] shadow-soft">
                    <div className="w-9 h-9 bg-white text-coral-500 rounded-xl shadow-sm flex items-center justify-center mb-4">
                      <Users size={18} />
                    </div>

                    <div className="text-3xl md:text-4xl font-extrabold text-navy-950 leading-none mb-2">
                      {homeContent.proof.summaryCards.students.value}
                    </div>

                    <div className="text-[11px] md:text-xs font-bold text-navy-800 uppercase tracking-wide mb-3">
                      {homeContent.proof.summaryCards.students.title}
                    </div>

                    <p className="text-xs md:text-sm text-muted leading-relaxed">
                      {homeContent.proof.summaryCards.students.note}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] p-5 md:p-6 bg-navy-card text-white border border-navy-800 shadow-soft relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

                    <div className="relative z-10">
                      <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-3">
                        {homeContent.proof.summaryCards.average.eyebrow}
                      </div>

                      <div className="flex items-end gap-2 mb-3">
                        <span className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                          {homeContent.proof.summaryCards.average.value}
                        </span>
                        <span className="text-lg md:text-xl text-blue-300 font-medium mb-1">
                          {homeContent.proof.summaryCards.average.suffix}
                        </span>
                      </div>

                      <p className="text-xs text-blue-100/80 leading-relaxed border-l-2 border-coral-500 pl-3">
                        {homeContent.proof.summaryCards.average.note}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-sm text-muted mt-8 max-w-3xl mx-auto">
                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all hover:text-coral-500 hover:font-bold hover:underline"
                >
                  {homeContent.proof.footerNote}
                </a>
              </p>
            </Section>
          </div>
        </div>
        
      )}

    

      <div className="bg-white mb-32">
        <Section noPadding>
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-8 py-12 md:px-14 md:py-16 text-center">
              <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[340px] h-[340px] bg-coral-400/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  {page.finalCta.title}
                </h2>

                <p className="text-blue-100/80 text-lg leading-relaxed mb-10">
                  {page.finalCta.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href={getWhatsAppHref(page.detailsWhatsappKey, validLang)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-coral-500 text-white font-bold hover:bg-coral-600 transition-all"
                  >
                    <MessageCircle size={18} />
                    {page.finalCta.primaryLabel}
                  </a>

                  <Link
                    to={page.finalCta.secondaryHref}
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/10 border border-white/15 text-white font-bold hover:bg-white/15 transition-all"
                  >
                    {page.finalCta.secondaryLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TutoringClass;
