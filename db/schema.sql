CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers_db (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date timestamp NOT NULL DEFAULT NOW(),
    PRIMARY KEY (id)
);