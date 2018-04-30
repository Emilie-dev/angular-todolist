angular.module('todolistApp', [])
	// Create a controller
	.controller('TodoListController', function() {
		var todolist = this;
		todolist.todos = [
			{text:'Learn AngularJS', done:true},
			{text: 'Build an AngularJS app', done:false}];

	});