import { UserInfo } from "./user"

export const CREATE_POST = 'CREATE_POST'
export const GET_POST = 'GET_POST'
export const SET_POSTS = 'SET_POSTS'
export const GET_ALL_POST = 'GET_ALL_POST'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_USER_COMMENTS = 'GET_USER_COMMENTS'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export interface Post {
    _id: string;
    title: string;
    text: string;
    slug: string;
    description: string;
    views: number;
    user: UserInfo;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface Comment {
    _id: string;
    text: string;
    post: Post;
    user: UserInfo;
    createdAt: string;
    updatedAt: string;
    __v: number;
}