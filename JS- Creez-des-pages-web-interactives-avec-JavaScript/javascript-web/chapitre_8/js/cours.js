// synchrone

// // Création d'une requête HTTP
// var req = new XMLHttpRequest();
// // Requête HTTP GET synchrone vers le fichier langages.txt publié localement
// req.open("GET", "http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/langages.txt", false);
// // Envoi de la requête
// req.send(null);
// // Affiche la réponse reçue pour la requête
// console.log(req.responseText);


// asynchrone avec écouteur de retour
// var req = new XMLHttpRequest();
// // La requête est asynchrone lorsque le 3ème paramètre vaut true ou est absent
// req.open("GET", "http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/langages.txt");
// // Gestion de l'événement indiquant la fin de la requête
// req.addEventListener("load", function () {
//     // Affiche la réponse reçue pour la requête
//     console.log(req.responseText);
// });
// req.send(null);

// asynchrone avec écouteur de retour et d'errereur
// var req = new XMLHttpRequest();
// req.open("GET", "http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/langages.txt");
// req.addEventListener("load", function () {
//     if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
//         console.log(req.responseText);
//     } else {
//         // Affichage des informations sur l'échec du traitement de la requête
//         console.error(req.status + " " + req.statusText);
//     }
// });
// req.addEventListener("error", function () {
//     // La requête n'a pas réussi à atteindre le serveur
//     console.error("Erreur réseau");
// });
// req.send(null);

// utilisation de la fonction générique déclarée déclarée dans le fichier ajax.js
ajaxGet("http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});


// JSON pour un objet
var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaîne de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaîne de caractères JSON en objet JavaScript
console.log(JSON.parse(texteAvion));

// JSON pour un tableau d'objets
var avions = [
    {
        marque: "Airbus",
        couleur: "A320"
    },
    {
        marque: "Airbus",
        couleur: "A380"
    }
];
console.log(avions);
// Transforme le tableau d'objets JS en chaîne de caractères JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transforme la chaîne de caractères JSON en tableaux d'objets JavaScript
console.log(JSON.parse(texteAvions));

// traitement d'un fichier JSON
ajaxGet("http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/films.json", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var films = JSON.parse(reponse);
    // Affiche le titre de chaque film
    films.forEach(function (film) {
        console.log(film.titre);
    })
});
