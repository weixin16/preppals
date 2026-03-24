import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  Globe2,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Users,
  Sparkles,
  Quote,
  ArrowUpRight,
  BarChart3,
  BarChart,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import { HERO_STYLES } from "../config/heroStyles";
import { getHomeContent} from "../content/homeContent";
import { getWhatsAppHref } from "../utils/whatsapp";

type Lang = "en" | "zh";

const Home: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang: Lang = lang === "zh" ? "zh" : "en";

  const WHATSAPP_LINK = getWhatsAppHref("general", validLang);
  const GROUP_LINK = "https://chat.whatsapp.com/IhRFCNSJhhTBg9ZjdHsxrq";
  const INSTAGRAM_LINK = "https://www.instagram.com/csca_preppals/";

  const content = getHomeContent(validLang);
  useEffect(() => {
  document.title = content.metaTitle;
}, [validLang]);

  return (
    <div className="overflow-x-hidden bg-bg">
      {/* HERO */}
      <div
        className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden"
        style={{ background: HERO_STYLES.home.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8 shadow-lg">
            <Sparkles size={14} className="text-coral-400" />
            <span className="text-xs md:text-sm font-bold tracking-wide text-blue-50">
              {content.heroPill}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08] text-white max-w-4xl mx-auto">
            {content.heroTitle1}
            <br />
            {content.heroTitle2}
          </h1>

          <p className="text-lg md:text-xl text-blue-100/85 mb-10 max-w-2xl mx-auto leading-relaxed">
            {content.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/${validLang}/tutoring`}
              className="w-full sm:w-auto px-8 py-4 bg-coral-gradient hover:brightness-110 text-white rounded-full font-bold text-lg shadow-glow-coral transition-all transform hover:-translate-y-1"
            >
              {content.heroPrimary}
            </Link>
            <Link
              to={`/${validLang}/csca`}
              className="w-full sm:w-auto px-8 py-4 bg-navy-900/50 hover:bg-navy-800/80 border border-white/20 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              {content.heroSecondary}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <HeroCurve fillColor={HERO_STYLES.home.curveFill} />
      </div>

      {/* PATH CHOOSER */}
      <div className="bg-bg py-16 md:py-24 relative z-10">
        <Section noPadding>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
              {content.pathTitle}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {content.pathSub}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {content.paths.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-soft border border-navy-50 flex flex-col h-full hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 text-navy-800 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">
                  {item.title}
                </h3>
                <p className="text-muted mb-8 flex-grow">{item.desc}</p>
                <Link
                  to={item.link}
                  className="text-coral-500 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  {item.cta} <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* EXAM STAGE */}
      <div className="bg-white py-16 md:py-24 border-t border-gray-100/50">
        <Section noPadding>
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#F9FBFF] to-[#FFFBF7] rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 mb-4">
                <Clock3 size={14} className="text-coral-500" />
                <span className="text-xs font-bold uppercase tracking-wide text-navy-900">
                  {validLang === "en" ? "Exam stage" : "备考阶段"}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                {content.stageTitle}
              </h2>
              <p className="text-muted text-lg max-w-3xl mx-auto">
                {content.stageSub}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {content.stages.map((stage, idx) => {
                const toneStyles =
                  stage.tone === "urgent"
                    ? "border-coral-400 bg-[#FFF7F2] hover:shadow-[0_16px_40px_rgba(255,107,107,0.12)]"
                    : stage.tone === "plan"
                      ? "border-blue-200 bg-[#F7FAFF] hover:shadow-[0_16px_40px_rgba(18,58,134,0.10)]"
                      : "border-cream-100 bg-white hover:shadow-soft";

                const eyebrowStyles =
                  stage.tone === "urgent"
                    ? "text-coral-600 bg-coral-500/15"
                    : stage.tone === "plan"
                      ? "text-navy-800 bg-blue-500/15"
                      : "text-navy-700 bg-gray-500/10";

                const ctaStyles =
                  stage.tone === "urgent"
                    ? "text-coral-500"
                    : stage.tone === "plan"
                      ? "text-navy-900"
                      : "text-navy-800";

                return (
                  <Link
                    key={idx}
                    to={stage.link}
                    className={`group rounded-2xl border p-6 shadow-sm transition-all ${toneStyles}`}
                  >
                    <div
                      className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4 ${eyebrowStyles}`}
                    >
                      {stage.eyebrow}
                    </div>

                    <h3 className="text-xl font-bold text-navy-950 mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {stage.desc}
                    </p>

                    <div className={`font-bold flex items-center gap-2 ${ctaStyles}`}>
                      {stage.cta}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      </div>

      
      {/* SUBJECTS */}
      <div className="bg-bg py-16 md:py-24 border-t border-gray-200/50">
        <Section noPadding>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-3">
              {content.subjectTitle}
            </h2>
            <p className="text-muted text-lg mb-3">{content.subjectSub}</p>
            {/* <p className="text-sm text-muted">{content.subjectExtra}</p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.subjects.map((sub, idx) => (
              <Link
                key={idx}
                to={`/${validLang}/resources/${sub.id}`}
                className="group bg-white rounded-2xl p-6 border border-[rgba(16,32,80,0.08)] shadow-[0_10px_30px_rgba(10,22,60,0.08)] hover:shadow-card hover:border-blue-100 transition-all flex flex-col relative overflow-hidden"
              >
                <div className="flex flex-col items-start gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${sub.color}`}
                  >
                    <sub.icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-xl text-navy-950">
                    {sub.label}
                  </h3>
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xs font-medium text-coral-500 uppercase tracking-wide">
                    {content.subjectCta}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-coral-500 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      {/* TUTORING COMPARISON */}
    <div className="bg-white py-16 md:py-24 border-t border-gray-100/50">
      <Section noPadding>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
            {content.tutoringTitle}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {content.tutoringSub}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.tutoringOptions.map((opt, idx) => {
            const isFeatured = opt.featured;

            return (
              <div
                key={idx}
                className={
                  isFeatured
                    ? "rounded-3xl p-8 border border-[#D4B16A]/30 bg-[linear-gradient(180deg,#0B1B45_0%,#102A66_100%)] text-white shadow-[0_24px_60px_rgba(11,27,69,0.25)] flex flex-col relative overflow-hidden"
                    : "bg-white rounded-3xl p-8 border border-gray-100 shadow-soft flex flex-col"
                }
              >
                {isFeatured && (
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4B16A]/10 rounded-full blur-3xl" />
                )}

                <div className="relative z-10">
                  <div
                    className={
                      isFeatured
                        ? "inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4 bg-[#D4B16A]/15 text-[#F4D58D]"
                        : "inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-4 bg-blue-50 text-navy-800"
                    }
                  >
                    {opt.badge}
                  </div>

                  <h3
                    className={
                      isFeatured
                        ? "text-2xl font-bold text-white mb-4"
                        : "text-2xl font-bold text-navy-950 mb-4"
                    }
                  >
                    {opt.title}
                  </h3>

                  <p
                    className={
                      isFeatured
                        ? "text-blue-100/85 mb-6"
                        : "text-muted mb-6"
                    }
                  >
                    {opt.desc}
                  </p>

                  <div className="space-y-3 mb-8">
                    {opt.points.map((point, pIdx) => (
                      <div
                        key={pIdx}
                        className={
                          isFeatured
                            ? "flex items-start gap-3 text-sm text-blue-50"
                            : "flex items-start gap-3 text-sm text-navy-900"
                        }
                      >
                        <CheckCircle2
                          size={16}
                          className={
                            isFeatured
                              ? "text-[#F4D58D] mt-0.5 shrink-0"
                              : "text-emerald-500 mt-0.5 shrink-0"
                          }
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={opt.link}
                    className={
                      isFeatured
                        ? "mt-auto inline-flex items-center justify-center px-6 py-3 bg-coral-500 text-white font-bold rounded-xl hover:bg-coral-600 transition-all"
                        : "mt-auto inline-flex items-center justify-center px-6 py-3 bg-navy-50 text-navy-900 font-bold rounded-xl hover:bg-navy-100 transition-colors"
                    }
                  >
                    {opt.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>

    {/* PROOF */}
    <div className="bg-bg py-16 md:py-24 border-t border-gray-200/50">
      <Section noPadding>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4 px-4">
            {content.proofTitle}
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            {content.proofSub}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_260px] gap-6 items-start">
          {/* Main Report */}
          <div className="bg-white rounded-[2rem] border border-gray-100 shadow-soft overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-8 py-10 md:px-12 md:py-12 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 bg-gray-50/30">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles size={14} className="text-coral-500" /> {content.proof.labLabel}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-navy-950">
                  {content.proof.reportTitle}
                </h3>
                <p className="text-muted mt-2 text-sm md:text-base">
                  {content.proof.reportSubtitle}
                </p>
              </div>

              <div className="flex gap-6 md:gap-10">
                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-extrabold text-navy-950">
                    {content.proof.structuralValue}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-navy-500 uppercase tracking-wider mt-1">
                    {content.proof.structuralLabel}
                  </div>
                </div>

                <div className="w-px bg-gray-200"></div>

                <div className="text-right">
                  <div className="text-3xl md:text-4xl font-extrabold text-blue-600">
                    {content.proof.conceptValue}
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-blue-500 uppercase tracking-wider mt-1">
                    {content.proof.conceptLabel}
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="p-8 md:p-12">
              <h4 className="text-center text-sm font-bold text-navy-900 uppercase tracking-wider mb-8">
                {content.proof.distributionTitle}
              </h4>

              {/* Legend */}
              <div className="flex justify-center gap-8 text-xs font-bold text-muted uppercase tracking-wider mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-navy-900"></div>
                  {content.proof.officialLabel}
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-coral-500"></div>
                  {content.proof.mockLabel}
                </div>
              </div>

              {/* Mirrored Bars */}
              <div className="space-y-4 max-w-3xl mx-auto">
                {content.proof.rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_130px_1fr] md:grid-cols-[1fr_180px_1fr] gap-3 md:gap-4 items-center"
                  >
                    {/* Left Bar (Official) */}
                    <div className="flex justify-end items-center gap-2 md:gap-3">
                      <span className="text-xs md:text-sm font-medium text-navy-600">
                        {row.off}%
                      </span>
                      <div
                        className="h-5 md:h-6 bg-navy-900 rounded-l-sm"
                        style={{ width: `${row.off * 2.5}%`, minWidth: "4px" }}
                      ></div>
                    </div>

                    {/* Center Label */}
                    <div className="text-center text-[11px] md:text-sm font-bold text-navy-800 leading-tight">
                      {row.label}
                    </div>

                    {/* Right Bar (Mock) */}
                    <div className="flex justify-start items-center gap-2 md:gap-3">
                      <div
                        className="h-5 md:h-6 bg-coral-500 rounded-r-sm"
                        style={{ width: `${row.mock * 2.5}%`, minWidth: "4px" }}
                      ></div>
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
                  {content.proof.matchedModules}
                </div>
                <div className="flex items-center gap-3 text-navy-800 font-medium">
                  <BarChart3 size={18} className="text-blue-500 shrink-0" />
                  {content.proof.coreWeight}
                </div>
              </div>

              <div className="pt-5 border-t border-gray-200 text-sm font-bold text-navy-950">
                {content.proof.conclusion}
              </div>
            </div>
          </div>

          {/* Right Top Mini Summary Cards */}
          <div className="flex flex-col gap-4 lg:pt-2">
            {/* Yellow Mini Card */}
            <div className="rounded-[1.5rem] p-5 md:p-6 bg-[#FAF8F5] border border-[#EBE5DE] shadow-soft">
              <div className="w-9 h-9 bg-white text-coral-500 rounded-xl shadow-sm flex items-center justify-center mb-4">
                <Users size={18} />
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-navy-950 leading-none mb-2">
                {content.proof.summaryCards.students.value}
              </div>

              <div className="text-[11px] md:text-xs font-bold text-navy-800 uppercase tracking-wide mb-3">
                {content.proof.summaryCards.students.title}
              </div>

              <p className="text-xs md:text-sm text-muted leading-relaxed">
                {content.proof.summaryCards.students.note}
              </p>
            </div>

            {/* Navy Mini Card */}
            <div className="rounded-[1.5rem] p-5 md:p-6 bg-navy-card text-white border border-navy-800 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-blue-200 mb-3">
                  {content.proof.summaryCards.average.eyebrow}
                </div>

                <div className="flex items-end gap-2 mb-3">
                  <span className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-none">
                    {content.proof.summaryCards.average.value}
                  </span>
                  <span className="text-lg md:text-xl text-blue-300 font-medium mb-1">
                    {content.proof.summaryCards.average.suffix}
                  </span>
                </div>

                <p className="text-xs text-blue-100/80 leading-relaxed border-l-2 border-coral-500 pl-3">
                  {content.proof.summaryCards.average.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted mt-8 max-w-3xl mx-auto">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            className="transition-all hover:text-coral-500 hover:font-bold hover:underline"
          >
            {content.proof.footerNote}
          </a>
        </p>
        
      </Section>
    </div>

      {/* 5. TESTIMONIALS (Background: White) */}
    <div className="bg-white py-16 md:py-24 border-t border-gray-100/50">
      <Section noPadding>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-950 mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            {content.testimonials.subtitle}
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-min">
          {/* LEFT CARD (Tall) */}
          <div className="lg:row-span-2 bg-white p-8 rounded-3xl shadow-soft border border-gray-50 flex flex-col justify-between min-h-[400px]">
            <div>
              <Quote size={40} className="text-orange-100 mb-8" />
              <p className="text-navy-900 text-lg font-medium mb-8 leading-relaxed">
                "{content.testimonials.featured.quote.replace(
                  content.testimonials.featured.highlight,
                  ""
                )}
                <span className="text-coral-600 font-bold bg-orange-50 px-1 rounded">
                  {content.testimonials.featured.highlight}
                </span>
                "
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-navy-800 font-bold text-base">
                {content.testimonials.featured.initial}
              </div>
              <div>
                <div className="font-bold text-navy-950 text-base">
                  {content.testimonials.featured.name}
                </div>
                <div className="text-xs text-muted">
                  {content.testimonials.featured.meta}
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN - Top */}
          <div className="lg:col-start-2 lg:row-start-1 bg-white p-8 rounded-3xl shadow-soft border border-gray-50">
            <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-md mb-4 border border-green-100">
              {content.testimonials.examFeedback.badge}
            </div>

            <p className="text-navy-900 font-medium mb-6 leading-relaxed">
              "{content.testimonials.examFeedback.quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-xs">
                {content.testimonials.examFeedback.initial}
              </div>
              <div>
                <div className="font-bold text-navy-950 text-sm">
                  {content.testimonials.examFeedback.name}
                </div>
                <div className="text-xs text-muted">
                  {content.testimonials.examFeedback.meta}
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN - Bottom */}
          <div className="lg:col-start-2 lg:row-start-2 bg-navy-900 text-white p-8 rounded-3xl shadow-soft border border-navy-800">
            <div className="flex items-center gap-2 mb-4 text-blue-200">
              <ArrowUpRight size={20} />
              <span className="text-xs font-bold uppercase">
                {content.testimonials.improvement.eyebrow}
              </span>
            </div>

            <div className="text-3xl md:text-4xl font-extrabold mb-2">
              {content.testimonials.improvement.value}
            </div>

            <p className="text-sm text-blue-100/80 leading-relaxed">
              {content.testimonials.improvement.note}
            </p>
          </div>

          {/* RIGHT COLUMN - Top */}
          <div className="lg:col-start-3 lg:row-start-1 bg-white p-8 rounded-3xl shadow-soft border border-gray-50">
            <p className="text-navy-900 font-medium mb-6 leading-relaxed">
              "{content.testimonials.mockFeedback.quote}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xs">
                {content.testimonials.mockFeedback.initial}
              </div>
              <div>
                <div className="font-bold text-navy-950 text-sm">
                  {content.testimonials.mockFeedback.name}
                </div>
                <div className="text-xs text-muted">
                  {content.testimonials.mockFeedback.meta}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Bottom */}
          <div className="lg:col-start-3 lg:row-start-2 bg-[#FAF8F5] p-8 rounded-3xl shadow-soft border border-[#EBE5DE]">
            <div className="inline-flex items-center gap-2 mb-4">
              <Globe2 size={16} className="text-navy-400" />
              <span className="text-[10px] font-bold text-navy-400 uppercase tracking-wider">
                {content.testimonials.community.eyebrow}
              </span>
            </div>

            <p className="text-navy-900 font-medium leading-relaxed">
              "{content.testimonials.community.quote}"
            </p>
          </div>
        </div>
      </Section>
    </div>

      {/* GROUP CTA */}
      <div className="bg-bg py-16 py-20 border-t border-gray-100/50">
        <Section noPadding>
          <div className="max-w-5xl mx-auto mb-14">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-soft px-8 py-10 md:px-12 md:py-12 text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-green-50 text-[#25D366] flex items-center justify-center">
                <Users size={24} />
              </div>

              <h2 className="text-2xl md:text-4xl font-extrabold text-navy-950 mb-4">
                {content.groupTitle}
              </h2>

              <p className="text-muted text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                {content.groupSub}
              </p>

              <a
                href={GROUP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-lg transition-all"
              >
                <Users size={20} />
                {content.groupPrimary}
              </a>
            </div>
          </div>

          <div className="bg-navy-950 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden mx-4 md:mx-0">
            <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {content.finalTitle}
              </h2>
              <p className="text-blue-100/80 text-lg mb-10 max-w-xl mx-auto">
                {content.finalSub}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} /> {content.finalPrimary}
                </a>

                <Link
                  to={`/${validLang}/contact`}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all"
                >
                  {content.finalSecondary}
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>    

    </div>
  );
};

export default Home;