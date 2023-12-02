function creatGame(player1, hour, player2){
return `
<li>
<img src="assets/img/icon-${player1}.png" alt="bandeira do ${player1}"/>
<strong>${hour}</strong>
<img src="assets/img/icon-${player2}.png" alt="bandeira do ${player2}"/>
</li>
`
}
let delay = -0.4;
//Codeium: Refactor|Explain|Generate JSDoc
function createCard(date, day, games){
    delay = delay = 0.4;
    return`
    <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span> ${day}</span></h2>
    <ul>
    ${games}
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML = createCard("02/12", "Sábado", creatGame("corinthians", "16:00", "palmeiras"))+createCard("03/12", "Domingo", creatGame("atletico", "15:00", "bota"))+
createCard("02/12", "terça", creatGame("flamengo", "16:00", "cruzeiro"))+
createCard("02/12", "quarta", creatGame("bahia", "18:00", "inter"))+
createCard("02/12", "quinta", creatGame("sp", "15:00", "vasco"))+
createCard("02/12", "sexta", creatGame("gremio", "18:00", "santos"))