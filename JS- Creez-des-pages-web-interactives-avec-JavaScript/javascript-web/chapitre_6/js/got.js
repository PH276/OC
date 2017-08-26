// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}
var formulaire = document.querySelector ('form');
var maisonChoisie = document.getElementById('maison');
maisons.forEach (function (maison) {
    var option = document.createElement('option');
    option.value = maison.code;
    option.textContent = maison.nom;
    maisonChoisie.appendChild(option);
});
var persos = document.getElementById('persos');
maisonChoisie.addEventListener ("change", function (){
    persos.innerHTML = "";
    var personnages = getPersonnages(this.value);
    personnages.forEach (function (personnage){
        var ligne = document.createElement ('li');
        ligne.textContent = personnage;
        persos.appendChild (ligne);
    });
});
