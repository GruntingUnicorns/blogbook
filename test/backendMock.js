module.exports.MockBook = function($httpBackend) {

  var card = [
    posts: {
      author: {
        name: 'aaa'
      };
    };
  ];
  $httpBackend.whenGET('http://localhost:3000/').respond(card)
};