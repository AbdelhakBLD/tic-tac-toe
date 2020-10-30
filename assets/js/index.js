// déclaration des joueurs 1 et 2
let tour = true;
let partie = false;
let joueurUn = "X";
let joueurDeux = "O";
let rejouerBtn = document.querySelector("button");

// récupére une node liste des cellules du tableau
const nodeListTd = document.querySelectorAll("td");

// initialisation du tableau à vide
const initTab = () => {
  for (let i = 0; i < 9; i++) {
    nodeListTd[i].innerHTML = "";
  }
};

// inscrire symbole quand clique sur une case
const inscritSymbole = (event) => {
  const e = event.target;
  if (tour) {
    if (celluleVide(e)) {
      e.innerHTML = joueurUn;
      if (verifePartieHorriTerminer(joueurUn)) {
      } else if (verifePartieVertiTerminer(joueurUn)) {
      } else if (verifePartieDiagoTerminer(joueurUn)) {
      } else if (verifePartieNulTerminer()) {
      }
      tour = false;
    } else {
      celluleOccuper(joueurUn);
    }
  } else {
    if (celluleVide(e)) {
      e.innerHTML = joueurDeux;
      if (verifePartieHorriTerminer(joueurDeux)) {
      } else if (verifePartieVertiTerminer(joueurDeux)) {
      } else if (verifePartieDiagoTerminer(joueurDeux)) {
      } else if (verifePartieNulTerminer()) {
      }
      tour = true;
    } else {
      celluleOccuper(joueurDeux);
    }
  }
};
// vérife partie terminer hori
const verifePartieHorriTerminer = (joueur) => {
  for (let i = 0; i < 9; i++) {
    if (
      nodeListTd[i].innerHTML === joueur &&
      nodeListTd[i + 1].innerHTML === joueur &&
      nodeListTd[i + 2].innerHTML === joueur
    ) {
      partieGagner(joueur);
      afficherBoutonRejouer();
      return true;
    }
    i = i + 2;
  }
  return false;
};
// vérife partie terminer verti
const verifePartieVertiTerminer = (joueur) => {
  for (let i = 0; i < 3; i++) {
    if (
      nodeListTd[i].innerHTML === joueur &&
      nodeListTd[i + 3].innerHTML === joueur &&
      nodeListTd[i + 6].innerHTML === joueur
    ) {
      partieGagner(joueur);
      afficherBoutonRejouer();
      return true;
    }
  }
  return false;
};
// vérife partie terminer diago
const verifePartieDiagoTerminer = (joueur) => {
  if (
    nodeListTd[0].innerHTML === joueur &&
    nodeListTd[4].innerHTML === joueur &&
    nodeListTd[8].innerHTML === joueur
  ) {
    partieGagner(joueur);
    afficherBoutonRejouer();
    return true;
  } else if (
    nodeListTd[2].innerHTML === joueur &&
    nodeListTd[4].innerHTML === joueur &&
    nodeListTd[6].innerHTML === joueur
  ) {
    partieGagner(joueur);
    afficherBoutonRejouer();
    return true;
  }
  return false;
};
// vérif partie nul
const verifePartieNulTerminer = () => {
  if (
    nodeListTd[0].innerHTML != "" &&
    nodeListTd[1].innerHTML != "" &&
    nodeListTd[2].innerHTML != "" &&
    nodeListTd[3].innerHTML != "" &&
    nodeListTd[4].innerHTML != "" &&
    nodeListTd[5].innerHTML != "" &&
    nodeListTd[6].innerHTML != "" &&
    nodeListTd[7].innerHTML != "" &&
    nodeListTd[8].innerHTML != ""
  ) {
    partieNul();
    afficherBoutonRejouer();
    return true;
  }
  return false;
};
// alerte partie gagner
const partieGagner = (joueur) => {
  alert(`🎊 GG ${joueur} a gagné !🎉`);
};

// alerte match nul
const partieNul = () => {
  alert(`Match nul pas de gagnant 😔`);
};

// alerte cellule déjà occuper
const celluleOccuper = (joueur) => {
  alert(
    `🤬 Le joueur "${joueur}" est prié de ne cliquer uniquement sur les cases libres !`
  );
};

// fonction vérife cellule vide
const celluleVide = (e) => {
  if (e.innerHTML == "") {
    return true;
  } else {
    return false;
  }
};

// ajoute un event listener sur chaque cellule de la table
const eventListenerTd = () => {
  nodeListTd.forEach((e) =>
  e.addEventListener("click", inscritSymbole))
};

// supprimer eventlistener sur chaque cellule de la table
const deleteEventListenerTd = () => {
  nodeListTd.forEach((e) =>
  e.removeEventListener("click", inscritSymbole))
};

// afficher bouton rejouer
const afficherBoutonRejouer = () => {
  deleteEventListenerTd();
  rejouerBtn.disabled = partie;
};

// rejouer quand la partie est terminer
rejouerBtn.addEventListener("click", function () {
  rejouerBtn.disabled = !partie;
  tour = true;
  initTab();
  eventListenerTd();
});

// lancement partie de tic tac toe au chargement du DOM
// appel de la fonction d'initalisation du tableau à vide
document.addEventListener("DOMContentLoaded", function () {
  initTab();
  eventListenerTd();
});
