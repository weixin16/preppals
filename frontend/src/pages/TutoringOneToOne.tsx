import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowDownRight,
  BookOpenCheck,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Target,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import HeroBreadcrumb from "../components/HeroBreadcrumb";
import { Language } from "../types";
import { getTutoringOneOnOneContent } from "../content/tutoringDetailContent";

const TutoringOneOnOne: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const page = getTutoringOneOnOneContent(validLang);

  useEffect(() => {
    document.title = `${page.title} - PrepPals`;
    window.scrollTo(0, 0);
  }, [page.title]);

  const getAddOnIcon = (
    icon: "focus" | "plan" | "feedback" | "flexible",
  ) => {
    if (icon === "focus") return Target;
    if (icon === "plan") return BookOpenCheck;
    if (icon === "feedback") return MessageCircle;
    return Clock3;
  };

  return (
    <div className="font-sans bg-white text-navy-950 min-h-screen overflow-x-hidden">
      {/* HERO */}
      <div
        className="relative pt-32 pb-30 md:pt-40 md:pb-36 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #102A70 0%, #183E99 52%, #0D1F55 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FDE1C3]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-12 bottom-20 w-44 h-44 bg-blue-300/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <HeroBreadcrumb
            theme="dark"
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

          <p className="text-sm md:text-base font-bold uppercase tracking-[0.22em] text-[#FDE1C3] mb-5">
            {page.categoryLine}
          </p>

          <h1 className="text-[3.15rem] md:text-[5.3rem] lg:text-[5rem] font-extrabold mb-6 leading-[0.98] tracking-[-0.03em] text-white">
            {page.title}
          </h1>

          <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed font-medium">
            {page.subtitle}
          </p>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={page.heroLinkHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#fcd2a8] text-navy-900 font-bold rounded-full hover:bg-[#FDE1C3] transition-colors shadow-md"
            >
              {page.heroLinkLabel}
              <ArrowDownRight size={18} />
            </a>
          </div>
        </div>

        <HeroCurve fillColor="#FFFFFF" />
      </div>

      {/* PAIN POINTS */}
      <div className="bg-white relative z-10">
        <Section className="pt-10 md:pt-35">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-[0.18em] mb-5">
                Premium Support
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-5 leading-tight">
                {page.painTitle}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {page.painIntro}
              </p>
            </div>

            <div className="space-y-4">
              {page.painPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 px-0 py-5 border-b border-blue-100/80 last:border-b-0"
                >
                  <div className="w-10 h-10 rounded-full bg-navy-950 text-white flex items-center justify-center text-sm font-extrabold shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <p className="text-lg md:text-xl font-semibold text-navy-950 leading-relaxed pt-1">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* ONE-TO-ONE FLOW + CTA */}
      <div id="private-support" className="bg-white mb-24 border-t border-navy-900/5">
        <Section noPadding>
          <div className="rounded-3xl bg-primary text-white px-6 md:px-10 py-14 md:py-16 overflow-hidden">
            <div className="text-center mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-[#FDE1C3] mb-4">
                {page.processBadge}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                {page.processTitle}
              </h2>
              <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                {page.processSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {page.stages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl relative"
                >
                  <div className="text-5xl font-bold text-white/15 absolute top-2 right-4">
                    {stage.number}
                  </div>
                  <div className="text-[#FDE1C3] font-bold uppercase text-sm tracking-wider mb-2">
                    {stage.stage}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-4">
                {page.addOnsGrid.map((item, idx) => {
                  const Icon = getAddOnIcon(item.icon);

                  return (
                    <div
                      key={idx}
                      className="bg-[#FDE1C3]/20 p-6 rounded-2xl text-center text-primary font-semibold border border-orange-100"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-white/80 border border-orange-100 flex items-center justify-center text-primary">
                        <Icon size={20} />
                      </div>
                      <div className="text-sm md:text-base">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-primary mb-4">
                {page.addOnsTitle}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {page.addOnsSubtitle}
              </p>

              <div className="space-y-4 mb-8">
                {page.addOnsList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={page.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 px-6 py-3 text-base bg-primary text-white hover:bg-blue-800 no-underline"
              >
                <MessageCircle className="h-4 w-4" />
                {page.ctaLabel}
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default TutoringOneOnOne;
