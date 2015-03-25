var addLinkCtrl = function($scope) {
  $scope.links = [];

  $scope.inputLink = "";
  $scope.addLink = function() {
    $scope.links.push($scope.inputLink);
    $scope.inputLink = "";
  };

};

angular
  .module("BlogBook")
  .controller("addLinkCtrl", addLinkCtrl)
