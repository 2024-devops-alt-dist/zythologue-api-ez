import { Pool } from "pg";

export const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT!),
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export const connectToDb = async (): Promise<void> => {
    try {
        await pool.query('SELECT 1');
        console.log('Connected to db successfully');
    } catch (error) {
        console.error('Error while trying to connect to db :', error);
        process.exit(1);
    }
};