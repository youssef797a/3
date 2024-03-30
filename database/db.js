const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017';
const options = {
   
}


mongoose
    .connect(mongoURL, options)
    .then(() => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.error('error connecting to MongoDB', error);
    });