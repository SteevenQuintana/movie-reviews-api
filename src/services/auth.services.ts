import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const registerNewUser = async ({ username, email, password }: User) => {
  const userBD = await UserModel.findOne({ email })
  if (userBD) return 'USER_IS_ALREADY_REGISTERED'

  const passwordHash = await encrypt(password)

  return await UserModel.create({
    username,
    email,
    password: passwordHash
  })
}

const loginUser = async ({ email, password }: Auth) => {
  const userBD = await UserModel.findOne({ email })
  if (!userBD) return 'USER_NOT_FOUND'

  const passHash = userBD.password
  const isCorrect = await verified(password, passHash)

  if (!isCorrect) return 'PASSWORD_INCORRECT'
  const token = generateToken(userBD.email)

  return {
    token,
    user: userBD
  }
}

export { loginUser, registerNewUser }
