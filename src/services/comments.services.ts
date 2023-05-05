import CommentModel from '../models/comment.model'

const getResponseComments = async (page: number, limit: number) => {
  return await CommentModel.find({})
    .skip((page - 1) * 10)
    .limit(limit)
}

const getCommentsByUseremail = async (email: string) => {
  return await CommentModel.find({ userId: email })
}

const deleteResponseComment = async (id: string) => {
  return await CommentModel.deleteOne({ _id: id })
}

export { getCommentsByUseremail, getResponseComments, deleteResponseComment }
