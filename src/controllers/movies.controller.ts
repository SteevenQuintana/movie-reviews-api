import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  insertMovie,
  getResponseMovies,
  getResponseMovie,
  updateResponseMovie,
  deleteResponseMovie,
  createComment
} from '../services/movies.services'
import { RequestExt } from '../interfaces/req-ext.interface'
import { Movie } from '../interfaces/movie.interface'
import { MovieComment } from '../interfaces/comment.interface'

const getMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseMovie = await getResponseMovie(id)
    const data = responseMovie ? responseMovie : 'NOT_FOUND'
    res.send(data)
  } catch (e) {
    handleHttp(res, 'Error getting movie')
  }
}

const getMovies = async (req: Request, res: Response) => {
  try {
    const responseMovies = await getResponseMovies()
    res.send(responseMovies)
  } catch (e) {
    handleHttp(res, 'Error getting movies')
  }
}

const updateMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { body } = req

    const responseUpdateMovie = await updateResponseMovie(id, body)
    res.send(responseUpdateMovie)
  } catch (e) {
    handleHttp(res, 'Error updating movie')
  }
}

const postMovie = async (req: RequestExt, res: Response) => {
  try {
    const { body, user } = req

    const newMovie: Movie = {
      movieName: body.movieName,
      idUser: user?.id,
      comments: []
    }

    const responseMovie = await insertMovie(newMovie)

    res.send({
      movie: responseMovie
    })
  } catch (e) {
    handleHttp(res, 'Error posting movie', e)
  }
}

const deleteMovie = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const responseMovie = await deleteResponseMovie(id)
    res.send(responseMovie)
  } catch (e) {
    handleHttp(res, 'Error deleting movie')
  }
}

const addComment = async (req: RequestExt, res: Response) => {
  try {
    const { id } = req.params
    const { body, user } = req

    const comment: MovieComment = {
      text: body.text,
      raiting: body.raiting,
      userId: user?.id,
      movieId: id
    }

    const responseMovie = await createComment(id, comment)

    res.send(responseMovie)
  } catch (e) {
    handleHttp(res, 'Error adding comment to movie', e)
  }
}

export { getMovie, getMovies, updateMovie, postMovie, deleteMovie, addComment }
