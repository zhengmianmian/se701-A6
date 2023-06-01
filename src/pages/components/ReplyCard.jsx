import { Box, Button, Card, CardActions, CardContent, IconButton, Link, Popover, styled, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { TbThumbUpFilled } from 'react-icons/tb';

const DateWrapper = styled('div')(() => ({
    fontSize: '14px',
    lineHeight: '22px',
    padding: '4px',
}));

export default function ReplyCard(props) {
    const { reply, replyId, handleReplyOpen } = props
    const [like, setLike] = useState(0)
    const [liked, setLiked] = useState(false)

    const handleLike = () => {
        if (liked) {
            let v = like - 1
            setLike(v)
        } else {
            let v = like + 1
            setLike(v)
        }
        setLiked(!liked)
    }

    // const handleAddRelpy = (event) => {
    //     event.preventDefault();
    //     const content = new FormData(event.currentTarget).get('content');
    //     addReply(content, post.user_name)
    // };

    return (
        <div>
            <hr />
            <CardContent sx={{ flexGrow: 1 }} style={{ paddingTop: '0', paddingBottom: '0' }}>
                <Typography gutterBottom component="div" style={{ fontSize: '14px', textAlign: 'left' }}>
                    <Link>{reply.user_name}</Link>
                    <span> replied </span>
                    <Link>{reply.to_user_name}</Link>:
                </Typography>
                <Typography style={{ fontSize: '14px' }}>
                    {reply.comment}
                </Typography>
            </CardContent>
            <CardActions style={{ flexDirection: 'row-reverse', alignItems: 'baseline' }}>
                <div>
                    <IconButton
                        aria-label="search"
                        onClick={handleLike}
                        edge="end"
                    >
                        {liked ? <TbThumbUpFilled fontSize="large" color='red' /> : <TbThumbUpFilled fontSize="large" color='gray' />}
                    </IconButton>
                    <span style={{ lineHeight: '26px', display: 'inline-block', marginLeft: '12px' }}>
                        {like}
                    </span>
                </div>
                <Button
                    size="small"
                    aria-label="account of current user"
                    aria-controls={replyId}
                    aria-haspopup="true"
                    onClick={(event) => {
                        handleReplyOpen(event, reply.user_name);
                    }}
                >
                    Reply
                </Button>
                <DateWrapper>
                    {dayjs(reply.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
                </DateWrapper>
            </CardActions>
        </div>
    )
}
