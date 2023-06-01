import { Box, Button, Card, CardActions, CardContent, IconButton, Link, Popover, styled, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { TbThumbUpFilled } from 'react-icons/tb';
import { AppContext } from '../../AppContextProvider';
import ReplyCard from './ReplyCard';

const Wrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    fontSize: '14px',
}));

const ReplyWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
}));

const CommentsWrapper = styled('div')(({ theme }) => ({
    margin: theme.spacing(0, 2, 1, 2),
    padding: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
}));

const DateWrapper = styled('div')(() => ({
    fontSize: '14px',
    lineHeight: '22px',
    padding: '4px',
}));

export default function PostCard(props) {
    const {
        post,
    } = props;

    const { score, setScore } = useContext(AppContext)

    const [like, setLike] = React.useState(1)
    const [liked, setLiked] = React.useState(false)
    const [param, setParam] = React.useState('');
    const [value, setValue] = React.useState('');
    const [fold, setFold] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [replys, setReplys] = useState(post.replys)

    useEffect(() => {
        let tempReplys = post.replys
        setReplys(tempReplys)
        setFold(true)
    }, [post])

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    var isReplyOpen = Boolean(anchorEl);

    const handleFold = () => {
        setFold(!fold);
    }

    const handleReplyOpen = (event, name) => {
        setParam(name);
        setAnchorEl(event.currentTarget);
    };

    const handleReplyClose = () => {
        setAnchorEl(null);
        setValue('');
    };

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

    const addReply = (content, name) => {
        let newReplys = replys
        newReplys.push(
            {
                _id: 0,
                user_id: 0,
                user_name: 'Leon',
                to_user_name: name,
                comment: content,
                updatedAt: new Date().getTime
            }
        )
        setAnchorEl(null);
        setValue('');
        setScore(score + 1)
        setReplys(newReplys)
    }

    const handleAddReply = (event) => {
        event.preventDefault();
        const content = new FormData(event.currentTarget).get('content');
        addReply(content, param)
    };

    var replyId = isReplyOpen ? 'primary-search-account-reply' : undefined;
    const renderReply = (
        <Popover
            id={replyId}
            open={isReplyOpen}
            anchorEl={anchorEl}
            onClose={handleReplyClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <ReplyWrapper>
                <Box component="form" onSubmit={handleAddReply} noValidate sx={{ mt: 1 }}>
                    <ReplyWrapper>
                        <TextField
                            label="Content"
                            name="content"
                            multiline
                            minRows={4}
                            value={value}
                            onChange={handleChange}
                            placeholder="Please type here.."
                            style={{ width: '100vh', maxWidth: '600px' }}
                        />
                    </ReplyWrapper>
                    <ReplyWrapper style={{ paddingTop: '0', textAlign: 'right' }}>
                        <Button
                            size="small"
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </ReplyWrapper>
                </Box>
            </ReplyWrapper>
        </Popover >
    )

    return (
        <Wrapper>
            <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }} style={{ paddingBottom: '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography gutterBottom component="div">
                            <Link>{post.user_name}</Link>
                            <span style={{ fontSize: '14px' }}> says:</span>
                        </Typography>
                        <div>
                            <IconButton
                                aria-label="search"
                                onClick={handleLike}
                                edge="end"
                            >
                                {liked ? <TbThumbUpFilled fontSize="large" color='red' /> : <TbThumbUpFilled fontSize="large" color='gray' />}
                            </IconButton>
                            {like > 0 && <span
                                style={{ lineHeight: '26px', display: 'inline-block', marginLeft: '12px' }}
                            >
                                {like}
                            </span>}
                        </div>
                    </div>

                    <Typography style={{ fontSize: '14px' }}>
                        {post.content}
                    </Typography>
                    <CardActions style={{ flexDirection: 'row-reverse', alignItems: 'baseline' }}>
                        <Button
                            size="small"
                            aria-label="account of current user"
                            aria-controls={replyId}
                            aria-haspopup="true"
                            onClick={(event) => {
                                handleReplyOpen(event, post.user_name);
                            }}
                        >
                            Reply
                        </Button>
                        <DateWrapper>
                            {dayjs(post.updatedAt).format('HH:mm:ss DD/MM/YYYY')}
                        </DateWrapper>
                    </CardActions>
                </CardContent>
                {replys.length > 0 && <CommentsWrapper style={{ marginBottom: fold ? '' : 0 }}>
                    <div style={{ lineHeight: '22px', padding: '4px' }}>
                        <b>Reply: ({replys.length}):</b>
                    </div>
                    <Button
                        size="small"
                        onClick={handleFold}
                    >
                        {fold ? 'Unfold' : 'fold'}
                    </Button>
                </CommentsWrapper>}
                <CommentsWrapper
                    style={{
                        display: fold ? 'none' : 'block',
                        paddingTop: 0,
                        paddingBottom: 0,
                    }}
                >
                    {replys.map((item, index) => <ReplyCard key={index} reply={item} replyId={replyId} handleReplyOpen={handleReplyOpen} />)}
                </CommentsWrapper>
            </Card>
            {renderReply}
        </Wrapper>
    )
}