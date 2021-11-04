/*
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team.
  Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte   le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team. (se non fate tempo a realizzare questa parte va bene ugualmente e pensateci in ogni caso solo una volta stampata correttamente tutta la pagina)
*/

//intercetto l'elemento contenitore delle card dall'html
const teamContainer = document.querySelector('.team-container');

//creo un array dove inserirò i membri del team
const teamMembers = 
[

  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  },

];
console.log(teamMembers);

//per ogni oggetto nell'array creo gli elementi necessari
for(let item of teamMembers){


  // intercetto le key che mi interessano
  const memberName = item.name;
  const memberRole = item.role;
  const memberImage = item.image;

  const teamCard = document.createElement('div');
  teamCard.className = 'team-card';
  teamCard.innerHTML =
  `
  <div class="card-image">
    <img src="img/${memberImage}" alt="${memberName}"/>
  </div>
  <div class="card-text">
    <h3>${memberName}</h3>
    <p>${memberRole}</p>
  </div>
  `;

  //appendo l'elemento creato al contenitore html
  teamContainer.append(teamCard);
}
