const grid = document.querySelector('#grid');
const carteImmagini = ['alien', 'bug', 'duck', 'rocket', 'spaceship', 'tiktac'];
const mazzo = [...carteImmagini, ...carteImmagini];

mazzo.sort(function() {
  return 0.5 - Math.random()
})

for(let i = 0; i < mazzo.length; i++) {
    const carta = document.createElement('div');
    const nomeCarta = mazzo[i];

    carta.classList.add('carta');
    carta.setAttribute('data-name', nomeCarta);
    carta.addEventListener('click', flipCard);
    grid.appendChild(carta);
}

function flipCard(event) {
  console.log("cliccata");

}
