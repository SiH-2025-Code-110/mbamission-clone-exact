import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const response = await fetch("https://beyond-bridge.com/mailman/subscribe/blogs_beyond-bridge.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email }).toString(),
    });

    if (!response.ok) {
      console.log("Mailman subscription failed with status:", response.status);
      return res.status(500).json({ error: "Failed to subscribe via Mailman" });
    }

    console.log("Mailman subscription successful for:", email);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mailman subscription error:", error);
    res.status(500).json({ error: "Internal server error during subscription" });
  }
});

export default router;
