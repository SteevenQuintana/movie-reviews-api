import { MovieComment } from '../interfaces/comment.interface'
import { Movie } from '../interfaces/movie.interface'
import CommentModel from '../models/comment.model'
import MovieModel from '../models/movies.model'
import { averageRatingHandle } from '../utils/average.handle'

const insertMovie = async ({ movieName, averageRating, idUser }: Movie) => {
  return await MovieModel.create({ movieName, averageRating, idUser })
}

const getResponseMovies = async (page: number, limit: number) => {
  return await MovieModel.find({})
    .skip((page - 1) * 10)
    .limit(limit)
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
  movie.averageRating = averageRatingHandle(movie.comments)

  await movie.save()
  await CommentModel.create(comment)

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
