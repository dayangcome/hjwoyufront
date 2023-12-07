import axios from 'axios'
export function getitem(type) {                   //获取某个类型所有的左侧项目
     return axios.get(`/api/items/getitem?type=${type}`);
}

export function additem(item) {                   //添加某个项目
     return axios.post(`/api/items/additem`,item);
}

export function getdy(type) {                //获取某个类型所有的动态
     return axios.get(`/api/dynamic/getdy?type=${type}`);
}

export function publish(dynamic) {           //发表动态
     return axios.post(`/api/dynamic/adddy`,dynamic);
}

export function deldy(dyid) {               //删除动态
     return axios.get(`/api/dynamic/deldy?dyid=${dyid}`);
}

export function changedy(code,uid,iid) {     //点赞或者点踩
     return axios.get(`/api/dynamic/changedy/${code}/${uid}/${iid}`);
}

export function getdylike(type,uid) {    //获取用户对某个讨论区的点赞的状态
     return axios.get(`/api/dynamic/getdylike/${type}/${uid}`);
}

export function getdydislike(type,uid) {    //获取用户对某个讨论区的点踩的状态
     return axios.get(`/api/dynamic/getdydislike/${type}/${uid}`);
}

export function likeitem(itemid) {    //给某个物品（比如游戏）点赞
     return axios.get(`/api/items/likeitem?itemid=${itemid}`);
}

export function getcomments(iid) {    //获取某个动态的评论
     return axios.get(`/api/dycomment/getcomments?iid=${iid}`);
}

export function addcomments(mycomment) {    //发表评论
     return axios.post(`/api/dycomment/addcomments`,mycomment);
}

export function delcomment(commentid) {               //删除评论
     return axios.get(`/api/dycomment/delcomment?commentid=${commentid}`);
}

export function feedback(myfeedback) {               //添加反馈
     return axios.post(`/api/feedback/addfeedback`,myfeedback);
}