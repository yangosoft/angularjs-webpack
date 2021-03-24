import template from './app.component2.html';


const AppComponent2 = {
  template,
  controller: ['$routeParams',
    function PhoneDetailController($routeParams) {
      this.phoneId = $routeParams.phoneId;
      console.log(this.phoneId);
    }
  ]
};

export default AppComponent2;