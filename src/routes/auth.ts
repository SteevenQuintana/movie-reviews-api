import { Router } from 'express'
import { loginCtrl, registerCtrl } from '../controllers/auth.controller'
import { checkExistingEmail } from '../middleware/session'
const router = Router()

router.post('/register', checkExistingEmail, registerCtrl)
router.post('/login', loginCtrl)

export { router }
