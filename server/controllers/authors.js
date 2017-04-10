Author = require('../models/').Author;
Book = require('../models/').Book;

module.exports =  {
    //Get a list of all authors using model.findAll()
    index:  function(req, res) {
        Author.findAll({
            include: Book
        })
            .then(function (authors) {
                res.status(200).json(authors);
            })
            .catch(function (error) {
                res.status(500).json(error);
            });
    },

    //Get an author by the unique ID using model.findById()
    show:  function(req, res) {
        Author.findById(req.params.id, {
            include: Book
        })
            .then(function (author){
                res.status(200).json(author);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

//Create a new author using model.create()
    create:  function(req, res) {
        console.log("Author create called with ", req.body);
        console.log("Author create called with ", req.url);
        Author.create(req.body)
            .then(function (newAuthor) {
                console.log("author controller call done ######");
                res.status(200).json(newAuthor);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Edit an existing author details using model.update()
    update:  function(req, res) {
        console.log("inside the update",req.params);
        Author.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then(function (updatedRecords) {
                res.status(200).json(updatedRecords);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    },

    //Delete an existing author by the unique ID using model.destroy()
    delete:  function(req, res) {
        Author.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (deletedRecords) {
                res.status(200).json(deletedRecords);
            })
            .catch(function (error){
                res.status(500).json(error);
            });
    }

};