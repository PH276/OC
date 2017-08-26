var form = document.querySelector("form");
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();


    var data = {
        pseudo : form.pseudo.value,
        evaluation : form.avis.value,
        message: form.message.value
    }

    // Envoi de l'objet au serveur
    ajaxPost( "http://oc-jswebsrv.herokuapp.com/api/temoignage", data,
    function (reponse) {
        var reponse = document.getElementById('retour');
        var dataReponse = data;
        reponse.textContent = "L'avis de " + dataReponse.pseudo + " est " + dataReponse.evaluation + ", et a envoyé le message '" + dataReponse.message + "'";
        console.log(reponse);
        console.log("L'avis " + JSON.stringify(data) + " a été envoyé au serveur");
    }, true);
});
