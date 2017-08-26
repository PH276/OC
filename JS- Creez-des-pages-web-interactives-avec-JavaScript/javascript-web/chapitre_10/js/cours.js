// Création d'un objet FormData
var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Création et configuration d'une requête HTTP POST vers le fichier post_form.php

ajaxPost( "http://localhost/javascript/OC/2%20-%20Creez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/post_form.php", commande, function(){
    // Affichage dans la console en cas de succès
        console.log("Commande envoyée au serveur");

});
// Envoi de la requête en y incluant l'objet

var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost( "http://localhost/javascript/OC/2%20-%20Creez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/post_form.php", data, function () {});
});

// Création d'un objet représentant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Byron Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost( "http://localhost/javascript/OC/2%20-%20Creez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/post_json.php", film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succès
        console.log("Le film " + JSON.stringify(film) + " a été envoyé au serveur");
    },
    true // Valeur du paramètre isJson
);
