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
        db.collection('tasks').doc('YuBduSqnwNlSsDPrSb3K_7855673734').get().then(doc => {
            if (!doc.exists) {
                return res.send('No such document!');
            } else {
                return res.send(doc.data());
            }
        }).catch(err => {
            return err;
        })
    }
}