const Transacao = require('../models/transacao.model.js');

const endpointsFunction = {};

// Método para criar uma transação
endpointsFunction.createTransacao = async (req, res) => {
  const { imovel_id, cliente_id, vendedor_id, preco } = req.body;

  try {
    const transacao = await Transacao.create({
      imovel_id,
      cliente_id,
      vendedor_id,
      preco_venda
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
