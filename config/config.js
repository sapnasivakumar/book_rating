
module.exports = {
    "development": {
      "username": "root",
      "password": "test",
      "database": "database_development",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "test",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "staging": {
        "url": process.env.DATABASE_URL,
        "dialect": "postgres"
    },
    "production": {
      "username": "root",
      "password": "test",
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
};
