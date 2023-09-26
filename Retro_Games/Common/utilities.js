function mostraMessaggio( messaggio ){
  const gameArea = document.querySelector('.game-area');

  const messaggioDaVisualizzare = `
  <div class='contenitore-messagio'>
    <div class='messaggio-da-visualizzare'> ${messaggio} </div>
  </div>
  `;

  gameArea.innerHTML = gameArea.innerHTML + messaggioDaVisualizzare;
}
