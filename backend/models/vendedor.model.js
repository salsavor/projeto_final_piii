const sequelize = require("sequelize");
const conexao = require("../config/config.js");

let Vendedor = conexao.define(
  "vendedor",
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
      unique: false,
    },
    nif: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    data_registo: {
      type: sequelize.DATE,
      allowNull: false,
    },
    data_atualizacao: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "vendedor",
    timestamps: false,
  }
);

module.exports = Vendedor;
