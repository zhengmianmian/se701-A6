import { Box, Button, Stack } from "@mui/material";
import styled from "@mui/material/styles/styled";
import Pagination from '@mui/material/Pagination';
import React from "react";
import PostCard from "./components/PostCard";
import PostEditor from "./components/PostEditor";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import { useState } from "react";



const Wrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2, 0),
    minHeight: '366px',
    height: 'calc(100% - 276px)',
    overflow: 'auto',
    marginBottom: theme.spacing(1),
}))

const EmptyWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2, 0),
    minHeight: '326px',
    height: 'calc(100% - 316px)',
    marginBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    color: 'gray',
}));

export default function DiscussionPage(props) {

    const { posts, setPosts } = useContext(AppContext)
    const [page, setPage] = React.useState(1)
    const [count, setCount] = React.useState(0)
    // const [postList, setPostList] = useState(posts)

    return (
        <Box style={{ width: '100%', margin: '20px 3px' }}>
            <Wrapper>
                <Stack spacing={3}>
                    {
                        posts.map((item, index) => {
                            return (<PostCard key={index} post={item} />)
                        })
                    }
                    {posts.length < 1 && <EmptyWrapper>Nothing here~</EmptyWrapper>}
                </Stack>
            </Wrapper>
            <Pagination
                count={count}
                page={page}
                onChange={() => { }}
                style={{ marginBottom: '8px', float: 'right' }}
            />
            <PostEditor />
        </Box>
    )

}