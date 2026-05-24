import { topSelling, trendyPlants } from "../data/plants";

export const fallbackPlants = { trendyPlants, topSelling };

export async function getPlants() {
  try {
    const response = await fetch("/api/plants");

    if (!response.ok) {
      throw new Error("Plant API request failed");
    }

    const data = await response.json();

    return {
      trendyPlants: data.trendyPlants || trendyPlants,
      topSelling: data.topSelling || topSelling,
    };
  } catch {
    return fallbackPlants;
  }
}

export async function subscribeEmail(email) {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Unable to subscribe right now.");
  }

  return data.message;
}
