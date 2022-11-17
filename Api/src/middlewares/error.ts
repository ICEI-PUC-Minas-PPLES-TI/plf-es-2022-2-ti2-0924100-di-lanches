import { ErrorRequestHandler } from 'express'
import { HttpException } from '../exceptions/httpexception'

export const errorHandler: ErrorRequestHandler = (
  error: HttpException,
  req,
  res,
  next
) => 
  res.status(error.status || 200).json({
    message: error.message,
    response: error?.response
  })
