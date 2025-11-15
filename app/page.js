import CalendlyEmbed from "@/components/CalendlyEmbed";
import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import NewsletterBlock from "@/components/NewsletterBlock";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialSlider from "@/components/TestimonialSlider";
import {
  programs,
  sampleEvents,
  sampleTestimonials,
  sampleSiteSettings,
} from "@/lib/demoContent";
import { eventsUpcomingQuery, testimonialsQuery, siteSettingsQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity.client";

const pillars = [
  {
    title: "Non-sectarian",
    body: "Rooted in pluralistic contemplative lineages and open to every worldview.",
  },
  {
    title: "Compassionate",
    body: "Trauma-conscious facilitation and pacing that honors your nervous system.",
  },
  {
    title: "Evidence-informed",
    body: "Practices braided with psychology, somatics, and systems thinking.",
  },
  {
    title: "Community-oriented",
    body: "Peer councils, teacher office hours, and scholarships keep care accessible.",
  },
];

export default async function HomePage() {
  const [eventsData, testimonialsData, siteSettings] = await Promise.all([
    sanityFetch(eventsUpcomingQuery),
    sanityFetch(testimonialsQuery),
    sanityFetch(siteSettingsQuery),
  ]);

  const events = eventsData?.length ? eventsData : sampleEvents;
  const testimonials = testimonialsData?.length ? testimonialsData : sampleTestimonials;
  const settings = siteSettings || sampleSiteSettings;

  return (
    <>
      <Hero
        tag={settings?.tagline || "Practices for modern seekers"}
        title="Akarma - cultivate clarity, compassion, and balance."
        description="We weave contemplative traditions, social innovation, and somatic science to support authors, caregivers, and teams. Every program is crafted with softness, rigor, and cultural sensitivity."
        primaryCta={{ label: "Explore Programs", href: "/programs" }}
        secondaryCta={{ label: "Book a Session", href: "/#book" }}
      />

      <Section
        eyebrow="Programs"
        title="Four pathways to sustain your inner and outer work."
        description="Choose the container that nourishes you right now - or combine them for a layered journey."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <ProgramCard
              key={program.slug}
              title={program.title}
              summary={program.summary}
              benefits={program.benefits}
              href={`/programs/${program.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Akarma"
        title="Soft structure. Deep care."
        description="Each circle is intentionally intimate and culturally attentive. Facilitators stay in relationship before, during, and after the experience."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 text-left shadow-sm"
            >
              <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                {pillar.title}
              </p>
              <p className="mt-3 text-[var(--muted)]">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Field Notes"
        title="Nourishing neighbors with heartfelt meals."
        description="Scenes from our seva kitchens where volunteers plate warm food so every guest feels seen and cared for."
      >
        <PhotoGallery />
      </Section>
      <Section
        eyebrow="Upcoming"
        title="Gatherings on the horizon"
        description="Events are published in Sanity so your team can update them without touching code."
      >
        {events.length ? (
          <div className="grid gap-6 md:grid-cols-2">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--border-subtle)] bg-white/70 p-8 text-center text-[var(--muted)]">
            No events yet - sign up for the newsletter to be the first to know.
          </div>
        )}
      </Section>

      <Section className="pt-0" eyebrow="Community">
        <div className="grid gap-10 lg:grid-cols-2">
          <NewsletterBlock />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Section>

      <Section
        className="pt-0"
        eyebrow="Schedule"
        title="Reserve a time that suits your rhythm."
        description="Sessions are available Tuesday through Saturday with early morning and evening slots for global time zones."
      >
        <div id="book">
          <CalendlyEmbed />
        </div>
      </Section>
    </>
  );
}





