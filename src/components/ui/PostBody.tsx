import Image from "next/image";
import type { PostBlock } from "@/content/posts";

/** Renderer for det strukturerte artikkelinnholdet i en fagartikkel. */
export function PostBody({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="mt-4 text-2xl font-semibold tracking-tight text-graphite-900"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-lg leading-relaxed text-graphite-700">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-graphite-700">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-copper-500" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <p
                key={i}
                className="border-l-2 border-copper-500 bg-mist px-6 py-5 text-lg italic leading-relaxed text-graphite-800"
              >
                {block.text}
              </p>
            );
          case "image":
            return (
              <figure key={i} className="my-4">
                <div className="overflow-hidden border border-graphite-200 bg-white rounded-sm">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={block.width}
                    height={block.height}
                    sizes="(min-width: 1024px) 720px, 92vw"
                    className="h-auto w-full"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-3 text-sm leading-relaxed text-graphite-500">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
