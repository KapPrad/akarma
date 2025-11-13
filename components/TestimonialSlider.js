"use client";

import { useEffect, useState } from "react";

export default function TestimonialSlider({ testimonials = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return undefined;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  const testimonial = testimonials[index];

  return (
    <div className="rounded-3xl border border-[var(--border-subtle)] bg-white/90 p-8 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
        Voices from the circle
      </p>
      <p className="mt-6 font-display text-2xl leading-relaxed text-[var(--ink)]">
        <span aria-hidden="true">&quot;</span>
        {testimonial.quote}
        <span aria-hidden="true">&quot;</span>
      </p>
      <p className="mt-6 text-sm font-semibold text-[var(--ink)]">
        {testimonial.name} / <span className="text-[var(--muted)]">{testimonial.role}</span>
      </p>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, dotIndex) => (
          <span
            key={`dot-${dotIndex}`}
            className={`h-2 w-2 rounded-full ${
              dotIndex === index ? "bg-[var(--accent)]" : "bg-[var(--border-subtle)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
