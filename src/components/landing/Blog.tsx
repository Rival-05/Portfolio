import { getPublishedBlogPosts } from "@/lib/blog";
import { Link } from "next-view-transitions";
import { BlogPreview } from "../blog/BlogPreview";
import { Button } from "../ui/button";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-20 max-w-4xl">
      <SectionHeading subheading="Latest archieve" heading="Blogs" />

      <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
        {posts.slice(0, 3).map((post) => (
          <BlogPreview key={post.slug} post={post} />
        ))}

        {posts.length === 0 && (
          <p className="text-lg text-neutral-500">No published blogs yet.</p>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="default" size="sm">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
