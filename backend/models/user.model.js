const sequelize = require('sequelize')
const conexao = require('../config/config.js')
const Vendedor = require('./vendedor.model.js')

let User = conexao.define(
    "user",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente_id: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        vendedor_id: {
            type: sequelize.INTEGER,
            allowNull: true
        },
        username: {
            type: sequelize.TEXT,
            allowNull: false
        },
        password: {
            type: sequelize.TEXT,
            allowNull: false
        },
        data_registo: {
            type: sequelize.DATE,
            allowNull: false
        },
        data_atualizacao: {
            type: sequelize.DATE,
            allowNull: false
        },
        admin: {
            type: sequelize.BOOLEAN,
            allowNull: true
        },
    },
    {
        tableName: "user",
        timestamps: false
    }
)

module.exports = User