const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("At home page")
        res.sendFile("/html/index.html", {
            root: path.join(__dirname, "../public")
        });
    });
    app.get("/resume", function (req, res) {
        console.log("Resume")
        res.sendFile("/Brad_Davis_Resume_2020.pdf", {
            root: path.join(__dirname, "../public")
        });
    });
    app.get("/add", function (req, res) {
        console.log("Hidden")
        res.sendFile("/html/add.html", {
            root: path.join(__dirname, "../public")
        });
    });   
    app.put("/api/new/skill/tech/:id", function (req, res) {
        const id = req.params.id;
        console.log("Updating tech");
        console.log(id)
        db.Skills.update({
            tech: req.body.tech
        }).then(function (result){
            console.log("updated technologies");
            res.json(result);
        })
    });
    app.get("api/skill/comm", function (req, res){
        console.log("Posting communication soft skill statement");
        db.Skills.comm.findAll({
        }).then(function(result){
            res.json(result);
        })
    })
    app.get("api/skill/collab", function (req, res){
        console.log("Posting collaboration soft skill statement");
        db.Skills.collab.findAll({
        }).then(function(result){
            res.json(result);
        })
    })
    app.get("api/skill/prob", function (req, res){
        console.log("Posting problem solving soft skill statement");
        db.Skills.prob.findAll({
        }).then(function(result){
            res.json(result);
        })
    })
    app.get("api/skill/tech", function (req, res){
        console.log("Posting technology soft skills");
        db.Skills.tech.findOne({
        }).then(function(result){
            res.json(result);
        })
    })
    

}