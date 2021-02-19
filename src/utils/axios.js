import axios from 'axios';
import qs from 'qs';
//import * as common from './common';

let API_HOST = '/api';
import config from "@/config/web.config.js";
if (process.env.NODE_ENV === 'production') {
    API_HOST = `${config.CONFIG.API}/api`;
} else if (process.env.NODE_ENV === 'test') {
    API_HOST = `${config.CONFIG.API}/api`;
} 
if (process.env.NODE_ENV !='dev') {
	API_HOST = `${config.CONFIG.API}/api`;
}
// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//     //let token = common.$_userx.token();
//     // 在发送请求之前做些什么
//     // if (token) {
//     //     config.headers.login_token = token;
//     // }
//     return config;
// });
//import store from '../vuex'
//import router from '../router'
import Cookies from 'js-cookie'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    if (response.status !== 200) {
        // if(response.data.code === 3005){
        //     common.$_out();
        // }
        return Promise.reject(response);
    }else{
      if(response.data.code === 10000){
         location.reload()
         Cookies.remove('token')
      }else{
	  }
    }
    return response.data;
});
function get(url, data) {
    return axios.get(API_HOST + url,data);
}
function post(url, data) {
	// console.log('url',url)
	// console.log('API_HOST',API_HOST)
 //    console.log('data',data)
    return axios.post(API_HOST + url, qs.stringify(data));
}

export default {
    get, post
}
