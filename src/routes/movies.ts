import { Router } from 'express'
import {
  deleteMovie,
  getMovie,
  getMovies,
  postMovie,
  updateMovie,
  addComment
} from '../controllers/movies.controller'
import { checkJWT, isAdmin } from '../middleware/session'

const router = Router()

/**
 * @openapi
 * /movies:
 *  get:
 *    summary: Get a list of movies.
 *    description: Retrieve a list of movies with pagination.
 *    tags:
 *      - Movies
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: query
 *        name: page
 *        description: The page number to retrieve.
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 1
 *      - in: query
 *        name: limit
 *        description: The number of movies to retrieve per page.
 *        schema:
 *          type: integer
 *          minimum: 1
 *          default: 10
 *    responses:
 *      '200':
 *        description: A list of movies.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                page:
 *                  type: integer
 *                  description: The page number of the result.
 *                  example: 1
 *                limit:
 *                  type: integer
 *                  description: The number of movies per page.
 *                  example: 10
 *                responseMovies:
 *                  type: array
 *                  description: The list of movies.
 *                  items:
 *                    $ref: '#/components/schemas/movie'
 *      '500':
 *        description: Internal server error.
 *  post:
 *    summary: Create a new movie.
 *    description: Create a new movie in the database.
 *    tags:
 *      - Movies
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      description: The movie to create.
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/movie'
 *    responses:
 *      '200':
 *        description: The new movie.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *              movie:
 *                $ref: '#/components/schemas/movie'
 *      '400':
 *        description: Bad request.
 *      '401':
 *        description: Unauthorized request.
 *      '500':
 *        description: Internal server error.
 *
 * /movies/{id}:
 *  get:
 *    summary: Get a movie by ID.
 *    description: Retrieve a movie by its ID.
 *    tags:
 *      - Movies
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: The ID of the movie to retrieve.
 *        schema:
 *          type: string
 *        required: true
 *    responses:
 *      '200':
 *        description: The movie.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/movie'
 *      '400':
 *        description: Bad request.
 *      '404':
 *        description: Movie not found.
 *      '500':
 *        description: Internal server error.
 *  put:
 *    summary: Update a movie by ID
 *    description: Update a movie by ID
 *    tags:
 *      - Movies
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of the movie to update
 *        required: true
 *        schema:
 *          type: string
 *          example: 61148f46c2ffab00362d3f3e
 *      - in: header
 *        name: Authorization
 *        description: Bearer token
 *        required: true
 *        schema:
 *          type: string
 *          example: Bearer xxxxxx
 *      - in: body
 *        name: body
 *        description: Request body for updating a movie
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/movie'
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/movie'
 *      '400':
 *        description: Bad request.
 *      '401':
 *        description: Unauthorized request.
 *      '500':
 *        description: Internal server error.
 *  delete:
 *    summary: Delete a movie by ID
 *    description: Delete a movie by ID
 *    tags:
 *      - Movies
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of the movie to delete
 *        required: true
 *        schema:
 *          type: string
 *          example: 61148f46c2ffab00362d3f3e
 *      - in: header
 *        name: Authorization
 *        description: Bearer token
 *        required: true
 *        schema:
 *          type: string
 *          example: Bearer xxxxxx
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/movie'
 *      '400':
 *        description: Bad request.
 *      '401':
 *        description: Unauthorized request.
 *      '500':
 *        description: Internal server error.
 *
 * /movies/{id}/comments:
 *  post:
 *    summary: Add a new comment to a movie
 *    tags:
 *      - Movies
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the movie to add a comment to
 *        schema:
 *          type: string
 *          example: 616a782b44f8b6a3b6d7469d
 *      - in: body
 *        name: comment
 *        description: Comment object to be added to the movie
 *        required: true
 *        schema:
 *          $ref: '#/components/schemas/Comment'
 *    responses:
 *      '201':
 *        description: Created
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                comment:
 *                  $ref: '#/components/schemas/Comment'
 *      '400':
 *        description: Invalid request
 *      '401':
 *        description: Unauthorized
 *      '404':
 *        description: Movie not found
 *      '500':
 *        description: Internal server error
 */
router.get('/', getMovies)

router.get('/:id', getMovie)
router.post('/', [checkJWT, isAdmin], postMovie)
router.put('/:id', checkJWT, updateMovie)
router.delete('/:id', checkJWT, deleteMovie)

router.post('/:id/comments', checkJWT, addComment)

export { router }
