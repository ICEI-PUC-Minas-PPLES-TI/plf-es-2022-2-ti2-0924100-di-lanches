require('dotenv').config()
import { config } from "../config"
import { DataTypes, Sequelize } from "sequelize"
import { Instance } from "../models"
import { type } from "os"

export const sequelize = new Sequelize({
    ...config.database,
    dialect: 'postgres',
    // logging: false,
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
        }
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
            type: DataTypes.DOUBLE(9.2)
        },
        nome: {
            type: DataTypes.STRING(80)
        },
    }),

    Ingrediente_lanches: sequelize.define<Instance.Ingrediente_lanches>('Ingrediente_lanches', {
        ...baseAttributes,
        valor:{
            type: DataTypes.DOUBLE(9.2)
        },
        acrescimos: {
            type: DataTypes.BOOLEAN
        },
        quantidade: {
            type: DataTypes.INTEGER.UNSIGNED
        }
    }),

    Ingrediente: sequelize.define<Instance.Ingrediente>('Ingrediente', {
        ...baseAttributes,
        nome: {
            type: DataTypes.STRING(50)
        },
        quantidade: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        valor_unidade: {
            type: DataTypes.DOUBLE(9.2)
        },
    }),

}
//#endregion