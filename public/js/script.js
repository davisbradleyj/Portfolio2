let commSkill = "api/skill/comm"
let collabSkill = "api/skill/collab"
let probSkill = "api/skill/prob"
let techSkill = "api/skill/tech"

$.get(commSkill, function(res){
    console.log(res)
    $("#comm").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Communication</p>
        <p>&bull;${res.comm}</p><br/>`
    )
})
$.get(collabSkill, function(res){
    console.log(res)
    $("#collab").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Collaboration</p>
        <p>&bull;${res.collab}</p><br/>`
    )
})
$.get(probSkill, function(res){
    console.log(res)
    $("#prob").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Problem Solver</p>
        <p>&bull;${res.prob}</p><br/>`
    )
})
$.get(techSkill, function(res){
    console.log(res)
    $("#tech").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Technologies</p>
        <p>&bull;${res.tech}</p>`
    )
})
