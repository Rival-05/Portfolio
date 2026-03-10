import Container from "@/components/common/Container";
import { projects } from "@/config/Projects";
import { ProjectAccordion } from "@/components/projects/ProjectAccordion";

export default function ProjectsPage() {
  return (
    <Container className="py-8">
      <div className="space-y-6">
        <div className="space-y-2 text-center flex flex-col items-start">
          <h1 className="text-3xl font-bold tracking-light">Projects</h1>
          <p className="text-muted-foreground text-lg font-semibold">
            Applications that i have built so far.
          </p>
        </div>
        <ProjectAccordion projects={projects} />
      </div>
    </Container>
  );
}
