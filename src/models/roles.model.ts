import { Schema, model } from 'mongoose'
import { Role } from '../interfaces/role.interface'

const RoleSchema = new Schema<Role>(
  {
    roleName: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
)

const RoleModel = model('roles', RoleSchema)
export default RoleModel
