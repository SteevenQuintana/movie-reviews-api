import { Router } from 'express'
import { loginCtrl, registerCtrl } from '../controllers/auth.controller'
import { checkExistingEmail } from '../middleware/session'
const router = Router()

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registerRequest'
 *     responses:
 *       '200':
 *         description: Successfully registered user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       '400':
 *         description: Invalid request
 *       '500':
 *         description: Internal server error
 *
 * /auth/login:
 *   post:
 *     summary: Login to the application
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/loginRequest'
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   $ref: '#/components/schemas/user'
 *       '400':
 *         description: Invalid request
 *       '403':
 *         description: Invalid email or password
 *       '500':
 *         description: Internal server error
 */
router.post('/register', checkExistingEmail, registerCtrl)
router.post('/login', loginCtrl)

export { router }
