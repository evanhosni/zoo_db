const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const animalRoute = require('./routes/animalRoutes');
app.use('/api/animals',animalRoute);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at http://localhost:3000'));
});
