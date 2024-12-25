const elemCard = document.querySelector('div.card');
const elemClickIcon = document.querySelector('span.click-icon');

elemCard.addEventListener('click', function() {
  elemCard.classList.toggle('is-opened');
  elemClickIcon.classList.toggle('is-hidden');
});


// Sélectionner les éléments nécessaires
const carte = document.querySelector('.card');
const musique = document.getElementById('musique');

// Variable pour suivre l'état de la carte (ouverte ou fermée)
let estOuverte = false;

// Gérer l'ouverture/fermeture de la carte
carte.addEventListener('click', () => {
    if (!estOuverte) {
        // Carte s'ouvre
        musique.play(); // Démarrer la musique
        estOuverte = true;
    } else {
        // Carte se ferme
        musique.pause(); // Arrêter la musique
        musique.currentTime = 0; // Réinitialiser la musique
        estOuverte = false;
    }
});
