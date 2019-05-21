import axios from 'axios';

export const getAllUsersFromApi = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
};
