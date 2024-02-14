import { API } from '@/app/_infrastructure/api.service'
import { ApiRes } from '@/app/_infrastructure/interfaces/api.response'
import { IPost } from './post.interface'

export class PostAction {
  static async fetch(): Promise<ApiRes<IPost[]>> {
    return await API.get('/posts/view')
  }
}
