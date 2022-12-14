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
exports.enderecoRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
const yup = __importStar(require("yup"));
exports.enderecoRouter = (0, express_1.Router)();
// retorna todos os enderecos do cliente
exports.enderecoRouter.get("/:cliente_id", async (req, res, next) => {
    // #swagger.tags = ['Endereco']
    await sequelize_1.DBEntities.Endereco.findAll({ where: { 'cliente_id': req.params.cliente_id } }).then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
// Cria o endereco para o cliente
exports.enderecoRouter.post("/:cliente_id", async (req, res, next) => {
    // #swagger.tags = ['Endereco']
    const { CEP, rua, bairro, cidade, estado, numero } = req.body;
    const cliente_id = parseInt(req.params.cliente_id);
    const endereco = { CEP, rua, bairro, cidade, estado, numero, cliente_id };
    const schemaEndereco = yup.object().shape({
        CEP: yup.string().length(8).required(),
        rua: yup.string().required(),
        bairro: yup.string().required(),
        cidade: yup.string().required(),
        estado: yup.string().length(2).required(),
        numero: yup.string().required(),
        cliente_id: yup.number().required(),
    });
    await schemaEndereco.validate(endereco)
        .then(value => {
        sequelize_1.DBEntities.Endereco.create(value)
            .then(result => { res.status(201).json(result.id); })
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
