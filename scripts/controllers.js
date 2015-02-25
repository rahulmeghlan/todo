angular.module("TodoApp")
    .controller("ListCtrl", ['TodoService', function (TodoService) {
        var self = this;
        self.todoList = TodoService.get();
        self.removeItem = function (index) {
            TodoService.remove(index);
        };
    }])
    .controller("AddCtrl", ['TodoService', function (TodoService) {
        var self = this;
        self.register = function () {
            TodoService.add({
                task: self.task,
                author: self.author,
                done: false
            });
            self.task = '';
            self.author = '';
        }
    }]);