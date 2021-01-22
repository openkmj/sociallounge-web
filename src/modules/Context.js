import React, { useReducer, createContext, useContext } from "react";

const initialState = {
    user: "",
    id: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.user,
                id: action.id,
            };
        case "LOGOUT":
            return initialState;
        default:
            throw new Error("Unhandled action", action.type);
    }
}

const StateContext = createContext();
const DispatchContext = createContext();

export function UserProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StateContext.Provider>
    );
}
export function useUserState() {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error("No Provider");
    }
    return context;
}
export function useUserDispatch() {
    const context = useContext(DispatchContext);
    if (!context) {
        throw new Error("No Provider");
    }
    return context;
}
