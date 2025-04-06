const sequelize = require('sequelize')
const conexao = require('../config/config.js')

let Imovel = conexao.define(
    "imovel",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize.STRING,
            allowNull: false
        },
        tipo_imovel: {
            type: sequelize.BOOLEAN,
            allowNull: false
        },
        local: {
            type: sequelize.TEXT,
            allowNull: false
        },
        preco: {
            type: sequelize.FLOAT,
            allowNull: false
        },
        vendedor_id: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        data_registo: {
            type: sequelize.DATE,
            allowNull: false
        },
        data_atualizacao: {
            type: sequelize.DATE,
            allowNull: false
        }
    },
    {
        tableName: "imovel",
        timestamps: false
    }
)

module.exports = Imovel