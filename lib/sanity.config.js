import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import deskStructure from "@/sanity/deskStructure";
import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || "production";

export default defineConfig({
  name: "akarma",
  title: "Akarma CMS",
  projectId: projectId || "yourProjectId",
  dataset,
  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool({
      defaultApiVersion: "2024-08-01",
    }),
  ],
});
