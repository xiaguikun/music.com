import axios from 'axios';
import qs from 'qs';

import { Toast } from 'vant';

const instance = axios.create({
    baseURL: 'https://mock.yonyoucloud.com/mock/15781/music',
    timeout: 2000,
});



const http = {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
                params: params
            }).then(response => {
                resolve(response);
            }).catch(error => {
                Toast(error.message);
                reject(error);
            })
        })
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            instance.post(url, qs.stringify(data))
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    Toast(error.message);
                    reject(error)
                });
        })

    }
}

export default http