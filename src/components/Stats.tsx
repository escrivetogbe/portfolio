export default function Stats() {
  const stats = [
    { value: "3+", label: "Années d'expérience web" },
    { value: "5+", label: "Applications livrées en prod" },
    { value: "Bac+5", label: "Master en cours (INSTA Paris)" },
    { value: "99.9%", label: "Disponibilité applicative" },
  ];

  return (
    <section className="border-y border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/30 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
