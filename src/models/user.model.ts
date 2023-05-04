import { Schema, Types, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    roles: [
      {
        type: Types.ObjectId,
        ref: 'roles'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model('users', UserSchema)
export default UserModel
