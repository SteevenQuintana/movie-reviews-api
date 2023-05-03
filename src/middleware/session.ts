import { NextFunction, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { RequestExt } from '../interfaces/req-ext.interface'

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
    res.status(400)
    res.send('NO_VALID_SESSION')
  }
}

export { checkJWT }
