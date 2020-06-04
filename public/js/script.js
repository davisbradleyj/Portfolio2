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
    $.get(Projects, function (data) {
        $("#tech").append(
            `<div class="box">
            <a class="subtitle has-text-info" href="${data[i].href}" target="_new">${data[i].title}.</a>
            <hr/>
            <img src="../images/batman_readme.gif" alt="Gif of B.A.T.M.a.N.">
            <p class="has-text-link">BATMaN is a community hub and toolset for outdoor enthusiasts to discover new communities and new adventures in the Bay Area and beyond.  Pick a trail, build a community, get outside!</p>
            <a class="fa fa-github" style="font-size:18px" href="https://github.com/davisbradleyj/ucb-batman" target="_new"> - Github Repo</a>
            <p class="has-text-link">May 2020</p>`
        )
    })
})


//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}