var app = angular.module('todoApp');

app.directive('todoList', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/todo-list.html'
    }
});

app.directive('addTask', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/templates/add-task.html'
    }
});
