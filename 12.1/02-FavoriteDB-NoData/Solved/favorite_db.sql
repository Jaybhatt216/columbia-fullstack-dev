-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Makes it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Makes a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Makes an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  id INTEGER NOT NULL AUTO_INCREMENT,
  movie VARCHAR(100) NOT NULL,
  -- Creates a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10),
  PRIMARY KEY (id)
);

-- favorite_foods inserts --
INSERT INTO favorite_foods (food, score)
VALUES ("Sushi", 10);

INSERT INTO favorite_foods (food, score)
VALUES ("Chinese", 8);

INSERT INTO favorite_foods (food, score)
VALUES ("Korean", 7);

-- favorite_songs inserts --
INSERT INTO favorite_songs (song, artist, score)
VALUES ("My Girl", "The Temptations", 7);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Hangar 18", "Megadeath", 10);

INSERT INTO favorite_songs (song, artist, score)
VALUES ("Bohemian Rhapsody", "Queen", 7);

-- favorite_movies inserts --
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (id, "ET", TRUE, 10);

INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (id, "Dracula", FALSE, 8);

INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (id, "Spider-Man", TRUE, 9);


