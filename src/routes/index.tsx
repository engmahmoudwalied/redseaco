import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  Sun,
  Moon,
  Globe,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Award,
  Users,
  HardHat,
  Truck,
  Sparkles,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

import {
  IMAGES,
  CONTACT_INFO,
  GALLERY_ITEMS_AR,
  GALLERY_ITEMS_EN,
  CONTENT,
} from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شركة البحر الأحمر للمقاولات العامة ورصف الطرق | Red Sea for Roads" },
      {
        name: "description",
        content:
          "شركة متخصصة في مقاولات ورصف الطرق، أعمال الأسفلت، العزل، التجفيف، التوريدات والترميم بمحافظة البحر الأحمر (الغردقة، رأس غارب، سفاجا، مرسى علم، الجونة).",
      },
    ],
  }),
  component: Index,
});

function Index() {
  // --- Language & Theme State ---
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectCategory, setProjectCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<any>(null);

  // Gallery Carousel Slider State
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Contact Form State
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const [contactSubmitting, setContactSubmitting] = useState(false);

  // Detect device language & system dark mode on initial mount
  useEffect(() => {
    // Language detection
    const savedLang = localStorage.getItem("redsea_lang");
    if (savedLang === "ar" || savedLang === "en") {
      setLang(savedLang);
    } else if (typeof navigator !== "undefined") {
      const userLang = (navigator.language || "").toLowerCase();
      if (userLang.startsWith("ar")) {
        setLang("ar");
      } else {
        setLang("en");
      }
    }

    // Theme detection
    const savedTheme = localStorage.getItem("redsea_theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, []);

  // Update HTML document attributes when language changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("redsea_lang", lang);
  }, [lang]);

  // Update HTML dark class when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("redsea_theme", theme);
  }, [theme]);

  const t = CONTENT[lang];
  const galleryItems = lang === "ar" ? GALLERY_ITEMS_AR : GALLERY_ITEMS_EN;

  // Auto carousel slide timer (2 items per slide every 1.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 2 >= galleryItems.length ? 0 : prev + 2));
    }, 1500);
    return () => clearInterval(timer);
  }, [isPaused, galleryItems.length]);

  const prevSlidePair = () => {
    setSlideIndex((prev) =>
      prev - 2 < 0 ? Math.floor((galleryItems.length - 1) / 2) * 2 : prev - 2
    );
  };

  const nextSlidePair = () => {
    setSlideIndex((prev) => (prev + 2 >= galleryItems.length ? 0 : prev + 2));
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectCategory === "all") return t.projects.items;
    if (projectCategory === "roads")
      return t.projects.items.filter((p) => p.category.includes("طرق") || p.category.includes("Roads"));
    if (projectCategory === "insulation")
      return t.projects.items.filter((p) => p.category.includes("عزل") || p.category.includes("Insulation"));
    if (projectCategory === "strengthening")
      return t.projects.items.filter((p) => p.category.includes("تدعيم") || p.category.includes("Strengthening"));
    if (projectCategory === "supply")
      return t.projects.items.filter((p) => p.category.includes("توريد") || p.category.includes("Supplies"));
    return t.projects.items;
  }, [projectCategory, t]);

  // Lightbox handlers
  const openLightbox = (item: any) => setActiveImage(item);
  const closeLightbox = () => setActiveImage(null);

  const prevLightboxImage = () => {
    if (!activeImage) return;
    const currentIndex = galleryItems.findIndex((g) => g.id === activeImage.id);
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setActiveImage(galleryItems[prevIndex]);
  };

  const nextLightboxImage = () => {
    if (!activeImage) return;
    const currentIndex = galleryItems.findIndex((g) => g.id === activeImage.id);
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setActiveImage(galleryItems[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 transition-colors duration-300 dark:bg-[#0b1329] dark:text-slate-100 font-sans">
      {/* TOP ANNOUNCEMENT & CONTACT STRIP */}
      <div className="bg-[#0a1730] text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-8">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Phone className="size-3.5 text-red-500" />
              <span dir="ltr">{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-red-400 transition-colors"
            >
              <Mail className="size-3.5 text-red-500" />
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="size-3.5 text-red-500" />
              <span>{lang === "ar" ? CONTACT_INFO.locationAr : CONTACT_INFO.locationEn}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-slate-400 hidden lg:inline">
              {CONTACT_INFO.domain}
            </span>
            <div className="h-3.5 w-px bg-slate-700 hidden lg:block" />
            <div className="flex items-center gap-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center gap-1.5 rounded-lg bg-emerald-600/90 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-emerald-500 transition-all shadow-sm"
              >
                <WhatsAppIcon className="size-3.5" />
                <span>{lang === "ar" ? "واتساب" : "WhatsApp"}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email"
                className="flex items-center gap-1.5 rounded-lg bg-red-600/90 px-2.5 py-1 text-[11px] font-bold text-white hover:bg-red-500 transition-all shadow-sm"
              >
                <Mail className="size-3.5" />
                <span>{lang === "ar" ? "البريد الإلكتروني" : "Email"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/80 dark:bg-[#0f172a]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={IMAGES.logo}
              alt="Red Sea For Roads Company Logo"
              width={1584}
              height={672}
              className="h-10 w-auto sm:h-12 object-contain filter drop-shadow-sm transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {t.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-slate-700 transition-all hover:bg-red-50 hover:text-red-600 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-red-400"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? <Moon className="size-4 text-slate-700" /> : <Sun className="size-4 text-amber-400" />}
            </button>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <Globe className="size-3.5 text-red-600 dark:text-red-400" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md active:scale-95"
            >
              <WhatsAppIcon className="size-4" />
              <span>واتساب</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-700 lg:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-lg lg:hidden dark:border-slate-800 dark:bg-[#0f172a]/95 rise">
            <div className="grid gap-1">
              {t.nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-red-50 hover:text-red-600 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-red-400"
                >
                  {n.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-sm"
                >
                  <WhatsAppIcon className="size-4" />
                  <span>تواصل عبر واتساب</span>
                </a>
                <a
                  href={`tel:+${CONTACT_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-slate-900 py-2.5 text-sm font-bold text-white dark:bg-slate-800"
                >
                  <Phone className="size-4 text-red-500" />
                  <span>اتصال مباشر: {CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="top" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.luxuryHighwayHero}
            alt="Luxury Paved Highway Red Sea Coast"
            width={2338}
            height={1653}
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a] via-[#09152a]/75 to-[#0f2347]/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-8 text-center">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/60 backdrop-blur-md px-4 py-1.5 text-xs font-bold text-red-300 shadow-glow mb-6 rise">
            <Sparkles className="size-3.5 text-red-400" />
            <span>{t.hero.tag}</span>
          </div>

          {/* Main Title */}
          <h1 className="mx-auto max-w-5xl text-3xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-none rise">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-lg md:text-xl font-normal rise">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rise">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-emerald-500 hover:scale-105 active:scale-95"
            >
              <WhatsAppIcon className="size-5" />
              <span>{t.hero.ctaPrimary}</span>
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95"
            >
              <span>{t.hero.ctaSecondary}</span>
              {lang === "ar" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
            </a>

            <a
              href={`tel:+${CONTACT_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2.5 rounded-xl border border-red-500/50 bg-red-600/20 backdrop-blur-md px-7 py-3.5 text-sm font-bold text-red-300 transition-all hover:bg-red-600 hover:text-white"
            >
              <Phone className="size-4" />
              <span dir="ltr">{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>

          {/* Key Stats Counter Grid */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-6 rise">
            {t.hero.stats.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 sm:p-6 backdrop-blur-md shadow-card text-center"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-red-500 tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-300">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: PROFILE / بيانات الشركة */}
      <section id="profile" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 text-center sm:text-start">
          <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.profile.kicker}</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.profile.title}
          </h2>
          <div className="mt-3 h-1 w-20 bg-red-600 rounded-full sm:mx-0 mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.profile.items.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-panel dark:border-slate-800 dark:bg-[#132244]"
            >
              <div className="absolute top-0 right-0 h-1.5 w-full bg-slate-200 group-hover:bg-red-600 transition-colors" />
              <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">
                {p.label}
              </div>
              <div className="text-sm sm:text-base font-semibold leading-relaxed text-slate-800 dark:text-slate-100">
                {p.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: VISION & MISSION / الرؤية والرسالة */}
      <section id="vision" className="border-y border-slate-200 bg-slate-100/60 py-16 sm:py-24 dark:border-slate-800 dark:bg-[#0f1b36]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Vision & Mission Text Cards */}
            <div className="space-y-8">
              <div className="mb-6">
                <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.vision.kicker}</span>
                <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {t.vision.title}
                </h2>
                <div className="mt-3 h-1 w-20 bg-red-600 rounded-full" />
              </div>

              {/* Vision Card */}
              <div className="rounded-2xl border-l-4 border-red-600 bg-white p-6 sm:p-8 shadow-card dark:bg-[#132244] dark:border-red-500">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
                    <Building2 className="size-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {t.vision.visionTitle}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.vision.visionBody}
                </p>
              </div>

              {/* Mission Card */}
              <div className="rounded-2xl border-l-4 border-slate-900 bg-white p-6 sm:p-8 shadow-card dark:bg-[#132244] dark:border-slate-400">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                    <Award className="size-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {t.vision.missionTitle}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.vision.missionBody}
                </p>
              </div>
            </div>

            {/* Feature Photo Showcase */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-panel dark:border-slate-800 dark:bg-slate-900 group">
              <img
                src={IMAGES.rollerPaving}
                alt="Asphalt Road Roller Construction Site"
                width={1269}
                height={886}
                loading="lazy"
                decoding="async"
                className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  مواقع التنفيذ الميداني
                </span>
                <h4 className="mt-2 text-lg font-bold text-white">
                  أحدث معدات الرصف والدك الإنعكاسي لضمان الجودة
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUES / القيم الجوهرية */}
      <section id="values" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="mb-12 text-center sm:text-start">
          <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.values.kicker}</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.values.title}
          </h2>
          <div className="mt-3 h-1 w-20 bg-red-600 rounded-full sm:mx-0 mx-auto" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.values.items.map((v) => (
            <div
              key={v.no}
              className="group rounded-2xl border border-slate-200/90 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/50 hover:shadow-panel dark:border-slate-800 dark:bg-[#132244]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-red-600 text-sm font-extrabold text-white shadow-sm group-hover:scale-110 transition-transform">
                  {v.no}
                </span>
                <ShieldCheck className="size-6 text-slate-300 group-hover:text-red-500 transition-colors dark:text-slate-600" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {v.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: CLASSIFICATION & SERVICES / التصنيف والخدمات */}
      <section id="classification" className="border-y border-slate-200 bg-slate-100/60 py-16 sm:py-24 dark:border-slate-800 dark:bg-[#0f1b36]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Services List */}
            <div>
              <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.classification.kicker}</span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t.classification.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base font-semibold text-slate-600 dark:text-slate-300">
                {t.classification.servicesTitle}
              </p>

              <div className="mt-8 space-y-4">
                {t.classification.services.map((s) => (
                  <div
                    key={s.no}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all hover:border-red-500/40 dark:border-slate-800 dark:bg-[#132244]"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-100 text-xs font-black text-red-600 dark:bg-red-950/80 dark:text-red-400">
                      {s.no}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {s.name}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Road Network Scope Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-panel dark:border-slate-800 dark:bg-slate-900 group">
              <img
                src={IMAGES.desertRoad}
                alt="Red Sea Desert Road Construction Scope"
                width={1583}
                height={1117}
                loading="lazy"
                decoding="async"
                className="h-[520px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-bold text-white border border-slate-700">
                  نطاق العمل: محافظة البحر الأحمر
                </span>
                <h4 className="mt-3 text-xl font-bold text-white">
                  الغردقة – رأس غارب – سفاجا – مرسى علم – الجونة – سهل حشيش
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PROJECTS PORTFOLIO / المشروعات السابقة */}
      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 text-center sm:text-start">
          <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.projects.kicker}</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.projects.title}
          </h2>
          <div className="mt-3 h-1 w-20 bg-red-600 rounded-full sm:mx-0 mx-auto" />
        </div>

        {/* Filter Tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setProjectCategory("all")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${projectCategory === "all"
              ? "bg-red-600 text-white shadow-md"
              : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
              }`}
          >
            {t.projects.filterAll}
          </button>
          <button
            onClick={() => setProjectCategory("roads")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${projectCategory === "roads"
              ? "bg-red-600 text-white shadow-md"
              : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
              }`}
          >
            {t.projects.filterRoads}
          </button>
          <button
            onClick={() => setProjectCategory("insulation")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${projectCategory === "insulation"
              ? "bg-red-600 text-white shadow-md"
              : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
              }`}
          >
            {t.projects.filterInsulation}
          </button>
          <button
            onClick={() => setProjectCategory("strengthening")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${projectCategory === "strengthening"
              ? "bg-red-600 text-white shadow-md"
              : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
              }`}
          >
            {t.projects.filterStrengthening}
          </button>
          <button
            onClick={() => setProjectCategory("supply")}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${projectCategory === "supply"
              ? "bg-red-600 text-white shadow-md"
              : "bg-slate-200/80 text-slate-700 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
              }`}
          >
            {t.projects.filterSupply}
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/50 hover:shadow-panel dark:border-slate-800 dark:bg-[#132244]"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {p.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-extrabold text-red-700 dark:bg-red-950/80 dark:text-red-300">
                    <MapPin className="size-3" />
                    {p.loc}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {p.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 size-2 shrink-0 rounded-full bg-red-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>{p.category}</span>
                <CheckCircle2 className="size-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: GALLERY & LIGHTBOX / معرض الصور والأنيميشن الاحترافي (Carousel Slider) */}
      <section id="gallery" className="border-y border-slate-200 bg-slate-100/60 py-16 sm:py-24 dark:border-slate-800 dark:bg-[#0f1b36]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.gallery.kicker}</span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {t.gallery.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {t.gallery.subtitle}
              </p>
              <div className="mt-3 h-1 w-20 bg-red-600 rounded-full" />
            </div>

            {/* Carousel Controls Header */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <button
                onClick={prevSlidePair}
                aria-label="Previous Slide Pair"
                className="flex size-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-sm transition-all hover:bg-red-600 hover:text-white hover:border-red-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-red-600"
              >
                {lang === "ar" ? <ChevronRight className="size-6" /> : <ChevronLeft className="size-6" />}
              </button>

              {/* Slide Pair Step Indicator */}
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">
                <span>{Math.floor(slideIndex / 2) + 1}</span>
                <span className="text-slate-400">/</span>
                <span>{Math.ceil(galleryItems.length / 2)}</span>
              </div>

              <button
                onClick={nextSlidePair}
                aria-label="Next Slide Pair"
                className="flex size-11 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-800 shadow-sm transition-all hover:bg-red-600 hover:text-white hover:border-red-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-red-600"
              >
                {lang === "ar" ? <ChevronLeft className="size-6" /> : <ChevronRight className="size-6" />}
              </button>
            </div>
          </div>

          {/* Interactive Dual-Card Carousel Frame */}
          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[0, 1].map((offset) => {
                const itemIndex = (slideIndex + offset) % galleryItems.length;
                const g = galleryItems[itemIndex];
                if (!g) return null;

                return (
                  <div
                    key={g.id + "-" + slideIndex}
                    onClick={() => openLightbox(g)}
                    className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-panel transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900 animate-in fade-in zoom-in-95 duration-300"
                  >
                    {/* High-Res Image Display */}
                    <div className="h-72 sm:h-96 w-full overflow-hidden bg-slate-950">
                      <img
                        src={g.src}
                        alt={g.title}
                        width={1400}
                        height={1000}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Gradient Overlay & Content Badge */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent flex flex-col justify-between p-6 sm:p-8 text-white">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                          <Sparkles className="size-3.5 text-red-200" />
                          <span>{g.category}</span>
                        </span>
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-slate-900/80 backdrop-blur-md text-white border border-slate-700 group-hover:bg-red-600 transition-colors">
                          <ZoomIn className="size-5" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug group-hover:text-red-300 transition-colors">
                          {g.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                          {g.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dots Carousel Pagination Bar */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: Math.ceil(galleryItems.length / 2) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSlideIndex(idx * 2)}
                  aria-label={`Go to slide pair ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${Math.floor(slideIndex / 2) === idx
                    ? "w-8 bg-red-600"
                    : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors"
            >
              <X className="size-6" />
            </button>

            {/* Prev/Next Buttons */}
            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors"
            >
              {lang === "ar" ? <ChevronRight className="size-6" /> : <ChevronLeft className="size-6" />}
            </button>
            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex size-11 items-center justify-center rounded-full bg-slate-950/80 text-white hover:bg-red-600 transition-colors"
            >
              {lang === "ar" ? <ChevronLeft className="size-6" /> : <ChevronRight className="size-6" />}
            </button>

            {/* Modal Image Display */}
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Modal Info Footer */}
            <div className="p-6 bg-slate-900 text-white">
              <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                {activeImage.category}
              </span>
              <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                {activeImage.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: QUALITY POLICY & OBJECTIVES / سياسة وأهداف الجودة */}
      <section id="quality" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="mb-10 text-center sm:text-start">
          <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.quality.kicker}</span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t.quality.title}
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {t.quality.intro}
          </p>
          <div className="mt-3 h-1 w-20 bg-red-600 rounded-full sm:mx-0 mx-auto" />
        </div>

        {/* Quality Principles Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.quality.principles.map((q, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-card transition-all hover:border-red-500/40 dark:border-slate-800 dark:bg-[#132244]"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/80 dark:text-red-400 mb-4">
                <CheckCircle2 className="size-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {q.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {q.body}
              </p>
            </div>
          ))}
        </div>

        {/* Phased Objectives Box */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-100/80 p-8 shadow-card dark:border-slate-800 dark:bg-[#0f172a]">
          <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.objectives.kicker}</span>
          <h3 className="mt-2 text-xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            {t.objectives.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {t.objectives.intro}
          </p>

          <div className="mt-8 space-y-6">
            {t.objectives.items.map((o) => (
              <div
                key={o.no}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card dark:border-slate-800 dark:bg-[#132244]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-xl bg-red-600 text-xs font-black text-white">
                    {o.no}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {o.title}
                  </h4>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {o.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-red-600" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TEAM / الهيكل التنظيمي */}
      <section id="team" className="border-y border-slate-200 bg-slate-100/60 py-16 sm:py-24 dark:border-slate-800 dark:bg-[#0f1b36]">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 text-center sm:text-start">
            <span className="eyebrow text-red-600 dark:text-red-400 font-bold">{t.team.kicker}</span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.team.title}
            </h2>
            <div className="mt-3 h-1 w-20 bg-red-600 rounded-full sm:mx-0 mx-auto" />
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.team.members.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card text-center dark:border-slate-800 dark:bg-[#132244] group hover:-translate-y-1 transition-all"
              >
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white shadow-md dark:bg-slate-800 group-hover:bg-red-600 transition-colors">
                  {m.name ? m.name.charAt(0) : "م"}
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  {m.role}
                </div>
                <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {m.name}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.team.stats.map((s, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card text-center dark:border-slate-800 dark:bg-[#132244]"
              >
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{s.label}</div>
                <div className="mt-2 text-3xl font-extrabold text-red-600 dark:text-red-400">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT FORM / نموذج التواصل */}
      <section id="contact-form" className="bg-white py-16 sm:py-20 dark:bg-[#0b1329]">
        <div className="mx-auto max-w-3xl px-4 sm:px-8">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="eyebrow text-red-600 dark:text-red-400 font-bold">
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.contact.title}
            </h2>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              {lang === "ar"
                ? "أرسل لنا رسالتك مباشرةً وسيتواصل معك فريقنا في أقرب وقت ممكن."
                : "Send us a message and our team will get back to you as soon as possible."}
            </p>
            <div className="mt-4 mx-auto h-1 w-16 bg-red-600 rounded-full" />
          </div>

          {contactSent ? (
            /* ──── Success Confirmation ──── */
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center dark:border-emerald-800 dark:bg-emerald-950/30 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex size-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                {lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {lang === "ar"
                  ? "شكراً لتواصلك معنا. سيتم فتح بريدك الإلكتروني لإرسال الرسالة إذا لم تُرسل تلقائياً."
                  : "Thank you for reaching out. Your email client will open to send the message if it didn't send automatically."}
              </p>
              <button
                onClick={() => { setContactSent(false); setContactName(""); setContactEmail(""); setContactMsg(""); }}
                className="mt-2 rounded-xl border border-emerald-400 px-6 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-100 dark:text-emerald-300 dark:hover:bg-emerald-900/50 transition-colors"
              >
                {lang === "ar" ? "إرسال رسالة أخرى" : "Send Another Message"}
              </button>
            </div>
          ) : (
            /* ──── Contact Form ──── */
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setContactSubmitting(true);
                // ─── Web3Forms free API — no backend needed ───
                // 1. Go to https://web3forms.com
                // 2. Enter  to get your Access Key
                // 3. Paste the key below:
                const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";
                const subject = lang === "ar"
                  ? `استفسار من ${contactName} - موقع البحر الأحمر للطرق`
                  : `Inquiry from ${contactName} - Red Sea Roads Website`;
                const message = lang === "ar"
                  ? `الاسم: ${contactName}\nالبريد الإلكتروني: ${contactEmail}\n\nالرسالة:\n${contactMsg}`
                  : `Name: ${contactName}\nEmail: ${contactEmail}\n\nMessage:\n${contactMsg}`;
                try {
                  const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                      access_key: WEB3FORMS_KEY,
                      subject,
                      message,
                      from_name: contactName,
                      reply_to: contactEmail,
                    }),
                  });
                  const data = await res.json();
                  if (data.success) {
                    setContactSent(true);
                  } else {
                    alert(lang === "ar" ? "حدث خطأ، حاول مرة أخرى." : "Something went wrong, please try again.");
                  }
                } catch {
                  alert(lang === "ar" ? "تعذر الإرسال، تحقق من الاتصال بالإنترنت." : "Sending failed, check your internet connection.");
                } finally {
                  setContactSubmitting(false);
                }
              }}
              className="space-y-5"
            >
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === "ar" ? "الاسم الكامل *" : "Full Name *"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder={lang === "ar" ? "مثال: محمود وليد" : "e.g. John Smith"}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-red-400"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === "ar" ? "بريدك الإلكتروني *" : "Your Email Address *"}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder={lang === "ar" ? "example@email.com" : "example@email.com"}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-red-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-msg" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  {lang === "ar" ? "رسالتك *" : "Your Message *"}
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={5}
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  placeholder={lang === "ar" ? "اكتب رسالتك هنا أو وصفاً لمشروعك..." : "Describe your project or inquiry..."}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-800 placeholder-slate-400 outline-none resize-none transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-red-400"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full rounded-2xl bg-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 hover:bg-red-500 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2.5"
              >
                {contactSubmitting ? (
                  <>
                    <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <span>{lang === "ar" ? "جارٍ الإرسال..." : "Sending..."}</span>
                  </>
                ) : (
                  <>
                    <Mail className="size-4" />
                    <span>{lang === "ar" ? "إرسال الرسالة" : "Send Message"}</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                {lang === "ar"
                  ? "الرسالة ستصل مباشرةً على بريد الشركة Info@redsearoadseg.com"
                  : "Your message will be delivered directly to Info@redsearoadseg.com"}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER & CONTACT SECTION */}
      <footer id="contact" className="relative bg-[#060c1a] text-slate-200 pt-16 pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2 border-b border-slate-800 pb-12">
            {/* Left Info */}
            <div className="space-y-6">
              <img
                src={IMAGES.logo}
                alt="Red Sea For Roads Company Logo"
                width={1584}
                height={672}
                className="h-14 w-auto rounded-xl bg-white p-3 shadow-md"
              />
              <p className="text-sm leading-relaxed text-slate-400 max-w-md">
                {lang === "ar" 
                  ? "مستعدون لبدء تنفيذ المشروعات وتوفير كافة التوريدات والاستشارات الفنية بسرعة واحترافية." 
                  : "We are ready to execute your road and infrastructure projects with utmost speed, quality, and professionalism."}
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href={CONTACT_INFO.domainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-400 font-bold hover:underline"
                >
                  <ExternalLink className="size-4" />
                  <span>{CONTACT_INFO.domain}</span>
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="size-4 text-red-500" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <div className="flex items-start gap-2 text-slate-300">
                  <MapPin className="size-4 text-red-500 shrink-0 mt-1" />
                  <span>{lang === "ar" ? CONTACT_INFO.locationAr : CONTACT_INFO.locationEn}</span>
                </div>
              </div>
            </div>

            {/* Right Quick Actions */}
            <div className="flex flex-col justify-between space-y-6">


              {/* Direct Contact Links */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  {lang === "ar" ? "التواصل المباشر والبريد" : "Direct Contact & Email"}
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={CONTACT_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-emerald-600/90 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shadow-md transition-all"
                  >
                    <WhatsAppIcon className="size-4" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 px-4 py-2.5 text-xs font-bold text-slate-200 hover:bg-red-600 hover:text-white hover:border-red-500 shadow-md transition-all"
                  >
                    <Mail className="size-4 text-red-500" />
                    <span>{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            {lang === "ar" 
              ? "جميع الحقوق محفوظة © شركة البحر الأحمر للمقاولات ورصف الطرق" 
              : "All Rights Reserved © Red Sea for Roads & General Contracting Company"}          </div>
        </div>

        {/* FLOATING SPEED DIAL WHATSAPP BUTTON */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-500 active:scale-95 group"
        >
          <WhatsAppIcon className="size-7" />
          <span className="absolute -top-1 -right-1 flex size-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex size-4 rounded-full bg-emerald-500"></span>
          </span>
        </a>
      </footer>
    </div>
  );
}

/* Custom WhatsApp Icon */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.12-.41-2.14-1.32-.79-.71-1.32-1.58-1.47-1.88-.15-.3-.02-.46.13-.61.15-.15.35-.4.5-.6.15-.2.2-.35.3-.55.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.32 5.07 4.53.71.29 1.26.46 1.69.59.72.22 1.37.19 1.89.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.31.17-1.44-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.16 8.16 0 0 1-1.25-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.26 8.21Z" />
    </svg>
  );
}
