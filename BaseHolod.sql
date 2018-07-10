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
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `alarm` int(11) DEFAULT NULL,
  `eindex` int(11) DEFAULT NULL,
  `device` varchar(64) DEFAULT NULL,
  `text` tinytext,
  `type` int(11) DEFAULT NULL,
  `color` varchar(24) DEFAULT NULL,
  `ack` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `alarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `alarm` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.alarm_arxiv
CREATE TABLE IF NOT EXISTS `alarm_arxiv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `alarm` int(11) DEFAULT NULL,
  `eindex` int(11) DEFAULT NULL,
  `device` varchar(64) DEFAULT NULL,
  `text` tinytext,
  `type` int(11) DEFAULT NULL,
  `color` varchar(24) DEFAULT NULL,
  `ack` varchar(24) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.alarm_arxiv: ~12 rows (приблизительно)
/*!40000 ALTER TABLE `alarm_arxiv` DISABLE KEYS */;
INSERT INTO `alarm_arxiv` (`id`, `date`, `time`, `alarm`, `eindex`, `device`, `text`, `type`, `color`, `ack`) VALUES
	(1, '2018-07-10', '15:02:21', 2, 14, 'ВО 11.1', 'Авария пускателя вентилятора', 1, '#ff0000', 'I'),
	(2, '2018-07-10', '15:02:33', 2, 15, 'ВО 11.2', 'Авария пускателя вентилятора', 1, '#ff0000', 'I'),
	(3, '2018-07-10', '15:03:06', 1, 16, 'ВО 11.3', 'Авария пускателя нагревателя', 1, '#ff0000', 'I'),
	(4, '2018-07-10', '15:03:13', 2, 16, 'ВО 11.3', 'Авария пускателя вентилятора', 1, '#ff0000', 'I'),
	(5, '2018-07-10', '15:03:31', 1, 16, 'ВО 11.3', 'Авария пускателя нагревателя', 1, '#ffffff', 'IA'),
	(6, '2018-07-10', '15:04:31', 2, 14, 'ВО 11.1', 'Авария пускателя вентилятора', 1, '#ffffff', 'IA'),
	(7, '2018-07-10', '15:04:48', 2, 15, 'ВО 11.2', 'Авария пускателя вентилятора', 1, '#ffffff', 'IA'),
	(8, '2018-07-10', '15:05:00', 2, 16, 'ВО 11.3', 'Авария пускателя вентилятора', 1, '#ffffff', 'IA'),
	(9, '2018-07-10', '15:05:24', 1, 14, 'ВО 11.1', 'Авария пускателя нагревателя', 1, '#ff0000', 'I'),
	(10, '2018-07-10', '15:05:33', 1, 14, 'ВО 11.1', 'Авария пускателя нагревателя', 1, '#ffffff', 'IA'),
	(11, '2018-07-10', '15:24:26', 2, 14, 'ВО 11.1', 'Авария пускателя вентилятора', 1, '#ff0000', 'I'),
	(12, '2018-07-10', '15:24:38', 2, 14, 'ВО 11.1', 'Авария пускателя вентилятора', 1, '#ffffff', 'IA');
/*!40000 ALTER TABLE `alarm_arxiv` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.alarm_text
CREATE TABLE IF NOT EXISTS `alarm_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alarm` int(11) DEFAULT '0',
  `text` varchar(64) DEFAULT '-',
  `type` int(11) DEFAULT '1',
  `color` varchar(24) DEFAULT '#ff0000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.alarm_text: ~2 rows (приблизительно)
/*!40000 ALTER TABLE `alarm_text` DISABLE KEYS */;
INSERT INTO `alarm_text` (`id`, `alarm`, `text`, `type`, `color`) VALUES
	(1, 1, 'Авария пускателя нагревателя', 1, '#ff0000'),
	(2, 2, 'Авария пускателя вентилятора', 1, '#ff0000'),
	(3, 3, 'Лог 1', 5, '#c0c0c0');
/*!40000 ALTER TABLE `alarm_text` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.device
CREATE TABLE IF NOT EXISTS `device` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NameLong` varchar(64) NOT NULL DEFAULT '-',
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.device: ~53 rows (приблизительно)
/*!40000 ALTER TABLE `device` DISABLE KEYS */;
INSERT INTO `device` (`ID`, `NameLong`, `NameShort`, `EIndex`, `EType`, `aFloor`, `aHeatingLounger`, `aCamera`, `aInletValve`, `aHeatingPipes`, `aAirCooler`, `aComp`, `aVessel`, `aPumpsGroup`, `aReceiver`, `aCapasitor`, `aCompControl`) VALUES
	(1, 'Промсосуд R110', 'F0-R1', 1, 6, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0),
	(2, 'Цирк. рессивер R210', 'F0-R2', 2, 6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0),
	(3, 'Компрессор K010', 'F0-S1', 3, 5, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0),
	(4, 'Компрессор K020', 'F0-S2', 4, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0),
	(5, 'Компрессор K030', 'F0-S3', 5, 5, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0),
	(6, 'Группа насосов M411/M412', 'F0-P1', 6, 7, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0),
	(7, 'Группа насосов M311/M312', 'F0-P2', 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0),
	(8, 'Линейный ресивер №1', 'F0-J1', 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0),
	(9, 'Линейный ресивер №2', 'F0-J2', 9, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0),
	(10, 'Дренажный ресивер', 'F0-J3', 10, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0),
	(11, 'Конденсатор', 'F0-Rf1', 11, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0),
	(12, 'Управление компрессорной', 'F0-M1', 12, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1),
	(13, 'Клапан Y100.02', 'F1-B1-G1', 13, 3, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(14, 'ВО 11.1', 'F1-B1-C1', 14, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(15, 'ВО 11.2', 'F1-B1-C2', 15, 1, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(16, 'ВО 11.3', 'F1-B1-C3', 16, 1, 1, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0),
	(17, 'Камера №11', 'F1-B1', 17, 4, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(18, 'Клапан Y100.04', 'F1-B2-G1', 18, 3, 1, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(19, 'ВО 12.1', 'F1-B2-C1', 19, 1, 1, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(20, 'ВО 12.2', 'F1-B2-C2', 20, 1, 1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(21, 'Камера №12', 'F1-B2', 21, 4, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(22, 'Нагреватель ЕУ11', 'F1-H1', 22, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(23, 'Нагреватель', 'F1-B1-H1', 23, 2, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(24, 'Нагреватель', 'F1-B2-H1', 24, 2, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(25, 'Клапан Y100.07', 'F1-B3-G1', 25, 3, 1, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(26, 'Нагреватель', 'F1-B3-H1', 26, 2, 1, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(27, 'ВО 13.1', 'F1-B3-C1', 27, 1, 1, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(28, 'ВО 13.2', 'F1-B3-C2', 28, 1, 1, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(29, 'ВО 13.3', 'F1-B3-C3', 29, 1, 1, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0),
	(30, 'ВО 13.4', 'F1-B3-C4', 30, 1, 1, 0, 3, 0, 0, 4, 0, 0, 0, 0, 0, 0),
	(31, 'Камера №13', 'F1-B3', 31, 4, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(32, 'Нагреватель ЕЛ11', 'F1-H5', 32, 2, 1, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(33, 'Клапан Y100.09', 'F1-B4-G1', 33, 3, 1, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(34, 'Нагреватель', 'F1-B4-H1', 34, 2, 1, 0, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(35, 'Нагреватель ЕЛ12', 'F1-H4', 35, 2, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(36, 'ВО 14.1', 'F1-B4-C1', 36, 1, 1, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(37, 'ВО 14.2', 'F1-B4-C2', 37, 1, 1, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(38, 'Камера №14', 'F1-B4', 38, 4, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(39, 'Клапан Y151.02', 'F1-B5-G1', 39, 3, 1, 0, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(40, 'ВО 15.1', 'F1-B5-C1', 40, 1, 1, 0, 5, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(41, 'Нагреватель', 'F1-B5-H1', 41, 2, 1, 0, 5, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(42, 'Камера №15', 'F1-B5', 42, 4, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(43, 'Клапан Y100.11', 'F1-B6-G1', 43, 3, 1, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(44, 'Нагреватель', 'F1-B6-H1', 44, 2, 1, 0, 6, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(45, 'ВО 16.1', 'F1-B6-C1', 45, 1, 1, 0, 6, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(46, 'ВО 16.2', 'F1-B6-C2', 46, 1, 1, 0, 6, 0, 0, 2, 0, 0, 0, 0, 0, 0),
	(47, 'Камера №16', 'F1-B6', 47, 4, 1, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(48, 'Клапан YK1.05', 'F1-B7-G1', 48, 3, 1, 0, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0),
	(49, 'Нагреватель', 'F1-B7-H1', 49, 2, 1, 0, 7, 0, 1, 0, 0, 0, 0, 0, 0, 0),
	(50, 'ВО К1.1', 'F1-B7-C1', 50, 1, 1, 0, 7, 0, 0, 1, 0, 0, 0, 0, 0, 0),
	(51, 'Коридор 1-го этажа', 'F1-B7', 51, 4, 1, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(52, 'Нагреватель ЕУ12', 'F1-H2', 52, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
	(53, 'Нагреватель ЕЛ13', 'F1-H3', 53, 2, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
/*!40000 ALTER TABLE `device` ENABLE KEYS */;

-- Дамп структуры для таблица e_holod.event_arxiv
CREATE TABLE IF NOT EXISTS `event_arxiv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `eindex` int(11) DEFAULT '0',
  `name` varchar(64) DEFAULT NULL,
  `status` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы e_holod.event_arxiv: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `event_arxiv` DISABLE KEYS */;
INSERT INTO `event_arxiv` (`id`, `date`, `time`, `eindex`, `name`, `status`) VALUES
	(1, '2018-06-05', '09:00:41', 14, 'ВО 11.1', 'Старт');
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

-- Дамп данных таблицы e_holod.menu: ~78 rows (приблизительно)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`ID`, `eq_type`, `n`, `name`, `command`, `color`, `func`, `access`) VALUES
	(101, 1, 0, 'СТОП', 2, '#ff0000', 'start_stop_mex', 2),
	(102, 1, 1, 'Вкл. вентилятор', 1, '#cccccc', 'start_stop_mex', 2),
	(103, 1, 2, 'Вкл. нагреватель', 3, '#cccccc', 'start_stop_mex', 2),
	(104, 1, 3, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(105, 1, 4, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(106, 1, 5, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(107, 1, 6, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(108, 1, 7, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(109, 1, 8, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(201, 2, 0, 'Выключить', 2, '#ff0000', 'start_stop_mex', 2),
	(202, 2, 1, 'Включить', 1, '#cccccc', 'start_stop_mex', 2),
	(203, 2, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(204, 2, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(205, 2, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(206, 2, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(207, 2, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(208, 2, 7, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(301, 3, 0, 'Закрыть', 1, '#cccccc', 'start_stop_mex', 2),
	(302, 3, 1, 'Открыть', 3, '#cccccc', 'start_stop_mex', 2),
	(303, 3, 2, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(304, 3, 3, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(305, 3, 4, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(306, 3, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(307, 3, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(308, 3, 7, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(401, 4, 0, 'СТОП', 2, '#ff0000', 'start_stop_mex', 2),
	(402, 4, 1, 'ПУСК', 1, '#cccccc', 'start_stop_mex', 2),
	(403, 4, 2, 'Разморозка', 3, '#cccccc', 'start_stop_mex', 2),
	(404, 4, 3, 'Задание', 5, '#7bfd64', 'open_tex_settings_window', 2),
	(405, 4, 4, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(406, 4, 5, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(407, 4, 6, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(408, 4, 7, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(409, 4, 8, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(410, 4, 9, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(505, 5, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(506, 5, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(507, 5, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(508, 5, 3, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(509, 5, 4, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(510, 5, 5, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(511, 5, 6, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(605, 6, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(606, 6, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(607, 6, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(608, 6, 3, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(609, 6, 4, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(610, 6, 5, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(611, 6, 6, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(701, 7, 0, 'Включить насос 1', 1, '#cccccc', 'start_stop_mex', 2),
	(702, 7, 1, 'Выключить насосы', 2, '#ff0000', 'start_stop_mex', 2),
	(703, 7, 2, 'Включить насос 2', 3, '#cccccc', 'start_stop_mex', 2),
	(705, 7, 0, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(706, 7, 1, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(707, 7, 2, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(708, 7, 3, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(709, 7, 4, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(710, 7, 5, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(711, 7, 6, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(805, 8, 0, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(806, 8, 1, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(807, 8, 2, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(808, 8, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(809, 8, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(810, 8, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(905, 9, 0, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(906, 9, 1, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(907, 9, 2, 'Датчики', 0, '#7c7cff', 'open_datchiki', 2),
	(908, 9, 3, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(909, 9, 4, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(910, 9, 5, 'Настройки', 0, '#cccccc', 'open_settings_window', 1),
	(1001, 10, 0, 'Запуск', 1, '#cccccc', 'start_stop_mex', 2),
	(1002, 10, 1, 'Останов', 2, '#ff0000', 'start_stop_mex', 2),
	(1005, 10, 2, 'Задание', 0, '#7bfd64', 'open_tex_settings_window', 2),
	(1006, 10, 3, 'Ремонт', 9, '#cccccc', 'start_stop_mex', 0),
	(1007, 10, 4, 'Сброс аварии', 4, '#cccccc', 'start_stop_mex', 2),
	(1008, 10, 5, 'Сообщения', 0, '#cccccc', 'archiv_alarm_device', 3),
	(1009, 10, 6, 'Журналы', 0, '#cccccc', 'archiv_device', 3),
	(1010, 10, 7, 'Настройки', 0, '#cccccc', 'open_settings_window', 1);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Дамп данных таблицы e_holod.users: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `login`, `hash`, `name`, `control`, `path`, `active`) VALUES
	(1, 'admin', '205F3226F9585CADDE72B4ABE1E96502', 'Админ', 1, 'control', 1),
	(2, 'oper', 'CD8342C9DC3A81BA128AE3A3185D1865', 'Оператор', 2, 'control', 1),
	(3, 'user', '827CCB0EEA8A706C4C34A16891F84E7B', 'Юзер', 3, 'control', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
