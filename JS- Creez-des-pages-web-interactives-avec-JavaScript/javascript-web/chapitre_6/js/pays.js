// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

var saisie = document.querySelector ('input');
var suggestions = document.getElementById('suggestions');
saisie.addEventListener ('input', function (){
    suggestions.innerHTML = "";
    saisieEnCours = saisie.value;

    listePays.forEach (function (pays){
        if (pays.indexOf(saisieEnCours) === 0) {
            var suggestion = document.createElement ('div');
            suggestion.className = "suggestion";
            suggestion.textContent = pays;
            suggestion.addEventListener ('click', function (){
                saisie.value=pays;
                suggestions.innerHTML = "";
            });
            suggestions.appendChild (suggestion);
        }
    });


});
