const Imovel = require("../models/imovel.model");

const endpointsFunction = {};

// Criar um novo imóvel
endpointsFunction.createImovel = async (req, res) => {
  const { local, tipo_imovel, preco, vendedor_id } = req.body;

  try {
    const dados = await Imovel.create({
      local,
      tipo_imovel,
      preco,
      vendedor_id,
    });

    res.status(201).json({
      status: "success",
      message: "imovel criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar imovel",
      data: null,
    });
  }
};

// Obter todos os imoveis
endpointsFunction.getAllImoveis = async (req, res) => {
  try {
    const dados = await Imovel.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de imoveis",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar imoveis",
      data: null,
    });
  }
};

// Obter um imovel pelo ID na BD
endpointsFunction.getImovelById = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = await Imovel.findById(id);

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "imovel não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Imovel encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar imoveis",
      data: null,
    });
  }
};

// Atualizar um imovel pelo ID
endpointsFunction.updateImovel = async (req, res) => {
  const { id } = req.params;
  const { local, tipo_imovel, preco, vendedor_id } = req.body;

  try {
    const dados = await Imovel.findByIdAndUpdate(
      id,
      { local, tipo_imovel, preco, vendedor_id },
      { new: true }
    );

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Imovel não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Imovel atualizado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar imovel",
      data: null,
    });
  }
};

// Excluir um imovel com base no seu ID
endpointsFunction.deleteImovel = async (req, res) => {
  const { id } = req.params;

  try {
    const dados = await Imovel.findByIdAndDelete(id);

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Imovel não encontrado.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Imovel eliminado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao eliminar imovel.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
