import { Router } from "express";
import { HttpException } from "../../exceptions/httpexception";
import { DBEntities } from "../../services/sequelize";
import * as yup from 'yup'
import { BaseTypes } from "../../models";


export const pedidoRouter = Router()

// cancelamento
pedidoRouter.post("/cancelar/:pedido_id", async (req, res, next) => {
    // #swagger.tags = ['Cancelamento']
   const { motivo } = req.body
   const cancelamento: BaseTypes.Cancelamento = { motivo } 

   const schemaCancelamento = yup.object().shape({
        motivo: yup.string().required()
   })

   await schemaCancelamento.validate(cancelamento)
   .then(value => {
       DBEntities.Cancelamento.create(value)
       .then(resultCancelamento =>{ 
         DBEntities.Pedido.update({cancelamento_id: resultCancelamento.id},{where:{id: req.params.pedido_id}})
         .then(result => res.status(200).json({ mensagem: "Cancelamento Solicitado", id:resultCancelamento.id }))
         .catch(() => next(new HttpException(500, 'Erro ao criar cancelamento, por favor, tente novamente mais tarde.')))
       })
       .catch(() => next(new HttpException(500, 'Erro ao criar cancelamento, por favor, tente novamente mais tarde.')))
   })
   .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})

// validar cancelamento
// cancelamento
pedidoRouter.post("/cancelar/validar/:cancelamento_id", async (req, res, next) => {
    // #swagger.tags = ['Cancelamento']
   const { motivo } = req.body
   const cancelamento: BaseTypes.Cancelamento = { motivo } 

   const schemaCancelamento = yup.object().shape({
        valido: yup.boolean().required()
   })

   await schemaCancelamento.validate(cancelamento)
   .then(value => {
        DBEntities.Cancelamento.update({ valido: value.valido }, { where: { id: req.params.cancelamento_id } })
        .then(result => res.status(200).json({ mensagem: "Cancelamento Aprovado", id: req.params.cancelamento_id }))
        .catch(() => next(new HttpException(500, 'Erro ao aprovar cancelamento, por favor, tente novamente mais tarde.')))
   })
   .catch(error => next(new HttpException(400, 'Dados inválidos.', {campos: error?.errors})))
})
// Entrega
pedidoRouter.get("/Entrega/:id_pedido", async (req, res, next) => {
     await DBEntities.Pedido.findOne({
          where: [
                  { id: req.params.id_pedido },
                  { delivery: true },
                  { status_id: 1 }       
          ],
          include: [
               { model: DBEntities.Endereco },
               { model: DBEntities.Status }
          ]
     }).then(result => { res.status(200).json(result)})
     .catch(() => next(new HttpException(500, 'Erro ao encontrar entrega, por favor, tente novamente mais tarde.')))
})

pedidoRouter.get("/Entrega/", async (req, res, next) => {
     await DBEntities.Pedido.findAll({
          where: [
                  { delivery: true },
                  { status_id: 1 }       
          ],
          include: [
               { model: DBEntities.Endereco },
               { model: DBEntities.Status }
          ]
     }).then(result => { res.status(200).json(result)})
     .catch(() => next(new HttpException(500, 'Erro ao encontrar entrega, por favor, tente novamente mais tarde.')))
})