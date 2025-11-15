import Image from "next/image";
import fs from "fs";
import path from "path";

const overlayTexts = [
  "Community kitchens offering warm, plant-rich meals.",
  "Neighbors gathering so no one dines alone.",
  "Volunteers plating nourishment with reverence.",
  "Sharing seasonal produce and stories of hope.",
];

function loadPhotos() {
  try {
    const photosDir = path.join(process.cwd(), "public", "photos");
    const files = fs
      .readdirSync(photosDir, { withFileTypes: true })
      .filter(
        (file) =>
          file.isFile() && /\.(png|jpe?g|gif|webp|avif)$/i.test(file.name),
      )
      .map((file) => ({
        src: `/photos/${file.name}`,
        name: file.name,
      }));
    return files.length
      ? files
      : [
          {
            src: "/images/lotus.svg",
            name: "lotus-placeholder",
          },
        ];
  } catch (error) {
    return [
      {
        src: "/images/lotus.svg",
        name: "lotus-placeholder",
      },
    ];
  }
}

export default function PhotoGallery() {
  const photos = loadPhotos();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => {
        const caption =
          overlayTexts[index % overlayTexts.length] ||
          "Sheltering the hungry with mindful meals.";
        return (
          <div
            key={photo.name}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-white shadow-soft transition duration-700 hover:-translate-y-1"
          >
            <Image
              src={photo.src}
              alt="Community meal service"
              width={600}
              height={480}
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-70"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--ink)]/70 px-6 text-center opacity-0 transition duration-500 group-hover:opacity-100">
              <p className="font-display text-lg text-white">{caption}</p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
              Nourish
            </div>
          </div>
        );
      })}
    </div>
  );
}
