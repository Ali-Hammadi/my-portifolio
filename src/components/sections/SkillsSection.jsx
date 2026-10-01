import SectionHeading from '../ui/SectionHeading';

export default function SkillsSection({ text, groups }) {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeading>{text.skills_heading}</SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="mb-4 text-lg font-semibold text-indigo-400">{card.title}</h3>
            <div className="flex flex-wrap gap-2">
              {card.items.map((item) => <span key={item} className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-200">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
