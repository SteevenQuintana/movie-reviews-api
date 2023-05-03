import { Comment } from '../interfaces/comment.interface'
import CommentModel from '../models/comment.model'

const insertComment = async ({ comment, rating, userId, movieId }: Comment) => {
  return await CommentModel.create({ comment, rating, userId, movieId })
}

export { insertComment }
