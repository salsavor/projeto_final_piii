const sequelize = require("sequelize");
const conexao = require("../config/config.js");

let Cliente = conexao.define(
  "cliente",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.TEXT,
      allowNull: false,
      unique: true,
    },
    nif: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    ocupacao: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    data_registo: {
      type: sequelize.DATE,
      allowNull: false,
    },
    data_atualizacao: {
      type: sequelize.DATE,
      allowNull: false,
      // defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "cliente",
    timestamps: false,
  }
);

module.exports = Cliente;
