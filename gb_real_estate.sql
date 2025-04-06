-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Abr-2025 às 22:12
-- Versão do servidor: 8.3.0
-- versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `gb_real_estate`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `cliente`
--

DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nif` int NOT NULL,
  `data_registo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `favorito`
--

DROP TABLE IF EXISTS `favorito`;
CREATE TABLE IF NOT EXISTS `favorito` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `imovel_id` int NOT NULL,
  `data_criado` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `imovel`
--

DROP TABLE IF EXISTS `imovel`;
CREATE TABLE IF NOT EXISTS `imovel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `extra` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tipo_imovel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `local` text NOT NULL,
  `preco` float NOT NULL,
  `vendedor_id` int NOT NULL,
  `data_registo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `vendedor` (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `imovel`
--

INSERT INTO `imovel` (`id`, `extra`, `tipo_imovel`, `local`, `preco`, `vendedor_id`, `data_registo`, `data_atualizacao`) VALUES
(1, 'Nulo', 'Vivenda', 'coimbra', 123, 0, '2025-01-22 20:21:02', '2025-01-22 20:21:02'),
(2, 'Nulo', 'Vivenda', '1', 12, 0, '2025-01-22 20:41:07', '2025-01-22 20:41:07'),
(3, 'Distinctio Ut ut no', 'Outro', 'In enim accusantium ', 30, 0, '2025-01-22 22:26:52', '2025-01-22 22:26:52'),
(4, 'Ipsam sunt in commod', 'Outro', 'Facere beatae iusto ', 92, 0, '2025-01-22 22:35:51', '2025-01-22 22:35:51'),
(5, 'Officia velit veniam', 'Outro', 'Amet nihil veniam ', 99, 0, '2025-01-22 23:38:15', '2025-01-22 23:38:15');

-- --------------------------------------------------------

--
-- Estrutura da tabela `transacao`
--

DROP TABLE IF EXISTS `transacao`;
CREATE TABLE IF NOT EXISTS `transacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `imovel_id` int NOT NULL,
  `vendedor_id` int NOT NULL,
  `preco_venda` float NOT NULL,
  `data_venda` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  KEY `imovel_id` (`imovel_id`),
  KEY `vendedor_id` (`vendedor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int DEFAULT NULL,
  `vendedor_id` int DEFAULT NULL,
  `username` int NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `data_registo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `admin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  KEY `vendedor_id` (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id`, `cliente_id`, `vendedor_id`, `username`, `password`, `data_registo`, `data_atualizacao`, `admin`) VALUES
(1, NULL, NULL, 442, '12322333', '2025-01-21 18:30:40', '2025-04-06 19:27:15', 0),
(3, 123, NULL, 0, '123', '2025-01-21 18:58:32', '2025-04-06 19:27:15', 0),
(6, 1231, NULL, 931139, '123', '2025-01-22 18:48:10', '2025-04-06 19:27:15', 0),
(7, NULL, NULL, 1232, '123', '2025-01-22 19:18:54', '2025-04-06 19:27:15', 0),
(9, NULL, NULL, 2022, '1', '2025-01-22 21:25:56', '2025-04-06 19:27:15', 0),
(12, NULL, NULL, 70, '1', '2025-01-25 19:51:29', '2025-04-06 19:27:15', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendedor`
--

DROP TABLE IF EXISTS `vendedor`;
CREATE TABLE IF NOT EXISTS `vendedor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) NOT NULL,
  `num_telemovel` int NOT NULL,
  `nif` int NOT NULL,
  `num_vendas` int NOT NULL,
  `imovel_id` int NOT NULL,
  `data_registo` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `transacao`
--
ALTER TABLE `transacao`
  ADD CONSTRAINT `transacao_ibfk_1` FOREIGN KEY (`vendedor_id`) REFERENCES `vendedor` (`id`),
  ADD CONSTRAINT `transacao_ibfk_2` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  ADD CONSTRAINT `transacao_ibfk_3` FOREIGN KEY (`imovel_id`) REFERENCES `imovel` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
