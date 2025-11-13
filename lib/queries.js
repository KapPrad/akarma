import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  title,
  tagline,
  contactEmail,
  phone,
  address,
  socials
}`;

export const eventsUpcomingQuery = groq`*[_type == "event" && startDate >= now()] | order(startDate asc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  type,
  startDate,
  endDate,
  location,
  online,
  shortDesc,
  registerUrl
}`;

export const eventsAllQuery = groq`*[_type == "event"] | order(startDate asc){
  _id,
  title,
  "slug": slug.current,
  type,
  startDate,
  endDate,
  location,
  online,
  shortDesc,
  registerUrl
}`;

export const teachersQuery = groq`*[_type == "teacher"] | order(name asc){
  _id,
  name,
  role,
  bio,
  "image": photo.asset->url,
  socials
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc)[0...6]{
  _id,
  name,
  role,
  quote
}`;

export const programBySlugQuery = groq`*[_type == "program" && slug.current == $slug][0]{
  _id,
  title,
  heroText,
  description,
  bullets,
  audience,
  format,
  duration,
  pricingText,
  coverImage{
    asset->{
      url,
      metadata { lqip }
    }
  }
}`;
