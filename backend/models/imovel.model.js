const sequelize = require("sequelize");
const conexao = require("../config/config.js");

let Imovel = conexao.define(
  "imovel",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    tipo_imovel: {
      type: sequelize.BOOLEAN,
      allowNull: false,
    },
    local: {
      type: sequelize.TEXT,
      allowNull: false,
    },
    preco: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    vendedor_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    tableName: "imovel",
    timestamps: false,
  }
);

Imovel.belongsTo(Vendedor, {
  foreignKey: "vendedor_id", // Nome da chave estrangeira na tabela imovel
  targetKey: "id", // Chave primária no modelo vendedor
  as: "imovel_vendedor", // Alias para a relação
});

module.exports = Imovel;
