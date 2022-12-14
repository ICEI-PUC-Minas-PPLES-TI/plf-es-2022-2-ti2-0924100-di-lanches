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
exports.lancheRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
const yup = __importStar(require("yup"));
exports.lancheRouter = (0, express_1.Router)();
exports.lancheRouter.get("/", async (req, res, next) => {
    // #swagger.tags = ['Lanche']
    await sequelize_1.DBEntities.Lanches.findAll({
        include: [
            { model: sequelize_1.DBEntities.Ingrediente_lanches, include: [{ model: sequelize_1.DBEntities.Ingrediente }] },
        ],
        where: { 'ativo': true }
    })
        .then(result => res.status(200).json(result))
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado, tente novamente mais tarde.")));
});
exports.lancheRouter.post("/", async (req, res, next) => {
    // #swagger.tags = ['Lanche']
    const { foto, descricao, valor, nome, ativo, Ingrediente_lanches } = req.body;
    const lanche = { foto, descricao, valor, nome, ativo, Ingrediente_lanches };
    const schemaLanche = yup.object().shape({
        foto: yup.string(),
        descricao: yup.string(),
        valor: yup.number(),
        nome: yup.string(),
        ativo: yup.boolean(),
        Ingrediente_lanches: yup.array().of(yup.object().shape({
            lanche_id: yup.number(),
            ingredientes_id: yup.number(),
            valor: yup.number(),
            acrescimos: yup.boolean(),
            quantidade: yup.number()
        }))
    });
    schemaLanche.validate(lanche)
        .then(async (value) => {
        sequelize_1.DBEntities.Lanches.create(value)
            .then(resultLanche => {
            value.Ingrediente_lanches.map(x => x.lanche_id = resultLanche.id);
            sequelize_1.DBEntities.Ingrediente_lanches.bulkCreate(value.Ingrediente_lanches)
                .then(result => res.status(201).json(resultLanche.id))
                .catch((e) => next(new httpexception_1.HttpException(500, 'Erro ao criar ingredientes, por favor, tente novamente mais tarde.' + e)));
        })
            .catch(() => next(new httpexception_1.HttpException(500, 'Erro ao criar, por favor, tente novamente mais tarde.')));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
