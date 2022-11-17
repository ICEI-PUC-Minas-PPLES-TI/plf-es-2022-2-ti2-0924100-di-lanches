export class HttpException extends Error {
    status: number
    message: string
    response?: any
    constructor(status: number, message: string, response: any = undefined) {
      super(message)
      this.status = status
      this.message = message
      this.response = response
      Object.setPrototypeOf(this, HttpException.prototype);
    }
  }