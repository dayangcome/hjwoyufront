import axios from 'axios'
export function getanswer(question) {                   //获取答案之书的回答
     return axios.get(`/api/gpt/answer?question=${question}`);
}