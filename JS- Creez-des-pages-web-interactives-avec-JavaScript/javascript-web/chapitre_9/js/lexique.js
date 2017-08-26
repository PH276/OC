var lettres = document.getElementById('lettres');
var mots = document.getElementById('mots');
var alphabet = ['A', 'B', 'C', 'D', 'E'];

function lettreCliquee(lettre){
        ajaxGet("http://oc-jswebsrv.herokuapp.com/api/lexique/"+lettre, function (reponse) {
            // Transforme la réponse en un tableau d'articles
            rep = JSON.parse(reponse);
            if (rep.length >0){
                var chaine = "";
                for (var i = 0; i<rep.length;i++){
                    // console.log(rep[i].term);
                    chaine+="<h2>"+rep[i].term+"</h2>";
                    chaine+="<p>"+rep[i].definition+"</p>";
                }
                mots.innerHTML = chaine;

                // console.log(rep[0].term);
            } else {


                mots.innerHTML = 'Aucun mot trouvé pour '+lettre;
            }

        });

}

alphabet.forEach (function(lettre){
    var a = document.createElement('a');
    a.href = "#";
    a.textContent = lettre;
    a.addEventListener('click', function(e){
        lettreCliquee(this.textContent);
    });
    lettres.appendChild(a);
    lettres.appendChild(document.createTextNode(' | '));
});
lettres.appendChild(document.createTextNode('...'));
