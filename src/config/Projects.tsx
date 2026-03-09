import Css from "@/components/technologies/css";
import Nextjs from "@/components/technologies/Nextjs";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Typescript from "@/components/technologies/Typerscript";
import Vercel from "@/components/technologies/Vercel";
import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Decentracert",
    description:
      "A decentralized certificate authority built to provide secure and transparent digital certificate management.",
    image: "/projects/decentracert.png",
    technologies: [
      { name: "Next.js", icon: <Nextjs key="nextjs" /> },
      { name: "TypeScript", icon: <Typescript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Tailwind CSS", icon: <Css key="css" /> },
      { name: "Shadcn UI", icon: <Shadcn key="shadcn" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
    ],
    link: "https://decentracert.vercel.app/",
    live: "https://decentracert.vercel.app/",
    github: "https://github.com/Rival-05/Decentracert",
    details: true,
    isworking: true,
    projectDetailsPageSlug: "/projects/decentracert",
  },
];
