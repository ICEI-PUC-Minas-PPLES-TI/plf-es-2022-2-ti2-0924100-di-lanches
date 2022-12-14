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
exports.autenticacaoRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
const yup = __importStar(require("yup"));
const sequelize_2 = require("sequelize");
const crypto_1 = require("../../utils/crypto");
const jwt_1 = require("../../middlewares/jwt");
exports.autenticacaoRouter = (0, express_1.Router)();
//autenticacao Cliente
exports.autenticacaoRouter.post("/", async (req, res, next) => {
    // #swagger.tags = ['Autenticacao']
    const { email, senha } = req.body;
    const cliente = { email, senha };
    const schemaCliente = yup.object().shape({
        email: yup.string().email().required(),
        senha: yup.string().required(),
    });
    schemaCliente.validate(cliente)
        .then(value => {
        sequelize_1.DBEntities.Cliente.findOne({
            where: { [sequelize_2.Op.and]: {
                    email: value.email,
                    senha: (0, crypto_1.sha256)(value.senha)
                } }
        })
            .then((result) => {
            if (result) {
                res.setHeader('authorization', (0, jwt_1.sign)(result.get()));
                res.status(200).json(result);
            }
            else {
                return next(new httpexception_1.HttpException(400, 'Usuário não encontrado.'));
            }
        })
            .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
// Cadastrar cliente
exports.autenticacaoRouter.post("/cadastro", async (req, res, next) => {
    // #swagger.tags = ['Autenticacao']
    const { nome, telefone, email, senha } = req.body;
    const cliente = { nome, telefone, email, senha };
    const schemaCliente = yup.object().shape({
        nome: yup.string().required(),
        telefone: yup.string().max(12).required(),
        email: yup.string().email().required(),
        senha: yup.string().required(),
    });
    schemaCliente.validate(cliente)
        .then(value => {
        value.senha = (0, crypto_1.sha256)(value.senha);
        sequelize_1.DBEntities.Cliente.create(cliente)
            .then(result => { res.status(201).json(result.id); })
            .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
    })
        .catch(error => next(new httpexception_1.HttpException(400, 'Dados inválidos.', { campos: error === null || error === void 0 ? void 0 : error.errors })));
});
