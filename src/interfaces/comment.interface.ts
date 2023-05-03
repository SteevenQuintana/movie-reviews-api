import { Types } from 'mongoose'

export interface Comment {
  comment: string
  rating: number
  userId: string
  movieId: Types.ObjectId
}
