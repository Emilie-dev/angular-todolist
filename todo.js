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
	});