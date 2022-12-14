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
exports.sign = exports.validationHandler = void 0;
const dotenv = __importStar(require("dotenv"));
const jwt = __importStar(require("jsonwebtoken"));
const httpexception_1 = require("../exceptions/httpexception");
const config_1 = require("../config");
dotenv.config();
const validationHandler = (req, res, next) => {
    // try {
    //   const token = req.headers.authorization
    //   const secret = config.secret
    //   if (token === undefined) {
    //     throw new HttpException(401, 'Autorização inválida.')
    //   }
    //   if (secret === undefined) {
    //     throw new HttpException(401, 'Erro inesperado.')
    //   }
    //   req.colaborador = jwt.verify(
    //     token,
    //     secret
    //   ) as BaseTypes.Colaborador
    //   next()
    // } catch (error) {
    //   if (error instanceof HttpException) {
    //     next(error)
    //     return
    //   }
    //   next(new HttpException(401, 'Token inválido.'))
    // }
};
exports.validationHandler = validationHandler;
const sign = (payload) => {
    try {
        const secret = config_1.config.secret;
        if (secret === undefined) {
            throw new httpexception_1.HttpException(401, 'Erro inesperado.');
        }
        return jwt.sign(payload, secret, { expiresIn: "1d" });
    }
    catch (error) {
        throw new httpexception_1.HttpException(401, 'Erro inesperado.');
    }
};
exports.sign = sign;
