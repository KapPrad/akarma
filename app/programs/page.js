import Hero from "@/components/Hero";
import ProgramCard from "@/components/ProgramCard";
import Section from "@/components/Section";
import { programs } from "@/lib/demoContent";

export const metadata = {
  title: "Programs | Akarma",
  description: "Publishing mentorship, meditation and yoga, holistic counseling, and retreats.",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        tag="Programs"
        title="Every offering is a tenderness practice."
        description="Whether you are writing a book, leading a team, or simply craving a pause, select the pathway that matches your current season."
        primaryCta={{ label: "Contact team", href: "/contact" }}
        secondaryCta={{ label: "Book via Calendly", href: "/#book" }}
      />
      <Section className="pb-24">
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
    </>
  );
}
