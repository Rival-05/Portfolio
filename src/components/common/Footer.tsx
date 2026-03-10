import Link from "next/link";
import Container from "./Container";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/config/Hero";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Separator />
      <div className="flex items-center justify-between py-8">
        <div className="flex items-baseline text-secondary justify-between gap-2">
          <p className="text-sm font-medium gap-2 flex items-center ">
            © {currentYear}
            <Link
              href={`${socialLinks[0].href}`}
              key={`${socialLinks[0].name}`}
              className="hover:underline underline-offset-3 transition-all duration-300"
            >
              Rajat Tripathi.
            </Link>
          </p>
          <span className="text-xs">All rights reserved.</span>
        </div>
        <div className="flex gap-1">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-secondary flex items-center gap-2"
                >
                  <span className="size-6">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  );
}
