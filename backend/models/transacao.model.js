const sequelize = require("sequelize");
const conexao = require("../config/config.js");

let Transacao = conexao.define(
  "transacao",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    imovel_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    vendedor_id: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    preco_venda: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    data_venda: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "transacao",
    timestamps: false,
  }
);

module.exports = Transacao;
