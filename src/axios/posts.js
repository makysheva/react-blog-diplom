import { instance } from "./index"

export const postsAPI = {
  getAllPost(){
    return instance.get("/posts")
  },

  getPost(postId) {
    return instance.get(`/posts/${postId}`)
  },

  createPost(data) {
    return instance.post("/posts", data)
  },

  uploadImg(formData) {
    return instance.post("/posts/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};