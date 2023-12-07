import axios from 'axios'
export function getmusic() {               //获取音乐
    return axios.get(`https://api.i-meto.com/meting/api?server=netease&type=playlist&id=35798529`);
}