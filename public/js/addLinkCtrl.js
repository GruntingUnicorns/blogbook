var addLinkCtrl = function($scope) {
  $scope.links = [];

  $scope.inputLink = "";
  $scope.addLink = function(input) {
    $scope.links.push(input);
    $scope.inputLink = "";
  };

};

angular
  .module("BlogBook")
  .controller("addLinkCtrl", addLinkCtrl)
