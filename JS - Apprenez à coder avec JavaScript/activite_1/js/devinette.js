/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var essai = 0;
var nombreEssai=0;
const NOMBREESSAIMAX = 6;
while (essai != solution && nombreEssai < NOMBREESSAIMAX) {
    nombreEssai++;
    essai = prompt ("Entrer un nombre entre 1 et 100 :");
    if (essai < solution){
        console.log(essai + ' est trop petit');
    } else if (essai > solution) {
        console.log(essai + ' est trop grand');
    }
}

if (essai == solution && nombreEssai <= NOMBREESSAIMAX) {
    console.log('Bravo ! la solution était ' + solution);
    console.log('Vous avez trouvé en '+ nombreEssai + ' essai(s)');
} else {
    console.log('Perdu... la solution était ' + solution);
}
