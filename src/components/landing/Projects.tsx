import { projects } from "@/config/Projects";
import { Link } from "next-view-transitions";
import Container from "../common/Container";
import { Button } from "../ui/button";
import SectionHeading from "../common/SectionHeading";
import ProjectList from "../projects/ProjectList";

export default function Projects() {
  return (
    <Container className="mt-10">
      <SectionHeading subheading="Recent works" heading="Projects" />
      <ProjectList className="mt-6 sm:mt-8" projects={projects.slice(0, 4)} />
      <div className="mt-6 flex justify-center">
        <Button
          asChild
          variant="default"
          size="sm"
          className="w-full sm:w-auto"
        >
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </Container>
  );
}
