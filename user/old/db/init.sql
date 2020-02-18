-- -- phpMyAdmin SQL Dump
-- -- version 4.9.0.1
-- -- https://www.phpmyadmin.net/
-- --
-- -- Host: localhost:8889
-- -- Generation Time: Feb 14, 2020 at 02:09 PM
-- -- Server version: 5.7.26
-- -- PHP Version: 7.3.8

-- SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
-- SET time_zone = "+00:00";

-- --
-- -- Database: `kirex`
-- --

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `admins`
-- --
-- USE kirex

-- CREATE TABLE `admins` (
--   `id` int(11) NOT NULL,
--   `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `companyNumber` varchar(15) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `resetToken` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `resetTokenExpiration` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `hira`
-- --

-- CREATE TABLE `hira` (
--   `ID` int(11) NOT NULL,
--   `Name` text NOT NULL,
--   `MintekNumber` varchar(40) NOT NULL,
--   `TaskActivity` varchar(40) NOT NULL,
--   `DateDone` varchar(40) NOT NULL,
--   `ProjectNumber` varchar(40) NOT NULL,
--   `Area` text NOT NULL,
--   `DoneBefore` int(11) NOT NULL,
--   `HaveChangesMade` int(11) NOT NULL,
--   `SafeAccess` int(11) NOT NULL,
--   `ElectricalEquipment` int(11) NOT NULL,
--   `MachineGuarding` int(11) NOT NULL,
--   `CorrectEquipment` int(11) NOT NULL,
--   `PreinspectedEquipment` int(11) NOT NULL,
--   `SDS` int(11) NOT NULL,
--   `ControlToxic` int(11) NOT NULL,
--   `FumeSystems` int(11) NOT NULL,
--   `PPE` int(11) NOT NULL,
--   `Hazard` varchar(255) NOT NULL,
--   `OtherHazard` varchar(255) NOT NULL,
--   `ControlHazard` varchar(255) NOT NULL,
--   `ControlHazardOther` varchar(255) NOT NULL,
--   `MonitorProcess` int(11) NOT NULL,
--   `AdditionalComments` varchar(255) NOT NULL
-- ) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `incidents`
-- --

-- CREATE TABLE `incidents` (
--   `id` int(11) NOT NULL,
--   `division` varchar(50) NOT NULL,
--   `incident_location` varchar(50) NOT NULL,
--   `division_employee` varchar(50) NOT NULL,
--   `events` mediumtext NOT NULL,
--   `date` varchar(50) NOT NULL,
--   `injuries` mediumtext NOT NULL,
--   `downtime` int(11) NOT NULL,
--   `cause` mediumtext NOT NULL,
--   `measures` mediumtext NOT NULL,
--   `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `image` varchar(100) NOT NULL,
--   `image1` varchar(100) NOT NULL,
--   `image2` varchar(100) NOT NULL,
--   `image3` varchar(100) NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- -- --------------------------------------------------------

-- --
-- -- Table structure for table `users`
-- --

-- CREATE TABLE `users` (
--   `id` int(11) NOT NULL,
--   `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `companyNumber` varchar(15) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `resetToken` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
--   `resetTokenExpiration` varchar(255) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --
-- -- Indexes for dumped tables
-- --

-- --
-- -- Indexes for table `admins`
-- --
-- ALTER TABLE `admins`
--   ADD PRIMARY KEY (`id`);
-- ALTER TABLE `users`
--   ADD PRIMARY KEY (`id`);
-- ALTER TABLE `hira`
--   ADD PRIMARY KEY (`id`);
-- ALTER TABLE `incidents`
--   ADD PRIMARY KEY (`id`);

-- --
-- -- AUTO_INCREMENT for dumped tables
-- --

-- --
-- -- AUTO_INCREMENT for table `all`
-- --
-- ALTER TABLE `admins`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- ALTER TABLE `users`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- ALTER TABLE `hira`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- ALTER TABLE `incidents`
--   MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
