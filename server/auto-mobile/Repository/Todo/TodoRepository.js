const request = require('request');
const config = require('../../config/environment');
const db = config.database;
module.exports = {
    storeTodo: function (req, res) {
        console.log('task :', req.body);
        db.collection('todos').add(req.body);
    },

    allTodos: function(req, res) {
        console.log('hit on the todos function...');
        let cityRef = db.collection('todos').doc('todo_1');
        cityRef.get().then(doc => {
            if (!doc.exists) {
                res.send('No such document!');
            } else {
                res.send(doc.data());
            }
        })
    }
}