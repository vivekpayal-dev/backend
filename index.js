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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
