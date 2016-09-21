module.paths.push("./src");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos');
// var db = mongoose.connection;

var Todo = mongoose.model('Todo', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean,
    create_date:{
		type: Date,
		default: Date.now
	},
});

module.exports.Todo = Todo;
