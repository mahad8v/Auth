const express = require('express');
// const sequelize = require('./config/config');
const postRoutes = require('./routes/router');
const db = require("./models")
const app = express();
const PORT = 5000;


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      
});


app.use(express.json());

// Routes
app.use('/api/v1/', postRoutes);

