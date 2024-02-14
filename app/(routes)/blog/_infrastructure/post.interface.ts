import { IBaseEntity } from '@/app/_infrastructure/interfaces/base-entity.interface'

export interface IPost extends IBaseEntity {
  views: string
  id: string
  title: string
  url: string
  summary: string
  imageUrl: string
  tags: { id: string; name: string }[]
  slug: string
  content: string
  author: string
  metaKeywords: string
}
