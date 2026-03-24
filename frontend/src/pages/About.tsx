import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BookOpen,
  CheckCircle2,
  Compass,
  Heart,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import HeroCurve from "../components/HeroCurve";
import Section from "../components/Section";
import { HERO_STYLES } from "../constants";
import { getAboutPageContent } from "../content/aboutContent";
import { Language } from "../types";

const featureIcons: Record<string, LucideIcon> = {
  direction: Compass,
  structure: BookOpen,
  community: Users,
};

const valueIcons: Record<string, LucideIcon> = {
  clarity: Compass,
  empathy: Heart,
  growth: TrendingUp,
  togetherness: Users,
};

const About: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "zh" ? "zh" : "en";
  const page = getAboutPageContent(validLang as Language);

  useEffect(() => {
    document.title = page.metaTitle;
    window.scrollTo(0, 0);
  }, [page.metaTitle]);

  return (
    <div className="font-sans text-navy-950 bg-bg overflow-x-hidden">
      {/* HERO */}
      <div
        className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden text-center px-6"
        style={{ background: HERO_STYLES.about.background }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-white/70 px-4 py-2 rounded-full mb-8 shadow-sm">
            <Sparkles size={14} className="text-coral-500" />
            <span className="text-xs md:text-sm font-bold tracking-wide text-navy-900">
              {page.heroPill}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-950 mb-6 leading-tight">
            {page.heroTitle}
          </h1>

          <p className="text-lg md:text-xl text-navy-900/75 font-medium max-w-3xl mx-auto leading-relaxed">
            {page.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`/${validLang}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white border border-navy-100 text-navy-900 font-bold rounded-full hover:bg-navy-50 transition-all shadow-sm"
            >
              {page.heroSecondary}
            </Link>

            <a
              href={page.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg"
            >
              <MessageCircle size={18} />
              {page.heroPrimary}
            </a>
          </div>
        </div>

        <HeroCurve fillColor={HERO_STYLES.about.curveFill} />
      </div>

       {/* WHAT PREPPALS OFFERS */}
      <div className="bg-white py-16 md:py-24">
        <Section noPadding>
          <div className="text-center mb-12">
            <div className="text-lg font-bold uppercase tracking-[0.22em] text-coral-500 mb-4">
              {page.offer.eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950">
              {page.offer.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {page.offer.items.map((item, idx) => {
              const Icon = featureIcons[item.key] || BookOpen;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-soft border border-navy-50 hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-navy-800 flex items-center justify-center mb-6">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* STORY */}
      <div className="bg-white py-8 md:py-12 relative z-10">
        <Section noPadding>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-gray-100">
              <div className="text-lg font-bold uppercase tracking-[0.22em] text-coral-500 mb-4">
                {page.story.eyebrow}
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-5 leading-tight">
                {page.story.title}
              </h2>

              <p className="text-lg md:text-xl text-navy-900 leading-relaxed mb-5">
                {page.story.lead}
              </p>

              <p className="text-base md:text-lg text-muted leading-relaxed">
                {page.story.body}
              </p>
            </div>

            <div className="rounded-3xl p-8 md:p-10 border border-navy-100 bg-gradient-to-br from-white to-[#F7FAFF] shadow-soft">
              <div className="w-12 h-12 bg-navy-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-navy-900/10">
                <Sparkles size={20} />
              </div>

              <h3 className="text-2xl font-bold text-navy-950 mb-6">
                {page.challengesTitle}
              </h3>

              <div className="space-y-4">
                {page.challenges.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-coral-500 shrink-0 mt-0.5"
                    />
                    <p className="text-muted leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* VALUES & MISSION */}
      <div className="bg-white py-16 md:py-20">
        <Section noPadding>
          <div className="text-center mb-12">
            <div className="text-lg font-bold uppercase tracking-[0.22em] text-coral-500 mb-4">
              {page.values.eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 max-w-3xl mx-auto">
              {page.values.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {page.values.items.map((item, idx) => {
              const Icon = valueIcons[item.key] || Sparkles;

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-gray-100 bg-[#FCFDFF] p-7 md:p-8 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-gray-100 text-navy-900 flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-navy-950 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-28 max-w-5xl mx-auto rounded-[2rem] border border-gray-100 bg-white shadow-soft overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-navy-100 via-coral-200 to-cream-100" />

            <div className="p-8 md:p-12 text-center">
              <div className="text-lg font-bold uppercase tracking-[0.22em] text-coral-500 mb-5">
                {page.mission.eyebrow}
              </div>

              <p className="text-2xl md:text-4xl font-extrabold text-navy-950 leading-snug max-w-4xl mx-auto">
                {page.mission.text}
              </p>
            </div>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <div className="bg-bg py-16 md:py-24">
        <Section noPadding>
          <div className="bg-navy-950 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[720px] h-[720px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                {page.cta.title}
              </h2>

              <p className="text-blue-100/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                {page.cta.text}
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href={page.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  {page.cta.primary}
                </a>

                <Link
                  to={`/${validLang}/contact`}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all"
                >
                  {page.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default About;