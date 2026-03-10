import Css from "@/components/technologies/css";
import Nextjs from "@/components/technologies/Nextjs";
import Postman from "@/components/technologies/Postman";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import Typescript from "@/components/technologies/Typerscript";
import Vercel from "@/components/technologies/Vercel";
import JavaScript from "@/components/technologies/JavaScript";
import MongoDB from "@/components/technologies/MongoDB";
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
    whatIBuilt: [
      "Built a decentralized system for issuing and verifying digital certificates using blockchain technology.",
      "Implemented secure key generation and certificate signing with cryptographic algorithms.",
      "Designed an intuitive UI for certificate issuers, students, and verifiers with role-based access.",
      "Integrated blockchain validation to ensure certificate authenticity and prevent tampering.",
    ],
  },
  {
    title: "DormDesk",
    description:
      "DormDesk is a sleek hostel issue management platform that allows residents to quickly register maintenance complaints, track their resolution status and updates.",
    image: "/projects/dormdesk.png",
    technologies: [
      { name: "Next.js", icon: <Nextjs key="nextjs" /> },
      { name: "JavaScript", icon: <JavaScript key="javascript" /> },
      { name: "MongoDB", icon: <MongoDB key="mongodb" /> },
      { name: "Tailwind CSS", icon: <Css key="css" /> },
      { name: "Postman", icon: <Postman key="postman" /> },
    ],
    link: "#",
    live: "#",
    github: "https://github.com/Rival-05/DormDesk",
    details: true,
    isworking: false,
    whatIBuilt: [
      "Developed a complete issue tracking system for hostel maintenance with real-time status updates.",
      "Built REST APIs for complaint registration, assignment, and resolution workflows.",
      "Implemented MongoDB schema design for users, issues, and resolution tracking.",
      "Created responsive UI for students and administrators with different access levels.",
    ],
  },
];
