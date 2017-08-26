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
function lesElements(lien) {
 
// création du titre cliquable du lien
    var titreElt= document.createElement("a");
    titreElt.href = lien.url;
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";
    titreElt.style.marginRight  = "7px";
    titreElt.appendChild(document.createTextNode(lien.titre));
 
// creation du lien
    var lienUrl = document.createElement("span");
    lienUrl.appendChild(document.createTextNode(lien.url));
 
    var insertTitre = document.createElement("h2");
    insertTitre.style.margin = "0px";
    insertTitre.appendChild(titreElt);
    insertTitre.appendChild(lienUrl);
 
    var inserTitreUrl = document.createElement("span");
    inserTitreUrl.appendChild(document.createTextNode("Ajouté par " + lien.auteur));
 
    var insertDiv = document.createElement("div");
    insertDiv.classList.add("lien");
    insertDiv.appendChild(insertTitre);
    insertDiv.appendChild(inserTitreUrl);
 
    return insertDiv;  
 
    }
// Fin de la fonction
 
    listeLiens.forEach(function (lien)
     {
 
    document.getElementById("contenu").appendChild(lesElements(lien));
 
    });
