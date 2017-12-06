DROP TABLE IF EXISTS flavors;

DROP TABLE IF EXISTS users;

CREATE TABLE flavors (
  id SERIAL,
  name VARCHAR(255) NOT NULL,
  calories VARCHAR(255) NOT NULL
);


CREATE TABLE users (
  id SERIAL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);


-- TODO: Add schema for rants table here
