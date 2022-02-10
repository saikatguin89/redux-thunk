import axios from 'axios';

export default function getPosts(){
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}