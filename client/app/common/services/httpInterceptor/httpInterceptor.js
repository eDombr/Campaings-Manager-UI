import angular from 'angular';
import httpInterceptor from './httpInterceptor.service';

let httpInterceptorModule = angular.module('app.httpInterceptor', [])

    .service('HttpInterceptor', httpInterceptor)

    .name;

export default httpInterceptorModule;