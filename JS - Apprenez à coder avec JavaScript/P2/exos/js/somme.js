var valeurs = [11, 3, 7, 2, 9, 10];
var somme=0;
var max=0;
valeurs.forEach (function (valeur){
    somme+=valeur;
});
console.log("La somme des éléments vaut " + somme);

valeurs.forEach (function (valeur){
    if (valeur > max) {
        max=valeur;
    }
});
console.log("Le maximum des éléments vaut " + max);
