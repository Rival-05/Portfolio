import Container from "@/components/common/Container";
import { projects } from "@/config/Projects";
import { ProjectAccordion } from "@/components/projects/ProjectAccordion";

export default function ProjectsPage() {
  return (
    <Container className="py-6 sm:py-8 lg:py-10">
      <div className="space-y-6">
        <div className="flex flex-col items-start space-y-2 text-left">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl text-base font-semibold sm:text-lg">
            Applications that i have built so far.
          </p>
        </div>
        <ProjectAccordion projects={projects} />
      </div>
    </Container>
  );
}
