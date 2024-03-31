const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const mongoURL = 'mongodb://localhost:27017';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
MongoClient.connect(mongoURL, options, (err, client) => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }
});
   

//mongoose
    //.connect(mongoURL, options)
    //.then(() => {
    //    console.log('connected to MongoDB');
    //})
//.catch((error) => {
      //  console.error('error connecting to MongoDB', error);
   // });