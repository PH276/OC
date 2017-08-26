/* 
Activité 1
*/

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

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

var contenu = document.getElementById("contenu");
// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

/*
Activité 2
*/

// Crée et retourne un élément <input> de type "button" ou "submit"
// Le paramètre id correspond à l'id du bouton ainsi qu'à l'attribue name (utiliser dans form.elements.name.value)
// Le paramètre type correspond au type de bouton soit "button" ou "submit"
// Le paramètre texte correspond au texte affiché sur le bouton
function creerElementBouton(id, type, texte) {
    var nouveauBoutonElt = document.createElement("input");
    nouveauBoutonElt.id = id;
    nouveauBoutonElt.name = id;
    nouveauBoutonElt.type = type;
    nouveauBoutonElt.value = texte;
    return nouveauBoutonElt;
}

// Crée et retourne un élément <input> de type "zone de texte"
// Le paramètre id correspond à l'id de l'input ainsi qu'à l'attribue name (utiliser dans form.elements.name.value)
// Le paramètre placeholder correspond au texte affiché dans l'input
// Le paramètre type correspond au type de l'input (text, password, email, url, etc.)
// Le paramètre requis empêche l'envoie du formulaire si l'input est vide
function creerElementInput(id, placeholder, type, requis) {
    var nouveauInputElt = document.createElement("input");
    nouveauInputElt.id = id;
    nouveauInputElt.name = id;
    nouveauInputElt.placeholder = placeholder;
    nouveauInputElt.type = type;
    nouveauInputElt.required = requis;
    nouveauInputElt.style.marginRight = "15px"; // Un peu d'espace entre nos éléments "inline"
    return nouveauInputElt;
}

// Création et insertion d'une balise <form> avant le <div#contenu> en ajoutant un peu d'espace entre le formulaire et le <div#contenu>
var formElt = document.createElement("form");
formElt.style.marginBottom = "15px";
contenu.parentNode.insertBefore(formElt, contenu);

// Création et insertion d'un bouton "Ajouter un lien" dans le formulaire
var btnAjouterLienElt = creerElementBouton("afficherFormulaire", "button", "Ajouter un lien");
formElt.appendChild(btnAjouterLienElt);

// Gestion de l'évènement clic sur le bouton "Ajouter un lien"
btnAjouterLienElt.addEventListener("click", (e) => {
    
    // On fait disparaître le bouton "Ajouter un lien"
    e.target.style.display = "none";    

    // Création et insertion du champ "Auteur" dans le formulaire
    var inputAuteurElt = creerElementInput("auteur", "Entrez votre nom", "text", true);
    formElt.appendChild(inputAuteurElt);

    // Création et insertion du champ "Titre" dans le formulaire
    var inputTitreElt = creerElementInput("titre", "Entrez le titre du lien", "text", true);
    formElt.appendChild(inputTitreElt);

    // Création et insertion du champ "URL" dans le formulaire
    // J'aurais utilisé le type "url" mais cela oblige l'écriture du protocol (http:// ou https://) et dans notre cas cela est facultatif
    var inputUrlElt = creerElementInput("url", "Entrez l'URL du lien", "text", true);
    formElt.appendChild(inputUrlElt);

    // Création et insertion du bouton "Ajouter" dans le formulaire
    var btnAjouterElt = creerElementBouton("ajouterLien", "submit", "Ajouter");
    formElt.appendChild(btnAjouterElt);

    // Gestion de l'évènement submit sur le formulaire
    formElt.addEventListener("submit", (e) => {        

        // On vérifie si l'url contient http:// ou https://
        // S'il ne le contient pas, on ajoute http:// par défaut
        var regexProtocol = /^(http|https):\/\//;
        if (!regexProtocol.test(e.target.elements.url.value)) {
            e.target.elements.url.value = "http://" + e.target.elements.url.value;
        }

        // Création d'un objet lien que l'on pourra utiliser avec la function creerElementLien de l'activité 1
        var lien = {
            titre: e.target.elements.titre.value,
            url: e.target.elements.url.value,
            auteur: e.target.elements.auteur.value
        };

        // La function retourne un bloc <div>
        var nouveauElementLien = creerElementLien(lien);
        
        // On insère ce bloc au début du <div> #contenu
        contenu.insertBefore(nouveauElementLien, contenu.firstChild);
        
        // On supprime les éléments "input" et le bouton "Ajouter" du formulaire
        e.target.elements.auteur.remove();
        e.target.elements.titre.remove();
        e.target.elements.url.remove();
        e.target.elements.ajouterLien.remove();
        
        // On affiche de nouveau le bouton "Ajouter un lien"
        e.target.elements.afficherFormulaire.style.display = "inline";

        // On crée un bloc message à afficher au début de la balise <form>
        var paraMessageElt = document.createElement("p");
        paraMessageElt.style.backgroundColor = "#D6ECF6";
        paraMessageElt.style.color = "#2B7DA6";
        paraMessageElt.style.padding = "15px";
        paraMessageElt.textContent = "Le lien \"" + lien.titre + "\" a bien été ajouté.";
        formElt.insertBefore(paraMessageElt, formElt.firstChild);

        // Après 2 secondes, on supprime le bloc message
        setTimeout(() => {
          paraMessageElt.remove();
        }, 2000);

        // On empêche l'envoi du formulaire
         e.preventDefault();
        
    });
});