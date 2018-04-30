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

		// Add the possibility to see the remained todos.
		todoList.remaining = function() {
			var count = 0;
			angular.forEach(todoList.todos, function(todo) {
				/*
				Ternary operator : condition ? expr1 : expr2.
				If the condition is true the expr1 is displayed. 
				If not, it's the expr2 which is displayed. 
				*/
				count += todo.done ? 0 : 1;
			});
			return count;
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