const {Schema, model} = require('mongoose');

/*Creación del objeto del libro*/
const BookSchema = new Schema({

    title: {
        
        type: String,
        required: true

    },
    author: {
        
        type: String,
        required: true
        
    },
    year: {
        
        type: Number,
        required: true
        
    },
    status: {
        
        type: String,
        required: true
        
    }

}, {

    timestamps: true

});

module.exports = model('Libro', BookSchema, 'Libros');