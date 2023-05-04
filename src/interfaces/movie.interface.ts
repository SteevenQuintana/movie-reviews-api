import { MovieComment } from './comment.interface'

export interface Movie {
  movieName: string
  averageRating?: number
  idUser: string
  comments: MovieComment[]
}
