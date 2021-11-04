/*
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team.
  Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte   le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)
*/

//intercetto l'elemento contenitore delle card dall'html
const teamContainer = document.querySelector('.team-container');

//creo l'oggetto singolo
const angela = {

  name: 'Angela Caroll',
  role: 'Chief Editor',
  image: 'angela-caroll-chief-editor.jpg'

}
//console.log(angela);

//creo un altro membro del team (come oggetto)
const walter = {

  name: 'Walter Gordon',
  role: 'Office Manager',
  image: 'walter-gordon-office-manager.jpg'

}
//console.log(walter);

//creo un array dove inserirò i membri del team
const teamMembers = [angela, walter];
console.log(teamMembers);

for(let key of teamMembers){

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamCard.innerHTML =
  `
  <div class="card-image">
    <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>
  </div>
  <div class="card-text">
    <h3>Wayne Barnett</h3>
    <p>Founder & CEO</p>
  </div>
  `;

  teamContainer.append(teamCard);
}
