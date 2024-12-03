angular.module('myApp')
    .component('userDetails', {
        bindings: {
            user: '<'
        },
        template: `
        <div ng-if="$ctrl.user">
            <p><strong>Username</strong></p>
            <p>{{$ctrl.user.username}}</p>
            <p><strong>Name</strong></p>
            <p>{{$ctrl.user.name}}</p>
            <p><strong>Email</strong></p>
            <p>{{$ctrl.user.email}}</p>
            <p><strong>Website</strong></p>
            <p>{{$ctrl.user.website}}</p>
            <p><strong>Phone number</strong></p>
            <p>{{$ctrl.user.phone}}</p>
            <p><strong>Address</strong></p>
            <p>Street: {{$ctrl.user.address.street}}</p>
            <p>Suite: {{$ctrl.user.address.suite}}</p>
            <p>City: {{$ctrl.user.address.city}}</p>
            <p>Zip Code: {{$ctrl.user.address.zipcode}}</p>
        </div>
        `
    });