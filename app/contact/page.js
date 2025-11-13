import Hero from "@/components/Hero";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Akarma",
  description: "Reach out to plan a program, book counseling, or collaborate.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        tag="Contact"
        title="Let's design the care container you need."
        description="Share a few details below. Our team responds within two business days with next steps, including Calendly links for deeper scoping conversations."
        primaryCta={{ label: "Book via Calendly", href: "/#book" }}
        secondaryCta={{ label: "Email hello@akarma.org", href: "mailto:hello@akarma.org" }}
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Write to us
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--ink)]">
                Contact form
              </h2>
              <ContactForm />
            </div>
            <div className="rounded-3xl border border-[var(--border-subtle)] bg-white/80 p-8 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
                Visiting the studio
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold text-[var(--ink)]">
                Akarma House
              </h3>
              <p className="mt-4 text-[var(--muted)]">
                27 Sattva Lane, Bengaluru / 560001
                <br />
                hello@akarma.org / +91 98765 43210
              </p>
              <div className="mt-6 space-y-3 text-sm text-[var(--muted)]">
                <p>Office hours / Tue - Sat / 10:00 - 18:00 IST</p>
                <p>Parking / Limited street parking; cabs recommended.</p>
                <p>Accessibility / Elevator access and quiet room available.</p>
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--bg)] p-6 text-sm text-[var(--muted)]">
                Map placeholder - embed your preferred map provider via an iframe or custom
                component once the address is finalized.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
