import React from "react";
import { useState } from "react";
export const AppContext = React.createContext({});


export function AppContextProvider({ children }) {

    const [hello, setHello] = useState('Hello world!');
    const [score, setScore] = useState(0);


    const [posts, setPosts] = useState([
        {
            postId: 0,
            user_name: 'Mianmian',
            content: 'Does an ellipse have a center?',
            updatedAt: new Date('2023-05-26T12:03:00'),
            replys: [
                {
                    postId: 0,
                    replyid: 0,
                    user_name: 'Bill',
                    to_user_name: 'Mianmian',
                    comment: 'An ellipse has two foci, not a single center.',
                    updatedAt: new Date('2023-05-27T13:05:00')
                },
            ]
        },
        {
            postId: 1,
            user_name: 'Thomas',
            content: 'If I connect the vertices of all polygons, will it definitely become multiple small triangles?',
            updatedAt: new Date('2023-05-28T12:03:00'),
            replys: [
                {
                    postId: 1,
                    replyid: 0,
                    user_name: 'Keo',
                    to_user_name: 'Thomas',
                    comment: 'Not all polygons can be made into multiple small triangles by connecting vertices. It depends on the shape of the polygon and how the vertices are connected.',
                    updatedAt: new Date('2023-05-29T10:06:00')
                },
                {
                    postId: 1,
                    replyid: 1,
                    user_name: 'Yugyeong',
                    to_user_name: 'Thomas',
                    comment: 'Any convex polygon can form a triangle by connecting its vertices, because the interior of a convex polygon contains no other vertices. All we have seen so far are polygons of this kind.',
                    updatedAt: new Date('2023-05-29T12:13:00')
                }
            ]
        }
    ])

    const setReplys = (reply) => {
        let newPosts = [...posts]
        newPosts = newPosts[reply.postId].replys.push(reply)
        setPosts(newPosts)
    }

    const context = {
        hello,
        setHello,
        score,
        setScore,
        posts,
        setPosts,
        setReplys,
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}