import { Types } from 'mongoose'

export interface MovieComment {
  text: string
  raiting: number
  userId: string
}
