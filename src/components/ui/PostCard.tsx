import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/content/posts";

/** Kompakt artikkelkort for fagbase-oversikten. */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/fagbase/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-graphite-200 bg-white rounded-sm transition-colors duration-150 hover:border-graphite-900"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-graphite-100">
        <Image
          src={post.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.14em] text-copper-700">
          <span>{post.category}</span>
          <span aria-hidden className="h-px w-4 bg-graphite-300" />
          <time dateTime={post.date} className="normal-case tracking-normal text-graphite-500">
            {post.dateLabel}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-graphite-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-graphite-600">
          {post.excerpt}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-copper-700">
          Les artikkel
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
