import React, { useMemo, useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  Mail,
  MessageCircle,
  Instagram,
  BookHeart,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Section from "../components/Section";
import HeroCurve from "../components/HeroCurve";
import { getContactPageContent } from "../content/contactContent";
import { CONTENT } from "../constants";
import { HERO_STYLES } from "../config/heroStyles";
import { Language } from "../types";

const Contact: React.FC = () => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const t = CONTENT[validLang].contact;
  const page = getContactPageContent(validLang);
  const FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL as string | undefined;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    document.title = page.metaTitle;
  }, [validLang]);

  const initialTimeline = useMemo(() => {
    const value = searchParams.get("timeline");
    return value || "";
  }, [searchParams]);

  const initialIntent = useMemo(() => {
    const value = searchParams.get("intent");
    return value || "";
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    timeline: initialTimeline,
    helpType: initialIntent,
    subjects: [] as string[],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<
    null | "success" | "error" | "missingBackend"
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectToggle = (subject: string) => {
    setFormData((prev) => {
      const exists = prev.subjects.includes(subject);
      return {
        ...prev,
        subjects: exists
          ? prev.subjects.filter((s) => s !== subject)
          : [...prev.subjects, subject],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!FORM_URL) {
      setSubmitState("missingBackend");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = new URLSearchParams({
        lang: validLang,
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        country: formData.country,
        timeline: formData.timeline,
        helpType: formData.helpType,
        subjects: formData.subjects.join(", "),
        message: formData.message,
        page: window.location.pathname,
        submittedAt: new Date().toISOString(),
      });

      await fetch(FORM_URL, {
        method: "POST",
        body: payload,
        mode: "no-cors",
      });

      setSubmitState("success");

      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        country: "",
        timeline: "",
        helpType: "",
        subjects: [],
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSubmitState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans text-navy-950">
      <div
        className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden"
        style={{ background: HERO_STYLES.clean.background }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-950 mb-6">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-navy-900/70 max-w-2xl mx-auto font-medium">
            {t.subtitle}
          </p>
        </div>
        <HeroCurve fillColor={HERO_STYLES.clean.curveFill} />
      </div>

      <div className="bg-white py-20 relative z-10 items-center">
        <Section noPadding>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 xl:gap-10 items-center">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4">
              {page.channels.map((item) => {
                const toneClass =
                  item.tone === "whatsapp"
                    ? "bg-[#25D366]/10 text-[#075e54] border-[#25D366]/20 hover:bg-[#25D366]/15"
                    : item.tone === "instagram"
                      ? "bg-pink-50 text-pink-700 border-pink-100 hover:bg-pink-100/70"
                      : item.tone === "email"
                        ? "bg-blue-50 text-primary border-blue-100 hover:bg-blue-100/70"
                        : "bg-red-50 text-red-700 border-red-100 hover:bg-red-100/70";

                const Icon =
                  item.key === "whatsapp"
                    ? MessageCircle
                    : item.key === "instagram"
                      ? Instagram
                      : item.key === "email"
                        ? Mail
                        : BookHeart;

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`min-h-[118px] rounded-2xl border px-5 py-5 md:px-6 md:py-6 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${toneClass}`}
                  >
                    {/* icon block */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 self-center">
                      <Icon size={24} />
                    </div>

                    {/* text block */}
                    <div className="min-h-[48px] flex flex-col justify-center">
                      <h3 className="font-bold text-base md:text-lg leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-80 mt-1 leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Right column */}
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.name}
                    </label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.email}
                    </label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.whatsapp}
                    </label>
                    <input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.country}
                    </label>
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.timeline}
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">{t.form.timelinePlaceholder}</option>
                      {t.form.timelineOptions.map((opt, idx) => (
                        <option key={idx} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted mb-1">
                      {t.form.helpType}
                    </label>
                    <select
                      name="helpType"
                      value={formData.helpType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    >
                      <option value="">{t.form.helpPlaceholder}</option>
                      {t.form.helpOptions.map((opt, idx) => (
                        <option key={idx} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-3">
                    {t.form.subjects}
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {t.form.subjectOptions.map((subject, idx) => {
                      const selected = formData.subjects.includes(subject.value);
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSubjectToggle(subject.value)}
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                            selected
                              ? "bg-coral-500 text-white border-coral-500"
                              : "bg-white text-navy-900 border-border hover:border-coral-300"
                          }`}
                        >
                          {subject.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {isSubmitting
                    ? validLang === "zh"
                      ? "提交中..."
                      : "Sending..."
                    : t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </Section>
      </div>

      {submitState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-navy-950/25 backdrop-blur-sm"
            onClick={() => setSubmitState(null)}
          />

          <div className="relative w-full max-w-md rounded-[28px] border border-white/60 bg-white/85 backdrop-blur-xl shadow-2xl p-7 text-center">
            <div
              className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${
                submitState === "success"
                  ? "bg-coral-50 text-coral-500"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {submitState === "success" ? (
                <CheckCircle2 size={28} />
              ) : (
                <AlertCircle size={28} />
              )}
            </div>

            <h3 className="text-2xl font-extrabold text-navy-950 mb-2">
              {submitState === "success"
                ? validLang === "zh"
                  ? "提交成功"
                  : "Message sent"
                : submitState === "missingBackend"
                  ? validLang === "zh"
                    ? "尚未连接表单"
                    : "Form not connected"
                  : validLang === "zh"
                    ? "提交失败"
                    : "Something went wrong"}
            </h3>

            <p className="text-sm md:text-base text-navy-900/70 leading-relaxed mb-6">
              {submitState === "success"
                ? page.submitSuccess
                : submitState === "missingBackend"
                  ? page.missingBackend
                  : page.submitError}
            </p>

            <button
              type="button"
              onClick={() => setSubmitState(null)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90"
            >
              {validLang === "zh" ? "知道了" : "Got it"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;