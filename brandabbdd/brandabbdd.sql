-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 23, 2021 at 02:31 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brandabbdd`
--

-- --------------------------------------------------------

--
-- Table structure for table `productosbranda`
--

CREATE TABLE `productosbranda` (
  `id` int(3) NOT NULL,
  `nombre` varchar(30) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `seccion` varchar(30) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `precio` varchar(15) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `img` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario` int(3) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Dumping data for table `productosbranda`
--

INSERT INTO `productosbranda` (`id`, `nombre`, `seccion`, `precio`, `img`, `usuario`) VALUES
(3, 'FLASH NUDE 02 GOLD', 'Maquillaje', '$1,250.00', '/assets/img/producto3.jpg', 83),
(12, 'SILYMARIN CF', 'Aceite', '$4,219.00', '/assets/img/producto58.jpg', 83),
(42, 'STUDIO FIX POWDER PLUS', 'Polvo', '$599.00', '/assets/img/producto6.jpg', 83),
(16, 'ACNW PROOFING', 'Gel Facial', '$420.00', '/assets/img/producto62.jpg', 83),
(13, 'BLUE HERBAL SPOT TREATMENT', 'Crema', '$440.00', '/assets/img/producto59.jpg', 83);

-- --------------------------------------------------------

--
-- Table structure for table `registrosbranda`
--

CREATE TABLE `registrosbranda` (
  `id` int(4) NOT NULL,
  `email` varchar(40) COLLATE ucs2_spanish2_ci DEFAULT NULL,
  `pass` varchar(40) COLLATE ucs2_spanish2_ci DEFAULT NULL,
  `name` varchar(40) CHARACTER SET utf8 COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish2_ci;

--
-- Dumping data for table `registrosbranda`
--

INSERT INTO `registrosbranda` (`id`, `email`, `pass`, `name`) VALUES
(83, 'luis2@gmail.com', '12341221', 'Marco'),
(81, 'luiqs@gmail.com', '1234', 'luis'),
(80, 'luis@gmail.com', '1234', 'Quenn');

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
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
