const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost/books-app';

mongoose.connect(MONGODB_URI, {

})
    .then(db => console.log('Database connected'))
    .catch(err => console.log(err));