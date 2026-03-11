import { BlogPostPreview } from "@/types/blog";
import { Link } from "next-view-transitions";
import ArrowRight from "../svgs/ArrowRight";
import Calendar from "../svgs/Calendar";

interface BlogCardProps {
  post: BlogPostPreview;
}

export function BlogPreview({ post }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="border p-4 rounded-md">
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-2xl space-y-3">
          <Link href={`/blog/${slug}`}>
            <h3 className="text-lg leading-tight font-semibold transition-colors hover:text-neutral-700">
              {title}
            </h3>
          </Link>

          <p className="text-sm text-neutral-500">{description}</p>

          <time
            dateTime={date}
            className="flex items-center gap-2 text-xs text-neutral-500"
          >
            <Calendar className="size-4" />
            {formattedDate}
          </time>
        </div>

        <Link
          href={`/blog/${slug}`}
          className="group text-secondary flex items-center gap-2 text-sm underline-offset-3 hover:underline"
        >
          Read
          <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
