const Joi = require("@hapi/joi");
var mongoose = require("mongoose");

var teamschema = mongoose.Schema({
    name: String,
});

var Team = mongoose.model("Team",teamschema);

//function validateteam(data){
//    const schema = Joi.object({
//        name: Joi.string().min(3).max(10).required()
//    });
//    return schema.validate(data);/
//}

module.exports.Team = Team; 