import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Link } from "next-view-transitions";
import { Project } from "@/types/project";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import ArrowRight from "../svgs/ArrowRight";
import Github from "../technologies/Github";
import Website from "../svgs/Website";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className=" h-full w-full overflow-hidden ring-1 ring-gray-100 ring-inset p-0 shadow-none transition-all">
      <CardHeader className="p-0">
        <div className=" relative aspect-auto overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
        </div>
      </CardHeader>

      <CardContent className="h-full px-4 sm:px-6">
        <div className="flex h-full flex-col gap-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold leading-tight sm:text-xl">
              {project.title}
            </h3>
            <div className="flex items-center gap-3 sm:shrink-0">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Website />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Visit Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Source Code</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>

          <p className="text-secondary text-sm leading-6 line-clamp-4 sm:line-clamp-3">
            {project.description}
          </p>

          <div className="mt-auto">
            <h4 className="text-secondary mb-2 text-sm font-semibold">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 transition-all duration-300 hover:scale-110 cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>

      {project.details && (
        <CardFooter className="flex flex-col items-start justify-between gap-3 p-4 pt-0 sm:flex-row sm:items-center sm:px-6 sm:pb-6">
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
          <Link
            href="/projects"
            className="group text-secondary hover:text-primary flex items-center gap-2 text-sm underline-offset-3 transition-colors hover:underline"
          >
            View Details{" "}
            <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
