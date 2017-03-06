
module.exports = {
    "development": {
      "username": "root",
      "password": "test",
      "database": "database_development",
      "host": "localhost",
      "dialect": "mysql"
    },
    "staging": {
        "use_env_variable": "DATABASE_URL",
        "dialect": "postgres"
    },
    "test": {
        "username": "root",
        "password": "test",
        "database": "database_test",
        "host": "localhost",
        "dialect": "mysql"
    }
};
