import Css from "@/components/technologies/css";
import Shadcn from "@/components/technologies/Shadcn";
import Vercel from "@/components/technologies/Vercel";
import ReactIcon from "@/components/technologies/ReactIcon";
import TypeScript from "@/components/technologies/Typerscript";
import NextJs from "@/components/technologies/Nextjs";
import Postgre from "@/components/technologies/Postgre";
import Github from "@/components/technologies/Github";
import Postman from "@/components/technologies/Postman";
import MongoDB from "@/components/technologies/MongoDB";
import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    title: "NotesBuddy",
    description:
      "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools",
    image: "/project/notesbuddy.png",

    link: "https://notesbuddy.in",
    technologies: [
      { name: "Next.js", icon: <NextJs key="nextjs" /> },
      { name: "TypeScript", icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
      { name: "Vercel", icon: <Vercel key="vercel" /> },
      { name: "MongoDB", icon: <MongoDB key="mongodb" /> },
      { name: "Tailwind CSS", icon: <Css key="tailwindcss" /> },
      { name: "shadcn/ui", icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/ramxcodes/notesbuddy",
    live: "https://notesbuddy.in",
    details: true,
    projectDetailsPageSlug: "/projects/notesbuddy",
    isWorking: true,
  },
];
