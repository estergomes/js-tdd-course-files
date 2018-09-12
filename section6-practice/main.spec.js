var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function(){

  //smoke tests
  describe('Smoke Test', function(){

    it('should exist the calc lib', function(){
      expect(calc).to.exist;
    });

    it('should exist the method sum', function(){
      expect(calc.sum).to.exist;
    });

    it('should exist the method sum', function(){
      expect(calc.sub).to.exist;
    });

    it('should exist the method sum', function(){
      expect(calc.mult).to.exist;
    });

    it('should exist the method sum', function(){
      expect(calc.div).to.exist;
    });
  });

  // SUM
  describe('Sum', function() {
    it('should return 4 when `sum(2,2)`', function(){
      expect(calc.sum(2,2)).to.be.equal(4);
    });
  });
  //SUB
  describe('Sub', function() {
    it('should return 4 when `sub(2,2)`', function(){
      expect(calc.sub(6,2)).to.be.equal(4);
    });
    it('should return -4 when `sub(6,10)`', function(){
      expect(calc.sub(6,10)).to.be.equal(-4);
    });
  });
  //MULT
  describe('Mult', function() {
    it('should return 4 when `mult(2,2)`', function(){
      expect(calc.mult(2,2)).to.be.equal(4);
    });
  });
  //div
  describe('Div', function() {
    it('should return 4 when `div(2,2)`', function(){
      expect(calc.div(4,2)).to.be.equal(2);
    });
    it('should return "Nâo pode dividitr por zero" ', function(){
      expect(calc.div(4,2)).to.be.equal(2);
    });
  });


});













// describe('Main', function() {
//   describe('Method A', function() {
//     context('Case 1', function(){
//       it('should happen blabla', function(){

//         throw new Error('just an error');
//       });
//     });
//     context('Case 2', function(){
//       it('should happen miimi', function(){

//       });
//     });
//   });
// });
