import Hero from "./Hero";
import Container from "./Container";
import Button from "./Button";

export default function ProgramDetail({ data }) {
  if (!data) {
    return (
      <section className="py-24">
        <Container>
          <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-10 text-center shadow-sm">
            <p className="font-display text-3xl font-semibold text-[var(--ink)]">
              Program coming soon
            </p>
            <p className="mt-4 text-[var(--muted)]">
              The requested program is not available yet. Reach out and we will guide you to
              the right container.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button as="link" href="/contact">
                Contact team
              </Button>
              <Button as="link" href="/programs" variant="secondary">
                Back to programs
              </Button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      <Hero
        tag="Program"
        title={data.hero || data.title}
        description={data.promise}
        primaryCta={{ label: "Book via Calendly", href: "/#book" }}
        secondaryCta={{ label: "Enquire", href: "/contact" }}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 rounded-3xl border border-[var(--border-subtle)] bg-white p-8 shadow-sm">
              <p className="text-lg text-[var(--muted)]">{data.overview}</p>
              <div>
                <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                  What to expect
                </p>
                <ul className="mt-4 space-y-3 text-[var(--ink)]">
                  {data.expect?.map((item) => (
                    <li key={item} className="flex gap-3 text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {"Who it's for"}
                </p>
                <ul className="mt-4 space-y-3 text-[var(--ink)]">
                  {data.audience?.map((item) => (
                    <li key={item} className="flex gap-3 text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                  Format
                </p>
                <p className="mt-3 text-lg text-[var(--ink)]">{data.format}</p>
              </div>
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                  Duration
                </p>
                <p className="mt-3 text-lg text-[var(--ink)]">{data.duration}</p>
              </div>
              <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-6 shadow-soft">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                  Contribution
                </p>
                <p className="mt-3 text-lg text-[var(--ink)]">{data.pricing}</p>
              </div>
              <div className="flex flex-col gap-3">
                <Button as="link" href="/#book">
                  Book via Calendly
                </Button>
                <Button as="link" href="/contact" variant="secondary">
                  Enquire
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
