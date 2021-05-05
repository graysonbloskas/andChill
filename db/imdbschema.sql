DROP DATABASE IF EXISTS chill_db;
CREATE database chill_db;

USE chill_db;

CREATE TABLE movies (
  id INT NOT NULL,
  title VARCHAR(255) NULL,
  genre VARCHAR(255) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM movies;