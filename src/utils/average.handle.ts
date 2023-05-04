import { MovieComment } from '../interfaces/comment.interface'

const averageRatingHandle = (comments: MovieComment[]) => {
  return (
    comments.reduce((acc, comment) => comment.raiting + acc, 0) /
    comments.length
  )
}

export { averageRatingHandle }
