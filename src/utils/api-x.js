import http from './http-x';

//写端口地方

//xgk
//请求首页的推荐中的猜你喜欢数据
export function getIndLikeData(params) {
    return http.get('/like', params);
}

//获得classify页的数据
export function getClassifyData(params) {
    return http.get('/classify', params);
}


export function getsubscribeData(params) {
    return http.get('/subscribe', params);
}


export function getIndVipData(params) {
    return http.get('/vip', params);
}
//yzy
//请求我的页中icon数据
export function getMineListData(params) {
    return http.get('/mine', params)

}

export function getFCommunityData(params) {
    return http.get('/community-f', params);
}

export function getListenListData(params) {
    return http.get('/listenlist', params);
}

// myvoice 数据
export function getMyVoiceData(params) {
    return http.get('/myvoice', params);
}