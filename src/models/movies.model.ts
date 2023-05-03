import { Schema, Types, model, Model } from 'mongoose'
import { Movie } from '../interfaces/movie.interface'

const MovieSchema = new Schema<Movie>(
  {
    movieName: {
      type: String,
      required: true
    },
    averageRating: {
      type: Number,
      required: true
    },
    idUser: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const MovieModel = model('movies', MovieSchema)
export default MovieModel
