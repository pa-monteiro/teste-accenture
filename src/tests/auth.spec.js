const should = require('should');
const request = require('request');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const chai = require('chai');
const expect = chai.expect;
const urlBase = 'http://localhost:3000';

describe('GET user', async () => {
    it('Deve verificar se existe user', () => {
        const id = '5dee33c6976bb64510570c4c';
        
        const result = userController.show(id);

        return result.then((user) => {
            assert.equal(user.name, 'string');
        });
    });
});