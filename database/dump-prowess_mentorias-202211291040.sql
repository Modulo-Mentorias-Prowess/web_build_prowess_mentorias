-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: prowess_mentorias
-- ------------------------------------------------------
-- Server version	5.5.62

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `content`
--

DROP TABLE IF EXISTS `content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content` (
  `id` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content`
--

LOCK TABLES `content` WRITE;
/*!40000 ALTER TABLE `content` DISABLE KEYS */;
INSERT INTO `content` VALUES ('24038372-33db-4170-b2c1-de1bbff3db08','Plan de negocios','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),('a6949e0b-c31c-4a7c-af83-5459563a5b62','Establecimiento y Desarrollo','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),('c6d59f09-b8cb-4a0d-8d70-5d6dafcfe362','Marca','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),('d2f2db1c-9ae6-4494-93d2-c91bb09a8ada','Marketing Digital','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
/*!40000 ALTER TABLE `content` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `content_mentorship`
--

DROP TABLE IF EXISTS `content_mentorship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `content_mentorship` (
  `id_content` varchar(64) NOT NULL DEFAULT '',
  `id_mentorship` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id_content`,`id_mentorship`),
  KEY `content_mentorship_ibfk_2` (`id_mentorship`),
  CONSTRAINT `content_mentorship_ibfk_1` FOREIGN KEY (`id_content`) REFERENCES `content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `content_mentorship_ibfk_2` FOREIGN KEY (`id_mentorship`) REFERENCES `mentorship` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `content_mentorship`
--

LOCK TABLES `content_mentorship` WRITE;
/*!40000 ALTER TABLE `content_mentorship` DISABLE KEYS */;
INSERT INTO `content_mentorship` VALUES ('a6949e0b-c31c-4a7c-af83-5459563a5b62','df5bdab2-bdbe-4f3f-8d56-d3c1aa41abb2'),('a6949e0b-c31c-4a7c-af83-5459563a5b62','f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad'),('d2f2db1c-9ae6-4494-93d2-c91bb09a8ada','f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad');
/*!40000 ALTER TABLE `content_mentorship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `content_mentorship_display`
--

DROP TABLE IF EXISTS `content_mentorship_display`;
/*!50001 DROP VIEW IF EXISTS `content_mentorship_display`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `content_mentorship_display` (
  `id_content` tinyint NOT NULL,
  `id_mentorship` tinyint NOT NULL,
  `content_name` tinyint NOT NULL,
  `content_description` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `entrepreneur`
--

DROP TABLE IF EXISTS `entrepreneur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entrepreneur`
--

LOCK TABLES `entrepreneur` WRITE;
/*!40000 ALTER TABLE `entrepreneur` DISABLE KEYS */;
INSERT INTO `entrepreneur` VALUES ('3ba785ce-3cf5-4d2c-a865-af93b36f82b0','Maria Petra','Torres Rodriguez','mptorres@espe.edu.ec','Av. Idk','0998575584','Maxone','Es un emprendimiento encargado de vender dispositivos electronicos','https://www.google.com/maps/place/Universidad+de+las+Fuerzas+Armadas+ESPE/@-0.3148217,-78.4425119,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5bd12538eb13b:0x907c61f1abbe45ab!8m2!3d-0.3148217!4d-78.4425119','Ruminahui','Sangolqui','Pichincha','idk','idk','idk','idk'),('ad573f66-af26-472c-b3a4-0aa75580f4aa','Andrés Alejandro','Coronel Rodrigues','andrescoronel1209@gmail.com','Jorge Piedra Oe4-76 y Av. La prensa Os5-16','093703370','Lorem Ipsum Seller','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','https://www.google.com.ec/maps/place/Universidad+de+las+Fuerzas+Armadas+ESPE/@-0.3148163,-78.444706,17z/data=!3m1!4b1!4m5!3m4!1s0x91d5bd12538eb13b:0x907c61f1abbe45ab!8m2!3d-0.3148217!4d-78.4425119?hl=es','La concepción','Quito','Pichincha','AACR12','praxisEC','AACR12','AACR12');
/*!40000 ALTER TABLE `entrepreneur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manager`
--

DROP TABLE IF EXISTS `manager`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `manager` (
  `id` varchar(64) NOT NULL,
  `names` varchar(64) NOT NULL,
  `last_names` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `address` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manager`
--

LOCK TABLES `manager` WRITE;
/*!40000 ALTER TABLE `manager` DISABLE KEYS */;
INSERT INTO `manager` VALUES ('afc36559-e5af-4c87-ac1f-1064f5c0fcf3','Andrés Alejandro','Coronel Rodrigues','aacoronel@espe.edu.ec','Jorge Piedra y Av. La Prensa');
/*!40000 ALTER TABLE `manager` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mentorship`
--

DROP TABLE IF EXISTS `mentorship`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mentorship` (
  `id` varchar(64) NOT NULL,
  `id_manager` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `title` varchar(128) NOT NULL,
  `description` varchar(256) NOT NULL,
  `date_mentorship` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mentorship_ibfk_1` (`id_entrepreneur`),
  KEY `mentorship_ibfk_2` (`id_manager`),
  CONSTRAINT `mentorship_ibfk_1` FOREIGN KEY (`id_entrepreneur`) REFERENCES `entrepreneur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mentorship_ibfk_2` FOREIGN KEY (`id_manager`) REFERENCES `manager` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mentorship`
--

LOCK TABLES `mentorship` WRITE;
/*!40000 ALTER TABLE `mentorship` DISABLE KEYS */;
INSERT INTO `mentorship` VALUES ('df5bdab2-bdbe-4f3f-8d56-d3c1aa41abb2','afc36559-e5af-4c87-ac1f-1064f5c0fcf3','3ba785ce-3cf5-4d2c-a865-af93b36f82b0','Test','test','2022-11-14 13:54:00'),('f1b0d5b5-7e8c-4d97-98ee-0154fe3540ad','afc36559-e5af-4c87-ac1f-1064f5c0fcf3','3ba785ce-3cf5-4d2c-a865-af93b36f82b0','Brand','This is a description','2022-11-30 07:00:00');
/*!40000 ALTER TABLE `mentorship` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `mentorship_display`
--

DROP TABLE IF EXISTS `mentorship_display`;
/*!50001 DROP VIEW IF EXISTS `mentorship_display`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `mentorship_display` (
  `id` tinyint NOT NULL,
  `id_manager` tinyint NOT NULL,
  `id_entrepreneur` tinyint NOT NULL,
  `title` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `date_mentorship` tinyint NOT NULL,
  `manager_names` tinyint NOT NULL,
  `manager_last_names` tinyint NOT NULL,
  `manager_email` tinyint NOT NULL,
  `entrepreneur_names` tinyint NOT NULL,
  `entrepreneur_last_names` tinyint NOT NULL,
  `nameStore` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` varchar(64) NOT NULL,
  `id_entrepreneur` varchar(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `price` decimal(16,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entrepreneur` (`id_entrepreneur`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_entrepreneur`) REFERENCES `entrepreneur` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('5bc4ed09-7afa-417c-93dc-9449545158a5','3ba785ce-3cf5-4d2c-a865-af93b36f82b0','Disco Duro Externo 64GB','Es un disco durable y portable que permite  bla bla bla',55.90),('d02423da-74e0-4391-8c2a-6b375507fbf5','ad573f66-af26-472c-b3a4-0aa75580f4aa','Lorem Ipsum 1','Es un lorem ipsum',30.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `product_display`
--

DROP TABLE IF EXISTS `product_display`;
/*!50001 DROP VIEW IF EXISTS `product_display`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `product_display` (
  `id` tinyint NOT NULL,
  `id_entrepreneur` tinyint NOT NULL,
  `name` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `price` tinyint NOT NULL,
  `full_name` tinyint NOT NULL,
  `nameStore` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `userName` varchar(128) NOT NULL,
  `pass` varchar(128) NOT NULL,
  `full_name` varchar(128) NOT NULL,
  `role_user` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0f0ef755-4c3a-43d9-8484-eaa10b08e55b','test','$2b$10$WGV7WrMnRZ5bswUS.gh24elVnWYWA6CVkik2gy/bgBpnkzWJSZO8O','Andres Coronel','user'),('2a620528-39a4-4c50-81f5-85837de73517','admin3','$2b$10$FKl6ZClj2Q8xqym.DC.OHeMaI0gUZJvnnfudKz3yC51dqPvFnP7aC','Andres Coronel','admin'),('4ba9864d-75fd-4ee9-a8d2-c4b3bca6bd31','admin5','$2b$10$mKtWGro/W/qZaYMRDAvfteJc.CRGKV6eqPfA4PIwAurLrwIi00Yb2','Andres Coronel','admin'),('7eb11ff1-9d06-4abd-9fb3-728857c71005','admin2','$2b$10$HcKXspuxWUguRG8WnPXw5uTs2wpb5w7OPrqUxtRAy7/oJ7YYn.3GO','Andres Coronel','admin'),('b17be3bc-a1bf-4c2a-91af-62cc635a180c','admin4','$2b$10$uygJSX1xd0BPG6pUj5EVB.q9tmvujkxEj55T4IBPfjbe2gIXj4tya','Andres Coronel','admin'),('de12e0d7-e18e-4027-a403-89ad3353cbb5','admin','$2b$10$aUG3n2eeg.vrGjKuBpEo8e5LoOSY/P4jnmWv8Be4diRLpzR.5DmQi','Andrés Alejandro Coronel Rodrigues','admin'),('f97f48fc-7a9e-4ef9-9ccb-cc78ef00fe50','test12','$2b$10$CCXceJmIxl1jnNWm30MBh.jPbLeak9a5e8M3YCDkBALRou0z.Ro2.','Andres Coronel','admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'prowess_mentorias'
--

--
-- Final view structure for view `content_mentorship_display`
--

/*!50001 DROP TABLE IF EXISTS `content_mentorship_display`*/;
/*!50001 DROP VIEW IF EXISTS `content_mentorship_display`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `content_mentorship_display` AS select `cm`.`id_content` AS `id_content`,`cm`.`id_mentorship` AS `id_mentorship`,`c`.`name` AS `content_name`,`c`.`description` AS `content_description` from (`content_mentorship` `cm` join `content` `c` on((`c`.`id` = `cm`.`id_content`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `mentorship_display`
--

/*!50001 DROP TABLE IF EXISTS `mentorship_display`*/;
/*!50001 DROP VIEW IF EXISTS `mentorship_display`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `mentorship_display` AS select `m`.`id` AS `id`,`m`.`id_manager` AS `id_manager`,`m`.`id_entrepreneur` AS `id_entrepreneur`,`m`.`title` AS `title`,`m`.`description` AS `description`,`m`.`date_mentorship` AS `date_mentorship`,`m2`.`names` AS `manager_names`,`m2`.`last_names` AS `manager_last_names`,`m2`.`email` AS `manager_email`,`e`.`names` AS `entrepreneur_names`,`e`.`last_names` AS `entrepreneur_last_names`,`e`.`nameStore` AS `nameStore` from ((`mentorship` `m` join `entrepreneur` `e` on((`e`.`id` = `m`.`id_entrepreneur`))) join `manager` `m2` on((`m2`.`id` = `m`.`id_manager`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `product_display`
--

/*!50001 DROP TABLE IF EXISTS `product_display`*/;
/*!50001 DROP VIEW IF EXISTS `product_display`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `product_display` AS select `product`.`id` AS `id`,`product`.`id_entrepreneur` AS `id_entrepreneur`,`product`.`name` AS `name`,`product`.`description` AS `description`,`product`.`price` AS `price`,concat(`e`.`names`,concat(' ',`e`.`last_names`)) AS `full_name`,`e`.`nameStore` AS `nameStore` from (`product` join `entrepreneur` `e` on((`product`.`id_entrepreneur` = `e`.`id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-29 10:40:35
