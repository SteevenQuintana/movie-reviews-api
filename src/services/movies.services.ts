import { Movie } from '../interfaces/movie.interface'
import MovieModel from '../models/movies.model'

const insertMovie = async (movie: Movie) => {
  return await MovieModel.create(movie)
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

export {
  insertMovie,
  getResponseMovies,
  getResponseMovie,
  updateResponseMovie,
  deleteResponseMovie
}
