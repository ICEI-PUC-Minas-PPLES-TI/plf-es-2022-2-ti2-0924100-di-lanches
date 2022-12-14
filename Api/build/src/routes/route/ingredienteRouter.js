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
exports.ingredienteRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
const yup = __importStar(require("yup"));
exports.ingredienteRouter = (0, express_1.Router)();
// retorna todos os enderecos do cliente
exports.ingredienteRouter.get("/", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
    await sequelize_1.DBEntities.Ingrediente.findAll({
        where: { ativo: true }
    })
        .then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
exports.ingredienteRouter.get("/:id_ingrediente", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
    await sequelize_1.DBEntities.Ingrediente.findOne({
        where: [
            { ativo: true },
            { id: req.params.id_ingrediente }
        ]
    })
        .then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
// Cria o endereco para o cliente
exports.ingredienteRouter.post("/", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
    const { nome, quantidade, valor_unidade } = req.body;
    const ingrediente = { nome, quantidade, valor_unidade };
    const schemaIngrediente = yup.object().shape({
        nome: yup.string().required(),
        quantidade: yup.number().required(),
        valor_unidade: yup.number().required()
    });
    await schemaIngrediente.validate(ingrediente)
        .then(value => {
        sequelize_1.DBEntities.Ingrediente.create(value)
            .then(result => { res.status(201).json(result.id); })
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
exports.ingredienteRouter.put("/:id_ingrediente", async (req, res, next) => {
    // #swagger.tags = ['Ingredientes']
    const { nome, quantidade, valor_unidade } = req.body;
    const ingrediente = { nome, quantidade, valor_unidade };
    const schemaIngrediente = yup.object().shape({
        nome: yup.string().required(),
        quantidade: yup.number().required(),
        valor_unidade: yup.number().required().min(0)
    });
    await schemaIngrediente.validate(ingrediente)
        .then(value => {
        sequelize_1.DBEntities.Ingrediente.update(value, { where: { id: req.params.id_ingrediente } })
            .then(result => { res.status(201).json(result); })
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
exports.ingredienteRouter.put("/", async (req, res, next) => {
    let { ativo, id } = req.body;
    await sequelize_1.DBEntities.Ingrediente.update({ ativo: ativo }, {
        where: { id: id }
    })
        .then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
