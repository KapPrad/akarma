export default function Input({ label, id, className = "", ...rest }) {
  return (
    <label className={`block text-sm font-medium text-[var(--ink)] ${className}`}>
      <span className="mb-2 block">{label}</span>
      <input
        id={id}
        className="w-full rounded-2xl border border-[var(--border-subtle)] bg-white px-4 py-3 text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
        {...rest}
      />
    </label>
  );
}
