import angular from "angular";

var myApp = angular.module('myApp', []);

myApp.directive('appComponent', () => {
    return {
        template: '<div>Hello!</div>'
    }
});

angular.element(document).ready(() => {
    angular.bootstrap(document, [myApp.name], { strictDi: true });
});

export default myApp;