import { Movie } from '../interfaces/movie.interface'
import MovieModel from '../models/movies.model'

const insertMovie = async (movie: Movie) => {
  const responseInsert = await MovieModel.create(movie)
  return responseInsert
}

const getResponseMovies = async () => {
  const responseMovie = await MovieModel.find({})
  return responseMovie
}

const getResponseMovie = async (id: string) => {
  const responseMovies = await MovieModel.findOne({ _id: id })
  return responseMovies
}

const updateResponseMovie = async (id: string, data: Movie) => {
  const responseUpdatedMovie = await MovieModel.findOneAndUpdate(
    {
      _id: id
    },
    data,
    {
      new: true
    }
  )
  return responseUpdatedMovie
}

const deleteResponseMovie = async (id: string) => {
  const responseMovies = await MovieModel.deleteOne({ _id: id })
  return responseMovies
}

export {
  insertMovie,
  getResponseMovies,
  getResponseMovie,
  updateResponseMovie,
  deleteResponseMovie
}
