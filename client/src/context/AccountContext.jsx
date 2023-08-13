import { createContext, useState } from "react";


export const AccountContext = createContext(null);

const AccountContextProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});

    const value = {
        account,
        setAccount,
        person,
        setPerson,
    }
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;