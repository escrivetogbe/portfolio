import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 – 2026",
    location: "Kad Distribution (Liqui Moly)",
    role: "Développeur Full-Stack (PHP / Laravel · MySQL · JS)",
    description:
      "Conception, développement et évolution de la plateforme e-commerce officielle (PHP/Laravel, MySQL, JavaScript). Modélisation relationnelle de la base de données, automatisation des flux de gestion back-office, suivi des KPI et optimisation Core Web Vitals (-40% sur les temps de chargement, 99.9% de disponibilité).",
  },
  {
    period: "2023 – 2024",
    location: "Koobify (Express Monde Inc.) · Montréal (Remote)",
    role: "Développeur Web (Vue.js · Next.js · TypeScript · Firebase) — Freelance",
    description:
      "Développement de composants réactifs et d'interfaces dynamiques (Vue.js, Next.js, TypeScript) pour le suivi des livraisons et la gestion des commandes. Synchronisation de données en temps réel via Firebase (Firestore, Auth), intégration des APIs REST / webhooks logistiques et optimisation des performances.",
  },
  {
    period: "2021 – 2022",
    location: "Plénitude Expertise SARL",
    role: "Développeur Web Front-End & PHP — Stage",
    description:
      "Intégration d'interfaces web responsives conformes aux maquettes fonctionnelles (JavaScript, HTML5, CSS3 / Bootstrap). Développement CMS (WordPress), évolution de modules PHP / SQL, recette fonctionnelle cross-browser et mises en production avec 0 incident critique.",
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

const certificationGroups = [
  {
    category: "Développement Web, Cloud & CMS",
    badgeColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-800/70",
    items: [
      {
        title: "HTML, CSS, and Javascript for Web Developers",
        issuer: "Johns Hopkins University",
        url: "https://www.coursera.org/account/accomplishments/verify/WYKZ5SVWL5SL",
      },
      {
        title: "Building a Dynamic Web App using PHP & MySQL",
        issuer: "Coursera",
        url: "https://www.coursera.org/account/accomplishments/verify/CFRVTPAARDK9",
      },
      {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud",
        url: "https://www.coursera.org/account/accomplishments/verify/6UBFHF9QRKNH",
      },
      {
        title: "Build a Full Website using WordPress",
        issuer: "Coursera",
        url: "https://www.coursera.org/account/accomplishments/verify/25BMSF3TVZWP",
      },
      {
        title: "Introduction to HTML5 & CSS3",
        issuer: "University of Michigan",
        url: "https://www.coursera.org/account/accomplishments/verify/RQSQ2KJYCS5A",
      },
    ],
  },
  {
    category: "Data Analytics, Business Intelligence & Digital",
    badgeColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800/70",
    items: [
      {
        title: "Ask Questions to Make Data-Driven Decisions",
        issuer: "Google",
        url: "https://www.coursera.org/account/accomplishments/verify/N7SWMMQHMDLW",
      },
      {
        title: "Prepare Data for Exploration",
        issuer: "Google",
        url: "https://www.coursera.org/account/accomplishments/verify/U3TUBMLDHZ32",
      },
      {
        title: "Foundations: Data, Data, Everywhere",
        issuer: "Google",
        url: "https://www.coursera.org/account/accomplishments/verify/WCE3CTXWLMSA",
      },
      {
        title: "AI Workflow: Data Analysis & Hypothesis Testing",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/8N35PQ4TV7TN",
      },
      {
        title: "Introduction to Social Media Marketing",
        issuer: "Meta",
        url: "https://www.coursera.org/account/accomplishments/verify/JVWJRFBEZKL6",
      },
    ],
  },
  {
    category: "Intelligence Artificielle, Machine Learning & Réseaux",
    badgeColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800/70",
    items: [
      {
        title: "AI Workflow: Enterprise Model Deployment",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/VPQL52LEJ5MJ",
      },
      {
        title: "AI Workflow: Machine Learning, Visual Recognition & NLP",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/SUAWXF5V9XNU",
      },
      {
        title: "AI Workflow: Feature Engineering & Bias Detection",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/2UC4WJCFYEET",
      },
      {
        title: "AI Foundations & IBM Watson",
        issuer: "IBM",
        url: "https://www.coursera.org/account/accomplishments/verify/MCZK8UUJO6CZ",
      },
      {
        title: "IoT Networking, Communications & Devices",
        issuer: "Univ. of Illinois Urbana-Champaign",
        url: "https://www.coursera.org/account/accomplishments/verify/B85HTD24H8K7",
      },
    ],
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

        {/* Certifications Officielles Vérifiables */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white">
              <Award className="w-5 h-5 text-amber-500" />
              <span>Certifications Officielles Vérifiables</span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Coursera (Google, IBM, Johns Hopkins, Univ. of Michigan, Meta) · OpenClassrooms · Udemy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {certificationGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span
                    className={`inline-block text-[11px] font-bold px-2.5 py-1 rounded-full border mb-4 ${group.badgeColor}`}
                  >
                    {group.category}
                  </span>

                  <ul className="space-y-3">
                    {group.items.map((cert, cIdx) => (
                      <li
                        key={cIdx}
                        className="flex items-start justify-between gap-3 pb-2.5 border-b border-slate-100 dark:border-slate-800/60 last:border-none last:pb-0"
                      >
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                            {cert.title}
                          </div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                            {cert.issuer}
                          </div>
                        </div>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Vérifier le certificat sur Coursera"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 mt-0.5"
                        >
                          <span>Vérifier</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
