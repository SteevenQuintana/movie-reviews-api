import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'token.010101'

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET)
  return jwt
}

const verifyToken = () => {}

export { generateToken, verifyToken }
