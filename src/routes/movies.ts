import { Router } from 'express'
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie
} from '../controllers/movies.controller'
import { logMiddleware } from '../middleware/log'

const router = Router()

router.get('/', logMiddleware, getMovies)
router.get('/:id', getMovie)
router.post('/', logMiddleware, postMovie)
router.put('/:id', updateMovie)
router.delete('/:id', deleteMovie)

export { router }
