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

router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', logMiddleware, postMovie)
router.put('/:id', logMiddleware, updateMovie)
router.delete('/:id', logMiddleware, deleteMovie)

export { router }
