import ProgramDetail from "@/components/ProgramDetail";
import { getProgramContent } from "@/lib/programs.server";

export const metadata = {
  title: "Seminars & Retreats | Akarma",
  description: "Immersive gatherings for regenerative leadership and creative devotion.",
};

export default async function SeminarsRetreatsPage() {
  const program = await getProgramContent("seminars-retreats");
  return <ProgramDetail data={program} />;
}
