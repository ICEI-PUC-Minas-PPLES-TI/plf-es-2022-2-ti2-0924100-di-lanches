"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidoRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
const yup = __importStar(require("yup"));
exports.pedidoRouter = (0, express_1.Router)();
// cancelamento
exports.pedidoRouter.post("/cancelar/:pedido_id", async (req, res, next) => {
    // #swagger.tags = ['Cancelamento']
    const { motivo } = req.body;
    const cancelamento = { motivo };
    const schemaCancelamento = yup.object().shape({
        motivo: yup.string().required()
    });
    await schemaCancelamento.validate(cancelamento)
        .then(value => {
        sequelize_1.DBEntities.Cancelamento.create(value)
            .then(resultCancelamento => {
            sequelize_1.DBEntities.Pedido.update({ cancelamento_id: resultCancelamento.id }, { where: { id: req.params.pedido_id } })
                .then(result => res.status(200).json({ mensagem: "Cancelamento Solicitado", id: resultCancelamento.id }))
                .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar cancelamento, por favor, tente novamente mais tarde.')));
        })
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar cancelamento, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
// validar cancelamento
// cancelamento
exports.pedidoRouter.post("/cancelar/validar/:cancelamento_id", async (req, res, next) => {
    // #swagger.tags = ['Cancelamento']
    const { motivo } = req.body;
    const cancelamento = { motivo };
    const schemaCancelamento = yup.object().shape({
        valido: yup.boolean().required()
    });
    await schemaCancelamento.validate(cancelamento)
        .then(value => {
        sequelize_1.DBEntities.Cancelamento.update({ valido: value.valido }, { where: { id: req.params.cancelamento_id } })
            .then(result => res.status(200).json({ mensagem: "Cancelamento Aprovado", id: req.params.cancelamento_id }))
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao aprovar cancelamento, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
// Entrega
exports.pedidoRouter.get("/Entrega/:id_pedido", async (req, res, next) => {
    await sequelize_1.DBEntities.Pedido.findOne({
        where: [
            { id: req.params.id_pedido },
            { delivery: true },
            { status_id: 1 }
        ],
        include: [
            { model: sequelize_1.DBEntities.Endereco },
            { model: sequelize_1.DBEntities.Status }
        ]
    }).then(result => { res.status(200).json(result); })
        .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao encontrar entrega, por favor, tente novamente mais tarde.')));
});
exports.pedidoRouter.get("/Entrega/", async (req, res, next) => {
    await sequelize_1.DBEntities.Pedido.findAll({
        where: [
            { delivery: true },
            { status_id: 1 }
        ],
        include: [
            { model: sequelize_1.DBEntities.Endereco },
            { model: sequelize_1.DBEntities.Status }
        ]
    }).then(result => { res.status(200).json(result); })
        .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao encontrar entrega, por favor, tente novamente mais tarde.')));
});
