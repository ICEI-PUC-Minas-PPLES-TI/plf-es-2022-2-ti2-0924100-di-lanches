import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";


export const enderecoRouter = Router()
// retorna todos os enderecos do cliente
enderecoRouter.get("/:cliente_id",async (req, res, next) => {
     // #swagger.tags = ['Endereco']
    await DBEntities.Endereco.findAll(
        {where:{'cliente_id': req.params.cliente_id}}
    ).then((result)=>{ res.status(200).json(result) })
    .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
})

// Cria o endereco para o cliente
enderecoRouter.post("/:cliente_id", async (req, res, next) => {
     // #swagger.tags = ['Endereco']
    const { CEP, rua, bairro, cidade, estado, numero } = req.body
    const cliente_id = parseInt(req.params.cliente_id)
    const endereco: BaseTypes.Endereco = { CEP, rua, bairro, cidade, estado, numero, cliente_id } 
    const schemaEndereco = yup.object().shape({
        CEP: yup.string().length(8).required(), 
        rua: yup.string().required(), 
        bairro: yup.string().required(), 
        cidade: yup.string().required(), 
        estado: yup.string().length(2).required(), 
        numero: yup.string().required(),
        cliente_id: yup.number().required(),
    })

    await schemaEndereco.validate(endereco)
    .then(value => {
        DBEntities.Endereco.create(value)
        .then(result =>{ res.status(201).json(result.id)})
        .catch(() => next(new HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')))
    })
    .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})