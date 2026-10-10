export default function AuthField({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        {...props}
        className="w-full rounded-lg border border-line bg-card px-4 py-3 outline-none placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
