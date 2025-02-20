import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import { TechStack } from "@/components/tech-stack";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithubSquare, FaMailBulk } from "react-icons/fa";

import Link from "next/link";
import { Header } from "@/components/header";

import impactShop from "../../public/impact_shop_2.png";

// TODO: review this
export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Frontend Engineer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/adrianmroz82" target="_blank">
                  <Button variant="outline" size="icon">
                    <FaGithubSquare className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>

                <Link href="https://linkedin.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <FaLinkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>

                <Link href="mailto:hello@example.com">
                  <Button variant="outline" size="icon">
                    <FaMailBulk className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image={impactShop}
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=400&width=600"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 John.dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
