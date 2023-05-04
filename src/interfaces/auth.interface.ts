import { Types } from 'mongoose'

export interface Auth {
  email: string
  password: string
  roles?: Types.ObjectId[]
}
