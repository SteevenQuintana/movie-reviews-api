import { Request, Response } from 'express'
import { loginUser, registerNewUser } from '../services/auth.services'

const registerCtrl = async (req: Request, res: Response) => {
  const { username, email, password } = req.body
  const responseUser = await registerNewUser({ username, email, password })
  res.send(responseUser)
}

const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const responseUser = await loginUser({ email, password })

  if (responseUser === 'USER_NOT_FOUND') res.status(403)
  if (responseUser === 'PASSWORD_INCORRECT') res.status(403)

  res.send(responseUser)
}

export { loginCtrl, registerCtrl }
