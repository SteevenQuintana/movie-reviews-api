import { Router } from 'express'
import {
  getCommentByEmail,
  getComments,
  deleteComment
} from '../controllers/comments.controller'
import { checkJWT, isAdmin } from '../middleware/session'

const router = Router()

/**
 * @openapi
 * /comments:
 *   get:
 *     summary: Get all comments
 *     description: Retrieve all comments from the database.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Comments
 *     responses:
 *       '200':
 *         description: List of comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/comment'
 *       '401':
 *         description: Unauthorized request.
 *       '403':
 *         description: forbidden
 * /comments/{id}:
 *   get:
 *     summary: Get comments by user email
 *     description: Retrieve all comments made by a specific user.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user email of the comment to delete.
 *     responses:
 *       '200':
 *         description: user comments were found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/comment'
 *       '401':
 *         description: Unauthorized request.
 *       '403':
 *         description: forbidden
 *   delete:
 *     summary: Delete a comment
 *     description: Remove a comment from the database.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment to delete.
 *     responses:
 *       '204':
 *         description: No Content
 *       '401':
 *         description: Unauthorized request.
 *       '403':
 *         description: forbidden
 *       '404':
 *         description: comment not found
 */

router.get('/', [checkJWT, isAdmin], getComments)
router.get('/:id', [checkJWT, isAdmin], getCommentByEmail)
router.delete('/:id', [checkJWT, isAdmin], deleteComment)

export { router }
