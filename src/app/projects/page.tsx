import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600">
            A collection of my work and side projects.
          </p>
        </div>

        <Separator />

        {/* Projects Grid - Placeholder */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* We'll add project cards here later */}
          <div className="rounded-lg border border-neutral-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
            <p className="text-neutral-600">Coming soon...</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">Project 2</h3>
            <p className="text-neutral-600">Coming soon...</p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6">
            <h3 className="mb-2 text-xl font-semibold">Project 3</h3>
            <p className="text-neutral-600">Coming soon...</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
