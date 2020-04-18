const db = require('./models');

db.sequelize
  .authenticate()
  .then(_ => console.log('Connected'))
  .catch(console.error);
