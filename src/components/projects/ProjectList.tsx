import { type Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  className?: string;
}

export default function ProjectList({ projects, className }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="py-6 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }
  return (
    <div className={`${className} grid grid-cols-1 gap-4 md:grid-cols-2`}>
      {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
