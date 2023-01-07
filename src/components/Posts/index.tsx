import {FC, useEffect} from 'react'
import { Row, Col } from 'antd'
import { Post } from '../Post'
import {useDispatch, useSelector} from 'react-redux'
import {getAllPost} from '../../redux/actions/postsAction'
import * as postSelectors from '../../redux/selectors/postsSelector'

type TPosts = {
    isAuth: boolean;
}

export const Posts: FC<TPosts> = ({isAuth}) => {
    const {items} = useSelector(postSelectors.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = () => {
            if(isAuth){
                dispatch(getAllPost())
            }
        }
        fetchData()
    }, [isAuth]);

    return (
        <Row style={{ justifyContent: 'space-between' }}>
            <Col span={24}>
                {
                    items && items.map((item) => <Post key={item._id} post={item} />)
                }
            </Col>
        </Row>
    )
}