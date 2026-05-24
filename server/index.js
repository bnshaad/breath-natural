import express from "express";
import fs from "node:fs/promises";
import { createServer as createHttpServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(__dirname, "data");
const subscribersFile = path.join(dataDir, "subscribers.json");
const app = express();
const httpServer = createHttpServer(app);
const port = process.env.PORT || 5173;
const isProduction = process.env.NODE_ENV === "production";

app.use(express.json());

async function readJson(filePath, fallback) {
  try {
    const file = await fs.readFile(filePath, "utf8");
    return JSON.parse(file);
  } catch {
    return fallback;
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.get("/api/plants", async (_req, res) => {
  const plants = await readJson(path.join(dataDir, "plants.json"), {
    trendyPlants: [],
    topSelling: [],
  });

  res.json(plants);
});

app.post("/api/subscribe", async (req, res) => {
  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  const subscribers = await readJson(subscribersFile, []);
  const exists = subscribers.some((subscriber) => subscriber.email === email);

  if (exists) {
    return res.status(200).json({ message: "You are already subscribed." });
  }

  subscribers.push({ email, subscribedAt: new Date().toISOString() });
  await fs.writeFile(subscribersFile, `${JSON.stringify(subscribers, null, 2)}\n`);

  res.status(201).json({ message: "Thanks for subscribing." });
});

if (isProduction) {
  app.use(express.static(path.join(rootDir, "dist")));
  app.get("/{*splat}", (_req, res) => {
    res.sendFile(path.join(rootDir, "dist", "index.html"));
  });
} else {
  const { createServer } = await import("vite");
  const vite = await createServer({
    root: rootDir,
    appType: "spa",
    server: { middlewareMode: true, hmr: { server: httpServer } },
  });

  app.use(vite.middlewares);
}

httpServer.listen(port, "127.0.0.1", () => {
  console.log(`Planto full stack app running at http://localhost:${port}`);
});
