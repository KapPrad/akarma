import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { sanityFetch } from "@/lib/sanity.client";
import { teachersQuery } from "@/lib/queries";
import { sampleTeachers } from "@/lib/demoContent";

export const metadata = {
  title: "About Akarma",
  description:
    "Meet the facilitators, story, and approach guiding Akarma's contemplative programs.",
};

export default async function AboutPage() {
  const teachers = (await sanityFetch(teachersQuery)) || sampleTeachers;

  return (
    <>
      <Hero
        tag="About"
        title="We honor ancient lineages while designing for present-day realities."
        description="Akarma began as a small writing circle for caregivers navigating burnout. Today it is a global studio offering publishing mentorship, contemplative practice, and restorative retreats - all anchored in radical compassion."
        primaryCta={{ label: "Explore Programs", href: "/programs" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <Section
        eyebrow="Story"
        title="From kitchen table sanghas to a multi-disciplinary studio."
        description="Founded by editor and meditation guide Sahana Iyer, Akarma has grown with the help of artists, psychologists, and wisdom keepers who believe inner transformation and social innovation must co-exist."
      >
        <div className="space-y-6 text-lg text-[var(--muted)]">
          <p>
            Our approach is intentionally slow. We listen before we design. Every residency,
            manuscript, and session considers the cultural, ecological, and organizational
            systems at play. We partner with community cooks, herbalists, and musicians to
            make sure the experience feels embodied - not just conceptual.
          </p>
          <p>
            We are grounded in South Asian contemplative traditions, trauma research, and
            regenerative economics. This mix results in containers that are spacious yet
            structured, poetic yet practical.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Approach"
        title="Care principles"
        description="How we design every container."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Deep listening",
              body: "Intake conversations, surveys, and somatic mapping inform facilitation plans.",
            },
            {
              title: "Co-creation",
              body: "Participants co-design rituals, agreements, and integration practices.",
            },
            {
              title: "Integration",
              body: "Post-program office hours, resource libraries, and accountability pods.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 text-left shadow-sm"
            >
              <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                {principle.title}
              </p>
              <p className="mt-3 text-[var(--muted)]">{principle.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Facilitators
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold">Teacher circle</h2>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Every facilitator is trained in trauma awareness, anti-oppressive practice, and
              cross-cultural communication.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {teachers.map((teacher) => (
              <div
                key={teacher._id}
                className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 text-left shadow-sm"
              >
                <p className="font-display text-2xl font-semibold text-[var(--ink)]">
                  {teacher.name}
                </p>
                <p className="mt-1 text-sm uppercase tracking-wide text-[var(--accent)]">
                  {teacher.role}
                </p>
                <p className="mt-3 text-[var(--muted)]">{teacher.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button as="link" href="/programs">
              View Programs
            </Button>
            <Button as="link" href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
