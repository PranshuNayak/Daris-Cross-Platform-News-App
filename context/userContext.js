import React,{createContext,useState} from 'react'

let userEmail = null;
export const globalContext = createContext(userEmail);



export const ContextProvider = ({children})=>{
    const [user,setUser] = useState(userEmail);

    const sigin = (user)=>{
        setUser(user);
    }

    const signout = ()=>{
        setUser(null);
    }
    return(
        <globalContext.Provider value={{
            user,
            sigin,
            signout
        }} >
            {children}
        </globalContext.Provider>
    )
}