export default function Section({ id, title, subtitle, marker, markerClass = "", children }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="flex items-center gap-2 text-2xl font-bold">
        {marker && (
          <span aria-hidden className={`text-lg ${markerClass}`}>
            {marker}
          </span>
        )}
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}
