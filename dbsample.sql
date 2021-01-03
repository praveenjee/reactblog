-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2020 at 12:46 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbsample`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` enum('0','1') DEFAULT '0',
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', 'web-design', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(2, 'JavaScript', 'javascript', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(3, 'HTML', 'html', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(4, 'Education', 'education', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(5, 'Freebies', 'freebies', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(6, 'Tutorials', 'tutorials', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(7, 'News', 'news', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(8, 'Coronavirus', 'coronavirus', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(9, 'Opinion', 'opinion', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(10, 'Business', 'business', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(11, 'Sports', 'sports', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(12, 'Entertainment', 'entertainment', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(13, 'CSS', 'css', '1', '2020-04-22 10:15:35', '2020-04-22 10:15:35');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country_code` varchar(255) NOT NULL,
  `country_name` varchar(255) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `country_code`, `country_name`, `code`, `created_at`, `updated_at`) VALUES
(1, 'ABW', 'Aruba', 'AW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(2, 'AFG', 'Afghanistan', 'AF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(3, 'AGO', 'Angola', 'AO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(4, 'AIA', 'Anguilla', 'AI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(5, 'ALA', 'Åland', 'AX', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(6, 'ALB', 'Albania', 'AL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(7, 'AND', 'Andorra', 'AD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(8, 'ARE', 'United Arab Emirates', 'AE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(9, 'ARG', 'Argentina', 'AR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(10, 'ARM', 'Armenia', 'AM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(11, 'ASM', 'American Samoa', 'AS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(12, 'ATA', 'Antarctica', 'AQ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(13, 'ATF', 'French Southern Territories', 'TF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(14, 'ATG', 'Antigua and Barbuda', 'AG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(15, 'AUS', 'Australia', 'AU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(16, 'AUT', 'Austria', 'AT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(17, 'AZE', 'Azerbaijan', 'AZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(18, 'BDI', 'Burundi', 'BI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(19, 'BEL', 'Belgium', 'BE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(20, 'BEN', 'Benin', 'BJ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(21, 'BES', 'Bonaire', 'BQ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(22, 'BFA', 'Burkina Faso', 'BF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(23, 'BGD', 'Bangladesh', 'BD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(24, 'BGR', 'Bulgaria', 'BG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(25, 'BHR', 'Bahrain', 'BH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(26, 'BHS', 'Bahamas', 'BS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(27, 'BIH', 'Bosnia and Herzegovina', 'BA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(28, 'BLM', 'Saint Barthélemy', 'BL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(29, 'BLR', 'Belarus', 'BY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(30, 'BLZ', 'Belize', 'BZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(31, 'BMU', 'Bermuda', 'BM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(32, 'BOL', 'Bolivia', 'BO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(33, 'BRA', 'Brazil', 'BR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(34, 'BRB', 'Barbados', 'BB', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(35, 'BRN', 'Brunei', 'BN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(36, 'BTN', 'Bhutan', 'BT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(37, 'BVT', 'Bouvet Island', 'BV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(38, 'BWA', 'Botswana', 'BW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(39, 'CAF', 'Central African Republic', 'CF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(40, 'CAN', 'Canada', 'CA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(41, 'CCK', 'Cocos [Keeling] Islands', 'CC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(42, 'CHE', 'Switzerland', 'CH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(43, 'CHL', 'Chile', 'CL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(44, 'CHN', 'China', 'CN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(45, 'CIV', 'Ivory Coast', 'CI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(46, 'CMR', 'Cameroon', 'CM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(47, 'COD', 'Democratic Republic of the Congo', 'CD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(48, 'COG', 'Republic of the Congo', 'CG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(49, 'COK', 'Cook Islands', 'CK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(50, 'COL', 'Colombia', 'CO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(51, 'COM', 'Comoros', 'KM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(52, 'CPV', 'Cape Verde', 'CV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(53, 'CRI', 'Costa Rica', 'CR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(54, 'CUB', 'Cuba', 'CU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(55, 'CUW', 'Curacao', 'CW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(56, 'CXR', 'Christmas Island', 'CX', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(57, 'CYM', 'Cayman Islands', 'KY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(58, 'CYP', 'Cyprus', 'CY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(59, 'CZE', 'Czech Republic', 'CZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(60, 'DEU', 'Germany', 'DE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(61, 'DJI', 'Djibouti', 'DJ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(62, 'DMA', 'Dominica', 'DM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(63, 'DNK', 'Denmark', 'DK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(64, 'DOM', 'Dominican Republic', 'DO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(65, 'DZA', 'Algeria', 'DZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(66, 'ECU', 'Ecuador', 'EC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(67, 'EGY', 'Egypt', 'EG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(68, 'ERI', 'Eritrea', 'ER', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(69, 'ESH', 'Western Sahara', 'EH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(70, 'ESP', 'Spain', 'ES', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(71, 'EST', 'Estonia', 'EE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(72, 'ETH', 'Ethiopia', 'ET', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(73, 'FIN', 'Finland', 'FI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(74, 'FJI', 'Fiji', 'FJ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(75, 'FLK', 'Falkland Islands', 'FK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(76, 'FRA', 'France', 'FR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(77, 'FRO', 'Faroe Islands', 'FO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(78, 'FSM', 'Micronesia', 'FM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(79, 'GAB', 'Gabon', 'GA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(80, 'GBR', 'United Kingdom', 'GB', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(81, 'GEO', 'Georgia', 'GE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(82, 'GGY', 'Guernsey', 'GG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(83, 'GHA', 'Ghana', 'GH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(84, 'GIB', 'Gibraltar', 'GI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(85, 'GIN', 'Guinea', 'GN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(86, 'GLP', 'Guadeloupe', 'GP', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(87, 'GMB', 'Gambia', 'GM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(88, 'GNB', 'Guinea-Bissau', 'GW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(89, 'GNQ', 'Equatorial Guinea', 'GQ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(90, 'GRC', 'Greece', 'GR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(91, 'GRD', 'Grenada', 'GD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(92, 'GRL', 'Greenland', 'GL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(93, 'GTM', 'Guatemala', 'GT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(94, 'GUF', 'French Guiana', 'GF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(95, 'GUM', 'Guam', 'GU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(96, 'GUY', 'Guyana', 'GY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(97, 'HKG', 'Hong Kong', 'HK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(98, 'HMD', 'Heard Island and McDonald Islands', 'HM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(99, 'HND', 'Honduras', 'HN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(100, 'HRV', 'Croatia', 'HR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(101, 'HTI', 'Haiti', 'HT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(102, 'HUN', 'Hungary', 'HU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(103, 'IDN', 'Indonesia', 'ID', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(104, 'IMN', 'Isle of Man', 'IM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(105, 'IND', 'India', 'IN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(106, 'IOT', 'British Indian Ocean Territory', 'IO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(107, 'IRL', 'Ireland', 'IE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(108, 'IRN', 'Iran', 'IR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(109, 'IRQ', 'Iraq', 'IQ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(110, 'ISL', 'Iceland', 'IS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(111, 'ISR', 'Israel', 'IL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(112, 'ITA', 'Italy', 'IT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(113, 'JAM', 'Jamaica', 'JM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(114, 'JEY', 'Jersey', 'JE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(115, 'JOR', 'Jordan', 'JO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(116, 'JPN', 'Japan', 'JP', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(117, 'KAZ', 'Kazakhstan', 'KZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(118, 'KEN', 'Kenya', 'KE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(119, 'KGZ', 'Kyrgyzstan', 'KG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(120, 'KHM', 'Cambodia', 'KH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(121, 'KIR', 'Kiribati', 'KI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(122, 'KNA', 'Saint Kitts and Nevis', 'KN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(123, 'KOR', 'South Korea', 'KR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(124, 'KWT', 'Kuwait', 'KW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(125, 'LAO', 'Laos', 'LA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(126, 'LBN', 'Lebanon', 'LB', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(127, 'LBR', 'Liberia', 'LR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(128, 'LBY', 'Libya', 'LY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(129, 'LCA', 'Saint Lucia', 'LC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(130, 'LIE', 'Liechtenstein', 'LI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(131, 'LKA', 'Sri Lanka', 'LK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(132, 'LSO', 'Lesotho', 'LS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(133, 'LTU', 'Lithuania', 'LT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(134, 'LUX', 'Luxembourg', 'LU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(135, 'LVA', 'Latvia', 'LV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(136, 'MAC', 'Macao', 'MO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(137, 'MAF', 'Saint Martin', 'MF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(138, 'MAR', 'Morocco', 'MA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(139, 'MCO', 'Monaco', 'MC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(140, 'MDA', 'Moldova', 'MD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(141, 'MDG', 'Madagascar', 'MG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(142, 'MDV', 'Maldives', 'MV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(143, 'MEX', 'Mexico', 'MX', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(144, 'MHL', 'Marshall Islands', 'MH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(145, 'MKD', 'Macedonia', 'MK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(146, 'MLI', 'Mali', 'ML', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(147, 'MLT', 'Malta', 'MT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(148, 'MMR', 'Myanmar [Burma]', 'MM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(149, 'MNE', 'Montenegro', 'ME', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(150, 'MNG', 'Mongolia', 'MN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(151, 'MNP', 'Northern Mariana Islands', 'MP', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(152, 'MOZ', 'Mozambique', 'MZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(153, 'MRT', 'Mauritania', 'MR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(154, 'MSR', 'Montserrat', 'MS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(155, 'MTQ', 'Martinique', 'MQ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(156, 'MUS', 'Mauritius', 'MU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(157, 'MWI', 'Malawi', 'MW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(158, 'MYS', 'Malaysia', 'MY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(159, 'MYT', 'Mayotte', 'YT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(160, 'NAM', 'Namibia', 'NA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(161, 'NCL', 'New Caledonia', 'NC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(162, 'NER', 'Niger', 'NE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(163, 'NFK', 'Norfolk Island', 'NF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(164, 'NGA', 'Nigeria', 'NG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(165, 'NIC', 'Nicaragua', 'NI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(166, 'NIU', 'Niue', 'NU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(167, 'NLD', 'Netherlands', 'NL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(168, 'NOR', 'Norway', 'NO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(169, 'NPL', 'Nepal', 'NP', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(170, 'NRU', 'Nauru', 'NR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(171, 'NZL', 'New Zealand', 'NZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(172, 'OMN', 'Oman', 'OM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(173, 'PAK', 'Pakistan', 'PK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(174, 'PAN', 'Panama', 'PA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(175, 'PCN', 'Pitcairn Islands', 'PN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(176, 'PER', 'Peru', 'PE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(177, 'PHL', 'Philippines', 'PH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(178, 'PLW', 'Palau', 'PW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(179, 'PNG', 'Papua New Guinea', 'PG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(180, 'POL', 'Poland', 'PL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(181, 'PRI', 'Puerto Rico', 'PR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(182, 'PRK', 'North Korea', 'KP', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(183, 'PRT', 'Portugal', 'PT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(184, 'PRY', 'Paraguay', 'PY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(185, 'PSE', 'Palestine', 'PS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(186, 'PYF', 'French Polynesia', 'PF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(187, 'QAT', 'Qatar', 'QA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(188, 'REU', 'Réunion', 'RE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(189, 'ROU', 'Romania', 'RO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(190, 'RUS', 'Russia', 'RU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(191, 'RWA', 'Rwanda', 'RW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(192, 'SAU', 'Saudi Arabia', 'SA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(193, 'SDN', 'Sudan', 'SD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(194, 'SEN', 'Senegal', 'SN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(195, 'SGP', 'Singapore', 'SG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(196, 'SGS', 'South Georgia and the South Sandwich Islands', 'GS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(197, 'SHN', 'Saint Helena', 'SH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(198, 'SJM', 'Svalbard and Jan Mayen', 'SJ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(199, 'SLB', 'Solomon Islands', 'SB', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(200, 'SLE', 'Sierra Leone', 'SL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(201, 'SLV', 'El Salvador', 'SV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(202, 'SMR', 'San Marino', 'SM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(203, 'SOM', 'Somalia', 'SO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(204, 'SPM', 'Saint Pierre and Miquelon', 'PM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(205, 'SRB', 'Serbia', 'RS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(206, 'SSD', 'South Sudan', 'SS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(207, 'STP', 'São Tomé and Príncipe', 'ST', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(208, 'SUR', 'Suriname', 'SR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(209, 'SVK', 'Slovakia', 'SK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(210, 'SVN', 'Slovenia', 'SI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(211, 'SWE', 'Sweden', 'SE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(212, 'SWZ', 'Swaziland', 'SZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(213, 'SXM', 'Sint Maarten', 'SX', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(214, 'SYC', 'Seychelles', 'SC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(215, 'SYR', 'Syria', 'SY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(216, 'TCA', 'Turks and Caicos Islands', 'TC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(217, 'TCD', 'Chad', 'TD', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(218, 'TGO', 'Togo', 'TG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(219, 'THA', 'Thailand', 'TH', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(220, 'TJK', 'Tajikistan', 'TJ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(221, 'TKL', 'Tokelau', 'TK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(222, 'TKM', 'Turkmenistan', 'TM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(223, 'TLS', 'East Timor', 'TL', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(224, 'TON', 'Tonga', 'TO', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(225, 'TTO', 'Trinidad and Tobago', 'TT', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(226, 'TUN', 'Tunisia', 'TN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(227, 'TUR', 'Turkey', 'TR', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(228, 'TUV', 'Tuvalu', 'TV', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(229, 'TWN', 'Taiwan', 'TW', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(230, 'TZA', 'Tanzania', 'TZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(231, 'UGA', 'Uganda', 'UG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(232, 'UKR', 'Ukraine', 'UA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(233, 'UMI', 'U.S. Minor Outlying Islands', 'UM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(234, 'URY', 'Uruguay', 'UY', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(235, 'USA', 'United States', 'US', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(236, 'UZB', 'Uzbekistan', 'UZ', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(237, 'VAT', 'Vatican City', 'VA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(238, 'VCT', 'Saint Vincent and the Grenadines', 'VC', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(239, 'VEN', 'Venezuela', 'VE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(240, 'VGB', 'British Virgin Islands', 'VG', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(241, 'VIR', 'U.S. Virgin Islands', 'VI', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(242, 'VNM', 'Vietnam', 'VN', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(243, 'VUT', 'Vanuatu', 'VU', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(244, 'WLF', 'Wallis and Futuna', 'WF', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(245, 'WSM', 'Samoa', 'WS', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(246, 'XKX', 'Kosovo', 'XK', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(247, 'YEM', 'Yemen', 'YE', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(248, 'ZAF', 'South Africa', 'ZA', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(249, 'ZMB', 'Zambia', 'ZM', '2020-04-22 10:15:35', '2020-04-22 10:15:35'),
(250, 'ZWE', 'Zimbabwe', 'ZW', '2020-04-22 10:15:35', '2020-04-22 10:15:35');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `short_description` text NOT NULL,
  `description` text NOT NULL,
  `status` enum('0','1') DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  `profilename` varchar(100) DEFAULT NULL,
  `imagepath` varchar(100) DEFAULT NULL,
  `meta_title` varchar(100) DEFAULT NULL,
  `meta_keywords` varchar(255) DEFAULT NULL,
  `meta_description` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `category`, `short_description`, `description`, `status`, `user_id`, `profilename`, `imagepath`, `meta_title`, `meta_keywords`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 'What is Lorem Ipsum?', 'what-is-lorem-ipsum', 'web-design', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. UUUU</p>', '1', 1, 'Admin', 'featureimage-1590146198628.png', 'What is Lorem Ipsum?', 'What is Lorem Ipsum?', 'What is Lorem Ipsum?', '2020-05-09 19:58:21', '2020-05-23 13:32:26'),
(2, 'Where does it come from?', 'what-does-it-come-from', 'css', '<p><strong>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</strong> Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. <em>This book is a treatise on the theory of ethics, very popular during the Renaissance.</em></p>', '<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. <span style=\"color: #843fa1;\">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</span> Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. <strong>The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</strong></p>', '1', 1, 'Admin', 'featureimage-1590239327475.png', 'Contrary to popular belief, Lorem Ipsum is not simply random text', 'Contrary to popular belief, Lorem Ipsum is not simply random text', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 111111', '2020-05-09 19:58:21', '2020-05-23 00:00:00'),
(3, 'Why do we use it?', 'why-do-we-use-it', 'html', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. ', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '1', 1, 'Admin', 'featureimage-1589948625752.png', 'Why do we use it', 'Why do we use it', 'Why do we use it', '2020-05-09 19:58:21', '2020-05-23 13:32:36'),
(4, 'Where can I get some?', 'where-can-i-get-some', 'javascript', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', '1', 1, 'Admin', 'featureimage-1590146259087.jpg', 'Where can I get some', 'Where can I get some', 'Where can I get some', '2020-05-09 19:58:21', '2020-05-23 13:32:41'),
(5, 'The standard Lorem Ipsum passage, used since the 1500s', 'the-standard-lorem-ipsum-passage-used-since-the-1500s', 'javascript', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', '\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\r\n\r\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\r\n\r\n\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"', '1', 1, 'Admin', 'featureimage-1590145513284.jpg', 'The standard Lorem Ipsum passage, used since the 1500s', 'The standard Lorem Ipsum passage, used since the 1500s', 'The standard Lorem Ipsum passage, used since the 1500s', '2020-05-09 19:58:21', '2020-05-23 13:32:48'),
(6, '1914 translation by H. Rackham', '1914-translation-by-H-Rackham', 'html', '\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"', '\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n\r\n\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"\r\n\r\n\"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?\"', '1', 1, 'Admin', 'featureimage-1589949584384.png', '1914 translation by H. Rackham', '1914 translation by H. Rackham', '1914 translation by H. Rackham', '2020-05-09 19:58:21', '2020-05-23 13:32:54'),
(7, 'De Finibus Bonorum et Malorum', 'de-finibus-bonorum-et-malorum', 'tutorials', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\r\n\r\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\r\n\r\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?', '1', 1, 'Admin', 'featureimage-1589949729799.jpg', 'De Finibus Bonorum et Malorum', 'De Finibus Bonorum et Malorum', 'De Finibus Bonorum et Malorum', '2020-05-09 19:58:21', '2020-05-23 13:32:59'),
(18, 'A quick brawn fox jumps over the lazy dog', 'a-quick-brawn-fox-jumps-over-the-lazy-dog', 'javascript', '<p>A quick brawn fox jumps over the lazy dog</p>', '<p>A quick brawn fox jumps over the lazy dog 121</p>', '1', 1, 'Admin', 'featureimage-1590146051059.jpg', 'A quick brawn fox jumps over the lazy dog', 'A quick brawn fox jumps over the lazy dog', 'A quick brawn fox jumps over the lazy dog', '2020-05-15 00:00:00', '2020-05-23 13:33:05'),
(38, 'File Upload With Multer in Node.js and Express', 'file-upload', 'javascript', '<p><strong>File Upload With Multer in Node.js and Express</strong></p>\n<p>As I said above, Multer is Express middleware. Middleware is a piece of software that connects different applications or software components. In Express, middleware processes and transforms incoming requests to the server. In our case, Multer acts as a helper when uploading files.<br />Project Setup</p>\n<p>We will be using the Node Express framework for this project. Of course, you\'ll need to have Node installed.</p>', '<p><strong>File Upload With Multer in Node.js and Express</strong></p>\n<p>As I said above, Multer is Express middleware. Middleware is a piece of software that connects different applications or software components. In Express, middleware processes and transforms incoming requests to the server. In our case, Multer acts as a helper when uploading files.<br />Project Setup</p>\n<p>We will be using the Node Express framework for this project. Of course, you\'ll need to have Node installed.</p>', '1', 1, 'Admin', 'featureimage-1590146133277.png', 'File Upload With Multer in Node.js and Express', 'File Upload With Multer in Node.js and Express', 'File Upload With Multer in Node.js and Express\n', '2020-05-19 00:00:00', '2020-05-23 13:33:11'),
(47, 'Citizenship Amendment Act', 'citizenship-amendment-act', 'html', '<p>The BJP government enacted amendments to Citizenship law to grant citizenship to religious minorities of Afghanistan, Pakistan and Bangladesh, who had to flee their homeland facing persecution. Protests erupted in Jamia Milia Islamia and Aligarh Muslim University after the Bill was passed in Parliament and got the President\'s approval. Soon, more students from various universities and colleges across India joined the protests. In some areas violence broke out.</p>', '<p>The BJP government enacted amendments to Citizenship law to grant citizenship to religious minorities of Afghanistan, Pakistan and Bangladesh, who had to flee their homeland facing persecution. Protests erupted in Jamia Milia Islamia and Aligarh Muslim University after the Bill was passed in Parliament and got the President\'s approval. Soon, more students from various universities and colleges across India joined the protests. In some areas violence broke out.<br /><br /><br /></p>', '1', 1, 'Admin', 'featureimage-1590142996161.jpg', 'Citizenship Amendment Act', 'Citizenship Amendment Act, Citizenship, Amendment Act', 'Citizenship Amendment Act ', '2020-05-22 00:00:00', '2020-05-23 13:33:18'),
(48, 'Coronavirus | Delhi HC, district courts functioning restricted till May 31', 'Coronavirus-delhi-hc-district-courts-functioning-restricted-till-may-31', 'freebies', '<p>Restrictions on the functioning of the Delhi High Court and district courts will remain in place till May 31 in view of coronavirus and only urgent matters will be heard.</p>', '<h2 class=\"intro\">Only urgent matters will be heard. Earlier the restrictions were in place till May 23</h2>\n<div id=\"content-body-14269002-31649480\">\n<p>Restrictions on the functioning of the Delhi High Court and district courts will remain in place till May 31 in view of coronavirus and only urgent matters will be heard.</p>\n<p>Earlier the restrictions were in place till May 23.</p>\n<p>The Administrative and General Supervision Committee of the High Court, headed by Chief Justice D.N. Patel, decided that restrictions would be in place till May 31 and that urgent matters would continue to be heard by video conferencing.<br /><br />&rdquo;...the functioning of the High Court of Delhi shall continue to remain suspended till May 31 on same terms,&rdquo; the administrative order said.</p>\n<p>The mentioning of urgent matters is being done through the web link which is available from 9 a.m. to 10.30 a.m. on all working days.</p>\n<p><img src=\"C:/Users/Praveen Kumar/Desktop/DELHIHIGHCOURT.jpg\" alt=\"\" /><img src=\"file:///C:/Users/Praveen%20Kumar/Desktop/DELHIHIGHCOURT.jpg\" alt=\"\" width=\"100\" height=\"100\" /></p>\n<p>The order said all the cases listed in the high court, including before the registrars and joint registrars, from May 26 to 30 have been adjourned to corresponding dates between July 21 and July 25 respectively.</p>\n<p class=\"atd-ad\">The matters listed in the district courts during this period will also be adjourned and the information will be uploaded on their website, the order said.</p>\n<p>Till now, there were two division Benches and 10 single benches to hear urgent matters through video conferencing.</p>\n<p>To ensure more urgent matters are taken up, it has been decided that from Friday all the judges of the high court would sit everyday to take up important cases via videoconference.</p>\n<p class=\"atd-ad\">The Delhi High Court and the lower courts together took up 20,726 urgent matters during the COVID-19 lockdown from March 24 to May 19.</p>\n<p>There are presently seven division benches and 19 single-judge benches in the high court.</p>\n<p class=\"_yeti_done\">Earlier, the high court had on March 25 restricted its and district courts&rsquo; functioning till April 14. It was then extended to May 3, May 17 and subsequently till May 23.</p>\n</div>', '1', 1, 'Admin', 'featureimage-1590143787639.jpg', 'Coronavirus | Delhi HC, district courts functioning restricted till May 31', 'Restrictions,functioning,Delhi High Court,district courts,remain,May,covid-19,coronavirus,only,urgent,matters,heard', 'Only urgent matters will be heard. Earlier the restrictions were in place till May 23', '2020-05-22 00:00:00', '2020-05-23 13:33:23'),
(49, 'Fake video of shopping at Madina goes viral', 'fake-video-of-shoping-at-madina-goes-viral', 'css', '<p>On Wednesday evening, a social media user by the name Manohar Pv shared a video from Faisalabad in Pakistan and tried to pass it for a scene from Madina shopping centre in Hyderabad. Alerted about the video, independent video checkers flagged the video as fake news and the video had a warning about it being false news. The video soon had a label: &ldquo;False: A video from Pakistan falsely shared as &lsquo;Crowd with no social distancing at a shopping centre in Old city (Hyderabad)&rsquo;&rdquo;. But that didn&rsquo;t stop others from sharing the video with the politically loaded commentary.</p>', '<h2 class=\"intro\">Video was from Faisalabad in Pakistan</h2>\n<div id=\"content-body-14269002-31644463\">\n<p>On Wednesday evening, a social media user by the name Manohar Pv shared a video from Faisalabad in Pakistan and tried to pass it for a scene from Madina shopping centre in Hyderabad. Alerted about the video, independent video checkers flagged the video as fake news and the video had a warning about it being false news. The video soon had a label: &ldquo;False: A video from Pakistan falsely shared as &lsquo;Crowd with no social distancing at a shopping centre in Old city (Hyderabad)&rsquo;&rdquo;. But that didn&rsquo;t stop others from sharing the video with the politically loaded commentary.</p>\n<p>In reality, the Madina shopping area was nearly deserted on Wednesday as the shops were being marked with 1 and 2 to effectively implement the odd-even rule by the government. The shopping hours too have been limited in Hyderabad as a curfew comes into force at 7 p.m.</p>\n<p>&ldquo;Fake news has reached pandemic proportions due to the COVID-19. That video was shared by nearly 250 people. Earlier, we had booked 25 persons for spreading fake news about Covid-19,&rdquo; said Dileep Konatham, Director, Digital Media, government of Telangana.</p>\n<p>&nbsp;</p>\n<p>He said the State government was planning to augment its resources in its fight against fake news. &ldquo;Beside the fact- checking portal we are planning a service that will reduce the down time and we will have near-real-time response to fake news,&rdquo; said Mr. Konatham.</p>\n<p>According to social media users, Facebook has tweaked its algorithm so that the visibility is reduced when a person repeatedly shares fake news.</p>\n<p class=\"_yeti_done atd-ad\">Telangana&rsquo;s ITE &amp; C department has teamed up with Factly to create a fake-news busting site.</p>\n</div>', '1', 1, 'Admin', 'featureimage-1590144190855.jpg', 'Fake video of shopping at Madina goes viral', 'Fake video,shopping,viral,fake,shared,police', 'Video was from Faisalabad in Pakistan', '2020-05-22 00:00:00', '2020-05-23 13:33:29'),
(50, 'Rs.1000 crore allocated for immediate assistance to Amphan-hit West Bengal: Modi', 'rs.1000-crore-allocated-for-immediate-assistance-to-Amphan-hit-west-bengal-modi', 'css', '<p>Prime Minister Narendra Modi announced a rehabilitation package of ?1,000 crore for the cyclone-affected West Bengal on Wednesday.</p>\n<p>&ldquo;An advance assistance of ?1,000 crore will be arranged by the government of India, so that the State government does not face any major hardship during these difficult times,&rdquo; Mr. Modi said.</p>', '<h2 class=\"intro\">Prime Minister announces ?2 lakh for the next of kin of the deceased and ?50,000 each for the seriously injured.</h2>\n<div id=\"content-body-14269002-31649180\">\n<p>Prime Minister Narendra Modi announced a rehabilitation package of ?1,000 crores for the cyclone-affected West Bengal on Wednesday.</p>\n<p>&ldquo;An advance assistance of ?1,000 crores will be arranged by the government of India, so that the State government does not face any major hardship during these difficult times,&rdquo; Mr. Modi said.</p>\n<p>&ldquo;In addition ?2 lakh will be given from the Prime Minister&rsquo;s Relief Fund to the family of the deceased and ?50,000 each for the seriously injured,&rdquo; he added.</p>\n<p>The State government had announced a relief and rehabilitation package of ?1,000 crore on Thursday and a compensation package of ?2.5 lakh to the families of the deceased.</p>\n<div id=\"div-gpt-ad-1552914402102-0\" class=\"dfp-ad Inarticle\" data-google-query-id=\"CPuJpp-lx-kCFT5BnQkdCrcLBg\">\n<div id=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0__container__\">\n<div id=\"vdo_ai_div-0\"></div>\n<iframe id=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0\" title=\"3rd party ad content\" name=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0\" width=\"1\" height=\"1\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" data-google-container-id=\"9\" data-load-complete=\"true\" data-mce-fragment=\"1\"></iframe></div>\n</div>\n<p>The Prime Minister said that the State government will conduct a detailed survey report on the extent of damage and losses. It is expected that following that report, a more extensive package will be announced.</p>\n<p class=\"atd-ad\">&ldquo;Meanwhile a central team will also conduct a survey in the State,&rdquo; the Prime Minister said.</p>\n<p>It is a &ldquo;difficult fight&rdquo; as the battle against coronavirus and the one against Amphan move in two different directions, Mr. Modi said after conducting aerial survey of the flood-hit region.</p>\n<p>&ldquo;To fight Corona, it is said stay at home, do not go out or maintain a distance of two yards, whereas in case of cyclone it is instructed that one needs to shift to a safe place, move out of your house. Two different types of fight West Bengal had to fight.</p>\n<p class=\"_yeti_done atd-ad\">&ldquo;However, under the leadership of Mamataji, the State government has put in its full effort. The Central government has also stood by the State government and did what was required,&rdquo; Mr. Modi said.</p>\n</div>', '1', 1, 'Admin', 'featureimage-1590145203017.jpg', 'Rs.1000 crore allocated for immediate assistance to Amphan-hit West Bengal: Modi', 'narendra modi,natural disasterm west bengal,amphan,mamata banerjee', 'Prime Minister announces ?2 lakh for the next of kin of the deceased and ?50,000 each for the seriously injured.', '2020-05-22 00:00:00', '2020-05-23 13:33:34'),
(51, '82 bodies recovered, more feared dead in Pakistan plane crash with 99 on board', '82-bodies-recovered-more-feared-dead-in-pakistan-plane-crash-with-99-on-board', 'news', '<p>At least 82 people were killed when a Pakistan International Airlines plane with 99 people on board crashed into a densely populated residential area near the Jinnah International Airport here on Friday, officials said, nearly a week after the Covid-19-induced air travel restrictions were lifted by the government.</p>', '<p>At least 82 people were killed when a Pakistan International Airlines plane with 99 people on board crashed into a densely populated residential area near the Jinnah International Airport here on Friday, officials said, nearly a week after the Covid-19-induced air travel restrictions were lifted by the government.</p>\n<p>Flight PK-8303 from Lahore crashed at the Jinnah Garden area near Model Colony in Malir minutes before its landing in Karachi, they said.</p>\n<p>The PIA Airbus A320 carrying 91 passengers and eight crew members has crash-landed into the Jinnah Housing Society located near the airport, a spokesperson of the national carrier said.</p>\n<p>Thick black smoke rose from the accident scene in the Model Colony area.<br /><br /></p>\n<p>Sindh Health Minister Azra Pechuho told the media late Friday night that 82 bodies have been recovered from the site of the crash so far.</p>\n<p>It is, however, unclear if the deceased were all on board the flight or include residents of the area where the crash took place.She said there are two survivors including President of the Bank of Punjab Zafar Masood. He called up his mother to inform her of his well-being.</p>\n<p>&ldquo;We don&rsquo;t know exactly how many are injured as yet as we were already in an emergency situation due to COVID-19 (outbreak)...,&rdquo; she said.<br /><br /></p>\n<p>Faisal Edhi of the Edhi Welfare Trust said that around 25 to 30 residents whose houses were damaged by the plane have also been taken to the hospital, mostly with burn wounds.</p>\n<p>The aircraft wings during the crash landing hit the houses in the residential colony before crashing down.</p>\n<p>&ldquo;At least 25 houses have been damaged in this incident,&rdquo; Edhi said. &ldquo;The first priority is to rescue the people. The main hurdle is narrow streets and presence of ordinary people who gathered at the place after the crash but they have been dispersed,&rdquo; the minister said.<br /><br /></p>\n<p>Television footage showed rescue crews combing through debris strewn across the streets of the district - 3 km north-east of the airport - where a number of houses have been destroyed.</p>\n<p>According to a PIA official, the captain informed the air traffic control that he was having problems with the landing gear before the aircraft disappeared from the radar.</p>\n<p>The cause of the crash is yet to be confirmed. PIA chief executive Air Vice Marshal Arshad Malik said the pilot had told traffic control that the plane was experiencing &ldquo;technical difficulties&rdquo;.</p>\n<p>Malik rejected reports that the plane had problems even before flying. Talking to the media, he said the aircraft was completely safe and sound.</p>\n<p>He said all checks and procedures were done and &ldquo;technically as well as administratively everything was in place and perfect&rdquo;.</p>\n<p>The plane with 99 people on board came for landing but just before landing the pilot said he was going for a go-around. While coming for a second landing, it developed some problems and crashed. &ldquo;The real cause of the mishap will be known after inquiry, which will be free and fair and it will be provided with media,&rdquo; he said.<br /><br /></p>\n<p>Malik said that the entire operation will take two to three days to complete. Pakistan has set up a four-member board of inquiry to know the cause of the crash.The board has been asked to complete the probe within shortest possible time, according to an official notification by the Aviation Division of the government. Pakistan&rsquo;s Dunya News said it had obtained a recording of the conversation, also posted on monitoring website liveatc.net.</p>\n<p>In it, the pilot says they have &ldquo;lost two engines&rdquo;. Several seconds later he calls &ldquo;Mayday, Mayday, Mayday&rdquo; and there is no further communication.</p>\n<p>Meanwhile, President Arif Alvi expressed grief and sorrow over the loss of lives in the plane crash.</p>\n<p>Prime Minister Imran Khan, while expressing deep sorrow over the loss of precious lives as a result of the PIA passenger plane crash in Karachi, has ordered an immediate inquiry into the incident.</p>\n<p>Pakistan Army chief General Qamar Javed Bajwa condoled the loss of lives and directed the military to provide full assistance to the civil administration in rescue and relief efforts.</p>\n<p>Prime Minister Narendra Modi condoled the loss of lives in the plane crash and wished a speedy recovery to those injured.The flight was coming from Lahore to Karachi after the Civil Aviation Authority (CAA) allowed limited resumption of domestic flights last Saturday following weeks of lockdown due to the coronavirus pandemic.</p>\n<p>Television channels showed several houses and cars damaged in the society where the aircraft crashed.</p>\n<p>The plane lost contact with the air traffic control at 2.37 PM (local time), PIA spokesman Abdullah Hafeez said.</p>\n<p>He said that the passengers included 31 women and nine children.This is the first major aircraft crash in Pakistan after December 7, 2016 when a PIA ATR-42 aircraft from Chitral to Islamabad crashed midway. The crash claimed the lives of all 48 passengers and the crew.</p>\n<p>Friday&rsquo;s accident occurred on a day when the interior ministry announced Eid holidays from May 22 to May 27, even as the country was facing a spike in the coronavirus cases.</p>\n<p>The COVID-19 cases in the country have crossed the 50,000-mark after a record 2,603 more patients were diagnosed on Thursday. The death toll stands at 1,067.</p>\n<p><br /><br /><br /></p>\n<p><br /><br /><br /></p>\n<p><br /><br /><br /></p>', '1', 1, 'Admin', 'featureimage-1590221960718.png', '82 bodies recovered, more feared dead in Pakistan plane crash with 99 on board', 'karachi plane, pakistan plane, world news, Paksitan plane from lahore, plane crash, Pakistan plane crash', 'The PIA Airbus A320 carrying 91 passengers and eight crew members has crash-landed into the Jinnah Housing Society located near the airport, a spokesperson of the national carrier said.', '2020-05-23 00:00:00', '2020-05-23 00:00:00'),
(73, 'Will try to restart international flights soon: Puri', 'will-try-to-restart-international-flights-soon-puri', 'news', '<p>Civil Aviation minister Hardeep Singh Puri said on Saturday that commercial international flight operation could start as early as middle of June if the situation improves and the &ldquo;virus behaves in a predictable manner.&rdquo;&nbsp;</p>\n<p>During a live chat on Facebook, he said the Centre was in touch with State governments to solve the problem being faced by passengers who are also &ldquo;taxpayers&rdquo; to reach the airport and &ldquo;keeping the lockdown in continuation is not the answer.&rdquo;</p>', '<h2 class=\"intro\">The Civil Aviation Minister took questions from Facebook users during a live chat.</h2>\n<div id=\"content-body-14269002-31657420\">\n<p>Civil Aviation minister Hardeep Singh Puri said on Saturday that commercial international flight operation could start as early as middle of June if the situation improves and the &ldquo;virus behaves in a predictable manner.&rdquo;&nbsp;</p>\n<p>During a live chat on Facebook, he said the Centre was in touch with State governments to solve the problem being faced by passengers who are also &ldquo;taxpayers&rdquo; to reach the airport and &ldquo;keeping the lockdown in continuation is not the answer.&rdquo;</p>\n<p>Mr. Puri said India went into a lockdown straight and in one of the meetings he argued that &ldquo;if the lockdown is going to come into effect on day X, I need two-day notice for the U.S&rdquo; so that Air India planes could come back.<br /><br /></p>\n<p>&ldquo;As an optimist I would say why wait till August or September, if situation eases or improves, if the virus behave in a predictable manner, we get used to the idea to co-exist with the virus and make arrangements&hellip;let say we have an ambitious goal, why not start middle of June, end- June or July, I know you will say MHA lockdown is till May 31&hellip;nothing is written in stone&hellip;we are starting the domestic flights from May 25, we are prepared,&rdquo; he said.</p>\n<div id=\"div-gpt-ad-1552914402102-0\" class=\"dfp-ad Inarticle\" data-google-query-id=\"CP_yvrT_yekCFY18aAod2tAPYQ\">\n<div id=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0__container__\">\n<div id=\"vdo_ai_div-0\"></div>\n<iframe id=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0\" title=\"3rd party ad content\" name=\"google_ads_iframe_/22390678/Hindu_Desktop_Inarticle_1x1_0\" width=\"1\" height=\"1\" frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" data-google-container-id=\"9\" data-load-complete=\"true\" data-mce-fragment=\"1\"></iframe></div>\n</div>\n<p>Mr. Puri said that pricing of tickets is a commercial matter between airline and the consumer and the government&rsquo;s role was limited to issuing advisories.</p>\n<p class=\"atd-ad\">Mr. Puri said airlines have to carry on with &ldquo;minimum economic viability&rdquo; and as he keeps getting suggestions and complaints on the issue, he said he once asked a Member of Parliament in a lighter vein whether the &ldquo;airline operation should be handed over to the Delhi&nbsp;<em>langar</em>&nbsp;society.&rdquo;&nbsp;</p>\n<p>Air India requires Rs. 600 crore cash infusion every month and India was currently running Vande Bharat flights to evacuate stranded passengers from 50 countries. He said if private airlines are used for the Vande Bharat mission, then the price of tickets would be capped.</p>\n<p>In wake of the COVID-19 pandemic, all domestic and international flights were&nbsp;suspended&nbsp;on March 23, a day before the first phase of lockdown was imposed. Mr. Puri said 33% domestic flights will start operating from May 25 and a meeting was underway with State governments to decide the quarantine process. Some States have insisted on mandatory 14-day institutional quarantines for all incoming domestic passengers.</p>\n<p class=\"atd-ad\">On being asked on testing everyone for COVID-19 before they are allowed to fly, Mr. Puri said it was not a practical solution.</p>\n<p>&ldquo;If you have an Aarogya Setu app and you are clear, do you want another test? India is conducting around 1 lakh per day&hellip;if you do not have any symptoms or did not come in contact with a COVID-19 positive person then what is the use of test? The test result will come in 7 hours&hellip;you take the test and wait for the result and then wait for another two hours before the boarding?&rdquo; asked Mr. Puri. He said Aarogya Setu was preferable but airlines have not made it mandatory.</p>\n<p>&ldquo;If you check several boxes, can give a self declaration&hellip;Why will the State want to quarantine you after these facts? It is a new situation, States will get used to it. Within next day or two we will have clarity,&rdquo; Mr. Puri said.</p>\n<p class=\"atd-ad\">He said food will not be allowed on domestic flights and that &ldquo;virus could come on the paper.&rdquo;</p>\n<p>&ldquo;All domestic sectors are short duration from 40 minutes upto to 3 hours, have a good meal at home and then come. Water will be available at the point of entry and in the jacket of your seat,&rdquo; he said.</p>\n<p>As far as one-year-valid visa for outbound passengers was concerned, Mr. Puri said they were not the one prescribing it. &ldquo;As long the visa is valid at the point of entry&hellip;.we are trying to avoid a situation that the passenger is deported&hellip;.democracies have this great ability. A visa doesn&rsquo;t mean that it gives you unrestricted rights&hellip;.recently four students with valid visas who wanted to board a flight to the U.S.A were stopped as the airline was informed that all college and institutions were shut over there,&rdquo; he said.</p>\n<p class=\"_yeti_done atd-ad\">On being asked, why most flights under Vande Bharat were destined for Kerala and not other States like Andhra Pradesh or Telangana, Mr. Puri said State governments will have to take the lead and some State governments were more proactive than the others.</p>\n</div>', '1', 1, 'Admin', 'featureimage-1590237394396.jpg', 'Will try to restart international flights soon: Puri', 'international flights,India flight ban,India lockdown,Hardeep Singh Puri', 'The Civil Aviation Minister took questions from Facebook users during a live chat.', '2020-05-23 00:00:00', '2020-05-23 12:36:34'),
(74, 'Coronavirus | Narendra Modi discusses COVID-19 situation with Sri Lankan President, Mauritius PM', 'coronavirus-narendra-modi-discusses-covid-19-situation-with-sri-lankan-president-mauritius-pm', 'news', '<p>Prime Minister Narendra Modi on Saturday discussed the situation arising out of the&nbsp;<a title=\"\" href=\"https://www.thehindu.com/topic/coronavirus/\">coronavirus</a>&nbsp;(<a title=\"\" href=\"https://www.thehindu.com/sci-tech/science/all-about-the-china-coronavirus-covid-19/article30692734.ece\">COVID-19</a>) pandemic with Sri Lankan President Gotabaya Rajapaksa and Mauritius Prime Minister Pravind Jugnauth.</p>\n<p>Sri Lanka is fighting&nbsp;<a title=\"\" href=\"https://www.thehindu.com/coronavirus/\">COVID-19</a>&nbsp;effectively under Rajapaksa&rsquo;s leadership, Mr. Modi wrote on Twitter.</p>', '<h2 class=\"intro\">PM Modi congratulated Prime Minister Jugnauth for successfully controlling COVID-19 in Mauritius; Lankan President Rajapaksa briefed Mr. Modi on the steps being taken by his government to restart economic activity.</h2>\n<div id=\"content-body-14269002-31658545\">\n<p>Prime Minister Narendra Modi on Saturday discussed the situation arising out of the&nbsp;<a title=\"\" href=\"https://www.thehindu.com/topic/coronavirus/\">coronavirus</a>&nbsp;(<a title=\"\" href=\"https://www.thehindu.com/sci-tech/science/all-about-the-china-coronavirus-covid-19/article30692734.ece\">COVID-19</a>) pandemic with Sri Lankan President Gotabaya Rajapaksa and Mauritius Prime Minister Pravind Jugnauth.</p>\n<p>Sri Lanka is fighting&nbsp;<a title=\"\" href=\"https://www.thehindu.com/coronavirus/\">COVID-19</a>&nbsp;effectively under Rajapaksa&rsquo;s leadership, Mr. Modi wrote on Twitter.</p>\n<p>&ldquo;India will continue to support our close maritime neighbour in dealing with the pandemic and its economic impact,&rdquo; he said.</p>\n<p>The two, the Prime Minister said, agreed to accelerate Indian-assisted development projects in Sri Lanka and also strengthen investment links. PM Modi congratulated Prime Minister Jugnauth for successfully controlling&nbsp;<a title=\"\" href=\"https://www.thehindu.com/news/international/covid-19-mauritius-records-first-death-confirmed-cases-rise/article31129573.ece\">COVID-19 in Mauritius</a>.</p>\n<p>&ldquo;Our people share warm and special ties, based on shared culture and values. Indians will stand by their Mauritian brothers and sisters at this difficult time,&rdquo; he said.</p>\n<p>An official statement later said President Rajapaksa briefed Mr. Modi on the steps being taken by his government to restart economic activity.</p>\n<p class=\"atd-ad\">&ldquo;In this context, both the leaders agreed on the need to accelerate Indian-assisted development projects in Sri Lanka. They also discussed the possibilities of promoting investments and value-addition in Sri Lanka by the Indian private sector,&rdquo; the statement said.</p>\n<p>During the conversation, Mr. Modi conveyed his best wishes for the health and well-being of Sri Lankan people.</p>\n<p>Another statement said Prime Minister Jugnauth conveyed his condolences for the&nbsp;<a title=\"\" href=\"https://www.thehindu.com/news/cities/kolkata/72-killed-in-cyclone-amphan-fury-15-dead-in-kolkata-alone/article31640766.ece\">losses caused in India by cyclone &lsquo;Amphan.&rsquo;</a>&nbsp;He also thanked Mr. Modi for sending the Indian Naval Ship &lsquo;Kesari&rsquo; to Mauritius as part of &lsquo;Operation Sagar&rsquo;, with a consignment of medicines and a 14-member medical team to help the Mauritian health authorities fight the COVID-19 pandemic.</p>\n<p>The Prime Minister recalled the special people-to-people ties between India and Mauritius and said New Delhi is duty-bound to support its friends during this time of crisis.</p>\n<p>The Prime Minister conveyed his appreciation for the effective COVID-19 response mounted by Mauritius under Prime Minister Jugnauth&rsquo;s leadership, which has resulted in no new cases being reported for several weeks. He suggested that Mauritius could document its best practices, which would be helpful for other countries, especially island countries, in dealing with similar health crises.</p>\n<p class=\"_yeti_done atd-ad\">The two leaders discussed enhancing cooperation in various areas, including measures aimed at supporting the financial sector of Mauritius and enabling Mauritian youth to study Ayurvedic medicine.</p>\n</div>', '1', 1, 'Admin', 'featureimage-1590237750303.jpg', 'Coronavirus | Narendra Modi discusses COVID-19 situation with Sri Lankan President, Mauritius PM', 'Prime Minister Narendra Modi,Narendra Modi,Sri Lankan President,Gotabaya Rajapaksa,Mauritius Prime Minister,Pravind Jugnauth,Indian Naval Ship kesari,naval ship kesari,kesari ship,Operation Sagar,covid-19,coronavirus,coronavirus threat,coronavirus outbrea', 'PM Modi congratulated Prime Minister Jugnauth for successfully controlling COVID-19 in Mauritius; Lankan President Rajapaksa briefed Mr. Modi on the steps being taken by his government to restart economic activity.', '2020-05-23 00:00:00', '2020-05-23 12:42:30');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200407075249-create-customer-table.js'),
('20200407083211-update-customer-table.js'),
('20200407123058-create-user-table.js'),
('20200407123143-create-post-table.js'),
('20200422075038-create-country-table.js'),
('20200524082407-create-category-table.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(150) DEFAULT NULL,
  `lastname` varchar(150) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(150) DEFAULT NULL,
  `state` varchar(150) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `biography` text DEFAULT NULL,
  `status` enum('0','1') DEFAULT '0',
  `verify_token` varchar(100) DEFAULT NULL,
  `verify_date` datetime DEFAULT NULL,
  `email_preference` enum('0','1') DEFAULT '0',
  `sms_preference` enum('0','1') DEFAULT '0',
  `whatsapp_preference` enum('0','1') DEFAULT '0',
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `forgot_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `phone`, `address`, `city`, `state`, `pincode`, `password`, `gender`, `biography`, `status`, `verify_token`, `verify_date`, `email_preference`, `sms_preference`, `whatsapp_preference`, `created_at`, `updated_at`, `forgot_at`) VALUES
(1, 'Praveen', 'Kumar', 'pkumar5330@gmail.com', '9999253895', 'Shakarpur ', 'School Block', 'Delhi', '110093', '$2a$10$jRLsIyNNhUqIWxoojhQUFOOaTFW//8myvTzR47MRjg0N1taAOwxSa', 'Male', 'Lockdown 3.0 live: People line up outside liquor shops across India qwerty', '1', 's9fxs', NULL, '1', '1', '1', '2020-04-30 09:41:44', '2020-05-20 05:33:06', '2020-05-07 06:54:59'),
(9, NULL, NULL, 'pujarani.ranchi@gmail.com', '9999253896', NULL, NULL, NULL, NULL, '$2a$10$cDKIQ4pBL0arAlZGjq.gKu6W4UGtCdT07SexK4tUpF6yuMSOjr0Tm', NULL, NULL, '1', 'WrtpsxlF', '2020-05-07 02:41:23', '0', '0', '0', '2020-05-07 02:34:35', '2020-05-07 02:41:23', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `country_code` (`country_code`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
