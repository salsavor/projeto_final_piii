const Cliente = require("../models/cliente.model");
// const Imovel = require("../models/imovel.model");

const endpointsFunction = {};

// método para criar um cliente
endpointsFunction.createCliente = async (req, res) => {
  const { nome, email, nif } = req.body;
  console.log(nome, email, nif);
  try {
    const dados = await Cliente.create({
      nome: nome,
      email: email,
      nif: nif,
    });

    res.status(201).json({
      status: "success",
      message: "cliente criado com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao criar cliente",
      data: null,
    });
  }
};

//método que retorna todos os clientes
endpointsFunction.getAllClientes = async (req, res) => {
  try {
    const dados = await Cliente.findAll();

    res.status(200).json({
      status: "success",
      message: "lista de clientes obtida com sucesso",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar os clientes",
      data: null,
    });
  }
};

//método que atualiza dos dados do cliente de acordo com o seu ID
endpointsFunction.updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, email, nif } = req.body;

  try {
    const dados = await Cliente.update(
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

/*

// método que retorna todas os imoveis de um cliente de acordo com o seu ID
endpointsFunction.getImoveisBoughtByCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const dados = await Cliente.findOne({
      where: { id: id },
      include: ["imoveis"],
    });

    if (!dados) {
      return res.status(404).json({
        status: "error",
        message: "cliente não encontrado",
        data: null,
      });
    }

    res.status(200).json({
      status: "success",
      message: "imovel encontradas com sucesso",
      data: dados.subjects,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao listar imoveis",
      data: null,
    });
  }
};  

// método que adiciona uma imovel a um cliente de acordo com os seus ID's
endpointsFunction.addImovelToCliente = async (req, res) => {
  const { id } = req.params;
  const { imovelId } = req.body;

  try {
    // Verifica se o cliente existe
    const Cliente = await Cliente.findByPk(id);
    if (!Cliente) {
      return res.status(404).json({
        status: "error",
        message: "cliente não encontrado",
      });
    }

    // Verifica se a imovel existe
    const imovel = await Imovel.findByPk(imovelId);
    if (!imovel) {
      return res.status(404).json({
        status: "error",
        message: "imovel não encontrada",
      });
    }

    // Adiciona o imovel ao cliente
    await Cliente.addImovel(imovel);

    res.status(200).json({
      status: "success",
      message: "imovel adicionada ao cliente com sucesso",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "ocorreu um erro ao adicionar a imovel ao cliente",
      details: error.message,
    });
  }
};

*/

module.exports = endpointsFunction;
