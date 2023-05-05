import { Router } from 'express'
import { getUser, getUsers, postUser } from '../controllers/users.controller'
import { checkJWT, isAdmin } from '../middleware/session'

const router = Router()

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/user'
 *       '401':
 *         description: Unauthorized request.
 *       '500':
 *         description: Internal server error.
 
 *   post:
 *     summary: Create a new user.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: User object that needs to be added.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registerRequest'
 *     responses:
 *       201:
 *         description: User created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       '400':
 *         description: bad request.
 *       '401':
 *         description: Unauthorized request.
 *       '500':
 *         description: Internal server error.
 *
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of user to retrieve.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       '404':
 *         description: User not found.
 *       '401':
 *         description: Unauthorized request.
 *       '500':
 *         description: Internal server error.
 */

router.get('/', [checkJWT, isAdmin], getUsers)
router.get('/:id', [checkJWT, isAdmin], getUser)
router.post('/', [checkJWT, isAdmin], postUser)

export { router }
