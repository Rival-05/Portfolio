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
      <ProjectList className="mt-6" projects={projects.slice(0, 4)} />
      <div className="mt-6 flex justify-center">
        <Link href="/projects">
          <Button>View All Projects</Button>
        </Link>
      </div>
    </Container>
  );
}
