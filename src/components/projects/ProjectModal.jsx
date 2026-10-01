export default function ProjectModal({ project, caseStudy, selectedProject, text, onClose }) {
  if (!project || !caseStudy) return null;

  const tags = selectedProject === 'telmi'
    ? ['Flutter', 'Daily Planning', 'Care Support', 'Mobile App']
    : selectedProject === 'tfouki'
      ? ['Flutter', 'Education', 'School App', 'Student Management']
      : ['Flutter', 'Healthcare', 'Doctor Dashboard', 'Patient App'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-4" onClick={onClose}>
      <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[24px] border border-slate-700 bg-slate-900 shadow-2xl shadow-slate-950/80" onClick={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-3 backdrop-blur-sm sm:px-6">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">{text.case_study}</p><h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{project.name}</h3></div>
          <button type="button" onClick={onClose} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700 sm:px-4 sm:text-sm">{text.close}</button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-6 flex flex-col gap-6">
            <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-3 sm:p-4"><div className="flex h-[220px] w-full items-center justify-center rounded-[22px] bg-slate-900 p-2 sm:h-[320px] md:h-[420px]"><img src={project.cover} alt={`${project.name} cover`} className="h-full w-full rounded-2xl object-contain" /></div></div>
            <div className="rounded-[22px] border border-slate-800 bg-slate-950 p-5"><p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.summary}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">{tag}</span>)}</div></div>
          </div>

          <div className="grid auto-cols-[minmax(150px,1fr)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-3 snap-x sm:auto-cols-[minmax(180px,1fr)] xl:auto-cols-[minmax(0,1fr)]">
            {project.gallery.map((image, index) => <div key={`${project.name}-${index}`} className="flex aspect-[9/16] min-w-0 snap-start items-center justify-center overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 p-2"><img src={image} alt={`${project.name} screenshot ${index + 1}`} className="h-full w-full rounded-2xl object-contain" /></div>)}
          </div>

          <section className="mt-10 border-t border-slate-800 pt-8">
            <div className="mb-6"><p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">{text.case_study}</p><h4 className="text-2xl font-bold text-white">{project.name}</h4></div>
            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.overview}</h5><p className="leading-relaxed text-slate-300">{caseStudy.overview}</p></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.problem}</h5><ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">{caseStudy.problem.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.solution}</h5><p className="text-sm leading-relaxed text-slate-300">{caseStudy.solution}</p></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.role}</h5><p className="leading-relaxed text-slate-300">{caseStudy.role}</p></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2"><h5 className="mb-4 text-lg font-semibold text-indigo-300">{text.tech_stack}</h5><div className="flex flex-wrap gap-2">{caseStudy.stack.map((item) => <span key={item} className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200">{item}</span>)}</div></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.architecture}</h5><p className="leading-relaxed text-slate-300">{caseStudy.architecture}</p></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.challenges}</h5><ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">{caseStudy.challenges.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5"><h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.highlights}</h5><ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">{caseStudy.highlights.map((item) => <li key={item}>{item}</li>)}</ul></article>
              <article className="rounded-[22px] border border-indigo-500/20 bg-indigo-500/10 p-5 md:col-span-2"><h5 className="mb-3 text-lg font-semibold text-indigo-200">{text.outcome}</h5><p className="leading-relaxed text-slate-200">{caseStudy.outcome}</p></article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
