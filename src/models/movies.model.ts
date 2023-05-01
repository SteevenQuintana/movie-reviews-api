import { Schema, Types, model, Model } from 'mongoose'
import { Movie, User } from '../interfaces/movie.interface'

const UserSchema = new Schema<User>(
  {
    username: {
      type: String
    },
    email: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const MovieSchema = new Schema<Movie>(
  {
    movieName: {
      type: String,
      required: true
    },
    averageRating: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const MovieModel = model('movies', MovieSchema)
export default MovieModel
