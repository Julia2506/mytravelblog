-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Окт 05 2019 г., 01:18
-- Версия сервера: 10.1.38-MariaDB
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `20180512_33`
--
CREATE DATABASE IF NOT EXISTS `20180512_33` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `20180512_33`;

-- --------------------------------------------------------

--
-- Структура таблицы `cards`
--

CREATE TABLE IF NOT EXISTS `cards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `h3` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `src` varchar(255) NOT NULL,
  `priority` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `sale` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cards`
--

INSERT INTO `cards` (`id`, `h3`, `content`, `src`, `priority`, `active`, `sale`) VALUES
(1, 'Путешествия по России', 'Самые интересные уголки России<br>Самые необычные маршруты', '/icon/moscow.png', 10, 1, 0),
(2, 'Путешествия по Европе', 'Разные страны, разные культуры, исторические места и все самое интересное в современной Европе!', '/icon/big-ben.png', 20, 1, 1),
(3, 'Путешествия по Африке', 'Дикая природа, крокодилы, обезьяны, сафари на джипах, гостиницы на деревьях и самые опасные приключения ждут тебя!', '/icon/pyramids.png', 30, 1, 0),
(4, 'Путешествия по Северной Америке', 'Конечно, мы проедем через всю Америку и побываем как в главных туристических местах, так и в уголках, где почти не ступала нога человека.', '/icon/north-america.png', 40, 1, 1),
(5, 'Путешествия по Южной Америке', 'Южная Америка - место, где хочет побывать каждый. Богатые районы и заброшенные фавелы, опасности и приключения, темпераментные люди и многое другое на страницах наших путешествий.', '/icon/south-america.png', 50, 1, 0),
(6, 'Путешествия по Австралии', 'Мы побываем на отдельном континенте. Почему-то думая об Австралии, сразу представляешь кенгуру, хотя это совершенно не символ страны.', '/icon/kangaroo.png', 60, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `menu`
--

CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `href` varchar(255) NOT NULL,
  `class` varchar(80) NOT NULL,
  `priority` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `menu`
--

INSERT INTO `menu` (`id`, `name`, `href`, `class`, `priority`, `active`) VALUES
(1, 'Главная', '/', 'nav', 100, 1),
(2, 'О нас', '#', 'nav nav-about-us', 90, 0),
(3, 'Оставить вопрос', '#', 'nav nav-faq', 80, 1),
(4, 'Контакты', '#', 'nav nav-contact', 70, 1),
(5, 'Акции', '#', 'nav', 110, 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
