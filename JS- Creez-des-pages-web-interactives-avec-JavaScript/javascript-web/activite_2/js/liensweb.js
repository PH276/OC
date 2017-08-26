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

var nouvelElementLien = {
    titre: "",
    url: "",
    auteur: ""
}

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
    urlLien.classList.add("titre-lien");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.classList.add("titre-lien");
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

// déclaration de variables pour l'activité 2
var annonce = document.getElementById('annonce');
var lienNom = document.getElementById('lienNom');
var ajouter = document.getElementById('ajouter');
var formulaire = document.getElementById('formulaire');
var premierLien;

// ajout d'un écouteur de clic sur le bouton "ajouter un lien"
ajouter.addEventListener('click', function(){
    this.style.display = "none";
    formulaire.style.display = "block";
});

// fonction qui permet de faire disparaître l'annonce de l'ajout d'un nouveau lien
function effaceAnnonce (){
    annonce.style.display = "none";
}

// ajout d'un écouteur de  validation du formulaire
formulaire.addEventListener ('submit', function(e){
    e.preventDefault();
    nouvelElementLien.titre = this.titre.value;
    var regex = /^https?/;
    if (regex.test(this.lien.value)) {
        nouvelElementLien.url = this.lien.value;
    } else {
        nouvelElementLien.url = "http://" + this.lien.value;
    }
    nouvelElementLien.auteur = this.nom.value;
    this.reset();
    var elementLien = creerElementLien(nouvelElementLien);
    premierLien = contenu.querySelector (".lien:first-child");
    contenu.insertBefore (elementLien, premierLien);

    ajouter.style.display = "block";
    this.style.display = "none";
    lienNom.textContent = nouvelElementLien.titre;

    // affichage d'une annonce d'un nouveau lien ajouté pendant un délai de 2 secondes
    annonce.style.display = "block";
    setTimeout (effaceAnnonce, 2000);
});
