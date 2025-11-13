import Link from "next/link";
import Button from "./Button";

export default function ProgramCard({ title, summary, benefits = [], href }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-sm">
      <div className="flex-1">
        <p className="font-display text-2xl font-semibold text-[var(--ink)]">{title}</p>
        <p className="mt-3 text-[var(--muted)]">{summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-[var(--ink)]">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      {href ? (
        <Button as="link" href={href} variant="secondary" className="mt-6">
          Learn more
        </Button>
      ) : null}
    </div>
  );
}
