import SectionHeading from '../ui/SectionHeading';

export default function ProjectsSection({ text, projects, lang, onSelectProject }) {
  return (
    <section id="projects" className="border-y border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>{text.projects_heading}</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button key={project.id} type="button" onClick={() => onSelectProject(project.id)} className="group block h-full w-full text-left">
              <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/20 transition hover:border-indigo-500/50">
                <div className="flex aspect-[4/3] items-center justify-center rounded-[22px] bg-slate-950 p-3 sm:p-4">
                  <img src={project.cover} alt={project.title} className="h-full w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{project.short[lang]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
