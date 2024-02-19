import { API } from '@/app/_infrastructure/api.service'
import { ApiRes } from '@/app/_infrastructure/interfaces/api.response'
import { PostIndexRequest } from './post-index.request'
import { IPost } from './post.interface'

export class PostAction {
  static async fetch(query?: PostIndexRequest): Promise<ApiRes<IPost[]>> {
    return await API.get('/posts/view', query)
  }

  static async read(id: string): Promise<ApiRes<IPost>> {
    return await API.get(`/posts/view/${id}`)
  }
}
