import React, { createElement, FC, useEffect, useState } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import * as commentSelectors from '../../redux/selectors/commentsSelector'
import { CreateCommentForm } from '../FormBlock/CreateCommentForm'
import { getAllCommentsOfPost } from '../../redux/actions/commentsAction'
import { useParams } from 'react-router-dom'

export const CommentBlock: FC = () => {
    const [likes, setLikes] = useState<number>(0)
    const [dislikes, setDislikes] = useState<number>(0)
    const [action, setAction] = useState<'liked' | 'disliked' | null>(null)
    const { id } = useParams()

    const dispatch = useDispatch<AppDispatch>()
    const allComments = useSelector<RootState>(commentSelectors.getComments)

    useEffect(() => {
        //@ts-ignore
        dispatch(getAllCommentsOfPost(id))
    }, [dispatch, id])

    const like = () => {
        setLikes(1)
        setDislikes(0)
        setAction('liked')
    }

    const dislike = () => {
        setLikes(0)
        setDislikes(1)
        setAction('disliked')
    }

    const actions = [
        <Tooltip key="comment-basic-like">
            <span onClick={like}>
                {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
                <span className="comment-action">{likes}</span>
            </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike">
            <span onClick={dislike}>
                {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
                <span className="comment-action">{dislikes}</span>
            </span>
        </Tooltip>,
    ];

    return (
        <>

            {allComments.userCommentsData.length > 0 &&
                allComments.userCommentsData.map((comment: { user: { fullName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }; text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined }) => {
                    return (
                        <Comment
                            actions={actions}
                            author={comment.user.fullName}
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="name" />}
                            content={<p>{comment.text}</p>}
                            datetime={
                                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{moment().fromNow()}</span>
                                </Tooltip>
                            }
                        />
                    )
                })
            }

            <CreateCommentForm />
        </>
    )
}
