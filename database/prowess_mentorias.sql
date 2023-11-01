-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2023 a las 23:17:55
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prowess_mentorias`
--
CREATE DATABASE IF NOT EXISTS `prowess_mentorias` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `prowess_mentorias`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `content`
--

DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `content`
--

INSERT INTO `content` (`id`, `name`, `description`) VALUES
('1555e4ef-9790-4884-bb2f-e359a8a32d34', 'Física', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('1e4ab31a-6eaf-4f6d-bd4e-721461dcbd54', 'Diseño Digital', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('49b4656e-4604-4bae-92c7-d81c425c49ae', 'Marketing', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('7594224a-f4c2-449c-86fa-a187870562bb', 'Química', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('9b7b047a-a815-4dd0-af25-332546449f59', 'Desarrollo de Videojuegos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('b58ab8dc-195a-4f12-83f6-d2d7e369ba80', 'Computación Gráfica', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
('d2f2db1c-9ae6-4494-93d2-c91bb09a8ada', 'Marketing Digital', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `content_mentorship`
--

DROP TABLE IF EXISTS `content_mentorship`;
CREATE TABLE `content_mentorship` (
  `id_content` varchar(64) NOT NULL DEFAULT '',
  `id_mentorship` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `content_mentorship`
--

INSERT INTO `content_mentorship` (`id_content`, `id_mentorship`) VALUES
('d2f2db1c-9ae6-4494-93d2-c91bb09a8ada', 'f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `content_mentorship_display`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `content_mentorship_display`;
CREATE TABLE `content_mentorship_display` (
`id_content` varchar(64)
,`id_mentorship` varchar(64)
,`content_name` varchar(128)
,`content_description` varchar(512)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrepreneur`
--

DROP TABLE IF EXISTS `entrepreneur`;
CREATE TABLE `entrepreneur` (
  `id` varchar(64) NOT NULL,
  `names` varchar(64) NOT NULL,
  `last_names` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(256) NOT NULL,
  `phone` varchar(16) NOT NULL,
  `nameStore` varchar(64) NOT NULL,
  `descriptionStore` varchar(256) NOT NULL,
  `googleMapsURL` varchar(256) NOT NULL,
  `sector` varchar(64) NOT NULL,
  `city` varchar(64) NOT NULL,
  `province` varchar(64) NOT NULL,
  `twitter` varchar(128) NOT NULL,
  `facebook` varchar(128) NOT NULL,
  `instagram` varchar(128) NOT NULL,
  `tiktok` varchar(128) NOT NULL,
  `type` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `entrepreneur`
--

INSERT INTO `entrepreneur` (`id`, `names`, `last_names`, `email`, `address`, `phone`, `nameStore`, `descriptionStore`, `googleMapsURL`, `sector`, `city`, `province`, `twitter`, `facebook`, `instagram`, `tiktok`, `type`) VALUES
('3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Maria Petra', 'Torres Rodriguez', 'mptorres@espe.edu.ec', 'Av. Idk', '0998575584', 'Maxone', 'Es un emprendimiento encargado de vender dispositivos electronicos', 'https://www.google.com/maps/place/Universidad+de+las+Fuerzas+Armadas+ESPE/@-0.3148217,-78.4425119,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5bd12538eb13b:0x907c61f1abbe45ab!8m2!3d-0.3148217!4d-78.4425119', 'Ruminahui', 'Sangolqui', 'Pichincha', 'idk', 'idk', 'idk', 'idk', 'FUDELAS'),
('55f2acab-4d1f-403b-b6c0-d50d9ceee14c', 'Juan', 'Flores', 'juan@espe.edu.ec', 'Av. Ejemplo', '0987654321', 'MarK', '	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 'https://www.google.com/maps', 'asdasd', 'asd', 'asd', 'sd', 'asd', 'sdas', 'sda', 'Privado'),
('7d03611b-2e93-4e78-b112-b026367511da', 'Erik', 'Molina', 'edmolina@espe.edu.ec', 'Av. Cotopaxi', '0987456321', 'ED Tech', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', 'httpps', 'Vicente León', 'Latacunga', 'Cotopaxi', 'ED Tech', 'ED Tech', 'ED Tech', 'ED Tech', 'Fudelas'),
('ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Andrés Alejandro', 'Coronel Rodrigues', 'andrescoronel1209@gmail.com', 'Jorge Piedra Oe4-76 y Av. La prensa Os5-16', '093703370', 'Lorem Ipsum Seller', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'https://www.google.com.ec/maps/place/Universidad+de+las+Fuerzas+Armadas+ESPE/@-0.3148163,-78.444706,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5bd12538eb13b:0x907c61f1abbe45ab!8m2!3d-0.3148217!4d-78.4425119?hl=es', 'La concepción', 'Quito', 'Pichincha', 'AACR12', 'praxisEC', 'AACR12', 'AACR12', 'Hias'),
('cda6279c-68ea-4e58-a16e-4e772979fa89', 'Erik', 'Molina', 'edmoina@gmail.com', 'Av. Ejemplo', '0987451263', 'Tech Corp', '	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i', 'https', 'Valle', 'Latacunga', 'Cotopaxi', 'adas', 'asd', 'asdasd', 'asd', 'Fudelas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manager`
--

DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` varchar(64) NOT NULL,
  `names` varchar(64) NOT NULL,
  `last_names` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `manager`
--

INSERT INTO `manager` (`id`, `names`, `last_names`, `email`, `address`) VALUES
('197798ba-b979-45e6-b405-3fbd39ba467f', 'Maoly ', 'Lorena', 'mlalban@espe.edu.ec', 'Av. Ejemplo'),
('2331da12-fe8b-4d26-a2f8-9f684cef931b', 'Juan', 'de Dios', 'juan.@espe.edu.ec', 'Av. Ejemplo'),
('2f842b95-ebff-48dd-84d8-60e86002ba7e', 'Erik', 'Molina', 'edmolina3@espe.edu.ec', 'Av. Ejemplo y Ejemplo 2'),
('375a7b88-04f1-42f4-8a4e-fa1d9c216f78', 'Juan', 'Diego', 'asdasdmd@espe.edu.ec', 'AVFA'),
('4f8fb690-8658-4205-ae15-0f498adac8b0', 'Juan ', 'Armando', 'j.armando@espe.edu.ec', 'Av. Siempre Viva 707'),
('99ffcf62-2ec4-4247-b412-4a1543b085ef', 'Diego', 'Moran', 'dasadsqwe@espe.edu.ec', 'AV. Ejemplo 12'),
('afc36559-e5af-4c87-ac1f-1064f5c0fcf3', 'Andrés Alejandro', 'Coronel Rodrigues', 'aacoronel@espe.edu.ec', 'Jorge Piedra y Av. La Prensa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mentorship`
--

DROP TABLE IF EXISTS `mentorship`;
CREATE TABLE `mentorship` (
  `id` varchar(64) NOT NULL,
  `id_manager` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `date_mentorship` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `mentorship`
--

INSERT INTO `mentorship` (`id`, `id_manager`, `id_entrepreneur`, `title`, `description`, `date_mentorship`) VALUES
('119af80c-cc2a-44f2-8109-aae3376f5fe3', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-12-16 18:28:00'),
('83b9ac00-b8aa-4731-9bc7-3f3c46ec9196', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-04-16 14:00:00'),
('97557780-0ba8-4adc-acc1-1518025f8682', '2f842b95-ebff-48dd-84d8-60e86002ba7e', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Prueba 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-12-17 23:43:00'),
('df5bdab2-bdbe-4f3f-8d56-d3c1aa41abb2', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Test', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-11-14 18:54:00'),
('f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad', 'afc36559-e5af-4c87-ac1f-1064f5c0fcf3', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Brand', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in', '2022-11-30 12:00:00');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `mentorship_display`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `mentorship_display`;
CREATE TABLE `mentorship_display` (
`id` varchar(64)
,`id_manager` varchar(64)
,`id_entrepreneur` varchar(64)
,`title` varchar(128)
,`description` varchar(256)
,`date_mentorship` datetime
,`manager_names` varchar(64)
,`manager_last_names` varchar(64)
,`manager_email` varchar(128)
,`entrepreneur_names` varchar(64)
,`entrepreneur_last_names` varchar(64)
,`nameStore` varchar(64)
,`entrepreneur_type` char(20)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `price` decimal(16,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `id_entrepreneur`, `name`, `description`, `price`) VALUES
('01f22931-0b47-44c8-9f2a-5266001503b6', '7d03611b-2e93-4e78-b112-b026367511da', 'Laptod Dell Latitude 15', 'Laptod para los gamers del hogar', '1500.00'),
('5bc4ed09-7afa-417c-93dc-9449545158a5', '3ba785ce-3cf5-4d2c-a865-af93b36f82b0', 'Disco Duro Externo 64GB', 'Es un disco durable y portable que permite  bla bla bla', '55.90'),
('e86185b3-5e60-4c4f-98f0-0198b4dd2f91', 'ad573f66-af26-472c-b3a4-0aa75580f4aa', 'Laptod', 'Laptod resistente a caidas', '700.00');

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `product_display`
-- (Véase abajo para la vista actual)
--
DROP VIEW IF EXISTS `product_display`;
CREATE TABLE `product_display` (
`id` varchar(64)
,`id_entrepreneur` varchar(64)
,`name` varchar(128)
,`description` varchar(256)
,`price` decimal(16,2)
,`full_name` varchar(129)
,`nameStore` varchar(64)
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `userName` varchar(128) NOT NULL,
  `pass` varchar(128) NOT NULL,
  `full_name` varchar(128) NOT NULL,
  `role_user` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `userName`, `pass`, `full_name`, `role_user`) VALUES
('0320a7b6-860f-4493-918f-26754998340e', 'adminuser', '$2b$10$UhvS.sQlWc2kRTErcat..e6A2M28eo/hLUNS/dzgDUFlZtllmlebG', 'Erik Molina', 'user'),
('03dcbb4c-6517-4b11-8884-275d0af0fb0a', 'Erik Molina', '$2b$10$SMRbCKQAepaT3tTGNyUtOeFqB/VMxgl5AHvdA4a6FU2oW.39VIpku', 'Erik Molina', 'admin'),
('266dac87-f43e-44ea-ac72-0d6537ec3c57', 'Juan', '$2b$10$v3SywsKDbIu9pcq2QfcEkOPkXcRLSsbgklv/2uGKWvbTSPxxo2TaW', 'asdacsd', 'admin'),
('2a620528-39a4-4c50-81f5-85837de73517', 'admin3', '$2b$10$FKl6ZClj2Q8xqym.DC.OHeMaI0gUZJvnnfudKz3yC51dqPvFnP7aC', 'Andres Coronel', 'admin'),
('4232f04b-01a4-407c-a98a-3faad8ba94c8', 'Juana', '$2b$10$9WAJNrYmt1MQ/Ug5jLOd4OeSIZwtzeHv5jOowFlTNW3M6yZJ9H4LG', 'Juan Diego', 'user'),
('4ba9864d-75fd-4ee9-a8d2-c4b3bca6bd31', 'admin5', '$2b$10$mKtWGro/W/qZaYMRDAvfteJc.CRGKV6eqPfA4PIwAurLrwIi00Yb2', 'Andres Coronel', 'admin'),
('4c7a0c60-420b-4c96-aaf8-e95e7e2cbe1e', 'Juanadmin', '$2b$10$rNGvfx4B0vMNBNkXHDfhjunEFPbYoGc/lkBhX7LLeo2.c4e9kWwYi', 'Juan', 'user'),
('4cedf23b-7fd4-4e99-88e7-dfdd7c529818', 'Daniel M', '$2b$10$YpFCH8oq6dRP3alxLnAoc.Qp0aGqhREBIHYoJb71JQXSUmmwHdgWC', 'Erik Daniel Molina', 'admin'),
('50485797-babf-4339-80be-5d94916fee5f', 'test1231', '$2b$10$CKZAJ2w6yYeBx3qCaNe6GufoDeHEwBhq3sY74kimDnrtRoL9FdvOa', 'Erik Daniel', 'user'),
('57304dda-3d9e-4896-a76b-f7cf4301ebf3', 'test1', '$2b$10$eQMQqqAJeIlpxau0kdVujOx8rJCCocfOBZ2p.X5RGwoXy9fqCD.1u', 'Erik Daniel', 'user'),
('7eb11ff1-9d06-4abd-9fb3-728857c71005', 'admin2', '$2b$10$HcKXspuxWUguRG8WnPXw5uTs2wpb5w7OPrqUxtRAy7/oJ7YYn.3GO', 'Andres Coronel', 'admin'),
('81ba8dcb-76f0-45b3-ab64-9b4deedf5c0e', 'Adminerik', '$2b$10$j/UtQOthhhNL59iuY6iQnefCEBlXWsjL1wd9GcqGjgttDrUkj.NoW', 'ASASDAadzx', 'admin'),
('8a7d1895-2ccb-4d0b-a555-ca0121ae6d86', 'Erik002', '$2b$10$ilpanyb62QREBJKbFXDqoOmQCJk3zwOOFdwykOiY6De2s7ghhijPu', 'Erik Daniel Molina', 'admin'),
('b17be3bc-a1bf-4c2a-91af-62cc635a180c', 'admin4', '$2b$10$uygJSX1xd0BPG6pUj5EVB.q9tmvujkxEj55T4IBPfjbe2gIXj4tya', 'Andres Coronel', 'admin'),
('c309a30a-2286-44b1-934b-7610e32fa32a', 'erikdad', '$2b$10$DckS9Myb3Y9i9aFywLL.0OMNN1DcMedF6AUO0wMhPw0ZUYiDsH2AK', 'Erik Molina', 'admin'),
('d1e95932-5b3c-49cb-824d-1a98995ed3d8', 'Admin Erik', '$2b$10$B7O1JHcL8OqVAl.51JFYt.yge9tzPye02uel5ozfHGZ9W2GINtaI.', 'Erik Daniel Molina', 'admin'),
('dc4f838d-0826-47b9-87f5-31eb56f97989', 'Astro', '$2b$10$0PgEnbKldCViHZ9Z1/xiQeNYT4x4KUjQWLHPrnRURra.t0OOzAiI6', 'Erik Molina', 'admin'),
('de12e0d7-e18e-4027-a403-89ad3353cbb5', 'admin', '$2b$10$aUG3n2eeg.vrGjKuBpEo8e5LoOSY/P4jnmWv8Be4diRLpzR.5DmQi', 'Andrés Alejandro Coronel Rodrigues', 'admin'),
('f75790a5-d73c-4c2d-b928-44b27487cdb0', 'Erik001', '$2b$10$n3Hms6PABuZjZf8GqbR4ceTv6ux7zZsuPdTQAGSZT3UAAwG84IpyW', 'Erik Daniel Molina', 'admin');

-- --------------------------------------------------------

--
-- Estructura para la vista `content_mentorship_display`
--
DROP TABLE IF EXISTS `content_mentorship_display`;

DROP VIEW IF EXISTS `content_mentorship_display`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `content_mentorship_display`  AS SELECT `cm`.`id_content` AS `id_content`, `cm`.`id_mentorship` AS `id_mentorship`, `c`.`name` AS `content_name`, `c`.`description` AS `content_description` FROM (`content_mentorship` `cm` join `content` `c` on(`c`.`id` = `cm`.`id_content`))  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `mentorship_display`
--
DROP TABLE IF EXISTS `mentorship_display`;

DROP VIEW IF EXISTS `mentorship_display`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `mentorship_display`  AS SELECT `m`.`id` AS `id`, `m`.`id_manager` AS `id_manager`, `m`.`id_entrepreneur` AS `id_entrepreneur`, `m`.`title` AS `title`, `m`.`description` AS `description`, `m`.`date_mentorship` AS `date_mentorship`, `m2`.`names` AS `manager_names`, `m2`.`last_names` AS `manager_last_names`, `m2`.`email` AS `manager_email`, `e`.`names` AS `entrepreneur_names`, `e`.`last_names` AS `entrepreneur_last_names`, `e`.`nameStore` AS `nameStore`, `e`.`type` AS `entrepreneur_type` FROM ((`mentorship` `m` join `entrepreneur` `e` on(`e`.`id` = `m`.`id_entrepreneur`)) join `manager` `m2` on(`m2`.`id` = `m`.`id_manager`))  ;

-- --------------------------------------------------------

--
-- Estructura para la vista `product_display`
--
DROP TABLE IF EXISTS `product_display`;

DROP VIEW IF EXISTS `product_display`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `product_display`  AS SELECT `product`.`id` AS `id`, `product`.`id_entrepreneur` AS `id_entrepreneur`, `product`.`name` AS `name`, `product`.`description` AS `description`, `product`.`price` AS `price`, concat(`e`.`names`,concat(' ',`e`.`last_names`)) AS `full_name`, `e`.`nameStore` AS `nameStore` FROM (`product` join `entrepreneur` `e` on(`product`.`id_entrepreneur` = `e`.`id`))  ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `content_mentorship`
--
ALTER TABLE `content_mentorship`
  ADD PRIMARY KEY (`id_content`,`id_mentorship`),
  ADD KEY `content_mentorship_ibfk_2` (`id_mentorship`);

--
-- Indices de la tabla `entrepreneur`
--
ALTER TABLE `entrepreneur`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `manager`
--
ALTER TABLE `manager`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mentorship`
--
ALTER TABLE `mentorship`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mentorship_ibfk_1` (`id_entrepreneur`),
  ADD KEY `mentorship_ibfk_2` (`id_manager`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_entrepreneur` (`id_entrepreneur`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `content_mentorship`
--
ALTER TABLE `content_mentorship`
  ADD CONSTRAINT `content_mentorship_ibfk_1` FOREIGN KEY (`id_content`) REFERENCES `content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `content_mentorship_ibfk_2` FOREIGN KEY (`id_mentorship`) REFERENCES `mentorship` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mentorship`
--
ALTER TABLE `mentorship`
  ADD CONSTRAINT `mentorship_ibfk_1` FOREIGN KEY (`id_entrepreneur`) REFERENCES `entrepreneur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `mentorship_ibfk_2` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_entrepreneur`) REFERENCES `entrepreneur` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--------------------------------------------------------------------------------------------------------------------


--------------------------------- * Vistas * ---------------------------------------



--
-- Vista para consultar las mentorías y a quien pertenece
-- 
CREATE VIEW montorship_info AS
SELECT 
    mnt.title AS mentorship_title,
    mnt.description AS mentorship_description,
    cnt.name AS content_name,
    cnt.description AS content_description
FROM content_mentorship cm
JOIN mentorship mnt ON cm.id_mentorship = mnt.id
JOIN content cnt ON cm.id_content = cnt.id;


--
--Vista para consultar emprendedores que tengan una mentoría
--

CREATE VIEW entrepreneur_list AS
SELECT 
    ee.last_names AS entrepreneur_last_name,
    ee.names AS entrepreneur_name,
    ee.phone AS entrepreneur_phone,
    ee.email AS entrepreneur_email,
    CONCAT(mm.names, ' ', mm.last_names) AS manager_in_charge,
    ee.city AS entrepreneur_city,
    ee.nameStore AS entrepreneur_organization
FROM mentorship m
JOIN manager mm ON m.id_manager = mm.id
JOIN entrepreneur ee ON m.id_entrepreneur = ee.id;


--
--Vista para consultar emprendedores con sus tiendas y productos
--

CREATE VIEW product_info AS
SELECT p.id, CONCAT(e.last_names, ', ', e.names) AS entrepreneur_full_name, e.nameStore AS store_name, p.name, p.description, p.price
FROM product p
INNER JOIN entrepreneur e ON p.id_entrepreneur = e.id;


