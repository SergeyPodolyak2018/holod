-- --------------------------------------------------------
-- Хост:                         192.168.15.22
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm: ~1 rows (приблизительно)
/*!40000 ALTER TABLE `alarm` DISABLE KEYS */;
INSERT INTO `alarm` (`id`, `alarm`, `eqindex`, `date`, `time`, `device`, `text`, `type`, `color`, `ack`) VALUES
	(3, 3, 1, '2018-05-08', '13:08:00', 'F1-B1-C1', 'Предупреждение 1', 2, '#ffff00', 'I');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm_arxiv: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `alarm_arxiv` DISABLE KEYS */;
INSERT INTO `alarm_arxiv` (`id`, `alarm`, `eqindex`, `date`, `time`, `device`, `text`, `type`, `color`, `ack`) VALUES
	(1, 1, 1, '2018-05-08', '13:04:29', 'F1-B1-C1', 'Авария 1', 1, '#ff0000', 'I'),
	(2, 2, 2, '2018-05-08', '13:04:30', 'F1-B1-C2', 'Авария 2', 1, '#ff0000', 'I');
/*!40000 ALTER TABLE `alarm_arxiv` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.device
CREATE TABLE IF NOT EXISTS `device` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NameLong` varchar(24) NOT NULL DEFAULT '-',
  `NameShort` varchar(24) NOT NULL DEFAULT '-',
  `EIndex` int(11) NOT NULL DEFAULT '0',
  `EType` int(11) NOT NULL DEFAULT '0',
  `aFloor` int(11) NOT NULL DEFAULT '0',
  `aHeatingLounger` int(11) NOT NULL DEFAULT '0',
  `aCamera` int(11) NOT NULL DEFAULT '0',
  `aInletValve` int(11) NOT NULL DEFAULT '0',
  `aHeatingPipes` int(11) NOT NULL DEFAULT '0',
  `aAirCooler` int(11) NOT NULL DEFAULT '0',
  `aComp` int(11) NOT NULL DEFAULT '0',
  `aVessel` int(11) NOT NULL DEFAULT '0',
  `aPumpsGroup` int(11) NOT NULL DEFAULT '0',
  `aReceiver` int(11) NOT NULL DEFAULT '0',
  `aCapasitor` int(11) NOT NULL DEFAULT '0',
  `aCompControl` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.device: ~19 rows (приблизительно)
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` (`ID`, `NameLong`, `NameShort`, `EIndex`, `EType`, `aFloor`, `aHeatingLounger`, `aCamera`, `aInletValve`, `aHeatingPipes`, `aAirCooler`, `aComp`, `aVessel`, `aPumpsGroup`, `aReceiver`, `aCapasitor`, `aCompControl`) VALUES
	(1, '', 'F1-B1-C1', 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(2, '', 'F1-B1-C2', 2, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(3, '', 'F1-B1-C3', 3, 1, 1, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0),
	(4, '', 'F1-B1', 4, 4, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(5, '', 'F1-H1', 5, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(6, '', 'F1-B1-G1', 6, 3, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(7, '', 'F1-B1-H1', 7, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(8, '', 'F1-B3', 8, 4, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(9, '', 'F0-R1', 9, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0),
	(10, '', 'F0-M1', 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
	(11, '', 'F0-S1', 11, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0),
	(12, '', 'F0-P2', 12, 7, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0),
	(13, '', 'F0-P1', 13, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0),
	(14, '', 'F0-R2', 14, 6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0),
	(15, '', 'F0-J1', 15, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0),
	(16, '', 'F0-Rf1', 16, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
	(17, '', 'F0-J3', 17, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0),
	(18, '', 'F0-J2', 18, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0),
	(19, '', 'F0-S3', 19, 5, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0),
	(20, '', 'F0-S2', 20, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);
/*!40000 ALTER TABLE `device` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.event_arxiv
CREATE TABLE IF NOT EXISTS `event_arxiv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `name` varchar(24) DEFAULT NULL,
  `status` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.event_arxiv: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `event_arxiv` DISABLE KEYS */;
INSERT INTO `event_arxiv` (`id`, `date`, `time`, `name`, `status`) VALUES
	(1, '2018-05-08', '13:13:31', 'F1-B1-C1', 'Старт');
/*!40000 ALTER TABLE `event_arxiv` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=1011 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.menu: ~74 rows (приблизительно)
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
	(110, 1, 9, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(201, 2, 0, 'Выключить', 2, '#ff0000', 'start_stop_mex', 2),
	(202, 2, 1, 'Включить', 1, '#cccccc', 'start_stop_mex', 2),
	(203, 2, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(204, 2, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(205, 2, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(206, 2, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(207, 2, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(208, 2, 7, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(301, 3, 0, 'Закрыть', 1, '#cccccc', 'start_stop_mex', 2),
	(302, 3, 1, 'Открыть', 3, '#cccccc', 'start_stop_mex', 2),
	(303, 3, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(304, 3, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(305, 3, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(306, 3, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(307, 3, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(308, 3, 7, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(401, 4, 0, 'СТОП', 2, '#ff0000', 'start_stop_mex', 2),
	(402, 4, 1, 'ПУСК', 1, '#cccccc', 'start_stop_mex', 2),
	(403, 4, 2, 'Разморозка', 3, '#cccccc', 'start_stop_mex', 2),
	(404, 4, 3, 'Задание', 5, '#7bfd64', 'open_tex_settings_window', 2),
	(405, 4, 4, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(406, 4, 5, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(407, 4, 6, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(408, 4, 7, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(409, 4, 8, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(410, 4, 9, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(505, 5, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(506, 5, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(507, 5, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(508, 5, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(509, 5, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(510, 5, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(605, 6, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(606, 6, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(607, 6, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(608, 6, 3, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(609, 6, 4, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(610, 6, 5, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(611, 6, 6, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(705, 7, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(706, 7, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(707, 7, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(708, 7, 3, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(709, 7, 4, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(710, 7, 5, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(711, 7, 6, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(805, 8, 0, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(806, 8, 1, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(807, 8, 2, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(808, 8, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(809, 8, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(810, 8, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(905, 9, 0, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(906, 9, 1, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(907, 9, 2, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(908, 9, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(909, 9, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(910, 9, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(1005, 10, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(1006, 10, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 2),
	(1007, 10, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(1008, 10, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(1009, 10, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(1010, 10, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1);
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
	(1, 64, 0, 1, 'ЦПУ', 'CPU', '192.168.25.50');
/*!40000 ALTER TABLE `network` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(24) NOT NULL DEFAULT '-',
  `hash` varchar(32) NOT NULL DEFAULT '-',
  `name` varchar(24) NOT NULL DEFAULT '-',
  `control` int(11) NOT NULL DEFAULT '0',
  `path` varchar(32) DEFAULT 'start',
  `active` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.users: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `login`, `hash`, `name`, `control`, `path`, `active`) VALUES
	(1, 'admin', '205F3226F9585CADDE72B4ABE1E96502', 'Админ', 1, 'control', 1),
	(2, 'oper', 'CD8342C9DC3A81BA128AE3A3185D1865', 'Оператор', 2, 'control', 1),
	(3, 'user', '827CCB0EEA8A706C4C34A16891F84E7B', 'Юзер', 3, 'control', 1),
	(4, 'mac', '827CCB0EEA8A706C4C34A16891F84E7B', 'Mac', 3, 'mac-osx-lion-css3', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
