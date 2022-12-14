"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, req, res, next) => res.status(error.status || 200).json({
    message: error.message,
    response: error === null || error === void 0 ? void 0 : error.response
});
exports.errorHandler = errorHandler;
