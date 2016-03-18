app.controller('TodosController', ['$scope', function($scope){
  $scope.todos = [
    {task: "build an awesome todo list", done: false},
    {task: "become a AngularJS master", done: false},
    {task: "have a Shoyu ramen for dinner", done: false},
    {task: "watch Daredevil Season 2 Episode 1 tonight", done: false},
    {task: "buy a cup of coffee", done: false}
  ];

  $scope.completedTodos = [];

  $scope.newTodo = {};

  $scope.addTodo = function () {
    $scope.todos.push({task: $scope.newTodo.task, done: false});
    $scope.newTodo.task = '';
  };

  $scope.deleteTodo = function (index) {
    var completedTodo = $scope.todos.splice(index, 1)[0];
    $scope.completedTodos.push(completedTodo);
  };

  $scope.undoTodo = function (index) {
    var undoTodo = $scope.completedTodos.splice(index, 1)[0];
    $scope.todos.push(undoTodo);
  };
}]);