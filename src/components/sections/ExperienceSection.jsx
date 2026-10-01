import SectionHeading from '../ui/SectionHeading';

export default function ExperienceSection({ text }) {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading>{text.exp_heading}</SectionHeading>
          <div className="space-y-6 border-l-2 border-slate-800 pl-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Aug 2024 – Present</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{text.exp_1_title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text.exp_1_desc}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{text.exp_2_date}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{text.exp_2_title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{text.exp_2_desc}</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeading>{text.edu_heading}</SectionHeading>
          <div className="space-y-6 border-l-2 border-slate-800 pl-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">2021 – Expected 2027</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{text.edu_1_title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text.edu_1_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
