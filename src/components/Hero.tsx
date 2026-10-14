import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Send,
  Github,
  MapPin,
  GraduationCap,
  Languages,
  CalendarCheck,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-xs font-medium text-slate-700 dark:text-slate-300 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>En recherche d&apos;alternance · Master Bac+5 (INSTA Paris)</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
            Bonjour, je suis <br />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Elie Mahutin TOGBE
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Développeur Web Full-Stack &amp; Créateur de Solutions Numériques
          </h2>

          {/* Bio */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl">
            Développeur web full-stack rigoureux et orienté solutions, je conçois et déploie des applications web performantes, réactives et scalables. <strong>3+ ans d&apos;expérience</strong> dans la livraison de projets concrets (TypeScript, Next.js, Vue.js, PHP/Laravel, PostgreSQL).
          </p>

          {/* Rhythm Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-8">
            <CalendarCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            <span>
              Rythme : <strong>3 semaines en entreprise</strong> / 1 semaine à l&apos;école · Disponibilité immédiate
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
            >
              <Rocket className="w-4 h-4" />
              <span>Découvrir mes projets</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 transition-all hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Prendre contact</span>
            </Link>

            <a
              href="https://github.com/escrivetogbe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Quick Metadata */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-indigo-500" />
              <span>Villeneuve-le-Roi, Île-de-France</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              <span>Master DPCDSI (RNCP 7)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-indigo-500" />
              <span>Français (Natif) · Anglais (Courant)</span>
            </div>
          </div>
        </div>

        {/* Right Column Photo & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5]">
            {/* Glowing Backdrop Ring */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-2xl -z-10 animate-pulse-slow" />

            {/* Photo Container */}
            <div className="relative w-full h-full rounded-2xl p-1.5 bg-gradient-to-tr from-indigo-500/40 via-purple-500/20 to-cyan-500/40 shadow-2xl overflow-hidden">
              <Image
                src="/assets/elie-togbe.jpg"
                alt="Elie Mahutin TOGBE - Développeur Web Full-Stack"
                fill
                priority
                className="object-cover object-top rounded-xl contrast-[1.03] saturate-[1.05]"
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-3 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float">
              <Zap className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
              <span>Next.js · TS</span>
            </div>

            <div className="absolute -bottom-3 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float [animation-delay:1.5s]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Vue.js · Firebase</span>
            </div>

            <div className="absolute top-1/2 -right-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200 animate-float [animation-delay:2.8s]">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              <span>Laravel · SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
