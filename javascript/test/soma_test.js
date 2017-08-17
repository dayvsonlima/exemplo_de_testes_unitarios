var chai = require('chai');
var soma = require('../soma');
var expect = chai.expect;


describe('#soma', function() {
	var resultado = soma(1, 2);

	it('deve somar dois números', function(){
		expect(resultado).to.equal(3);
	});
});