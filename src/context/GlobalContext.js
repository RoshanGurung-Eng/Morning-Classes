import React, {createContext} from "react";

export const GContext = createContext();

const GContextProvider = (props) => {
    return (
        <GContext.Provider value={'React JS'}>
            {props.children}
        </GContext.Provider>
    );
}

export default GContextProvider;

