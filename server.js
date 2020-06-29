const express = require('express');
const app = express();
const logger = require('morgan');
const port = process.env.PORT || 3001;
// This is where our routers go


require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

// This is where our routes go


app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});
