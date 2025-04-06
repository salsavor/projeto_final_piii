const sequelize = require('sequelize')
const conexao = require('../config/config.js')

let Favorito = conexao.define(
    "favorito",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        imovel_id: {
            type: sequelize.INTEGER,
            allowNull: false,
            unique: true
        },
        data_criado: {
            type: sequelize.DATE,
            allowNull: false
        }
    },
    {
        tableName: "favorito",
        timestamps: false
    }
)

module.exports = Favorito