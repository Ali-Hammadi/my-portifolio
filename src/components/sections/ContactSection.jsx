import SocialLinks from '../ui/SocialLinks';

export default function ContactSection({ text, socialLinks }) {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">{text.contact_heading}</h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">{text.contact_sub}</p>
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:hamadea524@gmail.com" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400"><i className="fa-solid fa-envelope text-indigo-400"></i>hamadea524@gmail.com</a>
          <a href="tel:+963937472856" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400"><i className="fa-solid fa-phone text-indigo-400"></i>+963 937 472 856</a>
          <a href="/cv/my-cv.pdf" download="Ali-Hammadi-CV.pdf" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400"><i className="fa-solid fa-download text-indigo-400"></i>{text.hero_cv}</a>
        </div>
        <div className="flex justify-center"><SocialLinks links={socialLinks} large /></div>
      </div>
    </section>
  );
}
