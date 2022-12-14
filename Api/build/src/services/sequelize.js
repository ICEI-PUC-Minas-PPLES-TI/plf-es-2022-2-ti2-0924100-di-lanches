"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBEntities = exports.sequelize = void 0;
require('dotenv').config();
const config_1 = require("../config");
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(Object.assign(Object.assign({}, config_1.config.database), { dialect: 'postgres', logging: false, define: {
        freezeTableName: true,
        createdAt: 'dataCriacao',
        updatedAt: 'dataAtualizacao',
    }, timezone: '-03:00' }));
//#region Atributos base
let baseAttributes = {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
};
exports.DBEntities = {
    Endereco: exports.sequelize.define('Endereco', Object.assign(Object.assign({}, baseAttributes), { CEP: {
            type: sequelize_1.DataTypes.STRING(8),
            allowNull: false,
        }, rua: {
            type: sequelize_1.DataTypes.STRING(250),
            allowNull: false,
        }, bairro: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        }, cidade: {
            type: sequelize_1.DataTypes.STRING(90),
            allowNull: false,
        }, estado: {
            type: sequelize_1.DataTypes.CHAR(2),
            allowNull: false,
        }, numero: sequelize_1.DataTypes.STRING(10) })),
    Cliente: exports.sequelize.define('Cliente', Object.assign(Object.assign({}, baseAttributes), { nome: {
            type: sequelize_1.DataTypes.STRING(80),
            allowNull: false
        }, telefone: {
            type: sequelize_1.DataTypes.STRING(14),
            allowNull: false
        }, email: {
            type: sequelize_1.DataTypes.STRING(90),
            allowNull: false
        }, senha: {
            type: sequelize_1.DataTypes.STRING(256),
            allowNull: false
        } })),
    Cancelamento: exports.sequelize.define('Cancelamento', Object.assign(Object.assign({}, baseAttributes), { motivo: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        }, valido: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false
        } })),
    Departamento: exports.sequelize.define('Departamento', Object.assign(Object.assign({}, baseAttributes), { nome: {
            type: sequelize_1.DataTypes.STRING(80),
            allowNull: false
        } })),
    Colaboradores: exports.sequelize.define('Colaboradores', Object.assign(Object.assign({}, baseAttributes), { nome: {
            type: sequelize_1.DataTypes.STRING(80),
            allowNull: false
        }, usuario: {
            type: sequelize_1.DataTypes.STRING(80),
            allowNull: false
        }, senha: {
            type: sequelize_1.DataTypes.STRING(256),
            allowNull: false
        } })),
    Status: exports.sequelize.define('Status', Object.assign(Object.assign({}, baseAttributes), { descricao: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        } })),
    Pedido: exports.sequelize.define('Pedido', Object.assign(Object.assign({}, baseAttributes), { data_entrega: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }, delivery: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }, valor: {
            type: sequelize_1.DataTypes.DOUBLE,
            allowNull: false
        } })),
    Lanches: exports.sequelize.define('Lanches', Object.assign(Object.assign({}, baseAttributes), { foto: {
            type: sequelize_1.DataTypes.STRING(90)
        }, descricao: {
            type: sequelize_1.DataTypes.TEXT,
        }, valor: {
            type: sequelize_1.DataTypes.DOUBLE
        }, nome: {
            type: sequelize_1.DataTypes.STRING(80)
        }, ativo: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: false
        } })),
    Ingrediente_lanches: exports.sequelize.define('Ingrediente_lanches', Object.assign(Object.assign({}, baseAttributes), { valor: {
            type: sequelize_1.DataTypes.DOUBLE
        }, acrescimos: {
            type: sequelize_1.DataTypes.BOOLEAN
        }, quantidade: {
            type: sequelize_1.DataTypes.INTEGER
        } })),
    Ingrediente: exports.sequelize.define('Ingrediente', Object.assign(Object.assign({}, baseAttributes), { nome: {
            type: sequelize_1.DataTypes.STRING(50)
        }, quantidade: {
            type: sequelize_1.DataTypes.INTEGER
        }, valor_unidade: {
            type: sequelize_1.DataTypes.DOUBLE
        }, ativo: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true
        } })),
    Pedido_has_colaboradores: exports.sequelize.define('Pedido_has_colaboradores', {}),
    Pedido_has_lanches: exports.sequelize.define('Pedido_has_lanches', Object.assign({}, baseAttributes)),
    ingredientes_lanche_pedido: exports.sequelize.define('ingredientes_lanche_pedido', {
        quantidade: {
            type: sequelize_1.DataTypes.INTEGER,
        }
    }),
};
//#endregion
//tabela endereco
exports.DBEntities.Endereco.belongsTo(exports.DBEntities.Cliente, { foreignKey: { name: 'cliente_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Cliente.hasMany(exports.DBEntities.Endereco, { foreignKey: { name: 'cliente_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
// tabela pedido
exports.DBEntities.Pedido.belongsTo(exports.DBEntities.Status, { foreignKey: { name: 'status_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Status.hasMany(exports.DBEntities.Pedido, { foreignKey: { name: 'status_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Pedido.belongsTo(exports.DBEntities.Cancelamento, { foreignKey: { name: 'cancelamento_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Cancelamento.hasMany(exports.DBEntities.Pedido, { foreignKey: { name: 'cancelamento_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Pedido.belongsTo(exports.DBEntities.Endereco, { foreignKey: { name: 'endereco_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Endereco.hasMany(exports.DBEntities.Pedido, { foreignKey: { name: 'endereco_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Pedido.belongsToMany(exports.DBEntities.Colaboradores, { through: exports.DBEntities.Pedido_has_colaboradores, foreignKey: { name: 'pedido_Id', allowNull: false } });
exports.DBEntities.Colaboradores.belongsToMany(exports.DBEntities.Pedido, { through: exports.DBEntities.Pedido_has_colaboradores, foreignKey: { name: 'colaboradores_id', allowNull: false } });
exports.DBEntities.Pedido.belongsToMany(exports.DBEntities.Lanches, { through: exports.DBEntities.Pedido_has_lanches, foreignKey: { name: 'pedido_Id', allowNull: false } });
exports.DBEntities.Lanches.belongsToMany(exports.DBEntities.Pedido, { through: exports.DBEntities.Pedido_has_lanches, foreignKey: { name: 'lanches_id', allowNull: false } });
// tabela colaboradores
exports.DBEntities.Colaboradores.belongsTo(exports.DBEntities.Departamento, { foreignKey: { name: 'departamento_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Departamento.hasMany(exports.DBEntities.Colaboradores, { foreignKey: { name: 'departamento_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
// tabela ingredientes lanche
exports.DBEntities.Ingrediente_lanches.belongsTo(exports.DBEntities.Lanches, { foreignKey: { name: 'lanche_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Lanches.hasMany(exports.DBEntities.Ingrediente_lanches, { foreignKey: { name: 'lanche_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Ingrediente_lanches.belongsTo(exports.DBEntities.Ingrediente, { foreignKey: { name: 'ingredientes_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
exports.DBEntities.Ingrediente.hasMany(exports.DBEntities.Ingrediente_lanches, { foreignKey: { name: 'ingredientes_id' }, keyType: sequelize_1.DataTypes.INTEGER.UNSIGNED });
// tabela ingredientes_lanche_pedido
exports.DBEntities.Pedido_has_lanches.belongsToMany(exports.DBEntities.Ingrediente_lanches, { through: exports.DBEntities.ingredientes_lanche_pedido, foreignKey: { name: 'pedido_has_lanches_Id', allowNull: false } });
exports.DBEntities.Ingrediente_lanches.belongsToMany(exports.DBEntities.Pedido_has_lanches, { through: exports.DBEntities.ingredientes_lanche_pedido, foreignKey: { name: 'ingrediente_lanches_id', allowNull: false } });
