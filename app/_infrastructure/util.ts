import dayjs from 'dayjs'

export class Util {
  static isValidJSON = (str: string): boolean => {
    try {
      JSON.parse(str)
    } catch (e) {
      if (str === '') return false
      return false
    }
    return true
  }

  static objectIsEmpty(obj: Record<string, any>) {
    const values = Object.values(obj).filter((data) => data)
    return values.length === 0
  }

  // --- Wordings --- \\

  static formatPhoneNumber = (
    phoneNumber: string | undefined,
  ): string | undefined => {
    if (!phoneNumber) return undefined
    phoneNumber = phoneNumber.replace(/\+/g, '')

    if (phoneNumber.startsWith('0')) {
      phoneNumber = '62' + phoneNumber.slice(1)
    }

    return phoneNumber
  }

  static fieldToSnake = (model: object): object => {
    const camelKeys = Object.keys(model)
    const snakeKeys = camelKeys.map((key) => this.snakeCase(key))

    return { ...snakeKeys }
  }

  static titleCase = (str: string) => {
    const res = str.replace(/([A-Z])/g, ' $1')
    return res.charAt(0).toUpperCase() + res.slice(1)
  }

  static snakeCase = (str: string) => {
    const result = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    if (result[0] === '_') return result.substring(1)
    return result
  }

  static kebabCase = (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  static formatDate = (date: Date | string | dayjs.Dayjs) => {
    const newDate = dayjs(date).format('MMMM DD, YYYY')
    return newDate === 'Invalid Date' ? '-' : newDate
  }

  static formatDatetime = (date: Date | string | dayjs.Dayjs) => {
    const newDate = dayjs(date).format('YYYY-MM-DD HH:mm')
    return newDate === 'Invalid Date' ? '-' : newDate
  }

  static formatCurrency = (str: number | string) => {
    const formatter = new Intl.NumberFormat('in-ID', {
      style: 'currency',
      currency: 'IDR',
    })

    const currency = formatter.format(+str)

    return currency.substring(0, currency.length - 3)
  }
}
