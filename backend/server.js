const express = require('express');
const cors = require("cors")
// const sequelize = require('./config/config');
const postRoutes = require('./routes/router');
const db = require("./models")
const app = express();
app.use(cors())
const PORT = 5000;

app.use((req, res, next) => {
  setTimeout(() => {
    next()
  }, 1500);
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      
});



// Routes
app.use('/api/v1/', postRoutes);

