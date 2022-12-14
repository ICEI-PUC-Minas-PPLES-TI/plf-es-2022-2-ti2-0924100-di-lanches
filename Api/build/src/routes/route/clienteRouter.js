"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clienteRouter = void 0;
const express_1 = require("express");
const httpexception_1 = require("../../exceptions/httpexception");
const sequelize_1 = require("../../services/sequelize");
exports.clienteRouter = (0, express_1.Router)();
exports.clienteRouter.get("/", async (req, res, next) => {
    // #swagger.tags = ['Cliente']
    await sequelize_1.DBEntities.Cliente.findAll()
        .then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
exports.clienteRouter.get("/:cliente_id", async (req, res, next) => {
    // #swagger.tags = ['Cliente']
    await sequelize_1.DBEntities.Cliente.findOne({
        where: { 'id': req.params.cliente_id },
        include: { model: sequelize_1.DBEntities.Endereco }
    })
        .then((result) => { res.status(200).json(result); })
        .catch((e) => next(new httpexception_1.HttpException(500, "Erro inesperado tente Novamente mais tarde")));
});
