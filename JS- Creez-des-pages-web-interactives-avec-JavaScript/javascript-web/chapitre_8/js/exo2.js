var tabTableaux = document.getElementById('tableaux');
ajaxGet("http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/tableaux.json", function (reponse) {


    var tableaux = JSON.parse(reponse);

    tableaux.forEach (function (tableau){
        var tr = document.createElement('tr');

        var td = document.createElement('td');
        var nom = document.createTextNode(tableau.nom);
        td.appendChild(nom);
        tr.appendChild(td);

        var td = document.createElement('td');
        var annee = document.createTextNode(tableau.annee);
        td.appendChild(annee);
        tr.appendChild(td);

        var td = document.createElement('td');
        var auteur = document.createTextNode(tableau.auteur);
        td.appendChild(auteur);
        tr.appendChild(td);

        tabTableaux.appendChild(tr);

    })
});
