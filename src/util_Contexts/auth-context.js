import React, { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // localStorage.removeItem("token");
    // localStorage.removeItem("user")

    console.log(JSON.parse(localStorage.getItem('token')));
    const localEncodedToken = JSON.parse(localStorage.getItem('token'));
    const localUser = JSON.parse(localStorage.getItem('user'));
    const [encodedToken, setEncodedToken] = useState(localEncodedToken);
    const [user, setUser] = useState(localUser);


    console.log(loginService, signupService);




    return (
        <AuthContext.Provider value={{ user, setUser, encodedToken, setEncodedToken }}>
            {children}
        </AuthContext.Provider>
    );
}


const useAuth = () => {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }
