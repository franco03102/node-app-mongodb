const booksCtrl = {};
const Book = require('../models/Book');

booksCtrl.renderBookForm = (req,res) => {

    res.render('books/newBook');

};

booksCtrl.createNewBook = async (req,res) => {
    
    const {title, author, year, status} = req.body;
    const newBook = new Book({title, author, year, status});
    await newBook.save();
    req.flash('success_msg', 'El libro ha sido creado satisfactoriamente');
    res.redirect('/books');

};

booksCtrl.renderBooks = async (req,res) => {

    const books = await Book.find();
    res.render('books/allBooks', {books});

};

booksCtrl.renderUpdateForm = async (req,res) => {

    const book = await Book.findById(req.params.id);
    res.render('books/updateBook', { book });

};

booksCtrl.updateBook = async (req,res) => {

    const { title, author, year, status } = req.body;
    await Book.findByIdAndUpdate(req.params.id, {title, author, year, status});
    req.flash('success_msg', 'El libro ha sido actualizado satisfactoriamente');
    res.redirect('/books');

};

booksCtrl.renderDeleteForm = (req,res) => {

    res.send('render books');

};

booksCtrl.deleteBook = async (req,res) => {

    await Book.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'El libro ha sido eliminado satisfactoriamente');
    res.redirect('/books');

};

module.exports = booksCtrl;