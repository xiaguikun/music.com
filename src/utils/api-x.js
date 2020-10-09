import http from './http-x';

//写端口地方

//xgk
//请求首页的推荐中的猜你喜欢数据
export function getIndLikeData(params) {
    return http.get('/like', params);
}


export function getIndVipData(params) {
    return http.get('/vip', params);
}
//yzy
//请求我的页中icon数据
export function getMineListData(params) {
    return http.get('/mine', params)
}