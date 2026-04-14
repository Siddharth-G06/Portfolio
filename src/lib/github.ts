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
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };
    
    if (token) {
      headers.Authorization = `token ${token}`;
    }

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stargazers_count&direction=desc&per_page=12`,
      {
        headers,
        next: { revalidate: 21600 }, // Cache for 6 hours
      }
    );

    if (!res.ok) {
      console.error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
      return [];
    }

    const repos: GitHubRepo[] = await res.json();
    return repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}
