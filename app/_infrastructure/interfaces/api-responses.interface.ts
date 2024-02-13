import { IPaginationMeta } from './index.interface'

export interface IApiRes<T> {
  message: string
  meta?: IPaginationMeta
  data: T
}

export interface IApiExportRes<T> {
  message: string
  data: T
  fileName?: string
}

interface IDataUnprocessable {
  property: string
  message: string[]
}

export interface IUnprocessableResponse {
  message: string
  data: Array<IDataUnprocessable>
}
