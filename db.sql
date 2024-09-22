CREATE DATABASE register_users;

CREATE USER 'okuryliuk'@'localhost' IDENTIFIED BY 'securepass';

GRANT ALL PRIVILEGES ON register_users . * TO 'okuryliuk'@'localhost';

USE register_users;

CREATE TABLE IF NOT EXISTS users (
    `id` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    `login` VARCHAR(30) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL, 
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL
);