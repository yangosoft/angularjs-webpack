import template from './app.main.html';


const AppMain = {
  template,
  controller: ['$scope',
    function mainCtrl($scope) {
      $scope.onButtonClick = function()
      {
        console.log("Click");
      };
    }
  ],
  controllerAs: 'mainCtrl'
};

export default AppMain;