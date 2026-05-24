import { topSelling, trendyPlants } from "../src/data/plants.js";

export default function handler(_req, res) {
  res.status(200).json({ trendyPlants, topSelling });
}
