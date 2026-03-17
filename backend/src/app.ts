import express from "express";
import cors from "cors";
import healthRouter from "./routes/health";
import receiptRouter from "./routes/receipt";
import subscribeRouter from "./routes/subscribe";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/api", healthRouter);
app.use("/api/subscribe", subscribeRouter);
app.use("/receipt", receiptRouter);

export default app;
