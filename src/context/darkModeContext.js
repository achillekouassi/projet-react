import { createContext, useReducer } from "react"
import DarkModeReduce from "./darkModeReduce"

const INITIAL_SATE = {
    darkMode:false
}

export const DarkModeContext = createContext(INITIAL_SATE)

export const DarkModeContextProvide = ({children}) =>{
        const [state, dispatch] = useReducer(DarkModeReduce, INITIAL_SATE);
        return <DarkModeContext.Provider value={{darkMode:state.darkMode, dispatch}}>{children}</DarkModeContext.Provider>

        
}
