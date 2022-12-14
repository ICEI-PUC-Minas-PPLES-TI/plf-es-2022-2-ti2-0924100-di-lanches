"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
class HttpException extends Error {
    constructor(status, message, response = undefined) {
        super(message);
        this.status = status;
        this.message = message;
        this.response = response;
        Object.setPrototypeOf(this, HttpException.prototype);
    }
}
exports.HttpException = HttpException;
