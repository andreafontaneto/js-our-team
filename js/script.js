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
    name: '',
    role: '',
    image: ''
  },
  {
    name: '',
    role: '',
    image: ''
  },

];
console.log(teamMembers);

// intercetto le key che mi interessano
const memberName = xxx.name;
const memberRole = xxx.role;
const memberImage = xxx.image;

// indicizzo gli oggetti dell'array
for(let i = 0; i < teamMembers.length; i++){
  
  console.log(teamMembers[i]);

  // per ogni oggetto do un valore diverso alla key in base all'indice
  switch(teamMembers[i]){

    case 0:
      memberName = 'Angela Caroll'
      memberRole = 'Chief Editor'
      memberImage = 'angela-caroll-chief-editor.jpg'
      break;
    case 1:
      memberName = 'Walter Gordon'
      memberRole = 'Office Manager'
      memberImage = 'walter-gordon-office-manager.jpg'
      break;
    
  }
}

//per ogni oggetto nell'array creo gli elementi necessari
for(let key of teamMembers){

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
