"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";
import Container from "./Container";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/10">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href={navigationConfig.brand.href}
            className="flex items-center space-x-2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              priority
              className="rounded-md object-cover"
            />
          </Link>

          <nav className="flex items-center space-x-2">
            {navigationConfig.mainNav.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  size="sm"
                  variant={pathname === item.href ? "outline" : "secondary"}
                  className={cn("transition-colors")}
                >
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
