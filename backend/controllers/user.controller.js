export const getUserProfileAndRepos = async (req, res) => {
  const { username } = req.params;

  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    // Log the full status and message if fetch fails
    if (!userRes.ok) {
      const errText = await userRes.text();
      console.error("GitHub user fetch failed:", errText);
      throw new Error("User not found!");
    }

    const userProfile = await userRes.json();

    const repoRes = await fetch(userProfile.repos_url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    });

    if (!repoRes.ok) {
      const errText = await repoRes.text();
      console.error("GitHub repo fetch failed:", errText);
      throw new Error("Failed to fetch repos!");
    }

    const repos = await repoRes.json();

    res.status(200).json({ userProfile, repos });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
