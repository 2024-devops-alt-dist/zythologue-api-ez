import express, { Application } from "express";
const app: Application = express();

import { setupSwagger } from "../swagger";
import cors from 'cors';

const version = "v1";
const path = `/api/${version}`;

import { router as beersRoutes } from "./routes/beers";
import { router as breweriesRoutes } from "./routes/breweries";

app.use(cors({
    origin: 'http://localhost:5173'
}));

// Middleware to parse json in requests
app.use(express.json());

setupSwagger(app);

app.use(`${path}/beers`, beersRoutes);
app.use(`${path}/breweries`, breweriesRoutes);

export default app;