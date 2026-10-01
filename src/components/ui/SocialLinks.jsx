export default function SocialLinks({ links, large = false }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400 ${large ? 'h-14 w-14 text-xl' : 'h-12 w-12 text-lg'}`}
          aria-label={item.label}
          title={item.label}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
}
