import axios from "axios"

export const loginService = (email, password) => {
    axios.post('/api/auth/login', {
        email: email,
        password: password
    });
};