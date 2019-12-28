import axios from 'axios'
import store from '@/store'
import router from '@/router'
import JsonBigint from 'json-bigint'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`
axios.defaults.transformResponse = [data => {
  return JsonBigint.parse(data)
}]
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, error => Promise.reject(error))

axios.interceptors.response.use(res => res, function (err) {
  if (err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

export default axios
