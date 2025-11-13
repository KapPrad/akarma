import Container from "./Container";
import NewsletterBlock from "./NewsletterBlock";

const socials = [
  { label: "Instagram", href: "https://instagram.com/akarma" },
  { label: "LinkedIn", href: "https://linkedin.com/company/akarma" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] bg-white/80 text-[var(--ink)]">
      <Container className="grid gap-10 py-12 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">Akarma</p>
          <p className="mt-4 text-[var(--muted)]">
            27 Sattva Lane, Bengaluru, India
          </p>
          <p className="mt-2 text-[var(--muted)]">hello@akarma.org / +91 98765 43210</p>
          <div className="mt-4 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-semibold text-[var(--accent)] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
          <NewsletterBlock />
        </div>
      </Container>
      <Container className="border-t border-[var(--border-subtle)] py-6 text-sm text-[var(--muted)]">
        (c) {new Date().getFullYear()} Akarma. All rights reserved.
      </Container>
    </footer>
  );
}
