const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('../database/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes =require('./routes/taskRoutes')
const morgan = require('morgan');



app.use(bodyParser.json());
app.use(cors());
app.use('/auth', authRoutes);
app.use('/task', taskRoutes);
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

//localhost:4002/auth/register

const port = 4002;

app.listen(port, ()=> {
    console.log(`server is running on port`, port);
});