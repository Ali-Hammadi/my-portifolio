export default function Header({ text, lang, onToggleLanguage }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#top" className="text-lg font-black tracking-[0.2em] text-indigo-400 sm:text-xl">ALI HAMMADI</a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-indigo-400">{text.nav_about}</a>
          <a href="#skills" className="transition hover:text-indigo-400">{text.nav_skills}</a>
          <a href="#projects" className="transition hover:text-indigo-400">{text.nav_projects}</a>
          <a href="#experience" className="transition hover:text-indigo-400">{text.nav_exp}</a>
          <a href="#contact" className="transition hover:text-indigo-400">{text.nav_contact}</a>
        </nav>

        <button
          type="button"
          onClick={onToggleLanguage}
          className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] font-semibold text-indigo-300 transition hover:bg-slate-800"
        >
          {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>
    </header>
  );
}
