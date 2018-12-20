-- Drop, create & use database burgers_db
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create table burgers 
CREATE TABLE burgers (
  id INT(4) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP NULL,
  PRIMARY KEY (id)
);
