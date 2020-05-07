let commSkill = "api/skill/comm"
let collabSkill = "api/skill/collab"
let probSkill = "api/skill/prob"
let techSkill = "api/skill/tech"

$.get(commSkill, function(data){
    console.log(data)
    $("#comm").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Communication</p>
        <p>&bull;${data.comm}</p><br/>`
    )
})
$.get(collabSkill, function(data){
    console.log(data)
    $("#collab").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Collaboration</p>
        <p>&bull;${data.collab}</p><br/>`
    )
})
$.get(probSkill, function(data){
    console.log(data)
    $("#prob").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Problem Solver</p>
        <p>&bull;${data.prob}</p><br/>`
    )
})
$.get(techSkill, function(res){
    console.log(res)
    $("#tech").append(
        `<p class="subtitle has-text-link is-italic" id="subTitle">Technologies</p>
        <p>&bull;${data.tech}</p>`
    )
})
