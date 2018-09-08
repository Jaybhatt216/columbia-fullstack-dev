DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NULL,
  song VARCHAR(100) NULL,
  year INT NULL,
  raw_total DECIMAL(10,4) NULL,
  raw_usa DECIMAL(10,4) NULL,
  raw_uk DECIMAL(10,4) NULL,
  raw_eur DECIMAL(10,4) NULL,
  raw_row DECIMAL(10,4) NULL,
  PRIMARY KEY (position)
);

SELECT * FROM top5000;

BULK INSERT top5000
FROM 'c:\data\npidata_20050523-20160612_sample2.csv'
WITH (
    FIELDTERMINATOR = ',',
    FIRSTROW = 2,
    ROWTERMINATOR = '\r\n'
)
GO

SELECT position,artist,song
FROM top5000
WHERE artist = 'Dr Hook';
SELECT position,artist,song
FROM top5000
WHERE position BETWEEN 500 and 1000;
SELECT artist, COUNT(*)
FROM top5000
GROUP BY artist
HAVING COUNT(*)>1;
