import { heroConfig, skillComponents } from "@/config/Hero";
import { parseTemplate } from "@/lib/hero";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { Button } from "../ui/button";
import Container from "../common/Container";
import Skill from "../common/Skill";
import Chat from "../svgs/Chat";

const buttonIcons = {
  Chat: Chat,
};

export default function Hero() {
  const { name, title, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part: any) => {
      if (part.type === "skill" && "skill" in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === "bold" && "text" in part) {
        return (
          <b key={part.key} className="text-primary whitespace-pre-wrap">
            {part.text}
          </b>
        );
      } else if (part.type === "text" && "text" in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl">
      {/* Text Area */}
      <div className="mt-4 flex flex-col gap-3 sm:mt-8">
        <h1 className="max-w-4xl text-3xl md:text-4xl font-semibold tracking-tight ">
          <span className="bg-linear-to-b from-gray-500 via-gray-700 to-gray-800 bg-clip-text text-transparent">
            Hi, I&apos;m {name} —
          </span>{" "}
          <span className="text-primary/40">{title}</span>
        </h1>

        <div className="mt-2 flex max-w-3xl flex-wrap items-center gap-x-1.5 gap-y-2 whitespace-pre-wrap text-sm text-neutral-700 sm:mt-4 sm:text-base md:text-lg">
          {renderDescription()}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];
          return (
            <Button
              key={index}
              variant={button.variant as "outline" | "default"}
              className={cn(
                "w-full sm:w-auto",
                button.variant === "outline" && "inset-shadow-indigo-500",
                button.variant === "default" && "inset-shadow-indigo-500",
              )}
            >
              <Link
                href={button.href}
                className="flex items-center justify-center gap-2"
              >
                {IconComponent && <IconComponent />}
                <span>{button.text}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </Container>
  );
}
