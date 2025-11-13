import clsx from "clsx";

const variants = {
  success: "bg-green-50 text-green-900 border-green-200",
  error: "bg-rose-50 text-rose-900 border-rose-200",
  info: "bg-blue-50 text-blue-900 border-blue-200",
};

export default function Alert({ children, variant = "info" }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border px-4 py-3 text-sm font-medium",
        variants[variant] || variants.info,
      )}
    >
      {children}
    </div>
  );
}
