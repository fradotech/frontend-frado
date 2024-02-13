import axios, { AxiosError, AxiosHeaders, RawAxiosRequestHeaders } from 'axios'
import { config } from './config'
import { IApiRes } from './interfaces/api-responses.interface'

const headers: RawAxiosRequestHeaders | AxiosHeaders = {}

const axiosInstance = axios.create({ baseURL: config.server.hostApi, headers })

const notificationError = (e: AxiosError<IApiRes<unknown>>): void => {
  // if (e.response?.data.message === 'Forbidden') {
  //   return
  // } else if (e.response?.data.message === 'Unauthorized') {
  //   localStorage.removeItem('_accessToken')
  //   localStorage.removeItem('user')
  //   location.reload()
  // }

  console.error({ apiError: e.response?.data?.message || String(e) })
}

export class API {
  static async get(endpoint: string, params?: any): Promise<any> {
    try {
      const { data } = await axiosInstance.get(endpoint, {
        params,
      })

      this.catch(data)

      return data
    } catch (e: unknown) {
      notificationError(e as AxiosError<IApiRes<unknown>>)
      return e
    }
  }

  static async post(
    endpoint: string,
    data?: Record<string, any>,
  ): Promise<any> {
    return await this.execute('post', endpoint, data)
  }

  static async put(endpoint: string, data?: Record<string, any>): Promise<any> {
    return await this.execute('put', endpoint, data)
  }

  static async patch(
    endpoint: string,
    data?: Record<string, any>,
  ): Promise<any> {
    return await this.execute('patch', endpoint, data)
  }

  static async delete(endpoint: string): Promise<any> {
    return await this.execute('delete', endpoint)
  }

  private static async execute(
    method: 'post' | 'put' | 'patch' | 'delete',
    endpoint: string,
    data?: Record<string, any>,
  ): Promise<any> {
    try {
      const response = await axiosInstance[method](endpoint, data)

      this.catch(response.data)

      return response.data
    } catch (e: unknown) {
      notificationError(e as AxiosError<IApiRes<unknown>>)
      return e
    }
  }

  private static catch(res: any): void {
    !res.data && console.error({ apiError: res.response.data.message })
  }
}
