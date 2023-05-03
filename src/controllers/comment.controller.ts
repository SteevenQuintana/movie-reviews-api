import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { insertComment } from '../services/comment.services'
import { RequestExt } from '../interfaces/req-ext.interface'
import { Comment } from '../interfaces/comment.interface'

const postComment = async (req: RequestExt, res: Response) => {
  try {
    const commentormovie = await CommentModel.find().populate('movieId')
    console.log(commentormovie)

    const { comment, rating, movieId } = req.body
    const { user } = req

    const newComment: Comment = {
      comment,
      rating,
      userId: user?.id,
      movieId
    }

    const responseComment = await insertComment(newComment)

    res.send({
      comment: responseComment
    })
  } catch (e) {
    handleHttp(res, 'Error posting comment', e)
  }
}

export { postComment }
