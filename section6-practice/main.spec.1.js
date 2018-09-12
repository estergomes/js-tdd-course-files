var expect = require('chai').expect;

describe('Main', function(){

  var arr;

  //roda uma vez antes do bloco
  before(function(){
    // inicia conexão de banco
    // cria um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(function(){
    // encerrra conexão de banco
    // apaga um conjunto de dados
  });

  // roda uma vez, depois do bloco
  beforeEach(function(){
    arr = [1, 2, 3];
  });

  // roda uma vez, depois do bloco
  afterEach(function(){

  });

  // testa tipos (smoke test)
  it('should have an array', function() {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 2 when pop a value from the array', function() {
    arr.pop();
    console.log(arr.length);
  });

  it('should remove the value 3 when pop a value from the array', function() {
    console.log(arr.pop()=== 3);
    expect(arr).to.not.include(3);
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
