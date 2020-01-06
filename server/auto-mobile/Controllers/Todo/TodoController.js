const TodoRepository = require('../../Repository/Todo/TodoRepository');

module.exports = {
    saveTodos: function(req,res){
        let data = TodoRepository.storeTodo(req, res);
    },

    getTodos: function (req, res) {
        let todos = TodoRepository.allTodos(req, res);
    }
}