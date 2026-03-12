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
    <article className="rounded-md border p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 max-w-2xl space-y-3">
          <Link href={`/blog/${slug}`}>
            <h3 className="text-lg font-semibold leading-tight transition-colors hover:text-neutral-700 sm:text-xl">
              {title}
            </h3>
          </Link>

          <p className="text-sm leading-6 text-neutral-500">{description}</p>

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
          className="group text-secondary flex items-center gap-2 self-start text-sm underline-offset-3 hover:underline sm:self-center"
        >
          Read
          <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
