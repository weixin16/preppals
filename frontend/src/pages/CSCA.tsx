import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FlaskConical,
  Languages,
  MoveRight,
  Sparkles,
  Calculator,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import {
  getCSCAContent,
  type Lang,
  type ProgramKey,
  type SubjectKey,
  type TimelineKey,
  type TrackKey,
} from "../content/cscaContent";
import { HERO_STYLES } from "../config/heroStyles";

const SUBJECT_META: Record<
  SubjectKey,
  {
    icon: React.ElementType;
    en: string;
    zh: string;
    chip: string;
    stripe: string;
  }
> = {
  math: {
    icon: Calculator,
    en: "Mathematics",
    zh: "数学",
    chip: "border-blue-100 bg-blue-50 text-blue-700",
    stripe: "bg-blue-500",
  },
  physics: {
    icon: Atom,
    en: "Physics",
    zh: "物理",
    chip: "border-violet-100 bg-violet-50 text-violet-700",
    stripe: "bg-violet-500",
  },
  chemistry: {
    icon: FlaskConical,
    en: "Chemistry",
    zh: "化学",
    chip: "border-teal-100 bg-teal-50 text-teal-700",
    stripe: "bg-teal-500",
  },
  chinese: {
    icon: Languages,
    en: "Professional Chinese",
    zh: "专业中文",
    chip: "border-rose-100 bg-rose-50 text-rose-700",
    stripe: "bg-rose-500",
  },
};

const HERO_BG =
  "linear-gradient(120deg, #fad6b2 0%, #F8E5D4 20%, #f0ddd5 38%, #DCE6FA 68%, #C9DAFF 100%)";

const CSCA: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang: Lang = lang === "zh" ? "zh" : "en";
  const content = getCSCAContent(validLang);

  const [program, setProgram] = useState<ProgramKey>("english-taught");
  const [track, setTrack] = useState<TrackKey>("stem");
  const [timeline, setTimeline] = useState<TimelineKey>("1-3-months");

  const result = content.finder.results[program][track];
  const timelineAction = content.finder.timelineActions[timeline];

  const subjectLabel = (key: SubjectKey) =>
    validLang === "zh" ? SUBJECT_META[key].zh : SUBJECT_META[key].en;

  const jumpToFinder = () => {
    document.getElementById("csca-finder")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const jumpToStructure = () => {
    document.getElementById("csca-structure")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="overflow-x-hidden bg-bg">
      <div className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: HERO_BG }}>
        <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-[8%] w-72 h-72 bg-white/50 rounded-full blur-3xl" />
        <div className="absolute top-16 right-[6%] w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-white/30 blur-3xl" />
      </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1.65fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900 border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
                <Sparkles size={14} className="text-coral-400" />
                <span>{content.hero.pill}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-6 leading-[1.08] max-w-4xl">
                {content.hero.title}
              </h1>

              <p className="text-lg md:text-xl text-navy-900/75 mb-10 leading-relaxed font-medium max-w-2xl">
                {content.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={jumpToStructure}
                  className="px-7 py-4 bg-coral-gradient hover:brightness-110 text-white rounded-full font-bold text-base shadow-glow-coral transition-all"
                >
                  {content.hero.secondary}
                </button>

                <button
                  type="button"
                  onClick={jumpToFinder}
                  className="px-7 py-4 bg-white/80 hover:bg-white text-navy-950 rounded-full font-bold text-base border border-white/80 backdrop-blur-md transition-all inline-flex items-center justify-center gap-2"
                >
                  {content.hero.primary}
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="relative lg:max-w-[25.5rem] lg:ml-auto">
              
              <div className="rounded-[1.75rem] overflow-hidden border border-white/70 shadow-[0_24px_64px_rgba(15,35,90,0.16)] bg-white/75 backdrop-blur-xl">
                <div className="px-5 md:px-6 py-5 border-b border-navy-900/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(245,249,255,0.84)_100%)]">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-navy-900 text-[10px] font-bold uppercase tracking-wider">
                      <CalendarDays size={13} className="text-coral-500" />
                      {content.hero.boardTitle}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {content.hero.boardStatus}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-2">
                    {content.hero.boardDateLabel}
                  </div>
                  <div className="text-2xl md:text-[1.95rem] font-extrabold tracking-tight text-navy-950">
                    {content.hero.boardDate}
                  </div>
                  <div className="mt-2 text-sm text-navy-900/55 flex items-center gap-2">
                    <Clock3 size={14} className="text-coral-500" />
                    {content.hero.boardTimezone}
                  </div>
                </div>

                <div className="px-5 md:px-6 py-5 space-y-3.5">
                  {content.hero.boardItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-between gap-5 border-b border-navy-900/8 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-medium text-navy-900/55">{item.label}</span>
                      <span className="text-sm font-bold text-navy-950 text-right">{item.value}</span>
                    </div>
                  ))}

                  <div className="text-[11px] font-medium text-navy-900/45">
                    {content.hero.boardUpdated}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroCurve fillColor={HERO_STYLES.csca.curveFill} />
      </div>

      <div className="bg-white py-16 md:py-24">
        <Section noPadding>
          <div className="max-w-6xl mx-auto rounded-[2rem] border border-gray-100 bg-white shadow-[0_18px_55px_rgba(15,30,75,0.06)] overflow-hidden">
            <div className="h-4 w-full bg-gradient-to-r from-navy-100 via-coral-200 to-cream-100" />
            <div className="px-6 md:px-10 pt-10 md:pt-12 pb-10 md:pb-12">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 mb-4 shadow-sm">
                  <Clock3 size={14} className="text-coral-500" />
                  <span className="text-xs font-bold uppercase tracking-wide text-navy-900">
                    {content.roadmap.pill}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                  {content.roadmap.title}
                </h2>
                <p className="text-muted text-lg max-w-3xl mx-auto">
                  {content.roadmap.subtitle}
                </p>
              </div>

              <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
                {content.roadmap.steps.map((step, idx) => (
                  <div key={step.index} className={`relative ${idx % 2 === 1 ? "md:pt-16" : ""}`}>
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center text-navy-950 font-extrabold">
                        {step.index}
                      </div>
                      <div className="pt-1">
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral-500 mb-2">
                          {step.eyebrow}
                        </div>
                        <h3 className="text-2xl font-bold text-navy-950 mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-muted leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {idx < content.roadmap.steps.length - 1 && (
                      <div className="hidden md:block absolute left-7 top-[4.4rem] w-px h-20 bg-gradient-to-b from-blue-200 to-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8 z-20 max-w-6xl mx-auto">
            <div className="rounded-[1.75rem] overflow-hidden border border-[#E8DED2] bg-white shadow-[0_18px_45px_rgba(15,30,75,0.06)]">
              <div className="h-1 w-full bg-gradient-to-r from-[#E7EDF8] via-[#F1D8C8] to-[#F7F3EC]" />
              <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E9E1D7]">
                {content.strip.map((item, idx) => (
                  <div key={idx} className="px-6 py-5 md:px-7 md:py-6">
                    <div className="text-[16px] font-bold uppercase tracking-[0.18em] text-coral-500 mb-2">
                      {item.label}
                    </div>
                    <div className="text-base md:text-lg font-bold text-navy-950 leading-snug">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div id="csca-structure" className="bg-bg py-16 md:py-24 border-t border-gray-200/60">
        <Section noPadding>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 mb-4 shadow-sm">
              <Sparkles size={14} className="text-coral-500" />
              <span className="text-xs font-bold uppercase tracking-wide text-navy-900">{content.papers.pill}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">{content.papers.title}</h2>
            {/* <p className="text-muted text-lg max-w-3xl mx-auto">{content.papers.subtitle}</p> */}
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-[0_18px_55px_rgba(15,30,75,0.06)]">
            {content.papers.rows.map((row, idx) => {
              const meta = SUBJECT_META[row.key];
              const Icon = meta.icon;
              return (
                <div
                  key={row.key}
                  className={`grid lg:grid-cols-[0.99fr_1.9fr_0.01fr_0.6fr] gap-6 px-6 md:px-8 py-7 md:py-8 ${
                    idx < content.papers.rows.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="relative pl-5">
                    <span className={`absolute left-0 top-1.5 w-1.5 h-12 rounded-full ${meta.stripe}`} />
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${meta.chip}`}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-950">{row.title}</h3>
                        <p className="text-sm text-navy-900/55">{row.who}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-navy-900/68">{row.note}</p>
                  </div>

                  <div className="grid sm:grid-cols-4 gap-4 lg:gap-6 lg:pt-1 pl-6">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-2">{validLang === "zh" ? "语言" : "Language"}</div>
                      <div className="text-base font-bold text-navy-950">{row.language}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-2">{validLang === "zh" ? "时长" : "Duration"}</div>
                      <div className="text-base font-bold text-navy-950">{row.duration}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-2">{validLang === "zh" ? "题数" : "Questions"}</div>
                      <div className="text-base font-bold text-navy-950">{row.questions}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-2">{validLang === "zh" ? "分数范围" : "Score Range"}</div>
                      <div className="text-base font-bold text-navy-950">{row.scorerange}</div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 flex items-center lg:justify-end">
                    <Link
                      to={`/${validLang}/resources/${row.key === "chinese" ? "chinese" : row.key}`}
                      className="inline-flex items-center gap-2 text-coral-500 font-bold hover:gap-3 transition-all"
                    >
                      {validLang === "zh" ? "查看对应资源" : "See related resources"}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      <div className="bg-bg pb-24">
        <Section noPadding>
          <div className="grid lg:grid-cols-[0.5fr_1.18fr] gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:pt-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 mb-4">
                <CalendarDays size={14} className="text-coral-500" />
                <span className="text-xs font-bold uppercase tracking-wide text-navy-900">
                  {content.format.pill}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
                {content.format.title}
              </h2>
            </div>

            <div className="relative">
              <div className="rounded-[1.75rem] border border-gray-100 bg-white px-4 md:px-6 pt-6 pb-4 shadow-[0_18px_55px_rgba(15,30,75,0.06)]">
                {content.format.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`${idx % 2 === 1 ? "md:ml-10" : "md:mr-10"} ${
                      idx < content.format.items.length - 1 ? "mb-4" : ""
                    }`}
                  >
                    <div className="grid md:grid-cols-[4.5rem_1fr] gap-4 items-start rounded-[1.5rem] border border-gray-100 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] px-5 md:px-6 py-5">
                      <div className="text-3xl md:text-4xl font-extrabold text-navy-200 leading-none">
                        0{idx + 1}
                      </div>

                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral-500 mb-2">
                          {item.label}
                        </div>
                        <p className="text-navy-900/72 leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </div>


      <div id="csca-finder" className="bg-white py-16 md:py-24 border-t border-gray-100">
        <Section noPadding>
          <div className="px-6 item-center text-center md:px-8 pt-8 md:pt-10 pb-10 md:pb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
              <Sparkles size={14} className="text-coral-500" />
              <span className="text-xs font-bold uppercase tracking-wide text-navy-900">{content.finder.pill}</span>
            </div>
              
                <div>
                  <h2 className="text-5xl md:text-4xl font-extrabold text-navy-950 mb-4">{content.finder.title}</h2>
                  {/* <p className="text-muted text-lg leading-relaxed">{content.finder.subtitle}</p> */}
                </div>
          </div>
            
          <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-navy-950 border-dashed border-[3px] bg-[#FAFCFF] shadow-[0_18px_55px_rgba(15,30,75,0.06)]">
            <div className="px-6 md:px-10 pt-8 md:pt-10 pb-7 border-b border-navy-950/30">
              
              <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 items-end">
                <div>
                  
                </div>
                <div className="lg:pl-10 lg:border-l lg:border-gray-100">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-3">
                    {content.finder.labels.result}
                  </div>
                  <div className="text-2xl md:text-[2rem] font-bold leading-tight text-navy-950">{result.title}</div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="px-6 md:px-10 py-8 md:py-10 border-b lg:border-b-0 lg:border-r border-navy-950/30 space-y-8 bg-[#FAFCFF]">
                <div>
                  <div className="text-sm font-bold text-navy-950 mb-3">{content.finder.labels.program}</div>
                  <div className="flex flex-wrap gap-3">
                    {content.finder.programOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setProgram(option.value)}
                        className={`px-4 py-2.5 rounded-full border text-sm font-bold transition-all ${
                          program === option.value
                            ? "bg-navy-950 text-white border-navy-950 shadow-sm"
                            : "bg-white text-navy-900 border-gray-200 hover:border-blue-200"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-navy-950 mb-3">{content.finder.labels.track}</div>
                  <div className="space-y-3">
                    {content.finder.trackOptions.map((option) => {
                      const isActive = track === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setTrack(option.value)}
                          className={`w-full text-left rounded-2xl border px-4 py-4 transition-all ${
                            isActive
                              ? "bg-navy-950 border-navy-950 text-white shadow-sm"
                              : "bg-white/80 border-gray-200 text-navy-950 hover:border-blue-200"
                          }`}
                        >
                          <div className={`font-bold ${isActive ? "text-white" : "text-navy-950"}`}>
                            {option.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-navy-950 mb-3">{content.finder.labels.timeline}</div>
                  <div className="space-y-3">
                    {content.finder.timelineOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setTimeline(option.value)}
                        className={`w-full flex items-center justify-between gap-4 rounded-2xl border px-4 py-3.5 transition-all ${
                          timeline === option.value
                            ? "bg-navy-950 text-white border-navy-950"
                            : "bg-white border-gray-200 text-navy-900 hover:border-blue-200"
                        }`}
                      >
                        <span className="font-bold">{option.label}</span>
                        <ChevronRight size={16} className={timeline === option.value ? "text-coral-300" : "text-navy-900/40"} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 md:px-10 py-8 md:py-10">
                <div className="mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-3">
                    {content.finder.labels.subjects}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {result.subjects.map((subjectKey) => {
                      const meta = SUBJECT_META[subjectKey];
                      const Icon = meta.icon;
                      return (
                        <div
                          key={subjectKey}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold ${meta.chip}`}
                        >
                          <Icon size={16} />
                          <span>{subjectLabel(subjectKey)}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-8">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-900/40 mb-3">
                      {content.finder.labels.why}
                    </div>
                    <div className="space-y-4">
                      {result.notes.map((note, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2 size={18} className="text-coral-500 shrink-0 mt-0.5" />
                          <p className="text-navy-900/72 leading-relaxed">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-bg border border-blue-100 p-4">
                    <div className="text-sm font-bold uppercase tracking-wide text-navy-950 mb-2">
                      {content.hero.boardNoteTitle}
                    </div>
                    <p className="text-sm text-navy-900/72 leading-relaxed">{content.hero.boardNote}</p>
                  </div> 

                  <div className="rounded-[1.75rem] bg-navy-950 text-white p-6 md:p-7">
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold1 mb-3">
                      {content.finder.labels.next}
                    </div>
                    <p className="text-blue-50/90 text-base leading-relaxed mb-6">{timelineAction.title}</p>
                    <Link
                      to={`/${validLang}${timelineAction.link}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold1 text-navy-950 font-bold hover:bg-gold transition-all"
                    >
                      {timelineAction.cta}
                      <MoveRight size={16} />
                    </Link>
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>


      <div className="bg-cream-20 py-16 md:py-24 border-t border-gray-200/60">
        <Section noPadding>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-100 mb-4 shadow-sm">
                <Sparkles size={14} className="text-coral-500" />
                <span className="text-xs font-bold uppercase tracking-wide text-navy-900">{content.mistakes.pill}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950">{content.mistakes.title}</h2>
            </div>

            <div className="space-y-6">
              {content.mistakes.items.map((item, idx) => (
                <div key={idx} className="grid md:grid-cols-[4.5rem_1fr] gap-5 md:gap-6 items-start rounded-[1.75rem] border border-gray-100 bg-white px-6 py-6 md:px-8 md:py-7 shadow-[0_12px_34px_rgba(15,30,75,0.04)]">
                  <div className="text-4xl md:text-5xl font-extrabold text-navy-200 leading-none">0{idx + 1}</div>
                  <div>
                    <h3 className="text-xl font-bold text-navy-950 mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      <div className="bg-white py-16 md:py-24 border-t border-gray-100">
        <Section noPadding>
          
          <div className="max-w-6xl mx-auto rounded-[2rem] overflow-hidden border border-gray-100 shadow-[0_20px_55px_rgba(15,30,75,0.06)] relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#E7EDF8] via-[#F1D8C8] to-[#F7F3EC]"></div>
            <div className="px-6 md:px-10 pt-10 md:pt-12 pb-7 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFDFF_100%)] border-b border-gray-100">
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">{content.routes.title}</h2>
              <p className="text-muted text-lg max-w-3xl">{content.routes.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2">
              <div className="px-6 md:px-10 py-8 md:py-10 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] border-r border-gray-100">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-coral-500 mb-3">{content.routes.self.eyebrow}</div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4">{content.routes.self.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{content.routes.self.desc}</p>
                <Link
                  to={`/${validLang}${content.routes.self.link}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy-950 text-white font-bold hover:bg-navy-900 transition-all"
                >
                  {content.routes.self.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="px-6 md:px-10 py-8 md:py-10 bg-[linear-gradient(145deg,#10285F_0%,#163676_52%,#1C458D_100%)] text-white">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold1 mb-3">{content.routes.guided.eyebrow}</div>
                <h3 className="text-2xl font-bold mb-4">{content.routes.guided.title}</h3>
                <p className="text-blue-50/85 leading-relaxed mb-8">{content.routes.guided.desc}</p>
                <Link
                  to={`/${validLang}${content.routes.guided.link}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold1 text-navy-950 font-bold hover:bg-gold transition-all"
                >
                  {content.routes.guided.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CSCA;
