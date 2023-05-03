import { Schema, model } from 'mongoose'
import { Comment } from '../interfaces/comment.interface'

const CommentSchema = new Schema<Comment>(
  {
    comment: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    userId: {
      type: String
    },
    movieId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'movies'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const CommentModel = model('comments', CommentSchema)
export default CommentModel
