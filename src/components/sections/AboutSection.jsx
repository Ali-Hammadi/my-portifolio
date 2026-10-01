import SectionHeading from '../ui/SectionHeading';

export default function AboutSection({ text }) {
  return (
    <section id="about" className="border-y border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading className="mb-6">{text.about_heading}</SectionHeading>
        <p className="max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">{text.about_text}</p>
      </div>
    </section>
  );
}
