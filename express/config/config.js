require('dotenv').config()

module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    },
  },
  test: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    }  
  },
  production: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: 'postgres',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: false,
    }  
  },
}
