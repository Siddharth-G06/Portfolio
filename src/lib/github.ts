export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  homepage?: string | null;
  fork: boolean;
}

function extractDescriptionFromReadme(content: string): string | null {
  // Remove HTML tags
  let text = content.replace(/<[^>]*>/g, "");
  
  // Remove HTML comments
  text = text.replace(/<!--[\s\S]*?-->/g, "");
  
  // Remove markdown headers
  text = text.replace(/^#+.*$/gm, "");
  
  // Remove images
  text = text.replace(/!\[.*\]\(.*\)/g, "");
  
  // Remove badges/links (like build status)
  text = text.replace(/\[!\[.*\]\(.*\)\]\(.*\)/g, "");
  
  // Remove standalone links
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
  
  // Get all paragraphs
  const paragraphs = text
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(p => {
      // Filter out code blocks, blockquotes, and very short lines
      return p.length > 30 && 
             !p.startsWith(">") && 
             !p.startsWith("```") && 
             !p.startsWith("|") && // tables
             !/^[*-] /.test(p);   // lists
    });
    
  if (paragraphs.length > 0) {
    // Take the first substantial paragraph
    const firstPara = paragraphs[0].replace(/\s+/g, " ");
    return firstPara.length > 180 ? firstPara.substring(0, 177) + "..." : firstPara;
  }
  
  return null;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };
    
    if (token && token !== "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN") {
      headers.Authorization = `token ${token}`;
    }

    // Fetch more to account for forks we'll filter out
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=30`,
      {
        headers,
        next: { revalidate: 21600 },
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
      return [];
    }

    const allRepos: GitHubRepo[] = await res.json();
    // Filter out forks, sort by stars desc, take top 12
    const repos = allRepos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 12);

    // Fetch READMEs for richer project descriptions (works with or without token)
    const reposWithBetterDescriptions = await Promise.all(
      repos.map(async (repo) => {
        try {
          const readmeRes = await fetch(
            `https://api.github.com/repos/${repo.full_name}/readme`,
            { headers, next: { revalidate: 21600 } }
          );
          
          if (readmeRes.ok) {
            const readmeData = await readmeRes.json();
            const content = Buffer.from(readmeData.content, 'base64').toString('utf8');
            const extracted = extractDescriptionFromReadme(content);
            
            // If we found a good README description, use it
            // Otherwise stick to the GitHub description or 'No description'
            if (extracted && extracted.length > (repo.description?.length || 0)) {
              repo.description = extracted;
            }
          }
        } catch (error) {
          console.error(`Error fetching README for ${repo.name}:`, error);
        }
        return repo;
      })
    );

    return reposWithBetterDescriptions;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
