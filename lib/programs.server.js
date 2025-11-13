import { sanityFetch } from "./sanity.client";
import { programBySlugQuery } from "./queries";
import { getProgramFallback } from "./demoContent";

const mapProgram = (doc, slug) => {
  if (!doc) return getProgramFallback(slug);
  return {
    hero: doc.title,
    promise: doc.heroText,
    overview: doc.description,
    expect: doc.bullets,
    audience: doc.audience,
    format: doc.format,
    duration: doc.duration,
    pricing: doc.pricingText,
  };
};

export async function getProgramContent(slug) {
  const doc = await sanityFetch(programBySlugQuery, { slug });
  return mapProgram(doc, slug);
}
