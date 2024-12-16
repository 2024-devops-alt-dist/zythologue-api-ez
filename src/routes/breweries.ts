import { Router } from "express";
export const router = Router();

import { breweriesController } from "../controllers/breweries";

/**
 * @swagger
 * components:
 *   schemas:
 *     Brewery:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID of the brewery
 *         name:
 *           type: string
 *           description: Name of the brewery
 *         country:
 *           type: string
 *           description: Country of origin
 *         description:
 *           type: string
 *           description: Description of the brewery
 *       required:
 *         - name
 *         - country
 *         - description
 */

/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Get all breweries
 *     tags: [Breweries]
 *     responses:
 *       200:
 *         description: A list of breweries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 breweries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Breweries not found
 */
router.get("/", breweriesController.getAll);

/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Get a single brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the brewery to retrieve
 *     responses:
 *       200:
 *         description: A brewery object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Brewery not found
 */
router.get("/:id", breweriesController.getOne);

/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Add a new brewery
 *     tags: [Breweries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brewery'
 *     responses:
 *       201:
 *         description: The created brewery
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brewery'
 *       400:
 *         description: Bad request (missing fields)
 */
router.post("/", breweriesController.post);

/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Update an existing brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the brewery to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brewery'
 *     responses:
 *       200:
 *         description: The updated brewery
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brewery'
 *       404:
 *         description: Brewery not found
 */
router.put("/:id", breweriesController.put);

/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Delete a brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the brewery to delete
 *     responses:
 *       200:
 *         description: Brewery successfully deleted
 *       404:
 *         description: Brewery not found
 */
router.delete("/:id", breweriesController.delete);