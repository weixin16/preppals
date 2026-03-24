import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { CONTENT } from "../constants";
import { getLayoutPageContent } from "../content/layoutContent";
import { Language } from "../types";
import logoIcon from "../assets/logo/logo-icon.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { lang = "en" } = useParams<{ lang: string }>();
  const validLang = lang === "en" || lang === "zh" ? (lang as Language) : "en";
  const nav = CONTENT[validLang].nav;
  const footerContent = CONTENT[validLang].footer;
  const layoutCopy = getLayoutPageContent(validLang);
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Check route types
  const darkHeroPaths = [
    `/${validLang}`,
    `/${validLang}/`,
    `/${validLang}/tutoring/one-to-one`,
  ];

  const isDarkHero = darkHeroPaths.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const switchLanguage = () => {
    const newLang = validLang === "en" ? "zh" : "en";
    const currentPath = location.pathname;
    const newPath = currentPath.replace(`/${validLang}`, `/${newLang}`);
    navigate(newPath);
  };

  const navItems = [
    { type: "link", label: nav.home, path: `/${validLang}` },
    { type: "link", label: nav.csca, path: `/${validLang}/csca` },
    {
      type: "dropdown",
      label: nav.resources,
      id: "resources",
      items: [
        {
          label: nav.resourcesDropdown.overview,
          path: `/${validLang}/resources`,
        },
        {
          label: nav.resourcesDropdown.math,
          path: `/${validLang}/resources/math`,
        },
        {
          label: nav.resourcesDropdown.physics,
          path: `/${validLang}/resources/physics`,
        },
        {
          label: nav.resourcesDropdown.chemistry,
          path: `/${validLang}/resources/chemistry`,
        },
        {
          label: nav.resourcesDropdown.chinese,
          path: `/${validLang}/resources/chinese`,
        },
      ],
    },
    {
      type: "dropdown",
      label: nav.tutoring,
      id: "tutoring",
      items: [
        {
          label: nav.tutoringDropdown.overview,
          path: `/${validLang}/tutoring`,
        },
        {
          label: nav.tutoringDropdown.stem,
          path: `/${validLang}/tutoring/stem-classes`,
        },
        {
          label: nav.tutoringDropdown.chinese,
          path: `/${validLang}/tutoring/chinese-classes`,
        },
        {
          label: nav.tutoringDropdown.oneOnOne,
          path: `/${validLang}/tutoring/one-to-one`,
        },
      ],
    },
    { type: "link", label: nav.blog, path: `/${validLang}/blog` },
    { type: "link", label: nav.about, path: `/${validLang}/about` },
  ];

  const isLinkActive = (path: string) => {
    if (path === `/${validLang}`) {
      return (
        location.pathname === `/${validLang}` ||
        location.pathname === `/${validLang}/`
      );
    }
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const isDropdownActive = (id: string) => {
    if (id === "resources") {
      return (
        location.pathname === `/${validLang}/resources` ||
        location.pathname.startsWith(`/${validLang}/resources/`)
      );
    }
    if (id === "tutoring") {
      return (
        location.pathname === `/${validLang}/tutoring` ||
        location.pathname.startsWith(`/${validLang}/tutoring/`)
      );
    }
    return false;
  };

  const getDesktopLinkClass = (active: boolean) => {
    const activeClass =
      isDarkHero && !scrolled
        ? "text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:rounded-full after:bg-white"
        : "text-coral-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:rounded-full after:bg-coral-500";

    return `relative text-[15px] font-medium transition-colors ${active ? activeClass : linkHover}`;
  };

  const getMobileLinkClass = (active: boolean) =>
    active
      ? "text-lg font-bold text-coral-500 py-4 border-b border-gray-100"
      : "text-lg font-bold text-navy-950 py-4 border-b border-gray-100";

  // Logic for styling based on page type and scroll state
  let navClasses = "bg-white/95 backdrop-blur-md text-navy-950 shadow-sm py-4";
  let logoBg = "bg-navy-900 text-white";
  let linkHover = "hover:text-coral-500";
  let menuIconColor = "text-navy-950";

  if (!scrolled) {
    if (isDarkHero) {
      // Dark hero pages -> white text
      navClasses = "bg-transparent text-white py-6";
      logoBg = " text-white";
      linkHover = "hover:text-white/80";
      menuIconColor = "text-white";
    } else {
      // Light hero pages -> navy text
      navClasses = "bg-transparent text-navy-950 py-6";
      logoBg = "bg-navy-900 text-white";
      linkHover = "hover:text-coral-500";
      menuIconColor = "text-navy-950";
    }
  }

  const dropdownText = "text-navy-900";

  return (
    <div className="min-h-screen flex flex-col font-sans text-navy-950 selection:bg-coral-500/20 overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClasses}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Link
            to={`/${validLang}`}
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight group"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${logoBg}`}
            >
              <img
                src={logoIcon}
                alt="PrepPals Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="font-extrabold text-xl tracking-tight">
              {isDarkHero && !scrolled ? (
                <span className="text-white">PrepPals</span>
              ) : (
                <>
                  <span className="text-navy-950">Prep</span>
                  <span className="text-coral-500">Pals</span>
                </>
              )}
            </div>
          </Link>

          {/* Center: Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item: any, idx) =>
              item.type === "link" ? (
                <Link
                  key={idx}
                  to={item.path}
                  className={getDesktopLinkClass(isLinkActive(item.path))}
                >
                  {item.label}
                </Link>
              ) : (
                <div key={idx} className="relative group py-2 cursor-pointer">
                  <div
                    className={`${getDesktopLinkClass(isDropdownActive(item.id))} inline-flex items-center gap-1.5 whitespace-nowrap`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={3}
                      className="shrink-0 transition-transform group-hover:translate-y-[1px]"
                    />
                  </div>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white rounded-2xl shadow-soft border border-navy-900/5 p-2 flex flex-col gap-1 overflow-hidden">
                      {item.items.map((sub: any, sIdx: number) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className={`text-sm font-medium ${dropdownText} hover:bg-navy-50 hover:text-navy-800 px-4 py-2.5 rounded-xl transition-colors block text-left`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={switchLanguage}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${linkHover}`}
            >
              <Globe size={16} />
              {layoutCopy.languageDesktop}
            </button>
            <Link
              to={`/${validLang}/contact`}
              className="bg-coral-gradient px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-glow-coral hover:brightness-110 active:scale-95 transition-all"
            >
              {nav.contactBtn}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={menuIconColor} />
            ) : (
              <Menu size={24} className={menuIconColor} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 right-0 bg-white min-h-screen pt-24 px-6 pb-12 flex flex-col gap-2 animate-in slide-in-from-top-4 duration-300 shadow-2xl overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navItems.map((item: any, idx) =>
                item.type === "link" ? (
                  <Link
                    key={idx}
                    to={item.path}
                    className={getMobileLinkClass(isLinkActive(item.path))}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={idx} className="border-b border-gray-100 py-2">
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.id ? null : item.id,
                        )
                      }
                      className={`flex items-center justify-between w-full text-lg font-bold py-2 ${
                        isDropdownActive(item.id) ? "text-coral-500" : "text-navy-950"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={20}
                        className={`transform transition-transform duration-300 ${activeDropdown === item.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${activeDropdown === item.id ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                    >
                      <div className="flex flex-col gap-2 pl-4 pb-2 bg-navy-50 rounded-xl">
                        {item.items.map((sub: any, sIdx: number) => (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            className="text-base text-navy-800 py-2.5 font-medium"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={switchLanguage}
                className="flex items-center justify-center gap-2 text-base font-semibold text-navy-600 py-3 bg-gray-50 rounded-xl"
              >
                <Globe size={18} />
                Switch to {layoutCopy.languageMobile}
              </button>
              <Link
                to={`/${validLang}/contact`}
                className="bg-coral-500 text-white text-center px-6 py-4 rounded-xl text-base font-bold shadow-lg"
              >
                {nav.contactBtn}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl text-navy-900 mb-6">
                <div className="w-8 h-8 bg-navy-900 text-white rounded-lg flex items-center justify-center">
                  <img
                    src={logoIcon}
                    alt="PrepPals Logo"
                    className="w-6 h-6 object-contain"
                  />
                </div>
                PrepPals
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {layoutCopy.brandDescription}
              </p>
            </div>

            {layoutCopy.footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-navy-950 mb-6">{section.title}</h4>
                <ul className="space-y-4 text-sm text-muted">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="hover:text-coral-500 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
            <p>{footerContent.disclaimer}</p>
            <p>{footerContent.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;