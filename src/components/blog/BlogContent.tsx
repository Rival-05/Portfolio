import { Separator } from "@/components/ui/separator";
import { BlogFrontmatter } from "@/types/blog";
import rehypeHighlight from "@shikijs/rehype";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BlogComponents } from "./BlogComponents";
import Calendar from "../svgs/Calendar";

interface BlogContentProps {
  frontmatter: BlogFrontmatter;
  content: string;
}

export function BlogContent({ frontmatter, content }: BlogContentProps) {
  const { title, description, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="mx-auto min-w-0 max-w-4xl">
      <header className="mb-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-lg leading-7 sm:text-xl">
            {description}
          </p>

          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Calendar className="size-5 sm:size-6" />
            <time dateTime={date}>{formattedDate}</time>
          </div>
        </div>

        <Separator />
      </header>

      {/* Content */}
      <div className="prose prose-sm max-w-none wrap-break-word prose-pre:max-w-full prose-pre:overflow-x-auto prose-img:h-auto prose-img:w-full prose-headings:scroll-mt-24 prose-a:break-all prose-code:break-words prose-neutral sm:prose-base dark:prose-invert">
        <MDXRemote
          source={content}
          components={BlogComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypeHighlight,
                  {
                    theme: "github-dark",
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
