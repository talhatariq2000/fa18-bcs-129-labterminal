const express = require("express");
let router = express.Router();
var {Team} = require("../../models/teams");
//const validateproduct = require("../../middlewares/validateproduct");
//const auth = require("../../middlewares/auth");
//const admin = require("../../middlewares/admin");

//getting all teams
router.get("/",async(req,res) => {
    //pagination
    let page = req.query.page ? req.query.page : 1;
    let perPage = req.query.perPage ? req.query.perPage : 10;
    let skipRecords = (perPage*(page-1));
    let teams = await Team.find().skip(skipRecords).limit(perPage);
    return res.send(teams);
});

module.exports = router;