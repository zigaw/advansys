angular.module('myApp')
    .component('modalPopup', {
        transclude: true, // Enable transclusion for the body content
        bindings: {
            show: '<',           // Whether to show the modal
            onClose: '&'         // Callback to close the modal
        },
        controller: function () {
            var ctrl = this;

            ctrl.$onChanges = function (changes) {
                if (changes.show) {
                    ctrl.isVisible = changes.show.currentValue;
                }
            };
        },
        template: `
        <div class="modal fade" ng-class="{'show': $ctrl.isVisible}"
             style="display: {{$ctrl.isVisible ? 'block' : 'none'}};">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">User Details</h5>
                        <button type="button" class="close" ng-click="$ctrl.onClose()">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" ng-transclude></div>
                </div>
            </div>
        </div>
        `
    });