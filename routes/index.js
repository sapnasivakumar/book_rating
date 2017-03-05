var express = require('express');
var router = express.Router();
var authors = require('../server/controllers/authors'),
    books = require('../server/controllers/books');

router.get('/authors', authors.index);
router.get('/authors/:id', authors.show);
router.post('/authors', authors.create);
router.put('/authors/:id', authors.update);
router.delete('/authors', authors.delete);

router.get('/books', books.index);
router.get('/books/:id', books.show);
router.post('/books', books.create);
router.put('/books/:id', books.update);
router.delete('/books',books.delete);

module.exports = router;
