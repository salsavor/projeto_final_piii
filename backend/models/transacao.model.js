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

Transacao.belongsTo(Vendedor, {
  foreignKey: "vendedor_id", // Nome da chave estrangeira na tabela transacao
  targetKey: "id", // Chave primária no modelo vendedor
  as: "transacao_vendedor", // Alias para a relação
});

Transacao.belongsTo(Cliente, {
  foreignKey: "cliente_id", // Nome da chave estrangeira na tabela transacao
  targetKey: "id", // Chave primária no modelo cliente
  as: "transacao_cliente", // Alias para a relação
});

Transacao.belongsTo(Imovel, {
  foreignKey: "imovel_id", // Nome da chave estrangeira na tabela transacao
  targetKey: "id", // Chave primária no modelo imovel
  as: "transacao_imovel", // Alias para a relação
});

module.exports = Transacao;