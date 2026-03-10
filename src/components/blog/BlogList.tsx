import { BlogPostPreview } from "@/types/blog";
import { BlogPreview } from "./BlogPreview";

interface BlogListProps {
  posts: BlogPostPreview[];
  className?: string;
}

export function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex min-h-100 flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No blog posts found</h2>
        <p className="text-muted-foreground">
          Check back later for new content!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6 ">
      {posts.map((post) => (
        <BlogPreview key={post.slug} post={post} />
      ))}
    </div>
  );
}
