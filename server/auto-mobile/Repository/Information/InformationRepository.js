const request = require('request');
module.exports = {
    getInformation: function (req, res) {
        request.get({
            url: 'https://api.chucknorris.io/jokes/random'
        }, function (error, httpresponse, body) {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                console.log(body);
                res.send(body);
            }
        })
    }
}