// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];
var motElt = {terme:"", definition:""};
motElt.terme="table";
motElt.definition="plateau et 4 pieds";
mots.push(motElt);

var contenu = document.getElementById('contenu');
var dl = document.createElement('dl');
contenu.appendChild(dl);
mots.forEach (function(mot){
    var dt = document.createElement ('dt');
    var strong = document.createElement ('strong');
    strong.textContent=mot.terme;
    dt.appendChild(strong);
    dl.appendChild(dt);

    var dd = document.createElement ('dd');
    dd.textContent=mot.definition;
    dl.appendChild(dd);
});
