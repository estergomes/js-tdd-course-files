describe('Main', function(){

  //roda uma vez antes do bloco
  before(function(){
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(function(){
    console.log('after');
  });

   // roda uma vez, depois do bloco
   afterEach(function(){
    console.log('after');
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
