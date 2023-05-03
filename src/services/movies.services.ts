import { MovieComment } from '../interfaces/comment.interface'
import { Movie } from '../interfaces/movie.interface'
import MovieModel from '../models/movies.model'

const insertMovie = async ({ movieName, averageRating, idUser }: Movie) => {
  return await MovieModel.create({ movieName, averageRating, idUser })
}

const getResponseMovies = async () => {
  return await MovieModel.find({})
}

const getResponseMovie = async (id: string) => {
  return await MovieModel.findOne({ _id: id })
}

const updateResponseMovie = async (id: string, data: Movie) => {
  return await MovieModel.findOneAndUpdate(
    {
      _id: id
    },
    data,
    {
      new: true
    }
  )
}

const deleteResponseMovie = async (id: string) => {
  return await MovieModel.deleteOne({ _id: id })
}

const createComment = async (id: string, comment: MovieComment) => {
  const movie = await MovieModel.findById(id)

  if (!movie) {
    throw new Error('MOVIE_NOT_FOUND')
  }

  movie.comments.push(comment)
  await movie.save()

  return movie
}

export {
  insertMovie,
  getResponseMovies,
  getResponseMovie,
  updateResponseMovie,
  deleteResponseMovie,
  createComment
}
