import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";

const items: { name: string; href: string }[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">Adrian</span>
          </Link>
          <ThemeToggle />
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {items.map(({ href, name }) => (
              <Link key={href} href={href} className="transition-colors hover:text-foreground/80">
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <Button variant="outline" className="ml-auto">
          <FaDownload />
          Resume
        </Button>
      </div>
    </header>
  );
}
