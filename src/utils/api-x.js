import http from './http-x';

//写端口地方

//xgk
//请求首页的推荐中的猜你喜欢数据
export function getIndLikeData(params) {
    return http.get('/like', params);
}