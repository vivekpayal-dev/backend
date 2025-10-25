import express from "express";
import { config } from "dotenv";
const app = express();
config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/about", (req, res) => {
  res.json({ message: "This is the about page." });
});

app.get("/status", (req, res) => {
  res.send("<h1>Hello</h1>");
});

const userData = {
  login: "vivekpayal-dev",
  id: 210504765,
  node_id: "U_kgDODIwMPQ",
  avatar_url: "https://avatars.githubusercontent.com/u/210504765?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/vivekpayal-dev",
  html_url: "https://github.com/vivekpayal-dev",
  followers_url: "https://api.github.com/users/vivekpayal-dev/followers",
  following_url:
    "https://api.github.com/users/vivekpayal-dev/following{/other_user}",
  gists_url: "https://api.github.com/users/vivekpayal-dev/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/vivekpayal-dev/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/vivekpayal-dev/subscriptions",
  organizations_url: "https://api.github.com/users/vivekpayal-dev/orgs",
  repos_url: "https://api.github.com/users/vivekpayal-dev/repos",
  events_url: "https://api.github.com/users/vivekpayal-dev/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/vivekpayal-dev/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Vivek Payal",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 13,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2025-05-06T08:44:06Z",
  updated_at: "2025-10-14T02:29:05Z",
};

app.get("/github", (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
