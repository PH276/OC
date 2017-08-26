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

var i;

for (i = 0; i < listeLiens.length; i++) {

    var div = document.createElement("div");
    div.classList.add("lien");

    var aLien = document.createElement("a");
    aLien.href = listeLiens[i].url;
    aLien.textContent = listeLiens[i].titre + " ";
    aLien.style.color = "#428bca";
    aLien.style.textDecoration = "none";
    aLien.style.fontWeight = "bold";

    var span = document.createElement("span");
    span.textContent = listeLiens[i].url;

    var espace = document.createElement("br");

    var texte = document.createElement("span");
    texte.textContent = "Ajouté par " + listeLiens[i].auteur;

    div.appendChild(aLien);
    div.appendChild(span);
    div.appendChild(espace);
    div.appendChild(texte);

    document.getElementById("contenu").appendChild(div);
}

getComputedStyle(document.querySelector(".lien"));

// Activité 2 :

var bouton = document.getElementById("bouton");

bouton.addEventListener("click", function () {

    bouton.style.display = "none";

    var formulaire = document.createElement("form");

    var nom = document.createElement("input");
    nom.type = "text";
    nom.name = "nom";
    nom.classList.add("champ");
    nom.placeholder = "Entrez votre nom ici";
    nom.required = "required";

    var titreLien = document.createElement("input");
    titreLien.type = "text";
    titreLien.name = "titreLien";
    titreLien.classList.add("champ");
    titreLien.placeholder = "Entrez le titre du lien";
    titreLien.required = "required";

    var urlLien = document.createElement("input");
    urlLien.type = "url";
    urlLien.name = "urlLien";
    urlLien.classList.add("champ");
    urlLien.placeholder = "Entrez l'url du lien";
    urlLien.required = "required";

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Ajouter";

    document.getElementById("menuLiens").innerHTML = "";
    formulaire.appendChild(nom);
    formulaire.appendChild(titreLien);
    formulaire.appendChild(urlLien);
    formulaire.appendChild(submit);
    document.getElementById("menuLiens").appendChild(formulaire);

    formulaire.addEventListener("submit", function (e) {

        var div = document.createElement("div");
        div.classList.add("lien");

        var ajoutLien = document.createElement("a");
        ajoutLien.href = urlLien.value;
        ajoutLien.textContent = titreLien.value + " ";
        ajoutLien.style.color = "#428bca";
        ajoutLien.style.textDecoration = "none";
        ajoutLien.style.fontWeight = "bold";

        if (urlLien.value.indexOf("https://") !== 0) {

            if (urlLien.value.indexOf("http://") !== 0) {
                urlLien.value = "http://" + urlLien.value;
                ajoutLien.href = urlLien.value;
            }
        }

        var ajoutTexte = document.createElement("span");
        ajoutTexte.textContent = urlLien.value;

        var espace = document.createElement("br");

        var ajoutNom = document.createElement("span");
        ajoutNom.textContent = "Ajouté par " + nom.value;

        div.appendChild(ajoutLien);
        div.appendChild(ajoutTexte);
        div.appendChild(espace);
        div.appendChild(ajoutNom);

        document.getElementById("contenu").insertBefore(div, document.getElementById("contenu").querySelector("div"));
        document.getElementById("menuLiens").innerHTML = "";

        bouton.style.display = "block";

        document.querySelector("h4").textContent = "Le lien " + '"' + titreLien.value + '"' + " a bien été ajouté.";
        document.querySelector("h4").style.color = "gray";
        document.querySelector("h4").style.marginLeft = "30px";

        setTimeout(function () {
            document.querySelector("h4").textContent = "";
        }, 2000);

        e.preventDefault();
    });

});
