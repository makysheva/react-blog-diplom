import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import { Post } from '../Post'
import { useSelector } from 'react-redux'

import styles from './Posts.module.scss'

import { getAllPost, getPost } from '../../redux/actions/postsAction'


export const Posts: FC = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    //@ts-ignore
    const posts = useSelector(state => state.posts.allPosts)

    console.log(222, posts)

    useEffect(() => {
        //@ts-ignore
        dispatch(getPost(id))
        dispatch(getAllPost())
    }, [id, dispatch])

    return (
        <Row style={{ justifyContent: 'space-between' }}>
            <Col span={24}>
                {
                    posts.map((post: any) => (
                        <>
                            <Post post={post} />
                        </>
                    ))
                }
            </Col>
        </Row>
    )
}