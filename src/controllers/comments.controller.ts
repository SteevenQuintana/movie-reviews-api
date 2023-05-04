import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  getResponseComments,
  getCommentsByUser,
  deleteResponseComment
} from '../services/comments.services'

const getCommentByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.body
    const responseComment = await getCommentsByUser(email)
    const data = responseComment ? responseComment : 'NOT_FOUND'
    res.send(data)
  } catch (e) {
    handleHttp(res, 'Error getting comments')
  }
}

const getComments = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const responseComments = await getResponseComments(
      Number(page),
      Number(limit)
    )
    res.send({ page, limit, responseComments })
  } catch (e) {
    handleHttp(res, 'Error getting comments')
  }
}

const deleteComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseComment = await deleteResponseComment(id)
    res.send(responseComment)
  } catch (e) {
    handleHttp(res, 'Error deleting comment')
  }
}

export { getCommentByEmail, getComments, deleteComment }
