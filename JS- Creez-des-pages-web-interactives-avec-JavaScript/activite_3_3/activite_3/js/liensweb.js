/*
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [];
//     {
//         titre: "So Foot",
//         url: "http://sofoot.com",
//         auteur: "yann.usaille"
//     },
//     {
//         titre: "Guide d'autodéfense numérique",
//         url: "http://guide.boum.org",
//         auteur: "paulochon"
//     },
//     {
//         titre: "L'encyclopédie en ligne Wikipedia",
//         url: "http://Wikipedia.org",
//         auteur: "annie.zette"
//     }
// ];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreElt = document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight = "5px";
    titreElt.appendChild(document.createTextNode(lien.titre));

    var urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitreElt = document.createElement("h4");
    ligneTitreElt.style.margin = "0px";
    ligneTitreElt.appendChild(titreElt);
    ligneTitreElt.appendChild(urlElt);

    // Cette ligne contient l'auteur
    var ligneDetailsElt = document.createElement("span");
    ligneDetailsElt.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLienElt = document.createElement("div");
    divLienElt.classList.add("lien");
    divLienElt.appendChild(ligneTitreElt);
    divLienElt.appendChild(ligneDetailsElt);

    return divLienElt;
}

var contenuElt = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var lienElt = creerElementLien(lien);
    contenuElt.appendChild(lienElt);
});

// Crée et renvoie un élément DOM de type input
function creerElementInput(placeholder, taille) {
    var inputElt = document.createElement("input");
    inputElt.type = "text";
    inputElt.setAttribute("placeholder", placeholder);
    inputElt.setAttribute("size", taille);
    inputElt.setAttribute("required", "true");
    return inputElt;
}

var ajouterLienElt = document.getElementById("ajoutLien");
// Gère l'ajout d'un nouveau lien
ajouterLienElt.addEventListener("click", function () {
    var auteurElt = creerElementInput("Entrez votre nom", 20);
    var titreElt = creerElementInput("Entrez le titre du lien", 40);
    var urlElt = creerElementInput("Entrez l'URL du lien", 40);

    var ajoutElt = document.createElement("input");
    ajoutElt.type = "submit";
    ajoutElt.value = "Ajouter";

    var formAjoutElt = document.createElement("form");
    formAjoutElt.appendChild(auteurElt);
    formAjoutElt.appendChild(titreElt);
    formAjoutElt.appendChild(urlElt);
    formAjoutElt.appendChild(ajoutElt);

    var p = document.querySelector("p");
    // Remplace le bouton d'ajout par le formulaire d'ajout
    p.replaceChild(formAjoutElt, ajouterLienElt);

    // Ajoute le nouveau lien
    formAjoutElt.addEventListener("submit", function (e) {
        e.preventDefault(); // Annule la publication du formulaire

        var url = urlElt.value;
        // Si l'URL ne commence ni par "http://" ni par "https://"
        if ((url.indexOf("http://") !== 0) && (url.indexOf("https://") !== 0)) {
            // On la préfixe par "http://"
            url = "http://" + url;
        }

        // Création de l'objet contenant les données du nouveau lien
        var lien = {
            titre: titreElt.value,
            url: url,
            auteur: auteurElt.value
        };

        // post le lien sur le serveur et le rajoute sur le site
        ajaxPost("https://oc-jswebsrv.herokuapp.com/api/lien", lien,
            //Rajoute un lien uniquement si le post fonctionnne
            function(){ajoutLienServ();}
            ,true);

        // Remplace le formulaire d'ajout par le bouton d'ajout
        p.replaceChild(ajouterLienElt, formAjoutElt);
    });
});


//recupére les liens depuis le serveur.
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens", function (liens) {
    //crée un tableau JS
    liens = JSON.parse(liens);

    //recupere tous les liens poster
    for (i = 0; i < liens.length; i++) {
        var lienServ = {
            titre: liens[liens.length - (i + 1)].titre,
            auteur: liens[liens.length - (i + 1)].auteur,
            url: liens[liens.length - (i + 1)].url
        }
        //crer le lien a partir de l'API
        var lienServElt = creerElementLien(lienServ);

        // Ajoute le nouveau lien en haut de la liste
        contenuElt.insertBefore(lienServElt, contenuElt.firstChild);
    }
});

// Recupère le dernier lien poster sur le serveur pour le rajouter dans 'p'
function ajoutLienServ () {
    //recupére le lien depuis le serveur
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/liens",
        function (data) {
            //crée un tableau JS
            data = JSON.parse(data);
            //recupere les informations du dernier lien poster
            var lien = {
                titre: data[0].titre,
                auteur: data[0].auteur,
                url: data[0].url
            }
            //crée un lien a partir de jswebsrv
            var lienElt = creerElementLien(lien);

            // Ajoute le nouveau lien en haut de la liste
            contenuElt.insertBefore(lienElt, contenuElt.firstChild);

            // Création du message d'information
            var infoElt = document.createElement("div");
            infoElt.classList.add("info");
            infoElt.textContent = "Le lien \"" + data[0].titre + "\" a bien été ajouté.";

            //recupère l'element p
            var pElt  = document.querySelector("p");
            pElt.insertBefore(infoElt, ajouterLienElt);
            // Suppresion du message après 2 secondes
            setTimeout(function () {
                pElt.removeChild(infoElt);
            }, 2000);
        });



}
