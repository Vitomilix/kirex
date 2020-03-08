CREATE DATABASE kirex
USE kirex
CREATE TABLE Admins (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  employeeNumber varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  resetToken varchar(255) DEFAULT NULL,
  resetTokenExpiration datetime DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL
);



CREATE TABLE SequelizeMeta (
  name varchar(255) COLLATE utf8_unicode_ci NOT NULL PRIMARY KEY,
  UNIQUE KEY name (name)
);



CREATE TABLE Users (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  employeeNumber varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  resetToken varchar(255) DEFAULT NULL,
  resetTokenExpiration datetime DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL
);

CREATE TABLE Hiras (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  companyNumber int(11) DEFAULT NULL,
  taskActivity varchar(255) DEFAULT NULL,
  projectNumber varchar(255) DEFAULT NULL,
  area varchar(255) DEFAULT NULL,
  doneBefore int(11) DEFAULT NULL,
  haveChangesMade int(11) DEFAULT NULL,
  electricalEquipment int(11) DEFAULT NULL,
  safeAccess int(11) DEFAULT NULL,
  machineGuarding int(11) DEFAULT NULL,
  correctEquipment int(11) DEFAULT NULL,
  preinspectedEquipment int(11) DEFAULT NULL,
  sds int(11) DEFAULT NULL,
  controlToxic int(11) DEFAULT NULL,
  fumeSystems int(11) DEFAULT NULL,
  ppe int(11) DEFAULT NULL,
  hazard varchar(255) DEFAULT NULL,
  otherHazard text,
  controlHazard varchar(255) DEFAULT NULL,
  controlHazardOther varchar(255) DEFAULT NULL,
  monitorProcess varchar(255) DEFAULT NULL,
  additionalComments text,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  UserId int(11) NOT NULL
);

CREATE TABLE Incidents (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  division varchar(255) DEFAULT NULL,
  incidentLocation varchar(255) DEFAULT NULL,
  division_employee varchar(255) DEFAULT NULL,
  events varchar(255) DEFAULT NULL,
  date datetime DEFAULT NULL,
  injuries varchar(255) DEFAULT NULL,
  downtime int(11) DEFAULT NULL,
  cause varchar(255) DEFAULT NULL,
  measures varchar(255) DEFAULT NULL,
  imageOne varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  UserId int(11) NOT NULL
);
