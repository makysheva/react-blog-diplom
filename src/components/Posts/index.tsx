import { FC, Key, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import { Post } from '../Post'
import { useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../redux/store'
import { getAllPost } from '../../redux/actions/postsAction'
import * as postSelectors from '../../redux/selectors'

type PostsData = [{
    _id: string,
    title: string,
    text: string,
    description: string,
    user: object,
}]

export const Posts: FC<PostsData> = () => {
    const dispatch = useDispatch<AppDispatch>()
    const allPost = useSelector<RootState>(postSelectors.postData) as PostsData

    useEffect(() => {
        dispatch(getAllPost())
    }, [dispatch])

    return (
        <Row style={{ justifyContent: 'space-between' }}>
            <Col span={24}>
                {
                    allPost && allPost.map(item => <Post key={item._id} post={item} />)
                }
            </Col>
        </Row>
    )
}