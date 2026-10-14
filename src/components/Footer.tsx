import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070b12] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
            &lt;EM/&gt; Elie Mahutin TOGBE
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Développeur Web Full-Stack · Master INSTA Paris
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/escrivetogbe"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 flex items-center justify-center transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="mailto:escrivetogbe@gmail.com"
            aria-label="Email"
            className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 flex items-center justify-center transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Elie Mahutin TOGBE. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
