import { Router } from 'express'
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
  addComment
} from '../controllers/movies.controller'
import { checkJWT } from '../middleware/session'

const router = Router()

router.get('/', getMovies)
router.get('/:id', getMovie)
router.post('/', checkJWT, postMovie)
router.put('/:id', checkJWT, updateMovie)
router.delete('/:id', checkJWT, deleteMovie)

router.post('/:id/comments', checkJWT, addComment)

export { router }
