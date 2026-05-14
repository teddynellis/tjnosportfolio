import express from "express";
import path from "path";
import cors from "cors";
import { Resend } from "resend";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware
  app.use(express.json());
  app.use(cors());

  // Resend instance
  const getResend = () => {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not configured");
    }
    return new Resend(key);
  };

  // API route for sending email
  app.post("/api/send-email", async (req, res) => {
    const { subject, message, fromEmail } = req.body;

    if (!subject || !message) {
      return res.status(400).json({ error: "Subject and Message are required" });
    }

    try {
      const resend = getResend();
      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Resend test sender
        to: "teddy.nellis@gmail.com",
        replyTo: fromEmail || "no-reply@resend.dev",
        subject: `[Portfolio Contact] ${subject}`,
        text: message,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: error.message });
      }

      res.json({ success: true, data });
    } catch (err: any) {
      console.error("Server error:", err);
      res.status(500).json({ error: err.message || "Something went wrong" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
