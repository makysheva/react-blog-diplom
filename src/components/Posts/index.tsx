import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Row, Col } from 'antd'
import { Post } from '../Post'
import { useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../redux/store'
import { getAllPost } from '../../redux/actions/postsAction'
import * as postSelectors from '../../redux/selectors/postsSelector'

// type PostsData = {
//     _id: string,
//     title: string,
//     text: string,
//     description: string,
//     user: object,
// }

export const Posts: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    //@ts-ignore
    const allPost = useSelector<RootState>(postSelectors.posts)

    useEffect(() => {
        //@ts-ignore
        dispatch(getAllPost())
    }, [dispatch])

    return (
        <Row style={{ justifyContent: 'space-between' }}>
            <Col span={24}>
                {
                    //@ts-ignore
                    allPost && allPost.map(item => <Post key={item._id} post={item} />)
                }
            </Col>
        </Row>
    )
}