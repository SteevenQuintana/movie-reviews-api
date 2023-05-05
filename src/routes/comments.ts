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
 * /comments/user:
 *   get:
 *     summary: Get comments by user email
 *     description: Retrieve all comments made by a specific user.
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *           format: email
 *         description: The email address of the user whose comments should be retrieved.
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
 * /comments/{id}:
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
router.get('/user', [checkJWT, isAdmin], getCommentByEmail)
router.delete('/:id', [checkJWT, isAdmin], deleteComment)

export { router }
