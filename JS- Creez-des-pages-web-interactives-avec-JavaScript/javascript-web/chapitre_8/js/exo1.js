var listeLangages = document.getElementById('langages');
ajaxGet("http://localhost/javascript/OC/2%20-%20Cr%C3%A9ez%20des%20pages%20web%20interactives%20avec%20JavaScript/javascript-web-srv/data/langages.txt", function (reponse) {


    var langages = reponse.split(';');
    langages.forEach (function (langage){
        var li = document.createElement('li');
        var lg = document.createTextNode(langage);
        li.appendChild(lg);
        listeLangages.appendChild(li);
    })
});
