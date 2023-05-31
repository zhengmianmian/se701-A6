import React from "react";
import { useState } from "react";
export const AppContext = React.createContext({});


export function AppContextProvider({ children }) {

    const [hello, setHello] = useState('Hello world!');
    const [score, setScore] = useState(0);


    const [posts, setPosts] = useState([
        {
            postId: 0,
            user_name: 'post name 0',
            content: 'post content 0',
            updatedAt: new Date('2023-05-01T12:03:00'),
            replys: [
                {
                    replyid: 0,
                    user_name: 'reply name 0-0',
                    to_user_name: 'post name 0',
                    comment: 'reply 0-0',
                    updatedAt: new Date('2023-05-01T12:03:00')
                },
                {
                    replyid: 1,
                    user_name: 'reply name 0-1',
                    to_user_name: 'post name 1',
                    comment: 'reply 0-1',
                    updatedAt: new Date('2023-05-01T12:03:00')
                }
            ]
        },
        {
            postId: 1,
            user_name: 'post name 1',
            content: 'post content 1',
            updatedAt: new Date('2023-05-01T12:03:00'),
            replys: [
                {
                    replyid: 0,
                    user_name: 'reply name 1-0',
                    to_user_name: 'post name 1',
                    comment: 'reply 1-0',
                    updatedAt: new Date('2023-05-01T12:03:00')
                },
                {
                    replyid: 1,
                    user_name: 'reply name 1-1',
                    to_user_name: 'post name 1',
                    comment: 'reply 1-1',
                    updatedAt: new Date('2023-05-01T12:03:00')
                }
            ]
        }
    ])

    const context = {
        hello,
        setHello,
        score,
        setScore,
        posts,
        setPosts
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}