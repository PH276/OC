// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

var liste = document.createElement('ul');
journaux.forEach(function (journal) {
    var a=document.createElement('a');
    a.href=journal;
    a.textContent=journal;

    var li=document.createElement('li');
    li.appendChild(a);
    liste.appendChild(li);
});

document.getElementById('contenu').appendChild(liste);
