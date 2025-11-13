import Image from "next/image";
import Button from "./Button";
import Container from "./Container";

export default function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  tag,
}) {
  return (
    <section className="relative overflow-hidden bg-white/70">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/images/texture.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <Container className="relative py-24 sm:py-32">
        <div className="max-w-3xl">
          {tag ? (
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              {tag}
            </p>
          ) : null}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg text-[var(--muted)]">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta ? (
              <Button as="link" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
            ) : null}
            {secondaryCta ? (
              <Button as="link" href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
