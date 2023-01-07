import { instance } from "./index"
import {IAllPost, INewPost, IPost} from "../redux/types/post";

export const postsAPI = {
  getAllPost(){
    return instance.get<IAllPost>("/posts")
  },

  getPost(postId: string) {
    return instance.get<IPost>(`/posts/${postId}`)
  },

  createPost(data: { title: string; description: string; text: string }) {
    return instance.post<INewPost>("/posts", data)
  },

  uploadImg(formData: any) {
    return instance.post("/posts/upload", formData);
  },
};