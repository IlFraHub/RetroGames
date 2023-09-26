const cells = document.querySelectorAll('.cell');

let turno = 0;

//bobo contiene le lettere già scritte nelle celle
let bobo = [];

for(let i=0; i < cells.length; i++){
  const cell = cells[i];

  cell.addEventListener('click', function(){

      if(bobo[i]) {
        //la cella è già riempita
        return;
      }

      turno++;
      let lettera;
      if ( turno % 2 === 0 ){
        lettera = 'X';
      } else {
        lettera = 'O';
      }

      cell.innerText = lettera;
      bobo[i] = lettera;


      let haVinto = checkVittoria();

      if (haVinto) {
        let messaggio = `${lettera} ha vinto`;
        mostraMessaggio ( messaggio );
      } else if (turno === 9){
        let messaggio = 'Pareggio';
        mostraMessaggio ( messaggio );
      }
  });



}

function checkVittoria () {
    const combinazioniVincenti = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0; i < combinazioniVincenti.length; i++){
      const tripletta = combinazioniVincenti[i];

      const a = tripletta[0];
      const b = tripletta[1];
      const c = tripletta[2];

      if ( bobo[a] && bobo[a] === bobo[b] && bobo[b] === bobo[c]) {
        return true;
      }
    }
    return false;
}
