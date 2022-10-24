/**
 * 统一请求
 */
import axios from 'axios'
import qs from 'qs'
import { message } from 'antd'
import { VITE_API_URL } from '@/config/config' //引入
import history from '@/utils/history'
axios.interceptors.request.use(
  //请求拦截
  (config: any) => {
    // const token = useSelector(getToken);
    // if (token) {
    //   config.headers.common['token'] = token;
    // }
    // if (localStorage.getItem('token')) {
    //   //如果有token给请求头加上
    //   config.headers.common['token'] =
    //     localStorage.getItem('token')
    // }
    return config
  },

  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code === '99401') {
      localStorage.removeItem('token')
      localStorage.removeItem('account')
      message.error('登录过期，请重新登录')
      setTimeout(() => {
        history.push('/login')
        window.location.pathname = '/login'
      }, 500)
    }
    return response
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default {
  /**
   *
   * @param url
   * @param params
   * @param options
   * @returns
   */
  get<T>(
    url: string,
    params: object = {},
    options?: object
  ) {
    if (JSON.stringify(params) !== '{}') {
      return axios.get<T>(
        `${VITE_API_URL}${url}?${qs.stringify(params)}`,
        {
          ...options
        }
      )
    } else {
      return axios.get<T>(`${VITE_API_URL}${url}`, {
        ...options
      })
    }
  },
  /**
   *
   * @param url
   * @param params
   * @param options
   * @returns
   */
  post<T>(url: string, params = {}, options?: object) {
    return axios.post<T>(
      `${VITE_API_URL}${url}`,
      params,
      options
    )
  }
}
