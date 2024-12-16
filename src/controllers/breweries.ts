import { Request, Response } from "express";
import { pool } from "../db/config";
import { Brewery } from "../models/brewery";

export const breweriesController = {
    getAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await pool.query("SELECT * FROM brewery");

            if (result.rows.length === 0) {
                res.status(404).json({ error: "Breweries not found" });
                return;
            }

            res.status(200).json({ breweries: result.rows });
        } catch (error) {
            console.error("Error while getting breweries", error);
            res.status(500).json({ error: "Error while getting breweries" });
        }
    },
    getOne: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        try {
            const result = await pool.query("SELECT * FROM brewery WHERE id = $1", [id]);

            if (result.rows.length === 0) {
                res.status(404).json({ error: `Brewery ${id} not found` });
                return;
            }

            res.status(200).json({ brewery: result.rows[0] });
        } catch (error) {
            console.error(`Error while getting brewery ${id}`, error);
            res.status(500).json({ error: `Error while getting brewery ${id}` });
        }
    },
    post: async (req: Request, res: Response): Promise<void> => {
        const { name, country, description }: Brewery = req.body;

        if (!name || !country || !description) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        try {
            const result = await pool.query(
                `INSERT INTO brewery (name, country, description)
                VALUES ($1, $2, $3)
                RETURNING *`,
                [name, country, description]
            );

            res.status(201).json({ brewery: result.rows[0] });
        } catch (error) {
            console.error("Error while creating the brewery", error);
            res.status(500).json({ error: "Error while creating the brewery" });
        }
    },
    put: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const { name, country, description }: Partial<Brewery> = req.body;

        try {
            const beerExists = await pool.query("SELECT * FROM brewery WHERE id = $1", [id]);
            if (beerExists.rows.length === 0) {
                res.status(404).json({ error: `Brewery ${id} not found` });
                return;
            }

            const result = await pool.query(
                `UPDATE brewery 
                SET 
                    name = COALESCE($1, name), 
                    country = COALESCE($2, country),
                    description = COALESCE($3, description) 
                WHERE id = $4
                RETURNING *`,
                [name, country, description, id]
            );

            res.status(200).json({ brewery: result.rows[0] });
        } catch (error) {
            console.error(`Error while updating brewery ${id}`, error);
            res.status(500).json({ error: `Error while updating brewery ${id}` });
        }
    },
    delete: async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;

        try {
            const beerExists = await pool.query("SELECT * FROM brewery WHERE id = $1", [id]);
            if (beerExists.rows.length === 0) {
                res.status(404).json({ error: `Brewery ${id} not found` });
                return;
            }

            await pool.query("DELETE FROM brewery WHERE id = $1", [id]);

            res.status(200).json({ message: `Brewery ${id} deleted successfully` });
        } catch (error) {
            console.error(`Error while deleting brewery ${id}`, error);
            res.status(500).json({ error: `Error while deleting brewery ${id}` });
        }
    },
};