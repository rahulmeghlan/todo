angular.module("TodoApp")
    .factory('TodoService', function () {
        var tasks = [
            {task: 'test', author: 'Rahul', done: false}
        ];
        return {
            add: function (task) {
                tasks.push(task);
            },
            get: function () {
                return tasks;
            },
            remove: function (index) {
                tasks.splice(index, 1);
            }
        }

/*
 this is the method when using service rather than factories
        var self = this;
        self.get = function(){}
        self.add = function(){}
        self.remove = function(){}
*/
    });