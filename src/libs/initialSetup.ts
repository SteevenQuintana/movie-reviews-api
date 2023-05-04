import RoleModel from '../models/roles.model'

export const createRoles = async () => {
  const count = await RoleModel.estimatedDocumentCount()

  if (count > 0) return

  await Promise.all([
    RoleModel.create({ roleName: 'user' }),
    RoleModel.create({ roleName: 'admin' })
  ])
}
