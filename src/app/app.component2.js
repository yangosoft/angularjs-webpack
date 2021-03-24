import template from './app.component2.html';


const AppComponent2 = {
  template,
  controller: ['$routeParams','$scope','serviceId',
    function ($routeParams, $scope,serviceId) {
      $scope.id = $routeParams.id;
      serviceId.function1($scope.id);
      console.log($scope.id);
    }
  ],
  controllerAs: 'cmp2Ctrl'
};

export default AppComponent2;