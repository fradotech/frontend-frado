import { IndexRequest } from '@/app/_infrastructure/interfaces/index.request'
import { IPost } from './post.interface'

export type PostIndexRequest = IndexRequest & {
  sortField?: keyof IPost
  filters?: IPost
}
