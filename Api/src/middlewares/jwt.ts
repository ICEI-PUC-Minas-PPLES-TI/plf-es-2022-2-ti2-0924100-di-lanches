import * as dotenv from 'dotenv'
import * as jwt from 'jsonwebtoken'

import { HttpException } from '../exceptions/httpexception'
import { RequestHandler } from 'express'
import { config } from '../config'

dotenv.config()

export const validationHandler: RequestHandler = (req, res, next) => {
  try {
    const token = req.headers.authorization
    const secret = config.secret

    if (token === undefined) {
      throw new HttpException(401, 'Autorização inválida.')
    }

    if (secret === undefined) {
      throw new HttpException(401, 'Erro inesperado.')
    }

    req.colaborador = jwt.verify(
      token,
      secret
    ) as BaseTypes.Colaborador

    next()
  } catch (error) {
    if (error instanceof HttpException) {
      next(error)
      return
    }

    next(new HttpException(401, 'Token inválido.'))
  }
}

export const sign = (payload: any) => {
  try {
    const secret = config.secret

    if (secret === undefined) {
      throw new HttpException(401, 'Erro inesperado.')
    }

    return jwt.sign(payload, secret, {expiresIn: "1d"})
  } catch (error) {
    throw new HttpException(401, 'Erro inesperado.')
  }
}