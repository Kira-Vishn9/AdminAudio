import axios, { type AxiosResponse } from 'axios'

const baseUrl = 'http://54.36.100.210:3712/api/album/all'

const getAllAlbum = async (): Promise<AxiosResponse<any, any>> => {
  try {
    const response: AxiosResponse<any, any> = await axios.get(baseUrl)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
export default getAllAlbum
