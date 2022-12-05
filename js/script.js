/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
   Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
   Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
   Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
   Angela Lopez   Social Media      Manager  angela-lopez-social-media-manager.jpg
   Scott Estrada  Developer         scott-estrada-developer.jpg
   Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg
 */

  const team = [
{ name : "Wayne Barnett",
role : "Founder & CEO",
photo : "wayne-barnett-founder-ceo.jpg",
},

{ name : "Angela Caroll",
role : "Chief Editor ",
photo : "angela-caroll-chief-editor.jpg",
},
  
{ name : "Walter Gordon",
role : "Office Manager",
photo : "walter-gordon-office-manager.jpg",
},

{ name : "Angela Lopez",
role : "Social Media Manager",
photo : "angela-lopez-social-media-manager.jpg",
},

{ name : "Scott Estrada",
role : "Developer",
photo : "scott-estrada-developer.jpg",
},

{ name : "Barbara Ramos",
role : "Graphic Designer",
photo : "barbara-ramos-graphic-designer.jpg",
},

  ];

  let dati;
  let infoBox = document.getElementById("info-box");


  
    for (let info in team) {
    console.log(team[info]);

      const card = document.createElement('div');
      card.classList.add('my-card');
      infoBox.appendChild(card);

      const myH2 = document.createElement('h2');
      myH2.innerHTML= team[info].name;
      myH2.classList.add('my-h2');
      card.appendChild(myH2);

      const myH3 = document.createElement('h3');
      myH3.innerHTML= team[info].role;
      myH3.classList.add('my-h3');
      card.appendChild(myH3);

      const myImg = document.createElement('figure');
      myImg .innerHTML= "<img src=" + "./img/" + team[info].photo + ">";
      card.appendChild(myImg);

    };