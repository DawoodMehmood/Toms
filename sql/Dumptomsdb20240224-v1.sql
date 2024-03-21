-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tomsdb
-- ------------------------------------------------------
-- Server version	8.0.36
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--
DROP TABLE IF EXISTS `brand`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `brand` (
    `brand_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `logo_url` varchar(255) DEFAULT NULL,
    `website_url` varchar(255) DEFAULT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`brand_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `categories`
--
DROP TABLE IF EXISTS `categories`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `categories` (
    `category_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `image_url` varchar(255) DEFAULT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `description` text,
    `parent_id` int DEFAULT NULL,
    `sorting` int DEFAULT NULL,
    PRIMARY KEY (`category_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `color`
--
DROP TABLE IF EXISTS `color`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `color` (
    `color_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `hex_code` varchar(6) DEFAULT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`color_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer_wishlists`
--
DROP TABLE IF EXISTS `customer_wishlists`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `customer_wishlists` (
    `wishlist_id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int NOT NULL,
    `product_id` int NOT NULL,
    `date_added` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`wishlist_id`),
    UNIQUE KEY `customer_id` (`customer_id`, `product_id`),
    KEY `product_id` (`product_id`),
    CONSTRAINT `customer_wishlists_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)  ON DELETE CASCADE,
    CONSTRAINT `customer_wishlists_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customers`
--
DROP TABLE IF EXISTS `customers`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `customers` (
    `customer_id` int NOT NULL AUTO_INCREMENT,
    `customer_name` varchar(100) NOT NULL,
    `address` varchar(255) DEFAULT NULL,
    `contact_details` varchar(100) DEFAULT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(255) NOT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`customer_id`),
    UNIQUE KEY `email` (`email`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customers_measurement_profiles`
--
DROP TABLE IF EXISTS `customers_measurement_profiles`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `customers_measurement_profiles` (
    `profile_id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int NOT NULL,
    `profile_name` varchar(50) NOT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `Is_Default` tinyint (1) NOT NULL DEFAULT '0',
    `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`profile_id`),
    KEY `customer_id` (`customer_id`),
    CONSTRAINT `customers_measurement_profiles_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customers_measurement_profiles_values`
--
DROP TABLE IF EXISTS `customers_measurement_profiles_values`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `customers_measurement_profiles_values` (
    `values_id` int NOT NULL AUTO_INCREMENT,
    `profile_id` int NOT NULL,
    `attribute_id` int NOT NULL,
    `value` decimal(6, 2) NOT NULL,
    PRIMARY KEY (`values_id`),
    KEY `profile_id` (`profile_id`),
    KEY `attribute_id` (`attribute_id`),
    CONSTRAINT `customers_measurement_profiles_values_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `customers_measurement_profiles` (`profile_id`)  ON DELETE CASCADE,
    CONSTRAINT `customers_measurement_profiles_values_ibfk_2` FOREIGN KEY (`attribute_id`) REFERENCES `measurement_attributes` (`attribute_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customers_shipment_addresses`
--
DROP TABLE IF EXISTS `customers_shipment_addresses`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `customers_shipment_addresses` (
    `address_id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int DEFAULT NULL,
    `address_line1` varchar(255) NOT NULL,
    `address_line2` varchar(255) DEFAULT NULL,
    `city` varchar(100) NOT NULL,
    `state` varchar(100) NOT NULL,
    `postal_code` varchar(20) NOT NULL,
    `country` varchar(100) NOT NULL,
    PRIMARY KEY (`address_id`),
    KEY `customer_id` (`customer_id`),
    CONSTRAINT `customers_shipment_addresses_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inventory`
--
DROP TABLE IF EXISTS `inventory`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `inventory` (
    `inventory_id` int NOT NULL AUTO_INCREMENT,
    `product_id` int DEFAULT NULL,
    `size_id` int DEFAULT NULL,
    `color_id` int DEFAULT NULL,
    `quantity` int DEFAULT NULL,
    `min_stock_quantity` int DEFAULT NULL,
    `order_id` int DEFAULT NULL,
    PRIMARY KEY (`inventory_id`),
    KEY `product_id` (`product_id`),
    KEY `size_id` (`size_id`),
    KEY `color_id` (`color_id`),
    KEY `order_id` (`order_id`),
    CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`)  ON DELETE CASCADE,
    CONSTRAINT `inventory_ibfk_3` FOREIGN KEY (`color_id`) REFERENCES `color` (`color_id`)  ON DELETE CASCADE,
    CONSTRAINT `inventory_ibfk_4` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `measurement_attributes`
--
DROP TABLE IF EXISTS `measurement_attributes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `measurement_attributes` (
    `attribute_id` int NOT NULL AUTO_INCREMENT,
    `attribute_name` varchar(50) NOT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `description` text,
    `attribute_unit_scale` varchar(10) DEFAULT NULL,
    PRIMARY KEY (`attribute_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_details`
--
DROP TABLE IF EXISTS `order_details`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `order_details` (
    `id` int NOT NULL AUTO_INCREMENT,
    `order_id` int NOT NULL,
    `product_id` int NOT NULL,
    `quantity` int NOT NULL,
    `price` decimal(10, 2) DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `order_id` (`order_id`),
    KEY `product_id` (`product_id`),
    CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_item_customization_values`
--
DROP TABLE IF EXISTS `order_item_customization_values`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `order_item_customization_values` (
    `order_item_id` int NOT NULL,
    `customization_id` int NOT NULL,
    `attribute_id` int NOT NULL,
    `value` decimal(6, 2) NOT NULL,
    PRIMARY KEY (
      `order_item_id`,
      `customization_id`,
      `attribute_id`
    ),
    KEY `customization_id` (`customization_id`),
    KEY `attribute_id` (`attribute_id`),
    CONSTRAINT `order_item_customization_values_ibfk_1` FOREIGN KEY (`order_item_id`) REFERENCES `order_items` (`order_item_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_item_customization_values_ibfk_2` FOREIGN KEY (`customization_id`) REFERENCES `product_customizations` (`customization_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_item_customization_values_ibfk_3` FOREIGN KEY (`attribute_id`) REFERENCES `measurement_attributes` (`attribute_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_items`
--
DROP TABLE IF EXISTS `order_items`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `order_items` (
    `order_item_id` int NOT NULL AUTO_INCREMENT,
    `order_id` int NOT NULL,
    `product_id` int NOT NULL,
    `quantity` int NOT NULL,
    `price` decimal(10, 2) DEFAULT NULL,
    `customization_id` int DEFAULT NULL,
    PRIMARY KEY (`order_item_id`),
    KEY `order_id` (`order_id`),
    KEY `product_id` (`product_id`),
    KEY `customization_id` (`customization_id`),
    CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_items_ibfk_3` FOREIGN KEY (`customization_id`) REFERENCES `product_customizations` (`customization_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_statuses`
--
DROP TABLE IF EXISTS `order_statuses`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `order_statuses` (
    `order_status_id` int NOT NULL AUTO_INCREMENT,
    `order_status` varchar(50) NOT NULL,
    PRIMARY KEY (`order_status_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `order_used_raw_materials`
--
DROP TABLE IF EXISTS `order_used_raw_materials`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `order_used_raw_materials` (
    `product_id` int NOT NULL,
    `raw_material_id` int NOT NULL,
    `quantity_used` decimal(8, 2) DEFAULT NULL,
    `order_item_raw_material_usage` decimal(8, 2) DEFAULT NULL,
    PRIMARY KEY (`product_id`, `raw_material_id`),
    KEY `raw_material_id` (`raw_material_id`),
    CONSTRAINT `order_used_raw_materials_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `order_used_raw_materials_ibfk_2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `orders`
--
DROP TABLE IF EXISTS `orders`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `orders` (
    `order_id` int NOT NULL AUTO_INCREMENT,
    `customer_id` int NOT NULL,
    `order_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `total_amount` decimal(8, 2) NOT NULL,
    `order_status_id` int NOT NULL,
    PRIMARY KEY (`order_id`),
    KEY `customer_id` (`customer_id`),
    KEY `order_status_id` (`order_status_id`),
    CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)  ON DELETE CASCADE,
    CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`order_status_id`) REFERENCES `order_statuses` (`order_status_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_customizations`
--
DROP TABLE IF EXISTS `product_customizations`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `product_customizations` (
    `customization_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`customization_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_measurement_attributes`
--
DROP TABLE IF EXISTS `product_measurement_attributes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `product_measurement_attributes` (
    `product_id` int NOT NULL,
    `attribute_id` int NOT NULL,
    PRIMARY KEY (`product_id`, `attribute_id`),
    KEY `attribute_id` (`attribute_id`),
    CONSTRAINT `product_measurement_attributes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `product_measurement_attributes_ibfk_2` FOREIGN KEY (`attribute_id`) REFERENCES `measurement_attributes` (`attribute_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_reviews`
--
DROP TABLE IF EXISTS `product_reviews`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `product_reviews` (
    `review_id` int NOT NULL AUTO_INCREMENT,
    `product_id` int DEFAULT NULL,
    `customer_id` int DEFAULT NULL,
    `rating` int DEFAULT NULL,
    `review_text` text,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `review_date` datetime DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`review_id`),
    KEY `fk_reviews_products` (`product_id`),
    KEY `fk_reviews_customers` (`customer_id`),
    CONSTRAINT `fk_reviews_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)  ON DELETE CASCADE,
    CONSTRAINT `fk_reviews_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `product_reviews_chk_1` CHECK ((`rating` between 1 and 5))
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_used_raw_materials`
--
DROP TABLE IF EXISTS `product_used_raw_materials`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `product_used_raw_materials` (
    `product_id` int NOT NULL,
    `raw_material_id` int NOT NULL,
    `quantity_used` decimal(8, 2) DEFAULT NULL,
    PRIMARY KEY (`product_id`, `raw_material_id`),
    KEY `raw_material_id` (`raw_material_id`),
    CONSTRAINT `product_used_raw_materials_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`)  ON DELETE CASCADE,
    CONSTRAINT `product_used_raw_materials_ibfk_2` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`)  ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `products`
--
DROP TABLE IF EXISTS `products`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `products` (
    `product_id` int NOT NULL AUTO_INCREMENT,
    `product_name` varchar(255) NOT NULL,
    `description` text,
    `price` decimal(10, 2) DEFAULT NULL,
    `category_id` int DEFAULT NULL,
    `is_new_arrival` tinyint (1) DEFAULT '0',
    `is_on_sale` tinyint (1) DEFAULT '0',
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `discount_price` decimal(10, 2) DEFAULT NULL,
    `discount_percentage` decimal(10, 2) DEFAULT NULL,
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `image_urls` json NOT NULL,
    `is_tailorable` tinyint (1) NOT NULL,
    `type` enum ('Ready-made', 'Custom-made') NOT NULL,
    `product_details` text DEFAULT NULL,
    `size_and_fit` text DEFAULT NULL,
    `color_tile_image` text DEFAULT NULL,
    `brand_id` int DEFAULT NULL,
    `size_id` int DEFAULT NULL,
    `color_id` int DEFAULT NULL,
    PRIMARY KEY (`product_id`),
    KEY `category_id` (`category_id`),
    KEY `FK_Brand_Product` (`brand_id`),
    KEY `FK_Size_Product` (`size_id`),
    KEY `FK_Color_Product` (`color_id`),
    CONSTRAINT `FK_Brand_Product` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`)  ON DELETE CASCADE,
    CONSTRAINT `FK_Color_Product` FOREIGN KEY (`color_id`) REFERENCES `color` (`color_id`)  ON DELETE CASCADE,
    CONSTRAINT `FK_Size_Product` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`size_id`)  ON DELETE CASCADE,
    CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `raw_material_stock_history`
--
DROP TABLE IF EXISTS `raw_material_stock_history`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `raw_material_stock_history` (
    `history_id` int NOT NULL AUTO_INCREMENT,
    `raw_material_id` int NOT NULL,
    `order_id` int DEFAULT NULL,
    `quantity_change` decimal(10, 2) DEFAULT NULL,
    `change_date` datetime DEFAULT CURRENT_TIMESTAMP,
    `reason` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`history_id`),
    KEY `raw_material_id` (`raw_material_id`),
    KEY `order_id` (`order_id`),
    CONSTRAINT `raw_material_stock_history_ibfk_1` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_materials` (`raw_material_id`)  ON DELETE CASCADE,
    CONSTRAINT `raw_material_stock_history_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `raw_materials`
--
DROP TABLE IF EXISTS `raw_materials`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `raw_materials` (
    `raw_material_id` int NOT NULL AUTO_INCREMENT,
    `raw_material_name` varchar(255) DEFAULT NULL,
    `description` text,
    `Scale_Value` decimal(10, 2) DEFAULT NULL,
    `stock_quantity` decimal(10, 2) DEFAULT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    PRIMARY KEY (`raw_material_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sizes`
--
DROP TABLE IF EXISTS `sizes`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `sizes` (
    `size_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `is_active` tinyint (1) NOT NULL DEFAULT '0',
    `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`size_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tailor_assignments`
--
DROP TABLE IF EXISTS `tailor_assignments`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `tailor_assignments` (
    `assignment_id` int NOT NULL AUTO_INCREMENT,
    `tailoring_order_id` int NOT NULL,
    `tailor_id` int NOT NULL,
    `assignment_date` date DEFAULT NULL,
    PRIMARY KEY (`assignment_id`),
    KEY `tailoring_order_id` (`tailoring_order_id`),
    KEY `tailor_id` (`tailor_id`),
    CONSTRAINT `tailor_assignments_ibfk_1` FOREIGN KEY (`tailoring_order_id`) REFERENCES `tailoring_orders` (`tailoring_order_id`) ON DELETE CASCADE,
    CONSTRAINT `tailor_assignments_ibfk_2` FOREIGN KEY (`tailor_id`) REFERENCES `tailors` (`tailor_id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tailoring_orders`
--
DROP TABLE IF EXISTS `tailoring_orders`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `tailoring_orders` (
    `tailoring_order_id` int NOT NULL AUTO_INCREMENT,
    `order_id` int NOT NULL,
    `order_status` varchar(50) NOT NULL,
    `target_completion_date` date DEFAULT NULL,
    PRIMARY KEY (`tailoring_order_id`),
    KEY `order_id` (`order_id`),
    CONSTRAINT `tailoring_orders_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tailors`
--
DROP TABLE IF EXISTS `tailors`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `tailors` (
    `tailor_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `mobile` varchar(20) NOT NULL,
    `availability_status` tinyint (1) NOT NULL DEFAULT '0',
    `skillsets` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`tailor_id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-24 17:15:31