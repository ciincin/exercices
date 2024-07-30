const pgPromise = require("pg-promise");
const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

async function setupDB() {
  await db.none(`
    DROP TABLE IF EXISTS planets;
    CREATE TABLE planets
    (id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image TEXT
    );

    DROP TABLE IF EXISTS users;
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    token TEXT
    );
    `);

  await db.none(`INSERT INTO planets (name) VALUES ('earth')`);
  await db.none(`INSERT INTO planets (name) VALUES ('mars')`);

  await db.none(`INSERT INTO users (username, password) VALUES ('dummy', 'dummy')`);

  const planets2 = await db.many(`SELECT * FROM planets`);

  console.log(planets2);
}

setupDB();

module.exports = db
