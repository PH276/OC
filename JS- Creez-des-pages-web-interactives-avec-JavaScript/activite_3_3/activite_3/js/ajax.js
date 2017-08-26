// Ecrire une fonction AJAX générique //

// Execute un appel AJAX GET
// Prend en parametre l'URL cible et la fonctionn callback appelée en cas de succès
function ajaxGet(url, callback) {
    
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requete
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

// Execute un appel AJAX POST
// Prend en parametre l'URL cible, la donnée à envoyer et la fonction callback en cas de succès
// Le paramétre isJson permet d'indiquer si l'envoie concernes des données JSON

function ajaxPost(url, data, callback, isJson) {
    var req = new XMLHttpRequest();
    req.open("POST", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requete
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL : " + url);
    });
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json")
        data = JSON.stringify(data);
    }
    req.send(data);
}