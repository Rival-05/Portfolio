import { BlogList } from "@/components/blog/BlogList";
import { BlogPostPreview } from "@/types/blog";
import Container from "@/components/common/Container";

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
}

export function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  return (
    <Container className="py-8">
      <div className="space-y-6">
        <div className="space-y-2 text-center flex flex-col items-start">
          <h1 className="text-3xl font-bold tracking-light">Blogs</h1>
          <p className="text-muted-foreground text-lg font-semibold">
            My recent findings, thoughts, and insights that I feel like sharing.
          </p>
        </div>
        <BlogList posts={initialPosts} />
      </div>
    </Container>
  );
}
