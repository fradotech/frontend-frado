export interface IBaseEntity {
  id: string
  createdAt?: Date
  createdById?: string
  updatedAt?: Date
  updatedById?: string
  deletedAt?: Date
  deletedById?: string
}
