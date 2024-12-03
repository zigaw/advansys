angular.module('myApp')
    .service('userService', function ($http) {
        this.getUsers = function () {
            return $http.get('https://jsonplaceholder.typicode.com/users');
        };
    });
