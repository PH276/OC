var formulaire = document.querySelector('form');
var profil = document.getElementById('profil');
var avatar = document.createElement('img');

formulaire.addEventListener("submit", function(e){
    e.preventDefault();

    url = "https://api.github.com/users/"+this.profil.value;
    ajaxGet(url, function (reponse) {
        // Transforme la réponse en un tableau d'articles
        rep = JSON.parse(reponse);
        document.querySelector('img').src = rep.avatar_url;
        document.getElementById('nom').textContent = rep.name;
        document.getElementById('entreprise').textContent = rep.company;
        document.getElementById('blog').textContent = rep.blog;
        document.getElementById('blog').href = rep.blog;


        console.log(rep.avatar_url);
        console.log(rep.name);
        console.log(rep.company);
        console.log(rep.blog);
        // console.log(reponse.name);
    });

});

//var reponse = document.getElementById("reponse");
