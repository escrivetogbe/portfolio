import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "2022 – 2025",
    location: "Kad Distribution · Cotonou",
    role: "Développeur Full-Stack (PHP · MySQL · JS)",
    description:
      "Conception intégrale, livraison et maintenance de la plateforme e-commerce officielle. Modélisation relationnelle de la base de données, création de modules sur-mesure et optimisation Core Web Vitals (-40% sur les temps de chargement, 99.9% de disponibilité).",
  },
  {
    period: "2023 – 2024",
    location: "Koobify (Express Monde Inc.) · Montréal (Remote)",
    role: "Développeur Web (Vue.js · Firebase) — Freelance",
    description:
      "Développement d'interfaces dynamiques et de composants réactifs en Vue.js. Synchronisation de données en temps réel via Firebase (Firestore), intégration des APIs de suivi logistique et fiabilisation des parcours d'achat.",
  },
  {
    period: "2021 – 2022",
    location: "Plénitude Expertise SA · Cotonou",
    role: "Développeur Web Front-End & PHP",
    description:
      "Intégration d'interfaces web dynamiques conformes aux spécifications fonctionnelles (JavaScript, HTML5/CSS3). Évolution de modules PHP, recette fonctionnelle cross-browser et mises en production avec 0 incident critique.",
  },
];

const educations = [
  {
    period: "2026 – 2028",
    location: "INSTA Paris · Niveau 7 (Bac+5)",
    role: "Master — Directeur de Projet en Conception et Développement de Solutions Informatiques",
    description:
      "Certification RNCP 38503. Spécialisation en architectures logicielles, gouvernance des SI, méthodologies agiles et pilotage technique de projets d'envergure.",
    highlight: true,
  },
  {
    period: "2020 – 2023",
    location: "ESTG Vedoko · Bac+3",
    role: "Licence Professionnelle Informatique (Systèmes d'Info et Logiciels)",
    description:
      "Algorithmique avancée, modélisation de bases de données relationnelles (Merise/UML, SQL), développement web et génie logiciel.",
    highlight: false,
  },
  {
    period: "2019 – 2022",
    location: "Université d'Abomey-Calavi · Bac+3",
    role: "Licence en Anglais — Linguistique",
    description:
      "Maîtrise courante de la langue anglaise, rédaction technique et communication professionnelle internationale.",
    highlight: false,
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            Expérience &amp; Formation
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Mon Parcours
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Une trajectoire solide entre expérience professionnelle en entreprise et cursus académique de haut niveau.
          </p>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Experiences Column */}
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white mb-6">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <span>Expériences Professionnelles</span>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border-l-4 border-l-indigo-500 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:translate-x-1 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {exp.location}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Educations Column */}
          <div>
            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white mb-6">
              <GraduationCap className="w-5 h-5 text-cyan-500" />
              <span>Formations &amp; Diplômes</span>
            </div>

            <div className="space-y-6">
              {educations.map((edu, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border-l-4 border-l-cyan-500 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:translate-x-1 transition-all ${
                    edu.highlight
                      ? "ring-1 ring-cyan-500/30"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full ${
                        edu.highlight
                          ? "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/80"
                          : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {edu.location}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                    {edu.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
