import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";


export const lancheRouter = Router()

lancheRouter.get("/",async (req, res, next)=>{
     // #swagger.tags = ['Lanche']

    await DBEntities.Lanches.findAll({
        include: [
            { model: DBEntities.Ingrediente_lanches, include: [ { model: DBEntities.Ingrediente }] },
        ],        
        where: {'ativo': true}
    })
    .then(result => res.status(200).json(result))
    .catch((e) => next(new HttpException(500, "Erro inesperado, tente novamente mais tarde.")))
})

lancheRouter.post("/", async (req, res, next) =>{
     // #swagger.tags = ['Lanche']
    const { foto, descricao, valor, nome, ativo, Ingrediente_lanches } = req.body
    const lanche: BaseTypes.Lanches = { foto, descricao, valor, nome, ativo, Ingrediente_lanches }

    const schemaLanche = yup.object().shape({
        foto: yup.string(),
        descricao: yup.string(),
        valor: yup.number(),
        nome: yup.string(),
        ativo: yup.boolean(),
        Ingrediente_lanches: yup.array().of(
            yup.object().shape({
                lanche_id: yup.number(),
                ingredientes_id: yup.number(),
                valor: yup.number(),
                acrescimos: yup.boolean(),
                quantidade: yup.number()
            })
        )
    })

    schemaLanche.validate(lanche)
    .then(async value => {
        DBEntities.Lanches.create(value)
        .then( resultLanche => {
            value.Ingrediente_lanches.map(x => x.lanche_id = resultLanche.id)
            DBEntities.Ingrediente_lanches.bulkCreate(value.Ingrediente_lanches)
            .then(result => res.status(201).json(resultLanche.id))
            .catch((e) => next(new HttpException(500, 'Erro ao criar ingredientes, por favor, tente novamente mais tarde.'+ e)))
        })
        .catch(() => next(new HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')))
    })
    .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})