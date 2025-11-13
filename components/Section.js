import Container from "./Container";

export default function Section({
  children,
  title,
  eyebrow,
  description,
  className = "",
  headingLevel: Heading = "h2",
}) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          {title ? (
            <Heading className="mt-4 font-display text-3xl font-semibold leading-tight text-[var(--ink)] sm:text-4xl">
              {title}
            </Heading>
          ) : null}
          {description ? (
            <p className="mt-4 text-lg text-[var(--muted)]">{description}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
