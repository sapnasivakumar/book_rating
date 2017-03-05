
module.exports = {
    "development": {
      "username": "root",
      "password": "test",
      "database": "database_development",
      "host": "localhost",
      "dialect": "mysql"
    },
    "staging": {
        "url": process.env.DATABASE_URL,
        "dialect": "postgres"
    }
};
