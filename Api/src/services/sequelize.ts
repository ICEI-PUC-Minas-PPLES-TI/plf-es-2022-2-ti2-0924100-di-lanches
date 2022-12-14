require('dotenv').config()
import { config } from "../config"
import { DataTypes, Sequelize } from "sequelize"
import { Instance } from "../models"
import { type } from "os"

export const sequelize = new Sequelize({
    ...config.database,
    dialect: 'postgres',
    logging: false,
    define: {
        freezeTableName: true,
        createdAt: 'dataCriacao',
        updatedAt: 'dataAtualizacao',
    },
    timezone: '-03:00'
})

//#region Atributos base
let baseAttributes = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true
    },
}
export const DBEntities = {

    Endereco: sequelize.define<Instance.Endereco>('Endereco', {
        ...baseAttributes,
        CEP: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        rua: {
            type: DataTypes.STRING(250),
            allowNull: false,
        },
        bairro: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        cidade: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        estado: {
            type: DataTypes.CHAR(2),
            allowNull: false,
        },
        numero: DataTypes.STRING(10),        
    }),

    Cliente: sequelize.define<Instance.Cliente>('Cliente', {
        ...baseAttributes,
        nome: {
            type: DataTypes.STRING(80),
            allowNull:false
        },
        telefone:{
            type: DataTypes.STRING(14),
            allowNull:false
        },
        email:{
            type: DataTypes.STRING(90),
            allowNull:false
        },
        senha:{
            type: DataTypes.STRING(256),
            allowNull:false
        }
    }),

    Cancelamento: sequelize.define<Instance.Cancelamento>('Cancelamento', {
        ...baseAttributes,
        motivo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        valido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }),

    Departamento: sequelize.define<Instance.Departamento>('Departamento', {
        ...baseAttributes,
        nome: {
            type: DataTypes.STRING(80),
            allowNull: false
        }
    }),

    Colaboradores: sequelize.define<Instance.Colaboradores>('Colaboradores', {
        ...baseAttributes,
        nome: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        usuario: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(256),
            allowNull: false
        }              
    }),

    Status: sequelize.define<Instance.Status>('Status', {
        ...baseAttributes,
            descricao: {
                type: DataTypes.TEXT,
                allowNull: false
            }
    }),

    Pedido: sequelize.define<Instance.Pedido>('Pedido', {
        ...baseAttributes,
        data_entrega: {
            type: DataTypes.DATE,
            allowNull: false
        },
        delivery: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        valor: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
    }),


    Lanches: sequelize.define<Instance.Lanches>('Lanches', {
        ...baseAttributes,
        foto: {
            type: DataTypes.STRING(90)
        },
        descricao: {
            type: DataTypes.TEXT,
        },
        valor: {
            type: DataTypes.DOUBLE
        },
        nome: {
            type: DataTypes.STRING(80)
        },
        ativo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }),

    Ingrediente_lanches: sequelize.define<Instance.Ingrediente_lanches>('Ingrediente_lanches', {
        ...baseAttributes,
        valor:{
            type: DataTypes.DOUBLE
        },
        acrescimos: {
            type: DataTypes.BOOLEAN
        },
        quantidade: {
            type: DataTypes.INTEGER
        }
    }),

    Ingrediente: sequelize.define<Instance.Ingrediente>('Ingrediente', {
        ...baseAttributes,
        nome: {
            type: DataTypes.STRING(50)
        },
        quantidade: {
            type: DataTypes.INTEGER
        },
        valor_unidade: {
            type: DataTypes.DOUBLE
        },
        ativo : {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }),
    Pedido_has_colaboradores: sequelize.define<Instance.Pedido_has_colaboradores>('Pedido_has_colaboradores', {
        
    }),
    Pedido_has_lanches: sequelize.define<Instance.Pedido_has_lanches>('Pedido_has_lanches', {
        ...baseAttributes
    }),

    ingredientes_lanche_pedido: sequelize.define<Instance.ingredientes_lanche_pedido>('ingredientes_lanche_pedido', {
        quantidade: {
            type: DataTypes.INTEGER,
        }
    }),
}
//#endregion

//tabela endereco
DBEntities.Endereco.belongsTo(DBEntities.Cliente, {foreignKey: {name: 'cliente_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Cliente.hasMany(DBEntities.Endereco, {foreignKey: {name: 'cliente_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

// tabela pedido
DBEntities.Pedido.belongsTo(DBEntities.Status, {foreignKey: {name: 'status_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Status.hasMany(DBEntities.Pedido, {foreignKey: {name: 'status_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

DBEntities.Pedido.belongsTo(DBEntities.Cancelamento, {foreignKey: {name: 'cancelamento_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Cancelamento.hasMany(DBEntities.Pedido, {foreignKey: {name: 'cancelamento_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

DBEntities.Pedido.belongsTo(DBEntities.Endereco, {foreignKey: {name: 'endereco_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Endereco.hasMany(DBEntities.Pedido, {foreignKey: {name: 'endereco_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

DBEntities.Pedido.belongsToMany(DBEntities.Colaboradores, {through: DBEntities.Pedido_has_colaboradores, foreignKey: {name: 'pedido_Id', allowNull: false}})
DBEntities.Colaboradores.belongsToMany(DBEntities.Pedido, {through: DBEntities.Pedido_has_colaboradores, foreignKey: {name: 'colaboradores_id', allowNull: false}})

DBEntities.Pedido.belongsToMany(DBEntities.Lanches, {through: DBEntities.Pedido_has_lanches, foreignKey: {name: 'pedido_Id', allowNull: false}})
DBEntities.Lanches.belongsToMany(DBEntities.Pedido, {through: DBEntities.Pedido_has_lanches, foreignKey: {name: 'lanches_id', allowNull: false}})

// tabela colaboradores
DBEntities.Colaboradores.belongsTo(DBEntities.Departamento, {foreignKey: {name: 'departamento_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Departamento.hasMany(DBEntities.Colaboradores, {foreignKey: {name: 'departamento_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

// tabela ingredientes lanche

DBEntities.Ingrediente_lanches.belongsTo(DBEntities.Lanches, {foreignKey: {name: 'lanche_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Lanches.hasMany(DBEntities.Ingrediente_lanches, {foreignKey: {name: 'lanche_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

DBEntities.Ingrediente_lanches.belongsTo(DBEntities.Ingrediente, {foreignKey: {name: 'ingredientes_id'}, keyType: DataTypes.INTEGER.UNSIGNED})
DBEntities.Ingrediente.hasMany(DBEntities.Ingrediente_lanches, {foreignKey: {name: 'ingredientes_id'}, keyType: DataTypes.INTEGER.UNSIGNED})

// tabela ingredientes_lanche_pedido
DBEntities.Pedido_has_lanches.belongsToMany(DBEntities.Ingrediente_lanches, {through: DBEntities.ingredientes_lanche_pedido, foreignKey: {name: 'pedido_has_lanches_Id', allowNull: false}})
DBEntities.Ingrediente_lanches.belongsToMany(DBEntities.Pedido_has_lanches, {through: DBEntities.ingredientes_lanche_pedido, foreignKey: {name: 'ingrediente_lanches_id', allowNull: false}})