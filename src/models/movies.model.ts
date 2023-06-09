import { Schema, model } from 'mongoose'
import { Movie } from '../interfaces/movie.interface'
import { CommentSchema } from './comment.model'

const MovieSchema = new Schema<Movie>(
  {
    movieName: {
      type: String,
      required: true
    },
    averageRating: {
      type: Number
    },
    idUser: {
      type: String
    },
    comments: [CommentSchema]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const MovieModel = model('movies', MovieSchema)
export default MovieModel
