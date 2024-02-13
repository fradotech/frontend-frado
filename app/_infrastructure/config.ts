import { Util } from './util'

export const config = {
  app: {
    name: Util.titleCase(process.env.APP_TITLE || 'fradotech'),
  },
  server: {
    host: process.env.SERVER_HOST || 'https://fradotech.onrender.com',
  },
}
