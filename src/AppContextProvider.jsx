import React from "react";
import { useState } from "react";
export const AppContext = React.createContext({});


export function AppContextProvider({ children }) {

    const [hello, setHello] = useState('Hello world!');
    const [score, setScore] = useState(0);
    const context = {
        hello,
        setHello,
        score,
        setScore
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}