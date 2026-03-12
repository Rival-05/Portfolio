import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/config/Hero";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { footerConfig } from "@/config/Footer";
import Link from "next/link";
import Container from "./Container";
import Visitors from "../analytics/Visitors";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Separator />
      <div className="flex items-center text-secondary justify-between py-6">
        <div className="flex flex-col justify-between gap-2">
          <div className="flex items-baseline gap-1">
            <p className="text-sm font-medium gap-2 flex items-center ">
              {footerConfig.copyrightSymbol} {currentYear}
              <Link
                href={`${socialLinks[0].href}`}
                key={`${socialLinks[0].name}`}
                className="hover:underline underline-offset-3 transition-all duration-300"
              >
                {footerConfig.copyrightName}.
              </Link>
            </p>
            <span className="text-xs">{footerConfig.copyright}</span>
          </div>
          <Visitors />
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
