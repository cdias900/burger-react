import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-aefe9.firebaseio.com/'
});

export default instance;