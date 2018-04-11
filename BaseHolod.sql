-- --------------------------------------------------------
-- Хост:                         192.168.1.54
-- Версия сервера:               10.1.26-MariaDB-0+deb9u1 - Debian 9.1
-- Операционная система:         debian-linux-gnu
-- HeidiSQL Версия:              9.4.0.5174
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных e_holod
CREATE DATABASE IF NOT EXISTS `e_holod` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `e_holod`;

-- Дамп структуры для таблица e_holod.alarm
CREATE TABLE IF NOT EXISTS `alarm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alarm` int(11) DEFAULT NULL,
  `eqindex` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `device` varchar(24) DEFAULT NULL,
  `text` tinytext,
  `type` int(11) DEFAULT NULL,
  `color` varchar(24) DEFAULT NULL,
  `ack` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `alarm` DISABLE KEYS */;
INSERT INTO `alarm` (`id`, `alarm`, `eqindex`, `date`, `time`, `device`, `text`, `type`, `color`, `ack`) VALUES
	(1, 1, 1, '2018-03-21', '09:27:58', '1', 'sfeghdsfhg', 0, '#00FF00', 'I');
/*!40000 ALTER TABLE `alarm` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.alarm_arxiv
CREATE TABLE IF NOT EXISTS `alarm_arxiv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alarm` int(11) DEFAULT NULL,
  `eqindex` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `device` varchar(24) DEFAULT NULL,
  `text` tinytext,
  `type` int(11) DEFAULT NULL,
  `color` varchar(24) DEFAULT NULL,
  `ack` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm_arxiv: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `alarm_arxiv` DISABLE KEYS */;
/*!40000 ALTER TABLE `alarm_arxiv` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.device
CREATE TABLE IF NOT EXISTS `device` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NameLong` varchar(24) NOT NULL DEFAULT '-',
  `NameShort` varchar(24) NOT NULL DEFAULT '-',
  `EIndex` int(11) NOT NULL DEFAULT '0',
  `EType` int(11) NOT NULL DEFAULT '0',
  `EFlags` int(11) NOT NULL DEFAULT '0',
  `aFloor` int(11) NOT NULL DEFAULT '0',
  `aHeatingLounger` int(11) NOT NULL DEFAULT '0',
  `aCamera` int(11) NOT NULL DEFAULT '0',
  `aInletValve` int(11) NOT NULL DEFAULT '0',
  `aHeatingPipes` int(11) NOT NULL DEFAULT '0',
  `aAirCooler` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.device: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` (`ID`, `NameLong`, `NameShort`, `EIndex`, `EType`, `EFlags`, `aFloor`, `aHeatingLounger`, `aCamera`, `aInletValve`, `aHeatingPipes`, `aAirCooler`) VALUES
	(1, '', 'F1-B1-C1', 0, 1, 0, 1, 0, 1, 0, 0, 1),
	(2, '', 'F1-B1-C2', 0, 1, 0, 1, 0, 1, 0, 0, 2),
	(3, '', 'F1-B1-C3', 0, 1, 0, 1, 0, 1, 0, 0, 3);
/*!40000 ALTER TABLE `device` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.menu
CREATE TABLE IF NOT EXISTS `menu` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `eq_type` int(11) NOT NULL DEFAULT '0',
  `n` int(11) NOT NULL DEFAULT '0',
  `name` varchar(24) NOT NULL DEFAULT '-',
  `command` int(11) NOT NULL DEFAULT '0',
  `color` varchar(24) NOT NULL DEFAULT '#000000',
  `func` varchar(24) NOT NULL DEFAULT '-',
  `access` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=411 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.menu: ~36 rows (приблизительно)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`ID`, `eq_type`, `n`, `name`, `command`, `color`, `func`, `access`) VALUES
	(101, 1, 0, 'СТОП', 2, '#ff0000', 'start_stop_mex', 2),
	(102, 1, 1, 'СТАРТ', 1, '#cccccc', 'start_stop_mex', 2),
	(103, 1, 2, 'Вкл. вентилятор', 3, '#cccccc', 'start_stop_mex', 2),
	(104, 1, 3, 'Вкл. нагреватель', 5, '#cccccc', 'start_stop_mex', 2),
	(105, 1, 4, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(106, 1, 5, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(107, 1, 6, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(108, 1, 7, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(109, 1, 8, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(110, 1, 9, 'Настройки', 0, '#cccccc', 'settings_equipment_open', 1),
	(201, 2, 0, 'Выключить', 2, '#ff0000', 'start_stop_mex', 2),
	(202, 2, 1, 'Включить', 1, '#cccccc', 'start_stop_mex', 2),
	(203, 2, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(204, 2, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(205, 2, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(206, 2, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(207, 2, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(208, 2, 7, 'Настройки', 0, '#cccccc', 'settings_equipment_open', 1),
	(301, 3, 0, 'Закрыть', 1, '#cccccc', 'start_stop_mex', 2),
	(302, 3, 1, 'Открыть', 3, '#cccccc', 'start_stop_mex', 2),
	(303, 3, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(304, 3, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(305, 3, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(306, 3, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(307, 3, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(308, 3, 7, 'Настройки', 0, '#cccccc', 'settings_equipment_open', 1),
	(401, 4, 0, 'СТОП', 2, '#ff0000', 'start_stop_mex', 2),
	(402, 4, 1, 'ПУСК', 1, '#cccccc', 'start_stop_mex', 2),
	(403, 4, 2, 'Разморозка', 3, '#cccccc', 'start_stop_mex', 2),
	(404, 4, 3, 'Задание', 5, '#cccccc', 'start_stop_mex', 2),
	(405, 4, 4, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(406, 4, 5, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(407, 4, 6, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(408, 4, 7, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(409, 4, 8, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(410, 4, 9, 'Настройки', 0, '#cccccc', 'settings_equipment_open', 1);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.network
CREATE TABLE IF NOT EXISTS `network` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hardwareID` int(11) NOT NULL DEFAULT '0',
  `adrPower` int(11) NOT NULL DEFAULT '0',
  `flags` int(11) NOT NULL DEFAULT '0',
  `name1` varchar(24) NOT NULL DEFAULT '-',
  `name2` varchar(24) NOT NULL DEFAULT '-',
  `ip` varchar(24) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.network: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `network` DISABLE KEYS */;
INSERT INTO `network` (`id`, `hardwareID`, `adrPower`, `flags`, `name1`, `name2`, `ip`) VALUES
	(1, 64, 0, 1, 'ЦПУ', 'CPU', '192.168.25.2');
/*!40000 ALTER TABLE `network` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(24) NOT NULL DEFAULT '-',
  `hash` varchar(32) NOT NULL DEFAULT '-',
  `name` varchar(24) NOT NULL DEFAULT '-',
  `control` int(11) NOT NULL DEFAULT '0',
  `active` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.users: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `login`, `hash`, `name`, `control`, `active`) VALUES
	(1, 'admin', '205F3226F9585CADDE72B4ABE1E96502', 'Админ', 1, 1),
	(2, 'oper', 'CD8342C9DC3A81BA128AE3A3185D1865', 'Оператор', 2, 1),
	(3, 'user', '827CCB0EEA8A706C4C34A16891F84E7B', 'Юзер', 3, 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
