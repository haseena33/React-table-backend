const sequelize = require('./config/configure');
const User = require('./models/usermodel');

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Synchronize models with the database
    await User.sync({ force: true }); // This will drop the table if it already exists
    
    console.log('Models synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = syncDatabase;
