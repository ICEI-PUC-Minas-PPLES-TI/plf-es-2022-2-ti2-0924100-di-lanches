import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";


export const ingredienteRouter = Router()

// retorna todos os enderecos do cliente
ingredienteRouter.get("/",async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
   await DBEntities.Ingrediente.findAll({
        where:{ativo: true}
    })
   .then((result)=>{ res.status(200).json(result) })
   .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
})

ingredienteRouter.get("/:id_ingrediente",async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
   await DBEntities.Ingrediente.findOne({
        where:[
            {ativo: true},
            {id: req.params.id_ingrediente}
        ]
    })
   .then((result)=>{ res.status(200).json(result) })
   .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
})
// Cria o endereco para o cliente
ingredienteRouter.post("/", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
   const { nome, quantidade, valor_unidade } = req.body
   const ingrediente: BaseTypes.Ingrediente = { nome, quantidade, valor_unidade } 

   const schemaIngrediente = yup.object().shape({
        nome: yup.string().required(), 
        quantidade: yup.number().required(), 
        valor_unidade: yup.number().required() 
   })

   await schemaIngrediente.validate(ingrediente)
   .then(value => {
       DBEntities.Ingrediente.create(value)
       .then(result =>{ res.status(201).json(result.id)})
       .catch(() => next(new HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')))
   })
   .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})

ingredienteRouter.put("/:id_ingrediente", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
   const { nome, quantidade, valor_unidade } = req.body
   const ingrediente: BaseTypes.Ingrediente = { nome, quantidade, valor_unidade } 

   const schemaIngrediente = yup.object().shape({
        nome: yup.string().required(),
        quantidade: yup.number().required(), 
        valor_unidade: yup.number().required().min(0) 
   })
   await schemaIngrediente.validate(ingrediente)
   .then(value => {
       DBEntities.Ingrediente.update(value,{where:{ id: req.params.id_ingrediente }})
       .then(result =>{ res.status(201).json(result)})
       .catch(() => next(new HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')))
   })
   .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})

ingredienteRouter.put("/", async (req, res, next) => {
    let { ativo, id} = req.body 
    await DBEntities.Ingrediente.update({ativo:ativo},{
        where: { id: id }
    })
   .then((result)=>{ res.status(200).json(result) })
   .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
})