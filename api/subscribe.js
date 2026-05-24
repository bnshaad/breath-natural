function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  res.status(201).json({ message: "Thanks for subscribing." });
}
