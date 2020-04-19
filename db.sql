/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `shopping-cart`;
CREATE DATABASE IF NOT EXISTS `shopping-cart` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `shopping-cart`;

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` float(10,2) NOT NULL,
  `quantity` int(5) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `available` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`)
  )ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='all products';

/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `name`, `image`, `price`, `quantity`, `createdAt`, `available`) VALUES
	(1, 'Soda!', 'https://source.unsplash.com/300x300/?food', 15.50, 15, '2020-04-17 00:08:35', b'1'),
	(2, 'Yogurt', 'https://source.unsplash.com/300x300/?food', 25.00, 27, '2020-04-17 22:14:24', b'1'),
	(3, 'Milk', 'https://source.unsplash.com/300x300/?food', 10.50, 5, '2020-04-18 03:35:20', b'1'),
	(4, 'Cookie', 'https://source.unsplash.com/300x300/?food', 5.50, 3, '2020-04-18 03:35:59', b'1'),
	(5, 'Coffee', 'https://source.unsplash.com/300x300/?food', 23.00, 12, '2020-04-18 10:02:32', b'1'),
	(6, 'Candy', 'https://source.unsplash.com/300x300/?food', 13.50, 8, '2020-04-18 10:03:17', b'1'),
	(7, 'Coke', 'https://source.unsplash.com/300x300/?food', 7.50, 9, '2020-04-18 10:03:31', b'1'),
	(8, 'RedBull', 'https://source.unsplash.com/300x300/?food', 11.00, 19, '2020-04-18 10:07:48', b'1'),
	(9, 'Ice cream', 'https://source.unsplash.com/300x300/?food', 30.50, 10, '2020-04-18 10:13:22', b'0'),
	(10, 'Soup', 'https://source.unsplash.com/300x300/?food', 15.00, 2, '2020-04-18 10:31:00', b'1');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
 
 DROP TABLE IF EXISTS `order`;
CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `total` float(10,2) NOT NULL,
  `fee` int(2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `shippingAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `available` bit(1) NOT NULL DEFAULT b'1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='all orders';
 
 /*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (`id`, `description`, `total`, `fee`, `createdAt`, `shippingAt`, `available`) VALUES
	(1, 'Shopping cart', 100.00, 10, '2020-04-17 00:08:35', '2020-04-18 00:08:35', b'1');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
 
 DROP TABLE IF EXISTS `cart`;
CREATE TABLE IF NOT EXISTS `cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` INT(11) NOT NULL,
  `productId` INT(11) NOT NULL,
  `quantity` int(5) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_cart_product` (`productId`),
  CONSTRAINT `FK_cart_product` FOREIGN KEY (`productId`) REFERENCES `product` (`id`),
  KEY `FK_cart_order` (`orderId`),
  CONSTRAINT `FK_cart_order` FOREIGN KEY (`orderId`) REFERENCES `order` (`id`)
  )ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='all carts';
 
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` (`id`, `orderId`, `productId`, `quantity`, `createdAt`) VALUES
  (1, 1, 3, 2, '2020-04-17 00:08:35'),
  (2, 1, 4, 3, '2020-04-17 00:08:35'),
  (3, 1, 2, 1, '2020-04-17 00:08:35'),
  (4, 1, 6, 5, '2020-04-17 00:08:35'),
  (5, 1, 7, 3, '2020-04-17 00:08:35'),
  (6, 1, 9, 1, '2020-04-17 00:08:35');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;