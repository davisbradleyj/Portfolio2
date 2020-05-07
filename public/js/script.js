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