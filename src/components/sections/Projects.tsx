import { GitHubRepo } from "@/lib/github";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectCard } from "@/components/sections/ProjectCard";

interface ProjectsProps {
  repos: GitHubRepo[];
}

export function Projects({ repos }: ProjectsProps) {
  const displayRepos = repos && repos.length > 0 ? repos : Array(6).fill(null).map((_, i) => ({
    id: 1000 + i,
    name: `Example Project ${i + 1}`,
    full_name: `Siddharth-G06/Example-Project-${i + 1}`,
    description: "A placeholder description for the project showcasing the design system and typography scale used across the portfolio.",
    topics: ["python", "machine-learning"],
    html_url: "#",
    homepage: i % 3 === 0 ? "#" : null,
    stargazers_count: [12, 34, 7, 89, 23, 5][i] ?? 0,
    forks_count: [3, 8, 1, 14, 5, 0][i] ?? 0,
    language: "Python",
    updated_at: new Date().toISOString(),
    fork: false,
  })) as GitHubRepo[];

  return (
    <section id="work" className="relative pb-24 overflow-hidden pt-20">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">

        <ScrollReveal>
          <header className="mb-12">
            <span className="text-[0.75rem] font-sans tracking-[0.2em] text-[#C47C3A] font-semibold uppercase block mb-4">
              SELECTED WORK
            </span>
            <h2 className="text-6xl md:text-7xl font-heading text-[#F0E8D8] leading-[1.1] font-medium max-w-2xl">
              Things I&apos;ve<br/>Built
            </h2>
          </header>
        </ScrollReveal>

        {/* CSS Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
        >
          {displayRepos.map((repo, idx) => {
            const isFeatured = idx < 2;
            const gridClass = isFeatured ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : "";

            return (
              <ProjectCard
                key={repo.name + idx}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                topics={repo.topics}
                html_url={repo.html_url}
                homepage={repo.homepage}
                className={gridClass}
                index={idx}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
