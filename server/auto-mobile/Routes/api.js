const router = require('express').Router();
var InformationRoute = require('./Information/InformationRoute');
var TodoRoute = require('./Todo/TodoRoute');

router.use(InformationRoute)
router.use(TodoRoute)

module.exports = router;