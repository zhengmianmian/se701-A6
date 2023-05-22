import React from "react";
import { useState } from "react";
export const AppContext = React.createContext({});


export function AppContextProvider({ children }) {

    const [hello, setHello] = useState('Hello world!');

    const context = {
        hello,
        setHello
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}