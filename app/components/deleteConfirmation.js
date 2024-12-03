angular.module('myApp')
    .component('deleteConfirmation', {
        bindings: {
            show: '<',
            onConfirm: '&',
            onCancel: '&'
        },
        controller: function() {
            var ctrl = this;

            ctrl.$onChanges = function(changes) {
                if (changes.show) {
                    ctrl.isVisible = changes.show.currentValue;
                }
            };
        },
        template: `
        <div class="modal fade" ng-class="{'show': $ctrl.isVisible}" style="display: {{$ctrl.isVisible ? 'block' : 'none'}};">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Alert</h5>
                        <button type="button" class="close" ng-click="$ctrl.onCancel()">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Are you sure you want to delete this record?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" ng-click="$ctrl.onCancel()">No</button>
                        <button type="button" class="btn btn-danger" ng-click="$ctrl.onConfirm()">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        `
    });
