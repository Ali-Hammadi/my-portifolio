import SocialLinks from '../ui/SocialLinks';

export default function HeroSection({ text, socialLinks }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:pb-20">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">{text.hero_title}</h1>
          <p className="mb-6 text-base leading-relaxed text-slate-300 sm:text-lg">{text.hero_desc}</p>
          <div className="mb-8 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">{text.hero_btn_contact}</a>
            <a href="/cv/my-cv.pdf" download="Ali-Hammadi-CV.pdf" className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400">{text.hero_cv}</a>
          </div>
          <SocialLinks links={socialLinks} />
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <div className="absolute inset-0 rounded-[2.5rem] bg-indigo-500/20 blur-3xl"></div>
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-indigo-500/30 bg-slate-900 shadow-2xl shadow-indigo-950/50 sm:h-36 sm:w-36 lg:h-[440px] lg:w-[400px]">
            <img src="/images/me.jpeg" alt="Ali Hammadi profile" className="h-full w-full rounded-full object-cover object-center transition duration-500 hover:scale-105" />
          </div>
        </div>
      </div>
    </section>
  );
}
