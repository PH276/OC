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

//**************************************************************************************************************************
// Création du Message de confirmation
document.getElementById("contenu").insertAdjacentHTML("beforebegin", '<div id = "message">Le lien a bien été ajouter</div>');
var message = document.getElementById("message");
message.style.backgroundColor = "#cc8bca";
message.style.paddingBottom = "30px";
message.style.paddingTop = "30px";
message.style.display = "none"; // masquer le message
// Création du bouton pour afficher le formulaire
document.getElementById("contenu").insertAdjacentHTML("beforebegin", '<button id = "boutonAffich">Ajouter un Lien</button>');
// Création du Formiulaire
document.getElementById("contenu").insertAdjacentHTML("beforebegin", '<form id = "formulaire"></form><br>');


// Construction du formulaire
// Champs auteur
var auteurLien = document.createElement("input");
auteurLien.id = "auteur";
auteurLien.type = "text";
auteurLien.name = "auteur";
auteurLien.required = true;
auteurLien.placeholder = "Entrez votre nom";
auteurLien.style.marginRight = "20px";

// Champs Titre
var titreLien = document.createElement("input");
titreLien.id = "titre";
titreLien.type = "text";
titreLien.name = "titre";
titreLien.required = true;
titreLien.placeholder = "Entrez le titre du lien";
titreLien.style.marginRight = "20px";

// Champs URL
var urlLien = document.createElement("input");
urlLien.id = "url";
urlLien.type = "text";
urlLien.name = "url";
urlLien.required = true;
urlLien.placeholder = "Entrez l'URL du lien";
urlLien.style.marginRight = "20px";

// Bouton Ajouter lien
var boutonValid = document.createElement("input");
boutonValid.type = "submit";
boutonValid.id = "boutonValid";
boutonValid.value = "Ajouter";

// Creation du formulaire
var formLien = document.getElementById("formulaire");
formLien.appendChild(auteurLien);
formLien.appendChild(titreLien);
formLien.appendChild(urlLien);
formLien.appendChild(boutonValid);
formLien.style.display = "none"; //masquer le formulaire
//********************************************************************************************************************

// évènement du bouton pour afficher le formulaire
var boutonAjoutElt = document.getElementById("boutonAffich");
boutonAjoutElt.addEventListener("click", affichFormulaire);

function affichFormulaire() {
    boutonAjoutElt.style.display = "none";
    formLien.style.display = "block";
}

// Validation du formulaire
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    // Récupération de la saisie
    var auteurSaisi = form.elements.auteur.value;
    var titreSaisi = form.elements.titre.value;
    var urlSaisi = form.elements.url.value;
    
    // Vérification de la présence de http:// ou https:// dans l'URL
    var regexUrl1 = /http:\/\//;
    var regexUrl2 = /https:\/\//;
    
    if (!(regexUrl1.test(urlSaisi) || regexUrl2.test(urlSaisi))) {
        urlSaisi = "http://" + urlSaisi; // Ajout de http:// dans l'URL si besoin
    }
    
    // Ajout du nouveau Lien
    var newLien =
    {
        titre: titreSaisi,
        url: urlSaisi,
        auteur: auteurSaisi
    };
    var newElement = creerElementLien(newLien);
    document.getElementById("contenu").insertBefore(newElement, contenu.firstChild);
    
    // réinitialisation du formulaire
    form.elements.auteur.value = "";
    form.elements.titre.value = "";
    form.elements.url.value = "";
    formLien.style.display = "none";
    boutonAjoutElt.style.display = "block";
    
    //Affichage du message de confirmation pendant 2 secondes
    message.textContent = "le lien '" + titreSaisi + "' a bien été ajouté !";
    message.style.display = "block";
    setTimeout(function() {
        message.style.display = "none";
    }, 2000);
    e.preventDefault(); // ne pas envoyer de submit
});

