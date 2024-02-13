export enum IndexSortOderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface ISortRequest {
  sortField?: string
  sortOrder?: IndexSortOderEnum
}

export interface IPaginateRequest {
  pageSize?: number
  page?: number
}

export interface IPaginationMeta {
  page: number
  pageSize: number
  total: number
  totalPage: number
}

export interface IPaginateResponse<T> {
  meta: IPaginationMeta | undefined
  data: Array<T>
}

export interface IIndexUsecaseRelation<T> {
  name: keyof T
  columns?: string[]
  relations?: IIndexUsecaseRelation<any>[]
}
