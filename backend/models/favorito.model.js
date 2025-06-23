const sequelize = require("sequelize");
const conexao = require("../config/config.js");

let Favorito = conexao.define(
  "favorito",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    imovel_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    data_criado: {
      type: sequelize.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "favorito",
    timestamps: false,
  }
);

Favorito.belongsTo(Cliente, {
  foreignKey: "cliente_id", // Nome da chave estrangeira na tabela favorito
  targetKey: "id", // Chave primária no modelo cliente
  as: "favorito_cliente", // Alias para a relação
});

Favorito.belongsTo(Imovel, {
  foreignKey: "imovel_id", // Nome da chave estrangeira na tabela favorito
  targetKey: "id", // Chave primária no modelo imovel
  as: "favorito_imovel", // Alias para a relação
});

module.exports = Favorito;
