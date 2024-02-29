import axios from '../libs/axios';

export const loginRequest = async (username: string, password: string) => {
    const response = await axios.post('/login', {
        username,
        password
    });
    return response.data;
}

export const profileRequest = async () => {
    return await axios.get('/profile');

}

