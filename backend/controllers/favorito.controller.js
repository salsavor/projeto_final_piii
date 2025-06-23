const Favorito = require("../models/favorito.model");

const endpointsFunction = {};

// método para criar um favorito
endpointsFunction.createFavorito = async (req, res) => {
    const { cliente_id, imovel_id } = req.body;

    try {
        const favorito = await Favorito.create({
            cliente_id,
            imovel_id
        });

        res.status(201).json({
            status: "success",
            message: "Favorito criado com sucesso",
            data: favorito
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao criar o favorito",
            data: null
        });
    }
};

// método que retorna todos os favoritos
endpointsFunction.getAllFavoritos = async (req, res) => {
    try {
        const favoritos = await Favorito.findAll();
        res.status(200).json({
            status: "success",
            message: "Lista de favoritos obtida com sucesso",
            data: favoritos
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar os favoritos",
            data: null
        });
    }
};

// método que lista o favorito de um cliente por id
endpointsFunction.getFavoritoByIdCliente = async (req, res) => {
    const { cliente_id, imovel_id } = req.params;

    try {
        const favorito = await Favorito.findOne({
            where: {
                cliente_id,
                imovel_id
            }
        });

        if (!favorito) {
            return res.status(404).json({
                status: "error",
                message: "Favorito não encontrado",
                data: null
            });
        }

        res.status(200).json({
            status: "success",
            message: "Favorito encontrado com sucesso",
            data: favorito
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o favorito",
            data: null
        });
    }
};

//metodo que elimina um favorito com base no id do cliente e do imóvel
endpointsFunction.deleteFavorito = async (req, res) => {
    const { cliente_id, imovel_id } = req.params;

    try {
        const favorito = await Favorito.findOne({
            where: {
                cliente_id,
                imovel_id
            }
        });

        if (!favorito) {
            return res.status(404).json({
                status: "error",
                message: "Favorito não encontrado",
                data: null
            });
        }

        await favorito.destroy();

        res.status(200).json({
            status: "success",
            message: "Favorito eliminado com sucesso",
            data: favorito
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao eliminar o favorito",
            data: null
        });
    }
};

module.exports = endpointsFunction;