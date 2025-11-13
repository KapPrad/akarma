import Link from "next/link";
import clsx from "clsx";

const baseClasses =
  "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

const variants = {
  primary:
    "bg-[var(--accent)] text-white shadow-soft hover:scale-[1.02] hover:bg-[#267064]",
  secondary:
    "border border-[var(--accent)] text-[var(--accent)] hover:scale-[1.02] bg-white/70",
  ghost:
    "text-[var(--accent)] hover:scale-[1.02] focus-visible:outline-[var(--accent)]",
};

export default function Button({
  as = "button",
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const cls = clsx(baseClasses, variants[variant], className);

  if (as === "link" && href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
