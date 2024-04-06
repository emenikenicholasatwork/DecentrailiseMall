"use client"
const { createContext, useState, useContext } = require("react");


const GlobalContext = createContext();
export function GlobalProvider({ children}) {
    const [userName, setUserName] = useState()
    const [refresh, setRefresh] = useState(false)
    const [new_product_form, set_new_product_form] = useState(false)

    const open_or_close_form=()=>{
        new_product_form ? set_new_product_form(false) : set_new_product_form(true)
    }

    const changeUserNameState = details =>{
        setUserName(details)
    }

    const changeRefreshState =()=>{
        refresh ? setRefresh(false) : setRefresh(true)
    }


    return(
        <GlobalContext.Provider value={{
            new_product_form,
            open_or_close_form,
            refresh,
            changeRefreshState,
            userName,
            changeUserNameState
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobal(){
    return useContext(GlobalContext);
}