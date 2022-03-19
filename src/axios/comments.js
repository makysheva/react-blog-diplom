import { instance } from "./index"

export const commentsAPI = {
  getAllComments(){
    return instance.get("/comments")
  },

  getCommentsOfPost(postId) {
    return instance.get(`/comments/post/${postId}`)
  },

  createComment(data) {
    return instance.post("/comments", data)
  }
}