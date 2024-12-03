angular.module('myApp')
    .directive('onLongPress', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var timeout;
                element.on('mousedown', function () {
                    timeout = $timeout(function () {
                        scope.$apply(attrs.onLongPress);
                    }, 600);
                });
                element.on('mouseup mouseleave', function () {
                    $timeout.cancel(timeout);
                });
            }
        };
    });