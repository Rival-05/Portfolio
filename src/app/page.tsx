import Container from "@/components/common/Container";

export default function Home() {
  return (
    <Container className="py-16">
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="text-neutral-600">Your Name</span>
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl">
          I'm a developer passionate about building amazing web experiences.
          Check out my projects and blog posts.
        </p>
        <div className="flex gap-4">
          <a
            href="/projects"
            className="rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="rounded-md border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </Container>
  );
}
