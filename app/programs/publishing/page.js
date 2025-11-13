import ProgramDetail from "@/components/ProgramDetail";
import { getProgramContent } from "@/lib/programs.server";

export const metadata = {
  title: "Publishing Mentorship | Akarma",
  description: "Editorial partnership for purpose-driven authors and publishers.",
};

export default async function PublishingProgramPage() {
  const program = await getProgramContent("publishing");
  return <ProgramDetail data={program} />;
}
