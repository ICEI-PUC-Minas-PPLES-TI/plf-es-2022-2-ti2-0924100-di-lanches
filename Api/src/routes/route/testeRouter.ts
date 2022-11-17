import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";

export const testeRouter = Router()

testeRouter.get("/",(req, res, next)=>{
    // #swagger.tags = ['teste']
    // console.log("aaaa")
    // .then(result => res.status(200).json(result))
    // .catch(() => next(new HttpException(500, 'Erro ao buscar, por favor, tente novamente mais tarde.')))
})