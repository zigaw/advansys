angular.module('myApp')
    .controller('MainController', function ($scope, userService) {
        $scope.users = [];
        $scope.selectedUser = null;
        $scope.deleteCandidate = null;

        // Fetch users from service
        userService.getUsers().then(function (response) {
            $scope.users = response.data;
        });

        // Select user for modal
        $scope.selectUser = function (user) {
            $scope.selectedUser = user;
        };

        // Close user details modal
        $scope.closeModal = function () {
            $scope.selectedUser = null;
        };

        // Delete confirmation logic
        $scope.confirmDelete = function (user) {
            $scope.deleteCandidate = user;
        };

        $scope.cancelDelete = function () {
            $scope.deleteCandidate = null;
        };

        // Delete user logic
        $scope.deleteUser = function () {
            const index = $scope.users.indexOf($scope.deleteCandidate);
            if (index > -1) {
                $scope.users.splice(index, 1);
            }
            $scope.deleteCandidate = null;
            $scope.selectedUser = null;
        };

        $scope.onLongPress = function () {
            console.log('Long press action triggered');
        };

    });