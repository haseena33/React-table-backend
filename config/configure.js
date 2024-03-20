// configure.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('React_Employee', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
});

// Export the Sequelize instance
module.exports = sequelize;
