CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(150) NOT NULL,
	chomped BOOLEAN default false,
	PRIMARY KEY(id)
);