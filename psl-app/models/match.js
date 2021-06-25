const Joi = require("@hapi/joi");
var mongoose = require("mongoose");

var matchschema = mongoose.Schema({
    a: String,
    b: String,
    city: String,
    date: Date
});

var Match = mongoose.model("Match",matchschema);

//function validateteam(data){
//    const schema = Joi.object({
//        name: Joi.string().min(3).max(10).required()
//    });
//    return schema.validate(data);/
//}

module.exports.Match = Match; 