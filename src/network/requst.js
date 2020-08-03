import axios from 'axios'

export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://152.136.185.210:8000/api/z8',
      timeout: 5000
    })
    
    //2.axios的拦截器
    //2.1请求拦截
    instance.interceptors.request.use(config =>{
      // console.log(config)
      return config
    })
    instance.interceptors.response.use(res => {
      // console.log(res)
      return res.data
    }, err => {
      console.log(err)
    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      console.log(err)
    })
    //3.返回发送真正的网络请求
    return instance(config)
    // .then(res => {
    //   resolve(res)
    // }).catch(err => {
    //   reject(err)
    // })
}