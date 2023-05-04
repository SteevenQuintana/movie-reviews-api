import { Schema, model } from 'mongoose'
import { MovieComment } from '../interfaces/comment.interface'

export const CommentSchema = new Schema<MovieComment>(
  {
    text: {
      type: String,
      required: true
    },
    raiting: {
      type: Number,
      required: true
    },
    userId: {
      type: String
    },
    movieId: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const CommentModel = model('comments', CommentSchema)
export default CommentModel
