DROP DATABASE IF EXISTS noiseDB;

CREATE DATABASE noiseDB;

USE noiseDB;

CREATE TABLE music (
  id INT NOT NULL AUTO_INCREMENT,
  song VARCHAR(255) NOT NULL,
 genre VARCHAR(255)NOT NULL,
  artist VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO music (id, song, genre,artist)
VALUES (1,"song1", "song" , "singer");


INSERT INTO music (id, song, genre,artist)
VALUES (2,"song1", "song" , "singer");


INSERT INTO music (id, song, genre,artist)
VALUES (3,"song1", "song" , "singer");

/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123'