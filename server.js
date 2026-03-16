const express = require("express");
const axios = require("axios");

const app = express();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ORG = "your-org-name";

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`
};

app.get("/access-report", async (req, res) => {
  try {

    const reposRes = await axios.get(
      `https://api.github.com/orgs/${ORG}/repos`,
      { headers }
    );

    const repos = reposRes.data;

    const userAccess = {};

    await Promise.all(
      repos.map(async repo => {

        const collabRes = await axios.get(
          `https://api.github.com/repos/${ORG}/${repo.name}/collaborators`,
          { headers }
        );

        collabRes.data.forEach(user => {
          if (!userAccess[user.login]) {
            userAccess[user.login] = [];
          }

          userAccess[user.login].push(repo.name);
        });

      })
    );

    res.json(userAccess);

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});