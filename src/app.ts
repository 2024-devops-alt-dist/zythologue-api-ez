import express, { Application } from "express";
const app: Application = express();

const version = "v1";
const path = `/api/${version}`;

import { router as beersRoutes } from "./routes/beers";

// Middleware to parse json in requests
app.use(express.json());

app.use(`${path}/beers`, beersRoutes);

export default app;