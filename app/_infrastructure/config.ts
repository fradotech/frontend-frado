import { Util } from './util'

const host = process.env.SERVER_HOST || 'https://frado.onrender.com'
const prefix = process.env.APP_PREFIX || '/api/v1'

export const config = {
  app: {
    name: Util.titleCase(process.env.APP_TITLE || 'frado'),
  },
  server: {
    prefix: prefix,
    host,
    hostApi: `${host}${prefix}`,
  },
}
