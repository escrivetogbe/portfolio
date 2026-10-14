import { Star, ExternalLink, Github, Check } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Projets &amp; Réalisations
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Applications concrètes déployées en production et projets open-source.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Flagship Project : Journalist Research Workspace */}
          <article className="md:col-span-2 p-8 md:p-10 rounded-2xl border border-indigo-300 dark:border-indigo-500/30 bg-gradient-to-b from-indigo-50/50 via-white to-white dark:from-indigo-950/20 dark:via-slate-900/60 dark:to-slate-900/60 shadow-lg shadow-indigo-500/5 relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700/60 mb-6">
              <Star className="w-3.5 h-3.5 fill-indigo-500 text-indigo-500" />
              <span>Projet Phare (Live &amp; Open Source)</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "OpenAI API", "Tailwind CSS"].map(
                (tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
              Workspace de Recherche &amp; Analyse Documentaire pour Journalistes
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl">
              Application SaaS permettant aux chercheurs et journalistes d&apos;organiser leurs sources, d&apos;analyser des documents volumineux et d&apos;exécuter des synthèses assistées par modèle de langage. Modélisation relationnelle avec Prisma, persistance sur base PostgreSQL managée et déploiement continu sur Vercel.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-4 rounded-xl bg-white/60 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Authentification &amp; gestion de documents</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Streaming de réponses &amp; requêtes contextuelles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Architecture Next.js App Router réactive</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://journalist-research-workspace.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all"
              >
                <span>Démo en direct</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/escrivetogbe/journalist-research-workspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Code Source</span>
              </a>
            </div>
          </article>

          {/* Project 2 : Kad Distribution */}
          <article className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["PHP", "MySQL", "JavaScript", "E-Commerce", "Core Web Vitals"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Plateforme E-Commerce Kad Distribution (Liqui Moly)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Conception intégrale et maintenance de la boutique et vitrine officielle. Mise en place de modules sur mesure, sécurisation des transactions, gestion back-office et optimisation technique (-40% sur les temps de chargement, 99.9% d&apos;uptime pendant 3 ans).
              </p>
            </div>
            <div>
              <a
                href="https://kad-distribution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                <span>Visiter le site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>

          {/* Project 3 : Koobify Montréal */}
          <article className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js", "Firebase", "Firestore", "APIs REST", "Logistique"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Application Web de Logistique &amp; Livraison Koobify
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Développement d&apos;interfaces web réactives pour une solution de livraison express basée à Montréal (Canada). Intégration de Firebase (Firestore &amp; Auth) pour le suivi temps réel des colis et connexion aux APIs logistiques.
              </p>
            </div>
            <div>
              <a
                href="https://koobify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                <span>À propos de Koobify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>

          {/* Project 4 : Portail Métier Laravel */}
          <article className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div className="flex flex-wrap gap-2 mb-4">
              {["Laravel", "PHP", "MySQL", "MVC", "OWASP"].map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
              Portail Web Métier &amp; Gestion d&apos;Activité
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Architecture MVC complète pour la gestion interne d&apos;activité d&apos;entreprise. Modélisation relationnelle rigoureuse, gestion fine des rôles et permissions (RBAC) et sécurisation selon les standards OWASP.
            </p>
          </article>

          {/* Project 5 : Highlandth Digital Agency */}
          <article className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "JavaScript", "UI/UX"].map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Site Vitrine Agence Digitale Highlandth
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Création d&apos;une interface web moderne et interactive présentant les services d&apos;une agence digitale. Animations fluides, responsive design adaptatif et optimisation du référencement naturel.
              </p>
            </div>
            <div>
              <a
                href="https://highlandth.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              >
                <span>Visiter le site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
