import { defineField, defineType } from "sanity";

const programOptions = [
  { title: "Publishing Mentorship", value: "publishing" },
  { title: "Meditation & Yoga", value: "meditation-yoga" },
  { title: "Holistic Counseling", value: "holistic-counseling" },
  { title: "Seminars & Retreats", value: "seminars-retreats" },
];

export default defineType({
  name: "program",
  title: "Program",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Program Name",
      type: "string",
      options: {
        list: programOptions,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroText",
      title: "Hero Copy",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "bullets",
      title: "What to expect",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "audience",
      title: "Who it's for",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "format",
      title: "Format",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duration / Cadence",
      type: "string",
    }),
    defineField({
      name: "pricingText",
      title: "Pricing / Contribution",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
