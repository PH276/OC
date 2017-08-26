var form = document.querySelector("form");
console.log(form);
// Gestion de la soumission du formulaire
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    console.log("data : "+data);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost("http://oc-jswebsrv.herokuapp.com/article" , data, function () {
        document.getElementById('reponse').textContent ="L'article a bien été ajouté";
    }, false);
});
