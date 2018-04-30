angular.module('todolistApp', [])
	// Create a controller
	.controller('TodoListController', function() {
		var todoList = this;
		// Create a initial list of todos.
		todoList.todos = [
			{text:'Learn AngularJS', done:true},
			{text: 'Build an AngularJS app', done:false}];

		// Add todos to the list. 
		todoList.addTodo = function() {
			// Array.push method used with AngularJS.
			todoList.todos.push({text:todoList.todoText, done:false});
			todoList.todoText = '';
		};	

		// Archive old todos.
		todoList.archive =function() {
			var oldTodos = todoList.todos;
			todoList.todos = [];
			angular.forEach(oldTodos, function(todo) {
				// If todos are not done then they are Array.push again to display them.
				if(!todo.done) todoList.todos.push(todo);
			});
		};
	});