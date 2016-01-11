var app = angular.module('todoApp');

var storedData = angular.fromJson(localStorage.todoApp);
app.controller('todoCtrl', function($scope) {
    if (storedData) {
        $scope.tasks = storedData;
    }

    else {
        $scope.tasks = [
            {'title': 'Wash the hair', 'done': true, 'editing': false},
            {'title': 'Eat', 'done': false, 'editing': false},
            {'title': 'Have a coffee', 'done': false, 'editing': false}
        ];
    }

    $scope.applyTaskStateClass = function(isTaskDone) {
        if (isTaskDone == true) {
            return 'task-done'
        }

        else {
            return 'task-not-done'
        }
    };

    $scope.actionDone = function(task) {
        if (task.done == true) {
            task.done = false
        }

        else {
            task.done = true
        }
    }

    $scope.deleteTask = function(id) {
        var currentTask = $scope.tasks[id];

        $scope.tasks.splice(id, 1);
    }

    $scope.addTask = function(task) {
        if ($scope.livePreview) {
            $scope.tasks.push({
                title: $scope.livePreview,
                editing: false
            });
            $scope.livePreview = '';
        }

        else {
            alert('Name your task somehow please')
        }

        saveToLocal();
    }

    $scope.toggleEditStates = function(task) {

        if (task.editing == false) {
            task.editing = true;
        }

        else {
            task.editing = false;
        }

        saveToLocal();
    }

    function saveToLocal() {
        localStorage.todoApp = angular.toJson($scope.tasks);
    };

});
