// Set node path directory
module.paths.push("./src");

var todosRoutes = require('server/todos/routes');

module.exports = function routes(app) {
    app.use('/todos', todosRoutes);
};