import { Router } from "express";
export const router = Router();

import { beersController } from "../controllers/beers";

/**
 * @swagger
 * components:
 *   schemas:
 *     Beer:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID of the beer
 *         name:
 *           type: string
 *           description: Name of the beer
 *         description:
 *           type: string
 *           description: Description of the beer
 *         abv:
 *           type: number
 *           description: Alcohol by volume percentage
 *         organic:
 *           type: boolean
 *           description: Whether the beer is organic
 *         id_category:
 *           type: integer
 *           description: ID of the beer category
 *         id_brewery:
 *           type: integer
 *           description: ID of the brewery
 *       required:
 *         - name
 *         - description
 *         - abv
 *         - organic
 */

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Get all beers
 *     tags: [Beers]
 *     responses:
 *       200:
 *         description: A list of beers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 beers:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Beer'
 *       404:
 *         description: Beers not found
 */
router.get("/", beersController.getAll);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Get a single beer
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the beer to retrieve
 *     responses:
 *       200:
 *         description: A beer object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beer'
 *       404:
 *         description: Beer not found
 */
router.get("/:id", beersController.getOne);

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Add a new beer
 *     tags: [Beers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beer'
 *     responses:
 *       201:
 *         description: The created beer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beer'
 *       400:
 *         description: Bad request (missing fields)
 */
router.post("/", beersController.post);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Update an existing beer
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the beer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beer'
 *     responses:
 *       200:
 *         description: The updated beer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beer'
 *       404:
 *         description: Beer not found
 */
router.put("/:id", beersController.put);

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Delete a beer
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the beer to delete
 *     responses:
 *       200:
 *         description: Beer successfully deleted
 *       404:
 *         description: Beer not found
 */
router.delete("/:id", beersController.delete);