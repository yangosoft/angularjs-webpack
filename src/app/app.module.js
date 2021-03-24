import 'bootstrap';

import angular from 'angular';

require('angular-route');
import appComponent from './app.component';
import ComponentsModule from './components/components';
import ComponentsModule2 from './components/component2';
import 'bootstrap/dist/css/bootstrap.min.css';

angular.module('app', [
  ComponentsModule.name,
  ComponentsModule2.name,
  'ngRoute',
]).component('app', appComponent)
.config(['$routeProvider',
function config($routeProvider) {
  $routeProvider.
    when('/hello', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', ComponentsModule2).
    otherwise('/');
}
]);
