import {IAllPost, INewPost} from "../types/post";

export const posts = (state: { posts: { postsData: IAllPost; }; }) => state.posts.postsData
export const postData = (state: { posts: { postData: INewPost; }; }) => state.posts.postData