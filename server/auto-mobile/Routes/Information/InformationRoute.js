const router = require('express').Router();
var InformationController = require('../../Controllers/Information/InformationController');


router.get('/', InformationController.getData);

module.exports = router;
