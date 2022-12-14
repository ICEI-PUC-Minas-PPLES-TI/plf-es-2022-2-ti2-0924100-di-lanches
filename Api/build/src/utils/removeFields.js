"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFields = void 0;
const removeFields = (obj, fields) => {
    let newObj = Object.assign({}, obj);
    for (let index = 0; index < fields.length; index++) {
        delete newObj[fields[index]];
    }
    return newObj;
};
exports.removeFields = removeFields;
