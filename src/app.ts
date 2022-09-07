import express from "express";
import productRoutes from "./routes/products.routes";
import pino from "pino-http";

const app = express();

app.use(pino());
app.use(express.json());

// Routes
app.use(productRoutes);

export default app;
