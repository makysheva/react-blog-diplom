import { Button, Form, Input } from 'antd'
import { FC, useCallback, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { createPost, getAllPost } from '../../redux/actions/postsAction'
import SimpleMDE from "react-simplemde-editor"

import 'easymde/dist/easymde.min.css'
import styles from '../Posts/Posts.module.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const { TextArea } = Input

type FormData = {
    title: string
    description: string
    imageUrl: string
    text: string
}

export const CreatePostForm: FC = () => {
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [textAreaValue, setTextAreaValue] = useState<string>('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<FormData> = async ({ title, description }) => {
        dispatch(
            createPost({
                title,
                description,
                text: textAreaValue,
            })
        )
        dispatch(getAllPost())
        navigate('/', { replace: true })

        // const fileElem = data.imageUrl
        // const file = fileElem.fileList[0]

        // const formData = new FormData()
        // formData.append('file', file)
        // //@ts-ignore
        // const { url } = await dispatch(postsAPI.uploadImg(formData))
    }

    const onChange = useCallback((value: string) => {
        setTextAreaValue(value)
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Item required>
                    <Controller
                        render={
                            ({ field }) =>
                                <Input
                                    {...field}
                                    placeholder="Введите заголовок"
                                    {...errors.title && "Введите заголовок"}
                                    className={styles.title}
                                />
                        }
                        {...register("title")}
                        name="title"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true
                        }}
                    />
                </Form.Item>

                <Form.Item>
                    <label>Короткое описание</label>
                    <Controller
                        render={

                            ({ field }) =>
                                <TextArea
                                    {...field}
                                    placeholder="Введите краткое описание"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                    className={styles.text}
                                    {...errors.description && "Введите краткое описание"}
                                />
                        }
                        {...register("description")}
                        name="description"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true
                        }}
                    />
                </Form.Item>

                {/* <Form.Item className={styles.file}>
                        <label>Ссылка на изображение: </label>
                        <Controller
                            render={
                                ({ field }) =>
                                    <Upload
                                        {...field}
                                        placeholder="Загрузите картинку"

                                        {...errors.imageUrl && "Загрузите картинку"}
                                    >
                                        <Button icon={<UploadOutlined />}>Загрузить</Button>
                                    </Upload>
                            }
                            {...register("imageUrl")}
                            name="imageUrl"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true
                            }}
                        />
                    </Form.Item> */}

                <Form.Item>
                    <label>Полное описание:</label>
                    <SimpleMDE
                        value={textAreaValue}
                        onChange={onChange}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={styles.submitBtn}>Опубликовать</Button>
                </Form.Item>
            </form>
        </>
    )
}
