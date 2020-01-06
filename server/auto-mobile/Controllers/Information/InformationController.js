const InformationRepository = require('../../Repository/Information/InformationRepository');

module.exports = {
    getData: function(req,res){
        let data = InformationRepository.getInformation(req, res);
    }
}