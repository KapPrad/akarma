const { createClient } = require("@sanity/client");

async function loadDemoContent() {
  return import("../lib/demoContent.js");
}

async function run() {
  const { SANITY_PROJECT_ID, SANITY_DATASET = "production", SANITY_TOKEN } = process.env;

  if (!SANITY_PROJECT_ID || !SANITY_TOKEN) {
    console.error("Set SANITY_PROJECT_ID and SANITY_TOKEN before running the seed script.");
    process.exit(1);
  }

  const client = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    token: SANITY_TOKEN,
    apiVersion: "2024-08-01",
    useCdn: false,
  });

  const demo = await loadDemoContent();

  const siteSettingsDoc = {
    _id: "siteSettings",
    _type: "siteSettings",
    ...demo.sampleSiteSettings,
  };

  const programDocs = Object.entries(demo.programDetails).map(([slug, data]) => ({
    _id: `program-${slug}`,
    _type: "program",
    title: data.hero,
    slug: { current: slug },
    heroText: data.promise,
    description: data.overview,
    bullets: data.expect,
    audience: data.audience,
    format: data.format,
    duration: data.duration,
    pricingText: data.pricing,
  }));

  const eventDocs = demo.sampleEvents.map((event) => ({
    _id: event._id,
    _type: "event",
    title: event.title,
    slug: { current: event.slug.current },
    type: event.type,
    startDate: new Date(event.startDate).toISOString(),
    endDate: event.endDate ? new Date(event.endDate).toISOString() : null,
    location: event.location,
    online: event.online,
    shortDesc: event.shortDesc,
    registerUrl: event.registerUrl,
  }));

  const teacherDocs = demo.sampleTeachers.map((teacher) => ({
    _id: teacher._id,
    _type: "teacher",
    name: teacher.name,
    role: teacher.role,
    bio: teacher.bio,
  }));

  const testimonialDocs = demo.sampleTestimonials.map((testimonial) => ({
    _id: testimonial._id,
    _type: "testimonial",
    name: testimonial.name,
    role: testimonial.role,
    quote: testimonial.quote,
  }));

  const docs = [
    siteSettingsDoc,
    ...programDocs,
    ...eventDocs,
    ...teacherDocs,
    ...testimonialDocs,
  ];

  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`Seeded ${doc._type}: ${doc._id}`);
  }

  console.log("✅ Sanity dataset hydrated with demo content.");
}

run();
