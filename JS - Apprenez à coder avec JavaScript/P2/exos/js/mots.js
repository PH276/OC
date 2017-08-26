var mots =[];
var saisie="";
while (saisie !== "stop") {
    saisie = prompt ("Saisissez un mot");
    mots.push (saisie);
}

console.log("Liste des mots saisis :");
mots.forEach (function (mot) {
    console.log(mot);
});
