function instruments(elt){
    var lg=document.getElementsByTagName(elt).length;
    console.log(lg);
    console.log(document.querySelectorAll(elt)[0].href);
    console.log(document.querySelectorAll('a')[lg-1].href);
}

function possede (instrument, matiere){
    if (document.getElementById(instrument)) {
        console.log(document.getElementById(instrument).classList.contains(matiere));
    } else {
        console.log("aucun élément ne possède l'identifiant " + instrument);
    }
}


instruments('a');

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
