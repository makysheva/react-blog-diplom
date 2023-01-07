import { Button, Form } from 'antd'
import { FC, useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import SimpleMDE from "react-simplemde-editor"

import 'easymde/dist/easymde.min.css'
import styles from '../Posts/Posts.module.scss'
import { useParams } from 'react-router-dom'
import { createComment, getAllCommentsOfPost } from '../../redux/actions/commentsAction'
import { useDispatch } from 'react-redux'

type FormData = {
    text: string
    postId: string
}

export const CreateCommentForm: FC = () => {
    const { handleSubmit } = useForm<FormData>()
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    const { id } = useParams()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<FormData> = async () => {
        dispatch(
            createComment({
                text: textAreaValue,
                postId: id,
            }, id)
        )
        //@ts-ignore
        dispatch(getAllCommentsOfPost(id))
    }

    const onChange = useCallback((value: string) => {
        setTextAreaValue(value)
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Form.Item>
                <label>Добавить комментарий:</label>
                <SimpleMDE
                    value={textAreaValue}
                    onChange={onChange}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className={styles.submitBtn}>Добавить</Button>
            </Form.Item>
        </form>
    )
}
