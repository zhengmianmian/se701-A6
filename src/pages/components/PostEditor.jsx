import { Box, Button, Card, CardContent, TextField } from '@mui/material';
import styled from '@mui/material/styles/styled'
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../../AppContextProvider';

const Wrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
}))

const RightButtonWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 0, 2, 1),
    textAlign: 'right',
}));

export default function PostEditor() {

    const { posts, setPosts } = useContext(AppContext)
    const [value, setValue] = useState()

    const addPost = (postContent) => {
        let newPost = {
            postId: posts.length,
            user_name: "Leon",
            content: postContent,
            updatedAt: new Date(),
            replys: []
        }
        let temp = [newPost, ...posts];
        setPosts(temp)
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        addPost(data.get('content'))
        setValue('')
    };

    return (
        <Wrapper>
            <Card
                sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }} style={{ paddingBottom: '0' }}>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            label={'Add a new post...'}
                            name="content"
                            multiline
                            minRows={5}
                            value={value}
                            onChange={handleChange}
                            placeholder="Please type here.."
                            style={{ width: '100%' }}
                        />
                        <RightButtonWrapper>
                            <Button
                                size="small"
                                type="submit"
                                variant="contained"
                            >
                                Post
                            </Button>
                        </RightButtonWrapper>
                    </Box>
                </CardContent>
            </Card>
        </Wrapper>
    )
}
