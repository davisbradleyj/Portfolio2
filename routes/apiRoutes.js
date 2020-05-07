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
    app.get("/api/skills", function (req, res) {
        console.log("display all skills");
        db.Skills.findAll({
        }).then(function (result) {
            res.json(result);
        });
    });
    app.get("/add", function (req, res) {
        console.log("Hidden")
        res.sendFile("/html/add.html", {
            root: path.join(__dirname, "../public")
        });
    });
    app.put("/api/new/skills/tech/:id", function (req, res) {
        const id = req.params.id;
        console.log("Updating tech");
        console.log(id)
        db.Skills.update({
            tech: req.body.tech
        }).then(function (result) {
            console.log("updated technologies");
            res.json(result);
        })
    });

}