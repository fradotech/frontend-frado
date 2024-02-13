import { IApiRes } from './api-responses.interface'
import { IPaginationMeta } from './index.interface'

export class ApiRes<T = Record<string, unknown>> implements IApiRes<T> {
  message!: string
  data!: T
  meta?: IPaginationMeta
}
