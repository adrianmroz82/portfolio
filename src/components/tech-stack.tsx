import { Card } from "@/components/ui/card";

const technologies: { category: string; skills: string[] }[] = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "CSS", "TailwindCSS", "Redux", "MaterialUI", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase", "Serverless", "REST", "Swagger"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "AWS", "CI/CD", "Git", "GCP", "DataDog"],
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Synthetic Tests"],
  },
];

export function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
