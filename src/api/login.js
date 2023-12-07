import axios from 'axios'
export function login(token) {
     return axios.get(`/api/dyuser/login?token=${token}`);
}