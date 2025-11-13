const calendlyUrl =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/your-handle/intro-call";

export default function CalendlyEmbed() {
  return (
    <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-6 shadow-soft">
      <div className="space-y-3">
        <p className="font-display text-2xl font-semibold text-[var(--ink)]">
          Book a discovery call
        </p>
        <p className="text-[var(--muted)]">
          Choose a time that works for you. We reserve several community slots each
          week for sliding-scale sessions.
        </p>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border-subtle)]">
        <iframe
          title="Calendly booking"
          src={calendlyUrl}
          className="h-[600px] w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
