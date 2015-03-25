describe("The add Link Controller", function(){
  var scope, ctrl;
  
  beforeEach(module('blogBook'));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('addLinkCtrl', {
      $scope: scope
    });
  }));

  // it("add an typed in link into the links array", function(){
    
  //   expect()
  // });


});