import http from './http-x';

//写端口地方

//xgk
//请求首页的推荐中的猜你喜欢数据
export function getIndLikeData(params) {
    return http.get('/like', params);
}


export function getsubscribeData(params) {
    return http.get('/subscribe', params);
}


export function getIndVipData(params) {
    return http.get('/vip', params);
}

export function getFCommunityData(params) {
    return http.get('/community-f', params);
}

export function getListenListData(params) {
    return http.get('/listenlist', params);
}