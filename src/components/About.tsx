import { Code2, Layers, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            Profil
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            À propos de moi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Développeur rigoureux, orienté produit et focalisé sur la valeur concrète.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Mon approche de l&apos;ingénierie logicielle
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Titulaire d&apos;une Licence Professionnelle en Informatique (Systèmes d&apos;Information et Logiciels) et actuellement en Master Directeur de Projet SI à l&apos;INSTA Paris, je combine une solide compréhension des architectures logicielles (MVC, API RESTful, modélisation relationnelle) avec une maîtrise des frameworks modernes réactifs.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Attaché aux bonnes pratiques de conception (Clean Code, architecture MVC, composants modulaires, sécurité OWASP), je veille à concevoir des applications maintenables, fiables et optimisées pour la production.
            </p>
          </div>

          {/* Right Card */}
          <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Ce que j&apos;apporte à votre équipe
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Autonomie &amp; Polyvalence Full-Stack :</strong> Capacité à concevoir une interface soignée en Front-End et à structurer des APIs sécurisées et des bases de données en Back-End.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Expérience Internationale :</strong> Travail en télétravail pour des entreprises au Canada (Koobify Montréal) et au Bénin, avec une grande adaptabilité culturelle et technique.
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white font-semibold">Culture de la Performance :</strong> Optimisation Core Web Vitals, réduction des temps de chargement, accessibilité et ergonomie mobile-first.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
