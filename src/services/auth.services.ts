import { Types } from 'mongoose'
import { Auth } from '../interfaces/auth.interface'
import { User } from '../interfaces/user.interface'
import RoleModel from '../models/roles.model'
import UserModel from '../models/user.model'
import { encrypt, verified } from '../utils/bcrypt.handle'
import { generateToken } from '../utils/jwt.handle'

const registerNewUser = async ({ username, email, password, roles }: User) => {
  const userBD = await UserModel.findOne({ email })
  if (userBD) return 'USER_IS_ALREADY_REGISTERED'

  const passwordHash = await encrypt(password)

  const newUser: User = {
    username,
    email,
    password: passwordHash
  }

  if (roles) {
    const foundRole = await RoleModel.find({ roleName: { $in: roles } })
    newUser.roles = foundRole.map((role) => role._id)
  } else {
    const role = await RoleModel.findOne({ roleName: 'user' })
    newUser.roles = [role?._id] as Types.ObjectId[]
  }
  console.log(newUser)

  return await UserModel.create(newUser)
}

const loginUser = async ({ email, password }: Auth) => {
  const userBD = await UserModel.findOne({ email }).populate('roles')

  if (!userBD) return 'USER_NOT_FOUND'

  const passHash = userBD.password
  const isCorrect = await verified(password, passHash)
  console.log(userBD)
  if (!isCorrect) return 'PASSWORD_INCORRECT'
  const token = generateToken(userBD.email)

  return {
    token,
    user: userBD
  }
}

export { loginUser, registerNewUser }
