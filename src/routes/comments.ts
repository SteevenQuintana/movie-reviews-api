import { Router } from 'express'
import {
  getCommentByEmail,
  getComments,
  deleteComment
} from '../controllers/comments.controller'
import { checkJWT, isAdmin } from '../middleware/session'

const router = Router()

router.get('/', [checkJWT, isAdmin], getComments)
router.get('/user', [checkJWT, isAdmin], getCommentByEmail)
router.delete('/:id', [checkJWT, isAdmin], deleteComment)

export { router }
