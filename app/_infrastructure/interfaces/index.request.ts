import { IPaginateRequest, ISortRequest } from './index.interface'

export type IndexRequest = ISortRequest &
  IPaginateRequest & {
    filters?: Record<string, any>
    search?: string
    dateRangeColumn?: string
    startAt?: string
    endAt?: string
  }
