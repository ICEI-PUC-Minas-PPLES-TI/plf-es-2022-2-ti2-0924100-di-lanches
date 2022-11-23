import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";


export const clienteRouter = Router()

clienteRouter.get("/",async (req, res, next) => {
    // #swagger.tags = ['Cliente']
   await DBEntities.Cliente.findAll({
    include: {model: DBEntities.Endereco}
   })
   .then((result)=>{ res.status(200).json(result) })
   .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
})