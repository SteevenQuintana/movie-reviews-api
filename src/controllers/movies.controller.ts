import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  insertMovie,
  getResponseMovies,
  getResponseMovie,
  updateResponseMovie,
  deleteResponseMovie
} from '../services/movies.services'

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

const postMovie = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const responseMovie = await insertMovie(body)

    res.send(responseMovie)
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

export { getMovie, getMovies, updateMovie, postMovie, deleteMovie }
