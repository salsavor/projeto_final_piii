const Vendedor = require("../models/vendedor.model");

const endpointsFunction = {};

// Criar um novo vendedor
endpointsFunction.createVendedor = async (req, res) => {
  const { name, email, nif, num_telefone } = req.body;

  try {
    const dados = await Vendedor.create({ name, email, nif, num_telefone });

    res.status(201).json({
      status: "success",
      message: "Vendedor criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao criar vendedor.",
      data: null,
    });
  }
};

// Obter todos os vendedores
endpointsFunction.getAllVendedores = async (req, res) => {
  try {
    const dados = await Vendedor.findAll();

    res.status(200).json({
      status: "success",
      message: "Lista de vendedores.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar vendedores.",
      data: null,
    });
  }
};

// Obter um vendedor pelo ID
endpointsFunction.getVendedorById = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = await Vendedor.findById(id);

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Vendedor não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Vendedor encontrado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao listar vendedor.",
      data: null,
    });
  }
};

// Atualizar um vendedor pelo ID
endpointsFunction.updateVendedor = async (req, res) => {
  const { id } = req.params;
  const { name, email, nif, num_telefone } = req.body;

  try {
    const dados = await Vendedor.findByIdAndUpdate(id, name, email, nif, num_telefone);

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Vendedor não encontrado.",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Vendedor atualizado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao atualizar vendedor.",
      data: null,
    });
  }
};

// Excluir um vendedor pelo ID
endpointsFunction.deleteVendedor = async (req, res) => {
  const { id } = req.params;

  try {
    const dados = await Vendedor.findByIdAndDelete(id);

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "Vendedor não encontrado.",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Vendedor eliminado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro ao eliminar vendedor.",
      data: null,
    });
  }
};

module.exports = endpointsFunction;
