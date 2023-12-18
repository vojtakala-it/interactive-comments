import { createContext, useContext, useState } from "react";


const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loggedInUser = userName => {
        setUser(userName);
    };

    return (
        <AuthContext.Provider value={ { user, loggedInUser } }>
            { children }
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
