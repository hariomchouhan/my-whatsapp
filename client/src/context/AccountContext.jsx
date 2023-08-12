import { createContext, useState } from "react";


export const AccountContext = createContext(null);

const AccountContextProvider = ({ children }) => {

    const [account, setAccount] = useState();

    const value = {
        account,
        setAccount,
    }
    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;