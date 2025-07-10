// src/components/gitHub-activity.jsx
import { useState, useEffect } from 'react';

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = 'netdawgie'; // Replace with your actual GitHub handle

  // Identify motorsports-related repositories
  function isMotorsportsRepo(repo) {
    const keywords = ['motorsports', 'racing', 'track', 'driver', 'f1', 'nascar', 'wrc'];
    const name = repo.name.toLowerCase();
    const desc = repo.description?.toLowerCase() || '';
    return keywords.some(keyword => name.includes(keyword) || desc.includes(keyword));
  }

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${netdawgie}/repos?sort=updated&per_page=10`
        );
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error('GitHub fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, [username]);

  const motorsportsRepos = repos.filter(isMotorsportsRepo);
  const generalRepos = repos.filter(repo => !isMotorsportsRepo(repo));

  return (
    <div className="github-activity">
      {loading ? (
        <p>Loading GitHub data...</p>
      ) : (
        <>
          <h3>🏁 Motorsports-related Projects</h3>
          {motorsportsRepos.length > 0 ? (
            <ul>
              {motorsportsRepos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <strong>{repo.name}</strong> — {repo.description || 'No description'}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No motorsports-related repos found.</p>
          )}

          <h3>🧰 Other Projects</h3>
          <ul>
            {generalRepos.map(repo => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <strong>{repo.name}</strong> — {repo.description || 'No description'}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

