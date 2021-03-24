import 'bootstrap';

import angular from 'angular';

require('angular-route');
import appComponent from './app.component';
import appComponent2 from './app.component2';
import appMain from './app.main';
import ComponentsModule from './components/components';
import ComponentsModule2 from './components/component2';
import Service1 from './services/srv.service1';
import 'bootstrap/dist/css/bootstrap.min.css';

angular.module('app', [
  ComponentsModule.name,
  ComponentsModule2.name,
  'ngRoute',
])
  .factory('serviceId',Service1.service)
  .component('app', appComponent)
  .component('appComponent2', appComponent2)
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/main', appMain).
        when('/component2/:id', appComponent2).
        otherwise('/main');
    }
  ]);
