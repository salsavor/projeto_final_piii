/*
user: createUser (post)
user: getAllUsers (get)
user/{id}: deleteUser (delete)
user/{id}: getUserById (get)
user/{id}: updateUser (put)
user/{nome}: getUserByName (get)
*/


const User = require("../models/user.model");

const endpointsFunction = {};

// método para criar um user
endpointsFunction.createUser = async (req, res) => {
const { cliente_id, vendedor_id, nif } = req.body;
  console.log(nome, email, nif);
  try {
    const dados = await User.create({
      nome: nome,
      email: email,
      nif: nif,
    });

    res.status(201).json({
      status: "success",
      message: "user criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar user",
      data: null,
    });
  }
};

//método que retorna todos os users
endpointsFunction.getAllUsers = async (req, res) => {
  try {
    const dados = await User.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de users obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os users",
      data: null,
    });
  }
};

//método que atualiza dos dados do user de acordo com o seu ID
endpointsFunction.updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email, nif } = req.body;

  try {
    const dados = await User.update(
      {
        nome: nome,
        email: email,
        nif: nif,
      },
      {
        where: { id: id },
      }
    );
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "cliente não encontrado",
      });
    }
    res.status(200).json({
      status: "success",
      message: "cliente atualizado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao atualizar cliente",
      data: null,
    });
  }
};

//método que apaga os dados de um cliente com base no seu ID
endpointsFunction.deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cliente.destroy({
      where: { id: id },
    });

    res.status(204).json({
      status: "success",
      message: "cliente apagado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao apagar cliente",
      data: null,
    });
  }
};

//método que retorna os dados de um cliente com base no seu ID
endpointsFunction.getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cliente.findOne({
      where: { id: id },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "cliente não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "cliente encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar cliente",
      data: null,
    });
  }
};

//método que retorna os dados de um cliente com base no seu nome
endpointsFunction.getClienteByName = async (req, res) => {
  const { nome } = req.params;
  try {
    const dados = await Cliente.findOne({
      where: { nome: nome },
    });
    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "cliente não encontrado",
      });
    }

    res.status(200).json({
      status: "success",
      message: "cliente encontrado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar cliente",
      data: null,
    });
  }
};