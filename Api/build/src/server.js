"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const body_parser_1 = require("body-parser");
const yup_1 = require("yup");
const yup_locale_pt_1 = require("yup-locale-pt");
const routes_1 = require("./routes");
const sequelize_1 = require("./services/sequelize");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("../swagger.json"));
const cors = require('cors');
const startServer = async () => {
    await sequelize_1.sequelize
        .authenticate()
        .then(() => console.log('[Database] Autenticado com sucesso.'))
        .catch(console.log);
    await sequelize_1.sequelize
        .sync({ alter: { drop: false }, force: false, logging: false })
        .then(() => console.log('[Database] Sincronizado com sucesso.'))
        .catch(console.log);
    // defaults.init()
    (0, yup_1.setLocale)(yup_locale_pt_1.pt);
    const app = (0, express_1.default)();
    app.use(cors({ allowedHeaders: '*', exposedHeaders: '*' }));
    app.use((0, body_parser_1.json)());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    app.use('/api', routes_1.routers);
    app.listen(config_1.config.port, () => console.log(`[Express] Running at port ${config_1.config.port}`));
};
startServer();
