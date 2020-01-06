const express = require('express')
var app = express();

const routes = require('./server/auto-mobile/Routes/api'); // need to be hit from here
app.use(routes);


const port = process.env.PORT || 3000;


app.listen(port, () => {

    console.log( `Express server listening on port ${port}`);
})