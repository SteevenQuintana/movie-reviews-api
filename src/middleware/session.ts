import { NextFunction, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { RequestExt } from '../interfaces/req-ext.interface'
import UserModel from '../models/user.model'
import RoleModel from '../models/roles.model'

const checkJWT = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || ''
    const jwt = jwtByUser.split(' ').pop()
    const isUser = verifyToken(`${jwt}`) as { id: string }

    if (!isUser) {
      res.status(401)
      res.send('SESSION_IS_NOT_VALID')
    } else {
      req.user = isUser
      next()
    }
  } catch (e) {
    res.status(401)
    res.send('NO_VALID_SESSION')
  }
}

const checkExistingEmail = async (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = await UserModel.findOne({ email: req.body.email })
    if (email)
      return res.status(400).json({ message: 'The email already exists' })

    next()
  } catch (error) {
    res.status(500)
  }
}

const isAdmin = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const user = await UserModel.findOne({ email: req.user?.id })
    const roles = await RoleModel.find({ _id: { $in: user?.roles } })

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].roleName === 'admin') {
        next()
        return
      }
    }
    return res.status(403)
  } catch (e) {
    res.status(403)
    res.send('ADMIN_ROLE_NEEDED')
  }
}

export { checkJWT, checkExistingEmail, isAdmin }
