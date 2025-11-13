import ProgramDetail from "@/components/ProgramDetail";
import { getProgramContent } from "@/lib/programs.server";

export const metadata = {
  title: "Meditation & Yoga Sangha | Akarma",
  description: "Gentle, trauma-informed meditation and movement practices.",
};

export default async function MeditationYogaPage() {
  const program = await getProgramContent("meditation-yoga");
  return <ProgramDetail data={program} />;
}
