import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";
import { Op } from "sequelize";
import { sha256 } from "../../utils/crypto";
import { sign } from '../../middlewares/jwt'

export const autenticacaoRouter = Router()
//autenticacao Cliente
autenticacaoRouter.post("/",async (req, res, next) => {
    // #swagger.tags = ['Autenticacao']
    const { email, senha } = req.body
    const cliente: BaseTypes.Cliente = { email, senha } 
    const schemaCliente = yup.object().shape({
        email: yup.string().email().required(),
        senha: yup.string().required(),
    })
    schemaCliente.validate(cliente)
    .then(value => {
        DBEntities.Cliente.findOne({
            where: { [Op.and]: 
                             { 
                                email: value.email,
                                senha: sha256(value.senha) 
                            }}
        })
        .then((result)=>{ 
            if(result){
                res.setHeader('authorization', sign(result.get()))
                res.status(200).json(result)
            }else{
                return next(new HttpException(400, 'Usuário não encontrado.'))
            }
         })
        .catch((e: any) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
    })
    .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
    
}) 
// Cadastrar cliente
autenticacaoRouter.post("/cadastro",async (req, res, next) => {
    // #swagger.tags = ['Autenticacao']
    const { nome, telefone, email, senha } = req.body
    const cliente: BaseTypes.Cliente = { nome, telefone, email, senha } 
    const schemaCliente = yup.object().shape({
        nome: yup.string().required(),
        telefone: yup.string().max(12).required(),
        email: yup.string().email().required(),
        senha: yup.string().required(),
    })
    schemaCliente.validate(cliente)
    .then(value => {
        value.senha = sha256(value.senha)
        DBEntities.Cliente.create(cliente)
        .then(result =>{ res.status(201).json(result.id)})
        .catch((e) => next(new HttpException(500, "Erro inesperado tente Novamente mais tarde")))
    })
    .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
    
}) 
