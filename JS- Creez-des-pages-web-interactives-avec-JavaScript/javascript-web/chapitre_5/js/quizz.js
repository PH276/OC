// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];
var contenu = document.getElementById('contenu');
var i=1;
questions.forEach (function (question) {
    var paragrapheQuestion = document.createElement("p");
    var noQuestion = document.createElement ('strong');
    var enonce = document.createTextNode (question.enonce);
    var afficherReponse = document.createElement ('button');
    var ligne2 = document.createElement ("span");
    var reponse = question.reponse;
    ligne2.appendChild (afficherReponse);

    noQuestion.textContent = "Question " + i + " : ";

    afficherReponse.textContent = " Afficher la réponse ";
    ligne2.addEventListener ("click", function () {
        this.textContent = question.reponse;
    });

    paragrapheQuestion.appendChild (noQuestion);
    paragrapheQuestion.appendChild (enonce);
    paragrapheQuestion.appendChild (document.createElement ('br'));
    paragrapheQuestion.appendChild (ligne2);
    contenu.appendChild (paragrapheQuestion);
    i++;
});
