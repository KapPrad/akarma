import Button from "./Button";

export default function EventCard({ event }) {
  const start = event.startDate
    ? new Date(event.startDate).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;
  const end = event.endDate
    ? new Date(event.endDate).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-sm">
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          <span>{event.type}</span>
          {event.online ? <span className="text-[var(--muted)]">Online</span> : null}
        </div>
        <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">
          {event.title}
        </h3>
        <p className="text-sm text-[var(--muted)]">
          {start}
          {end && end !== start ? ` - ${end}` : ""}
        </p>
        <p className="text-sm text-[var(--muted)]">{event.location}</p>
        <p className="text-[var(--ink)]">{event.shortDesc}</p>
      </div>
      <Button
        as="link"
        href={event.registerUrl || "/contact"}
        className="mt-6"
      >
        {event.registerUrl ? "Register" : "Contact to join"}
      </Button>
    </div>
  );
}
