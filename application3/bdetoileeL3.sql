-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 17 Janvier 2022 à 08:56
-- Version du serveur :  5.6.20-log
-- Version de PHP :  5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `bdetoileeL3`
--
CREATE DATABASE IF NOT EXISTS `bdetoileeL3` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `bdetoileeL3`;
-- --------------------------------------------------------

--
-- Structure de la table `soiree`
--

CREATE TABLE IF NOT EXISTS `soiree` (
  `dateSoiree` date NOT NULL,
  `nature` text NOT NULL,
  `nbPlaces` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `soiree`
--

INSERT INTO `soiree` (`dateSoiree`, `nature`, `nbPlaces`) VALUES
('2022-02-14','Venus/Saturne/ objets du ciel profonds', 6),
('2022-02-20', 'Objet du ciel profond en automne', 5),
('2022-03-13', 'Objet du ciel profond en automne. Découverte des anneaux de Saturne',28),
('2022-05-09', 'Objet du ciel profond en automne.Observer les cratères de la lune', 30);

--
-- Index pour les tables exportées
--
--
-- Index pour la table `soiree`
--
ALTER TABLE `soiree`
 ADD PRIMARY KEY (`dateSoiree`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
