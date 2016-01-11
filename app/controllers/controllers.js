var app = angular.module('todoApp');

var storedData = angular.fromJson(localStorage.todo);
app.controller('todoCtrl', function($scope) {
    $scope.tasks = [
        {'title': 'Wash the hair', 'important': true, 'done': true},
        {'title': 'Eat', 'important': true, 'done': false},
        {'title': 'Have a coffee', 'important': false, 'done': false}
    ];
});
