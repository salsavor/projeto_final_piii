const Transacao = require('../models/transacao.model.js');
const Imovel = require('../models/imovel.model.js');

const endpointsFunction = {};

// metodo para criar uma transação
endpointsFunction.createTransacao = async (req, res) => {
  const { imovel_id, cliente_id, preco_venda } = req.body;

  try {
    // procura o imóvel para obter o vendedor
    const imovel = await Imovel.findByPk(imovel_id);
    if (!imovel) {
      return res.status(404).json({ status: "error", message: "Imóvel não encontrado", data: null });
    }

    // cria a transação
    const transacao = await Transacao.create({
      imovel_id,
      cliente_id,
      vendedor_id: imovel.vendedor_id, // associa o vendedor do imóvel
      preco_venda,
      data_transacao: new Date()
    });

    res.status(201).json({
      status: "success",
      message: "Transação criada com sucesso",
      data: transacao
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao criar a transação",
      data: null
    });
  }
};

//talvez seja necessário adicionar outros métodos, como listar transações, buscar por ID, atualizar ou deletar transações
//exemplo de método para listar transações
/*
endpointsFunction.listTransacoes = async (req, res) => {
  try {
    const transacoes = await Transacao.findAll();
    res.status(200).json({
      status: "success",
      data: transacoes
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar as transações",
      data: null
    });
  }
}
*/

module.exports = endpointsFunction;