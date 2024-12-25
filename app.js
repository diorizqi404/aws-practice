const express = require('express');
const bodyParser = require('body-parser');
const { initDB } = require('./models');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const HOST = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', userRoutes);

initDB().then(() => {
    app.listen(PORT, HOST,() => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
    });
});