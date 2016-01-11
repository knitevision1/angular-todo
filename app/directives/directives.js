var app = angular.module('todoApp');

app.directive('todoList', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/todo-list.html'
    }
});

app.directive('addTask', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/add-task.html'
    }
});
