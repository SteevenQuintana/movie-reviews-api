import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  insertUser,
  getResponseUsers,
  getResponseUser
} from '../services/users.services'
import { RequestExt } from '../interfaces/req-ext.interface'

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseUser = await getResponseUser(id)
    const data = responseUser ? responseUser : 'NOT_FOUND'
    res.send(data)
  } catch (e) {
    handleHttp(res, 'Error getting User')
  }
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getResponseUsers()
    res.send(responseUsers)
  } catch (e) {
    handleHttp(res, 'Error getting Users')
  }
}

const postUser = async (req: RequestExt, res: Response) => {
  try {
    const { body } = req

    const responseUser = await insertUser(body)

    res.send({
      user: responseUser
    })
  } catch (e) {
    handleHttp(res, 'Error creating user', e)
  }
}

export { getUser, getUsers, postUser }
