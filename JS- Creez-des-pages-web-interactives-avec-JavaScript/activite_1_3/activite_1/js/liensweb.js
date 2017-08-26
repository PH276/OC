/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
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

// TODO : compléter ce fichier pour ajouter les liens à la page web

//fonction creation d'un nv element
creerNouveauElt = function (element) {
    var nvElement = document.createElement(element);
    nvElement.innerHTML = "<span><a href=" + listeLiens[i].url + ">" + listeLiens[i].titre + "</a></span>  " +
        listeLiens[i].url + "<br/><p>ajouté par " + listeLiens[i].auteur + "</p>";
    return (nvElement);
}

//fonction modification style
modifierStyle = function (element, par, valeur) {
    var styleModif = nvElement.querySelector(element);
    if (par === "color") {
        styleModif.style.color = valeur;
    } else if (par === "textDecoration") {
        styleModif.style.textDecoration = valeur;
    } else if (par === "fontSize") {
        styleModif.style.fontSize = valeur;
    }
}

//boucle
for (var i = 0; i < listeLiens.length; i++) {
    var nvElement = creerNouveauElt("div");
    nvElement.setAttribute("class", "lien");
    modifierStyle("a", "color", "#428bca");
    modifierStyle("a", "textDecoration", "none");
    modifierStyle("span", "fontSize", "25px");
    document.getElementById("contenu").appendChild(nvElement);
}
