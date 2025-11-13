import Hero from "@/components/Hero";
import Section from "@/components/Section";
import EventCard from "@/components/EventCard";
import { sanityFetch } from "@/lib/sanity.client";
import { eventsAllQuery } from "@/lib/queries";
import { sampleEvents } from "@/lib/demoContent";

export const metadata = {
  title: "Events | Akarma",
  description: "Upcoming seminars, retreats, and classes curated by Akarma.",
};

const eventTypes = ["Seminar", "Retreat", "Class"];

export default async function EventsPage({ searchParams }) {
  const events = (await sanityFetch(eventsAllQuery)) || sampleEvents;
  const typeFilter = searchParams?.type;
  const range = searchParams?.range || "upcoming";
  const now = new Date();

  const filtered = events.filter((event) => {
    const matchesType = typeFilter ? event.type === typeFilter : true;
    const eventStart = event.startDate ? new Date(event.startDate) : now;
    const matchesRange =
      range === "past" ? eventStart < now : range === "all" ? true : eventStart >= now;
    return matchesType && matchesRange;
  });

  return (
    <>
      <Hero
        tag="Events"
        title="Gather, learn, and rest in community."
        description="Below is a live view of events stored in Sanity. Use the filters to find the format and timing that supports you."
        primaryCta={{ label: "Contact team", href: "/contact" }}
        secondaryCta={{ label: "Book via Calendly", href: "/#book" }}
      />

      <Section
        className="pt-10"
        eyebrow="Filters"
        title="Browse the calendar"
        description="Refine by format or date range to find the right immersion."
      >
        <form className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-white p-4 text-sm text-[var(--ink)]">
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Type</span>
            <select
              name="type"
              defaultValue={typeFilter || ""}
              className="rounded-xl border border-[var(--border-subtle)] bg-white px-3 py-2"
            >
              <option value="">All</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-semibold">Date</span>
            <select
              name="range"
              defaultValue={range}
              className="rounded-xl border border-[var(--border-subtle)] bg-white px-3 py-2"
            >
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
              <option value="all">All</option>
            </select>
          </label>
          <button
            type="submit"
            className="rounded-2xl bg-[var(--accent)] px-4 py-2 font-semibold text-white"
          >
            Apply
          </button>
          <a href="/events" className="text-[var(--accent)] underline">
            Reset
          </a>
        </form>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.length ? (
            filtered.map((event) => <EventCard key={event._id} event={event} />)
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--border-subtle)] bg-white/70 p-8 text-center text-[var(--muted)]">
              Nothing matches those filters. Try another combination or{" "}
              <a href="/contact" className="text-[var(--accent)] underline">
                contact us
              </a>{" "}
              to plan a private gathering.
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
