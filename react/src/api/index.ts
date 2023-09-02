import Axios from 'axios'

export { type AxiosResponse } from 'axios'
export const httpClient = Axios.create({
  baseURL: 'http://54.36.100.210:3712/api',
  withCredentials: true
})

httpClient.interceptors.response.use((axiosResponse) => axiosResponse.data)
