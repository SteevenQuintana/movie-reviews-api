import CommentModel from '../models/comment.model'

const getResponseComments = async () => {
  return await CommentModel.find({})
}

const getCommentsByUser = async (email: string) => {
  return await CommentModel.find({ userId: email })
}

const deleteResponseComment = async (id: string) => {
  return await CommentModel.deleteOne({ _id: id })
}

export { getCommentsByUser, getResponseComments, deleteResponseComment }
