import { Project } from "@/types/project";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface ProjectAccordionProps {
  projects: Project[];
}

export function ProjectAccordion({ projects }: ProjectAccordionProps) {
  if (projects.length === 0) {
    return (
      <div className="py-6 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <Accordion type="multiple" className="w-full px-4">
      {projects.map((project, index) => (
        <AccordionItem key={index} value={`project-${index}`}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex w-full items-start justify-between gap-4 pr-4">
              <div className="flex-1 text-left">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-lg hover:underline hover:underline-offset-3 duration-200 leading-tight"
                >
                  {project.title}
                </Link>

                <p className="text-muted-foreground mt-1 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                    project.isworking
                      ? "border-green-300 bg-green-500/10"
                      : "border-red-300 bg-red-500/10"
                  }`}
                >
                  {project.isworking ? (
                    <>
                      <div className="size-2 animate-pulse rounded-full bg-green-500" />
                      Live
                    </>
                  ) : (
                    <>
                      <div className="size-2 animate-pulse rounded-full bg-red-500" />
                      Building
                    </>
                  )}
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-6 pt-2">
              {/* Technologies & Tools */}
              <div>
                <h4 className="mb-3 text-base  font-semibold">Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger>
                        <div className="size-6 cursor-pointer transition-all duration-300 hover:scale-110">
                          {tech.icon}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tech.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* What I Built */}
              {project.whatIBuilt && project.whatIBuilt.length > 0 && (
                <ul className="space-y-2">
                  {project.whatIBuilt.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-2 text-sm"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-current" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
