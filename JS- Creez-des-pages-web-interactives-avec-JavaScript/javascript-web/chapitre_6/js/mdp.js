var formulaire = document.getElementsByTagName('form')[0];
var unChiffre = /[0-9]+/;
var infoMdp = document.getElementById('infoMdp');
var erreur;
formulaire.addEventListener("submit", function (e) {
    if (formulaire.mdp1.value != formulaire.mdp2.value){
        erreur = "Les deux mots de passe saisis doivent être identiques.";
    } else if (formulaire.mdp1.value.length<6) {
        erreur = "La longueur des mots de passe doit être au minimum de 6 caractères.";
    } else if (!unChiffre.test(formulaire.mdp1.value)) {
        erreur = "Les mots de passe doivent contenir au moins un chiffre.";
    }else {
        erreur = "";
    }

    if (erreur.length>0){
        infoMdp.textContent = "Erreur : " + erreur;
    } else {
        infoMdp.textContent = "";
    }

    e.preventDefault(); // Annulation de l'envoi des données
});
// if (!erreur){}
// else {
// }
