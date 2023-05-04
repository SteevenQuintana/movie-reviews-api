import { Router } from 'express'
import { getUser, getUsers, postUser } from '../controllers/users.controller'
import { checkJWT, isAdmin } from '../middleware/session'

const router = Router()

router.get('/', [checkJWT, isAdmin], getUsers)
router.get('/:id', [checkJWT, isAdmin], getUser)
router.post('/', [checkJWT, isAdmin], postUser)

export { router }
