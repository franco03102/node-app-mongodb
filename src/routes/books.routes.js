const { Router } = require('express');
const router = Router();
const { renderBookForm, createNewBook, renderBooks, renderUpdateForm, updateBook, deleteBook } = require('../controllers/books.controller');
const {isAuthenticated} = require('../helpers/auth');
//New book
router.get('/books/add', isAuthenticated, renderBookForm);
router.post('/books/new-book', isAuthenticated, createNewBook);

//Get all books
router.get('/books', isAuthenticated, renderBooks);

//Update books
router.get('/books/update/:id', isAuthenticated, renderUpdateForm);
router.put('/books/update/:id', isAuthenticated, updateBook);

//Delete books
router.delete('/books/delete/:id', isAuthenticated, deleteBook);

module.exports = router;