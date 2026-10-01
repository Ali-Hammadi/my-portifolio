export default function SectionHeading({ children, className = 'mb-10' }) {
  return (
    <h2 className={`${className} flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl`}>
      <span className="h-1 w-8 rounded bg-indigo-500"></span>
      <span>{children}</span>
    </h2>
  );
}
