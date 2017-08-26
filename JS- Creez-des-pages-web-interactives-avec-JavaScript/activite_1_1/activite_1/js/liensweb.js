/* 
Activité 1
*/

// Liste des lien Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listelien = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les lien à la page web

for (var i = 0; i < listelien.length; i++) {
    //creation de div
    var divElt = document.createElement("div");
    divElt.classList = "lien";

    var urlElt = document.createElement("p");
    urlElt.classList = "lien";
    divElt.appendChild(urlElt);

    // creation de a
    var lienElt = document.createElement("a");
    lienElt.classList = "lien";
    lienElt.textContent = listelien[i].titre;
    lienElt.href = listelien[i].url;
    urlElt.appendChild(lienElt);
    document.getElementById("contenu").appendChild(divElt);
    lienElt.style.color = "#428bca";
    lienElt.style.textDecoration = 'none';
    lienElt.style.fontWeight = "bold";
    lienElt.style.fontSize = "130%"
    
    // ajout d'un texte à p
    
urlElt.appendChild(document.createTextNode(""+listelien[i].url));

    // append div et br
    var br = document.createElement("br");
    urlElt.appendChild(br);
    //creation span
    var auteurElt = document.createElement("span");
    auteurElt.textContent = "ajouter par " + listelien[i].auteur;
    urlElt.appendChild(auteurElt);
}
