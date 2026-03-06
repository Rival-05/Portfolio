import Link from "next/link";
import Container from "./Container";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-white">
      <Container>
        <div className="py-8">
          <Separator className="mb-6" />
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-neutral-600">
              © {currentYear} Your Name. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
