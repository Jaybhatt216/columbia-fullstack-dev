-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --
use programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER NOT NULL AUTO_INCREMENT,

  -- Create a string column called "language" --
  language VARCHAR(255) NOT NULL,

  -- Create an integer column called "rating" --
  rating INTEGER,

  -- Create a boolean column called "mastered" which will automatically fill --
  mastered BOOLEAN NOT NULL,
  -- with true when a new row is made and the value isn't otherwise defined. --

  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO language (ID,JAVA)
VALUES ('Object oriented'  );
ALTER TABLE programming_languages
ADD type VARCHAR(255) NOT NULL