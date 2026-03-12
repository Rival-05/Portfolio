import { BlogList } from "@/components/blog/BlogList";
import { BlogPostPreview } from "@/types/blog";
import Container from "@/components/common/Container";

interface BlogPageClientProps {
  initialPosts: BlogPostPreview[];
}

export function BlogPageClient({ initialPosts }: BlogPageClientProps) {
  return (
    <Container className="py-6 sm:py-8 lg:py-10">
      <div className="space-y-6">
        <div className="flex flex-col items-start space-y-2 text-left">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Blogs
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base font-semibold sm:text-lg">
            My recent findings, thoughts, and insights that I feel like sharing.
          </p>
        </div>
        <BlogList posts={initialPosts} />
      </div>
    </Container>
  );
}
