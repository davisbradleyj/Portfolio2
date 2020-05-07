# Refactoring Professional Materials Portfoilio

[<img src="https://img.shields.io/badge/License-MIT-blue.svg">](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/_ES_-_6_-green.svg">](https://tc39.es/ecma262/) [<img src=https://img.shields.io/badge/_JavaScript_-_ECMA6_-green.svg>](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [<img src=https://img.shields.io/badge/_MySQL_-2.18.1_-orange.svg>](https://www.npmjs.com/package/mysql) [<img src=https://img.shields.io/badge/_Express_-_4.16.4-pink.svg>](https://www.npmjs.com/package/fs-extra)

## Description

Assigment to refactor my professional portfolio, using express, sequelize, and MySQL workbench to house database information.

## Table of Contents

  * [Technology](#Technology)

  * [Summary](#Summary)

  * [Learning-Points](#Learning-Points)
  
  * [License](#License)
  
  * [Contributing](#Contributing)
  
  * [Installation](#Installation)
  
  * [Tests](#Tests)
  
  * [Questions](#Questions)

## Technologies Used
- HTML - used to create elements on the DOM
- CSS - used to add style to the deployed page
- JavaScript - used to create the logic controlling the client-side application
- jQuery - library supplement to JavaScript controlling application logic
- Node.js - runtime environment which executes the JS code
- Express - framework for Node.js to create a server
- Sequelize - a promise-based Node.js ORM for MySQL
- MySQL Workbench - database used for storing and calling information on commandline application
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Heroku - host for deployed application

## Summary

This project is a refactoring of our professional portfolio and is intended to revisit and refine our use of Express, Sequelize, and MySQL in creating a full stack application.  Given I did not plan to make too many adjustments to the front-end, my focus for this assignment was in creating routes to connect the various paths to the static and api locations.  Part of setting up these routes includes the intention of creating a "hidden" add page which I plan to use to dynamically add more content to my page in the coming days/weeks.

```
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
```

My first phase of rolling out a full stack applicaiton to represent my portfolio is creating a database of hard and soft skills I want to feature.  Setting this up and printing the information to the page is accomplished through writing string literals directly to the page. As my database is not fully developed at this time, I only have one row of information, meaning I do not need to run a loop to return the information, and can designate the information required from the object at index 0 as the target from which I want to pull my assorted information.

```
$(document).ready(function () {
    let Skills = "/api/skills"
    $.get(Skills, function (data) {
        console.log(data)
        $("#comm").append(
            `<p class="subtitle has-text-link is-italic" id="subTitle">Communication</p>
        <p>&bull;${data[0].comm}</p><br/>`
        )
    })
    $.get(Skills, function (data) {
        $("#collab").append(
            `<p class="subtitle has-text-link is-italic" id="subTitle">Collaboration</p>
        <p>&bull;${data[0].collab}</p><br/>`
        )
    })
    $.get(Skills, function (data) {
        $("#prob").append(
            `<p class="subtitle has-text-link is-italic" id="subTitle">Problem Solver</p>
        <p>&bull;${data[0].prob}</p><br/>`
        )
    })
    $.get(Skills, function (data) {
        $("#tech").append(
            `<p class="subtitle has-text-link is-italic" id="subTitle">Technologies</p>
        <p>&bull;${data[0].tech}</p>`
        )
    })
})
```

## Learning-Points

Reinforcing the lessons learned on express, sequelize, and how to set up a full stack deployment of my portfolio page.  Also, making sure I have all the necessary scripts in place, like jQuery.  This would have saved me about 3 hours of headaches and troubleshooting. 

## Contributing

Jerome Chenette, Kerwin Hy, Mahi Gunasekaran, Brad Davis

## Installation

To install necessary dependencies for this application, the following commands are required:

`npm init` - To create the package.json file.

`npm i express mysql mysql2 sequelize ` - Adds node modules and populates the package-lock.json file.

For those who wish to clone or fork this repo, the following steps should be followed:

Clone:
1) On GitHub, navigate to the main page of the repository.
2) Under the repository name, click Clone or download.
3) To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
4) Open your local Terminal
5) Move into the directory location where you would like the cloned repo to sit.
6) Type `git clone` then paste the URL copied from earlier so that your would see the following - `$ git clone https://github.com/davisbradleyj/ucb-batman.git`
7) Press enter

Fork:
1) On GitHub, navigate to the main page of the repository.
2) In the top-right corner of the page, click Fork.

For more detailed instructions, you can visit GitHub directly to <a herf="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone</a> or <a herf="https://help.github.com/en/github/getting-started-with-github/fork-a-repo">Fork</a>

## Tests

No tests were required for this application

## Questions

<img src="https://avatars3.githubusercontent.com/u/61176147?v=4" alt="avatar" style="border-radius: 16px" width="30">

[Brad Davis](https://github.com/davisbradleyj) directly at davis.bradleyj@gmail.com

 