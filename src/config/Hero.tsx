import X from "../components/svgs/X";
import Linkedin from "@/components/svgs/Linkedin";
import Mail from "@/components/svgs/mail";
import Github from "@/components/technologies/Github";
import TypeScript from "@/components/technologies/Typerscript";
import NextJs from "@/components/technologies/Nextjs";
import Postgre from "@/components/technologies/Postgre";
import Css from "@/components/technologies/css";
import Shadcn from "@/components/technologies/Shadcn";
import Vercel from "@/components/technologies/Vercel";
import React from "@/components/technologies/ReactIcon";

export const skillComponents = {
  TypeScript: TypeScript,
  NextJs: NextJs,
  PostgreSQL: Postgre,
  Css: Css,
  Shadcn: Shadcn,
  Vercel: Vercel,
  React: React,
};

export const heroConfig = {
  name: "Rajat",
  title: "A Full Stack developer.",

  skills: [
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      component: "NextJs",
    },
    {
      name: "React",
      href: "https://react.dev/",
      component: "React",
    },
    {
      name: "Typescript",
      href: "https://www.typescriptlang.org/",
      component: "TypeScript",
    },

    {
      name: "PostgreSQL",
      href: "https://www.postgresql.org/",
      component: "PostgreSQL",
    },
  ],

  description: {
    template:
      "I am a final year CSE undergraduate and I build interactive web apps using {skills:0}, {skills:1}, {skills:2} and {skills:3} focusing on performance, clarity, and smooth user experiences.",
  },

  buttons: [
    {
      variant: "default",
      text: "Get in touch",
      href: "/contact",
      icon: "Chat",
    },
  ],
};

export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/Rival_o5",
    icon: <X />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/rivalo5/",
    icon: <Linkedin />,
  },
  {
    name: "Github",
    href: "https://github.com/Rival-05",
    icon: <Github />,
  },
  {
    name: "Email",
    href: "mailto:rivalo3.chat@gmail.com",
    icon: <Mail />,
  },
];
