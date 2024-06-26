-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 13, 2024 at 09:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darcodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `productosbranda`
--

CREATE TABLE `productosbranda` (
  `id` int(3) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `seccion` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio` varchar(15) DEFAULT NULL,
  `img` varchar(300) DEFAULT NULL,
  `usuario` int(3) DEFAULT NULL,
  `cantidad` decimal(3,0) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `productosbranda`
--

INSERT INTO `productosbranda` (`id`, `nombre`, `seccion`, `precio`, `img`, `usuario`, `cantidad`) VALUES
(2, 'HIDRADERM HYAL CREMA FACIAL', 'Hidratación', '$800.00', '/assets/img/producto2.jpg', 84, NULL),
(1, 'HIDRADERM AGUA DE AVENA-ROSAS', 'Hidratación', '$500.00', '/assets/img/producto1.jpg', 84, NULL),
(7, 'AGE-PURIFY CLEAN', 'Gel', '$850.00', 'http://localhost/project-branda/assets/img/producto53.jpg', 84, 1);

-- --------------------------------------------------------

--
-- Table structure for table `registrosbranda`
--

CREATE TABLE `registrosbranda` (
  `id` int(4) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `pass` varchar(40) DEFAULT NULL,
  `name` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish2_ci;

--
-- Dumping data for table `registrosbranda`
--

INSERT INTO `registrosbranda` (`id`, `email`, `pass`, `name`) VALUES
(83, 'luis2@gmail.com', '12341221', 'Marco'),
(81, 'luiqs@gmail.com', '1234', 'luis'),
(80, 'luis@gmail.com', '1234', 'Quenn'),
(84, 'angel@gmail.com', '1234', 'Angel'),
(85, 'carlos@gmail.com', '12345', 'Carlos'),
(86, 'angel92@gmail.com', '123456', 'Angel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productosbranda`
--
ALTER TABLE `productosbranda`
  ADD KEY `id` (`id`);

--
-- Indexes for table `registrosbranda`
--
ALTER TABLE `registrosbranda`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registrosbranda`
--
ALTER TABLE `registrosbranda`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
