const express = require("express");
let router = express.Router();
var {Match} = require("../../models/match");
//const validateproduct = require("../../middlewares/validateproduct");
//const auth = require("../../middlewares/auth");
//const admin = require("../../middlewares/admin");

//getting all matches
router.get("/",async(req,res) => {
    //pagination
    let page = req.query.page ? req.query.page : 1;
    let perPage = req.query.perPage ? req.query.perPage : 10;
    let skipRecords = (perPage*(page-1));
    let match = await Match.find().skip(skipRecords).limit(perPage);
    return res.send(match);
});

//create match
router.post("/",async(req,res) => {
    let match = new Match();
    match.a = req.body.a;
    match.b = req.body.b;
    match.city = req.body.city;
    match.date = req.body.date;

    await match.save();
    return res.send(match);
});

module.exports = router;