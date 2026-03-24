import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BookOpenCheck,
  CheckCircle2,
  Crown,
  Languages,
  MessageCircle,
  Users,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";
import { getTutoringPageContent } from "../content/tutoringContent";

const TutoringOverview: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const page = getTutoringPageContent(validLang);

  useEffect(() => {
    document.title = page.metaTitle
  }, []);

  const getOfferIcon = (key: "stem" | "chinese" | "oneOnOne") => {
    if (key === "stem") return Users;
    if (key === "chinese") return Languages;
    return Crown;
  };

  const getOfferIconStyle = (color: "blue" | "green" | "orange") => {
    if (color === "blue") return "bg-blue-50 text-blue-600";
    if (color === "green") return "bg-green-50 text-green-600";
    return "bg-gold text-navy-950";
  };

  return (
    <div className="bg-white font-sans text-navy-950 min-h-screen overflow-x-hidden">
      {/* HERO */}
      <div
        className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
        style={{ background: HERO_STYLES.tutoring.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <HeroBreadcrumb
            className="mb-5"
            items={[
              {
                label: page.hero.breadcrumb,
                active: true,
              },
            ]}
          />

          <p className="text-[2.3rem] md:text-[3.7rem] lg:text-[3.8rem] font-extrabold text-navy-950 mb-2 md:mb-4 leading-[1.02] tracking-[-0.02em]">
            {page.hero.title1}
          </p>

          <h1 className="text-[2.8rem] md:text-[4.9rem] lg:text-[4.7rem] font-extrabold text-coral-500 mb-6 leading-[0.98] tracking-[-0.03em]">
            {page.hero.title}
          </h1>

          <p className="text-lg md:text-xl text-navy-900/70 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            {page.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={page.hero.primaryHref}
              className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 px-8 py-4 text-lg bg-[#FDE1C3] text-primary hover:bg-[#F3CBA0] shadow-md hover:-translate-y-0.5"
            >
              {page.hero.primaryCta}
            </a>

            <a
              href={page.hero.secondaryHref}
              className="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 px-8 py-4 text-lg bg-navy-900 border border-navy-900/10 text-white hover:bg-navy-800 shadow-md hover:-translate-y-0.5"
            >
              {page.hero.secondaryCta}
            </a>
          </div>
        </div>

        <HeroCurve fillColor={HERO_STYLES.tutoring.curveFill} />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FDE1C3]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* WHAT WE OFFER */}
      <div id="offer" className="bg-white">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              {page.offer.title}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {page.offer.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {page.offer.cards.map((card) => {
              const Icon = getOfferIcon(card.key);
              const isOneOnOne = card.key === "oneOnOne";

              return (
                <Link
                  key={card.key}
                  to={card.href}
                  className={`group rounded-3xl p-6 md:p-7 transition-all duration-300 flex flex-col min-h-[280px] ${
                    isOneOnOne
                      ? "bg-navy-900 text-white shadow-[0_20px_50px_rgba(10,22,60,0.18)] hover:-translate-y-1"
                      : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${getOfferIconStyle(
                      card.iconColor,
                    )}`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="mb-3">
                    <span
                      className={`inline-flex text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isOneOnOne
                          ? "bg-white/10 text-[#FDE1C3] border border-white/10"
                          : "bg-cream-100 text-primary border border-cream-200"
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${
                      isOneOnOne ? "text-white" : "text-navy-950"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`leading-relaxed flex-grow ${
                      isOneOnOne ? "text-blue-100/85" : "text-muted"
                    }`}
                  >
                    {card.desc}
                  </p>

                  <div
                    className={`mt-6 inline-flex items-center gap-2 font-bold ${
                      isOneOnOne ? "text-[#FDE1C3]" : "text-primary"
                    }`}
                  >
                    {validLang === "zh" ? "查看详情" : "View details"}
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      </div>

      {/* SYSTEM CLASS OVERVIEW + OUTCOMES */}
      <div id="systematic-classes" className="bg-cream-20 border-t border-navy-900/5">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <BookOpenCheck size={14} />
                {page.smallGroup.eyebrow}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                {page.smallGroup.title}
              </h2>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {page.smallGroup.subtitle}
              </p>

              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-extrabold text-primary mb-6 text-center">
                  {page.smallGroup.outcomesTitle}
                </h3>

                <div className="grid grid-cols-1 gap-4 text-left">
                  {page.smallGroup.outcomes.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-4 bg-gray-50 border border-gray-100 rounded-xl"
                    >
                      <CheckCircle2 className="text-green-500 mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-6 mb-8">
                {page.smallGroup.tracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        {idx === 0 ? <Users size={20} /> : <BookOpen size={20} />}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-navy-950">{track.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{track.subtitle}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                          {track.meta.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="rounded-xl bg-gray-50 border border-gray-100 p-3"
                            >
                              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1">
                                {item.label}
                              </p>
                              <p className="text-sm font-semibold text-gray-800">
                                {item.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <Link
                          to={track.href}
                          className="inline-flex items-center rounded-full font-semibold transition-all duration-300 px-5 py-2.5 text-sm bg-primary text-white hover:bg-blue-800 no-underline"
                        >
                          <ArrowRight className="mr-2 h-4 w-4" />
                          {track.ctaLabel}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* ONE-TO-ONE HIGHLIGHT */}
      <div id="one-to-one" className="bg-white border-t border-navy-900/5">
        <Section className="pt-0 md:pt-35 pb-16 md:pb-40">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-[2.5rem] bg-navy-900 text-white px-6 md:px-10 py-14 md:py-16 overflow-hidden relative shadow-[0_24px_70px_rgba(10,22,60,0.18)]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral-400/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute right-16 bottom-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 text-center mb-12">
                <div className="inline-flex bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full font-bold text-[#FDE1C3] mb-4">
                  {page.oneOnOne.badge}
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold mb-5 leading-tight">
                  {page.oneOnOne.title}
                </h2>

                <p className="text-blue-100/85 max-w-3xl mx-auto leading-relaxed text-lg">
                  {page.oneOnOne.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {page.oneOnOne.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative"
                  >
                    <div className="text-5xl font-bold text-white/15 absolute top-2 right-4">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="text-[#FDE1C3] font-bold uppercase tracking-wider mb-3">
                      {validLang === "zh" ? "专属方案" : "Tailored support"}
                    </div>

                    <h3 className="text-xl font-bold mb-3 leading-snug">{item.title}</h3>

                    <p className="text-blue-100/85 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-[#FDE1C3] text-sm md:text-base font-medium mb-6">
                  {page.oneOnOne.subjectLine}
                </p>

                <Link
                  to={page.oneOnOne.ctaHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FDE1C3] text-navy-950 font-bold shadow-[0_16px_34px_rgba(253,225,195,0.18)] hover:bg-[#fcd2a8] hover:-translate-y-0.5 transition-all no-underline"
                >
                  {page.oneOnOne.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* COMPARE */}
      <div className="bg-cream-20 border-t border-navy-900/5">
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                {page.compare.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.compare.rows.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2rem] p-6 border border-primary/30 shadow-sm flex flex-col h-full"
                >
                  <div className="text-xl font-bold text-center uppercase tracking-[0.18em] text-coral-500 mb-4">
                    {row.studentType}
                  </div>

                  <div className="rounded-2xl bg-[#FCFBF8] p-5 mb-6 min-h-[110px] flex items-center">
                    <p className="text-gray-600 leading-relaxed">{row.needs}</p>
                  </div>

                  <div className="pt-4 border-t border-primary/30 mt-auto">
                    <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
                      {page.compare.headers.recommended}
                    </div>

                    <div className="flex flex-wrap gap-3 item-center">
                      {row.recommendedLinks.map((item, linkIdx) => (
                        <Link
                          key={linkIdx}
                          to={item.href}
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-primary text-white text-sm font-bold hover:bg-blue-800 transition-all no-underline"
                        >
                          {item.label}
                          <ArrowRight size={14} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-40 max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-navy-200 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-100 via-coral-200 to-cream-100"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-6">
                {page.finalCta.title}
              </h2>
              <p className="text-navy-900/60 mb-10 max-w-xl mx-auto text-lg">
                {page.finalCta.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={page.finalCta.primaryHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#20bd5a] transition-all shadow-md hover:-translate-y-0.5"
                >
                  <MessageCircle size={20} /> {page.finalCta.primary}
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TutoringOverview;
