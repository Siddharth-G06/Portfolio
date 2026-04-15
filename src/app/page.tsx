import { fetchGitHubRepos } from "@/lib/github";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Connect } from "@/components/sections/Connect";
import { ToastNotification } from "@/components/ui/ToastNotification";

export default async function Home() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Siddharth-G06";
  const repos = await fetchGitHubRepos(username);

  return (
    <>
      <ToastNotification />
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#14100A] text-[#F0E8D8] selection:bg-[#C47C3A] selection:text-[#14100A]">
        <Hero />
        <Projects repos={repos} />
        <About />
        <Timeline />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
