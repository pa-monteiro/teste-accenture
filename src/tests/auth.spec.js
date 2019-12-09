const should = require('should');
const request = require('request');
const chai = require('chai');
const expect = chai.expect;
const urlBase = 'http://localhost:3000';

describe('Sign up | Autenticação', function(){
    it('Deve verificar se existe user', function(done){
        request.get({
            url: urlBase + '/auth/usuario'
        },
        function(err, req, res){
            const _body = {};
            try {
                _body = JSON.parse(req);
            }
            catch(e){
                _body = {};
            }

            expect(response.statusCode).to.equal(200);
        }
    )
    });
});