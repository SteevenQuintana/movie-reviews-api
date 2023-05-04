import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'

const insertUser = async ({ username, email, password, roles }: User) => {
  return await UserModel.create({ username, email, password, roles })
}

const getResponseUsers = async () => {
  return await UserModel.find({})
}

const getResponseUser = async (id: string) => {
  return await UserModel.findOne({ _id: id })
}

export { insertUser, getResponseUser, getResponseUsers }
