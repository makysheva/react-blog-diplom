import React, { FC, useState } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
    />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Add Comment
            </Button>
        </Form.Item>
    </>
)

export const Comment: FC = () => {
    const [comment, setComment] = useState({
        comments: [],
        submitting: false,
        value: '',
    })

    handleSubmit = () => {
        if (!comment.value) {
            return;
        }

        setComment({ submitting: true })

        setTimeout(() => {
            setComment({
                submitting: false,
                value: '',
                comments: [
                    ...comment.comments,
                    {
                        author: 'Han Solo',
                        avatar: 'https://joeschmoe.io/api/v1/random',
                        content: <p>{comment.value}</p>,
                        datetime: moment().fromNow(),
                    },
                ],
            });
        }, 1000)
    }

    handleChange = e => {
        setComment({
            value: e.target.value,
        });
    };

    return (
        <>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    )
}
