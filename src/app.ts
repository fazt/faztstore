import express from "express";
import pino from "pino-http";
import ExpressPinoLogger from "express-pino-logger";

import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/products.routes";
import { logger } from "./libs/pino";

const app = express();

app.use(
  ExpressPinoLogger({
    logger,
  })
);
app.use(express.json());

// Routes
app.use(productRoutes);
app.use(authRoutes);

export default app;
