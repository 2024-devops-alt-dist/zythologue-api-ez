import { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectToDb } from './db/config';

const startServer = async (): Promise<void> => {
    try {
        // Try to connect to the db
        await connectToDb();

        // Start the server if connection to the db worked
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Erreur au démarrage du serveur: ', err);
        process.exit(1);
    }
}

startServer();