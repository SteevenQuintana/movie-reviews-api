import { Router } from 'express'
import { postComment } from '../controllers/comment.controller'
import { checkJWT } from '../middleware/session'

const router = Router()

router.post('/', checkJWT, postComment)

export { router }
