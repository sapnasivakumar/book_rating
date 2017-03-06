
var expect = require('chai').expect;
var httpMocks = require('node-mocks-http');

var models = require('../../server/models');
var ctrl = require('../../server/controllers/books');

var res;

describe('Server controller tests', function () {
    before(function () {
        return models.sequelize
            .sync({ force: true })
            .then(function () {
                models.Author.bulkCreate([
                    { name: 'Test author 1', bio: 'Test bio' },
                    { name: 'Test author 2', bio: 'Test bio' }
                ]);
                models.Book.bulkCreate([
                    { name: 'Test book 1', isbn: 1234, description: 'sample data', author_id: 1, rating: 4 },
                    { name: 'Test author 2', isbn: 5678, description: 'sample data 2', author_id: 2, rating: 5 }
                ]);
            });
    });

    beforeEach(function () {
        res = httpMocks.createResponse({
            eventEmitter: require('events').EventEmitter
        });
    });

    describe('Book tests', function () {
        it('Should create a new book', function (done) {
            var req = httpMocks.createRequest({
                body: { name: 'Test book 0', isbn: 0987, description: 'sample data 0', author_id: 1, rating: 3 },
            });

            ctrl.create(req, res);
            res.on('end', function () {
                var response = JSON.parse(res._getData());
                expect(res.statusCode).to.equal(200);
                expect(response.name).to.equal('Test book 0');
                done();
            });
        });

        it('Should fetch all books', function (done) {
            req = httpMocks.createRequest();
            ctrl.index(req, res);
            res.on('end', function () {
                var response = JSON.parse(res._getData());
                expect(res.statusCode).to.equal(200);
                expect(response.length).to.be.above(0);
                done();
            });
        });

        it('Should fetch book by ID', function (done) {
            req = httpMocks.createRequest({
                params: { id: 1 }
            });
            ctrl.show(req, res);
            res.on('end', function () {
                var response = JSON.parse(res._getData());
                expect(res.statusCode).to.equal(200);
                expect(response.name).to.equal('Test book 1');
                done()
            });
        });

        it('Should update a book', function (done) {
            req = httpMocks.createRequest({
                params: { id: 2 },
                body: { name: 'updated book 2', isbn: 5678, description: 'updated data 2', author_id: 3, rating: 5 }
            });

            ctrl.update(req, res);
            res.on('end', function () {
                models.Book.findById(1)
                    .then(function (result) {
                        var updatedBook = result.get({ plain: true });
                        expect(updatedBook.name).to.equal('Updated book 2');
                        expect(updatedBook.description).to.equal('updated data 2');
                    });
                done();
            });
        });

        it('Should delete a book by ID', function (done) {
            req = httpMocks.createRequest({
                params: { id: 7 }
            });

            ctrl.delete(req, res);
            res.on('end', function () {
                //Ensure that the book does not exist.
                models.Book.findById(7)
                    .then(function (response) {
                        expect(response).to.equal(null);
                    });
                done();
            });
        });
    });
});