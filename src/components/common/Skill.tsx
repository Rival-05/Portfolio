import { Link } from "next-view-transitions";
import React from "react";

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className=" inline-flex items-center self-end rounded-md border  border-black/20 bg-black/5 px-2 py-1 text-sm text-black "
    >
      <div className="size-4 shrink-0">{children}</div>
      <p className="ml-1 text-sm font-bold">{name}</p>
    </Link>
  );
}
