import ProgramDetail from "@/components/ProgramDetail";
import { getProgramContent } from "@/lib/programs.server";

export const metadata = {
  title: "Holistic Counseling | Akarma",
  description: "Integrative therapy weaving mindfulness, somatics, and creative reflection.",
};

export default async function HolisticCounselingPage() {
  const program = await getProgramContent("holistic-counseling");
  return <ProgramDetail data={program} />;
}
