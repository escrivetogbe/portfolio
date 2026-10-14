import { Layout, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    subtitle: "Interfaces réactives & performantes",
    icon: Layout,
    color: "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/60",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "Vue.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: false },
      { name: "HTML5 / CSS3", highlight: false },
      { name: "Tailwind CSS", highlight: true },
      { name: "Bootstrap", highlight: false },
    ],
  },
  {
    title: "Back-End & Architecture",
    subtitle: "APIs robustes, Logique métier & MVC",
    icon: Server,
    color: "text-rose-500 bg-rose-50 dark:bg-rose-950/60",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express", highlight: true },
      { name: "PHP", highlight: true },
      { name: "Laravel", highlight: true },
      { name: "Python", highlight: false },
      { name: "Architecture MVC", highlight: false },
      { name: "APIs RESTful", highlight: false },
      { name: "Webhooks", highlight: false },
      { name: "Sécurité OWASP", highlight: false },
    ],
  },
  {
    title: "Bases de Données & Cloud",
    subtitle: "Stockage relationnel, NoSQL & Temps réel",
    icon: Database,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/60",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Prisma ORM", highlight: true },
      { name: "MySQL", highlight: true },
      { name: "Firebase (Firestore)", highlight: true },
      { name: "Firebase Auth", highlight: false },
      { name: "Vercel", highlight: false },
      { name: "Modélisation relationnelle", highlight: false },
      { name: "Requêtes optimisées", highlight: false },
    ],
  },
  {
    title: "Outils & Environnement",
    subtitle: "Versioning, Intégration & Méthodes",
    icon: Wrench,
    color: "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/60",
    skills: [
      { name: "Git / GitHub / GitLab", highlight: true },
      { name: "VS Code", highlight: true },
      { name: "Postman", highlight: true },
      { name: "Docker (notions)", highlight: false },
      { name: "CI/CD (notions)", highlight: false },
      { name: "WordPress (Sur-mesure)", highlight: false },
      { name: "Méthodes Agiles / Scrum", highlight: false },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 mb-3">
            Stack Technique
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Mes Compétences
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Les technologies et outils que j&apos;utilise au quotidien pour concevoir des applications scalables.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        skill.highlight
                          ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/80 font-semibold"
                          : "bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
