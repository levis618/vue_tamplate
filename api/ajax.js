import axios from 'axios'
import qs from 'querystring' // 若服务端只接收urlencoded形式，将传递过来的参数对象转换成urlencoded形式

const instance = axios.create({
  timeout: 4000, //配置超时时间
})

//请求拦截器
instance.interceptors.request.use((config) => {
  //从配置对象中获取method和data
  const { method, data } = config
  //若是post请求
  if (method.toLowerCase() === 'post') {
    //若传递过来的参数是对象，转换成urlencoded形式
    if (data instanceof Object) {
      config.data = qs.stringify(data)
    }
  }
  return config
})

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    //请求若成功，返回真正的数据
    return response.data
  },
  (error) => {
    //请求若失败，返回失败的数据
    return error
  }
)

export default instance
