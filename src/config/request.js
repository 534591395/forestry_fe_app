import axios from 'axios';

import { delAllInfo } from '../service/auth';

// 上线打包前需要还原
window.baseUrl = 'http://47.105.67.161';
// dev
//window.baseUrl = '';

const request = axios.create({
  // 上线打包前需要还原
  baseURL: `${window.baseUrl}:8083`,
  //baseURL: '/',
  timeout: 10000,
  headers: {
    'Cache-Control': 'no-cache'
  }
});

request.interceptors.request.use((config) => {
  config.headers['token'] = window.$storage.get('token');

  return config;
});

request.interceptors.response.use((res) => {
  // console.log(JSON.stringify(res.data));
  // if(res.config.url.includes('/auth/login')) {
  //   window.$storage.set('token', res.headers['x-auth-token']);
  // }

  if(res.data.resultCode == 'login_0006') {
    console.warn('登陆超时');
    delAllInfo();
    window.$vm.$router.push({name: 'login'});
  }
  else if(!res.data.success) {
    console.warn(res.config.url, res.data.errorMessage);
    window.$vm.$toast.fail(res.data.errorMessage);
  }
  else {
    window.$storage.set('token', window.$storage.get('token'));
  }
  
  return res;
}, (e) => {
  console.warn('http status err: ' + JSON.stringify(e));
  window.$vm.$toast.fail('网络错误，请重试');
});

export default request;