import axios from 'axios';

const API_URL = '/admin';

const login = (data) => {
    return axios
        .post(API_URL + '/login', data)
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        })
        .catch((error) => {
            throw error
        })
}

const signup = (data) => {
    return axios
    .post(API_URL + '/newAdmin', data)
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    })
    .catch((error) => {
        throw error
    })
}

const logout = () => {
    localStorage.removeItem('user')
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'))
}
const authService = {
    login,
    logout,
    signup,
    getCurrentUser,
}

export default authService;