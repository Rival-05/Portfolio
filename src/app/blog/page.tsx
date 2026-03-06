import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

export default function BlogPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            Thoughts, tutorials, and insights about web development.
          </p>
        </div>

        <Separator />

        {/* Blog Posts List - Placeholder */}
        <div className="space-y-6">
          {/* We'll add blog post cards here later */}
          <article className="rounded-lg border border-neutral-200 p-6">
            <h2 className="mb-2 text-2xl font-semibold">Blog Post 1</h2>
            <p className="mb-4 text-sm text-neutral-500">March 6, 2026</p>
            <p className="text-neutral-600">Coming soon...</p>
          </article>
          <article className="rounded-lg border border-neutral-200 p-6">
            <h2 className="mb-2 text-2xl font-semibold">Blog Post 2</h2>
            <p className="mb-4 text-sm text-neutral-500">March 5, 2026</p>
            <p className="text-neutral-600">Coming soon...</p>
          </article>
        </div>
      </div>
    </Container>
  );
}
