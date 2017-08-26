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

contenu = document.getElementById('contenu');
listeLiens.forEach(function(lien){
    var p = document.createElement ('p');
    var a = document.createElement ('a');
    var url = document.createTextNode (" " + lien.url);
    var br = document.createElement ('br');
    var auteur = document.createTextNode ("ajouté par " + lien.auteur);

    a.href=lien.url;
    a.textContent = lien.titre;
    a.style.color = "#428bca";
    a.style.fontWeight = "bold";

    p.appendChild (a);
    p.appendChild (url);
    p.appendChild (br);
    p.appendChild (auteur);

    contenu.appendChild (p);
});
