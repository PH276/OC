var compteur = 0;
var boutonClic = document.getElementById('clic');
var compteurClics = document.getElementById('compteurClics');
var desactiver = document.getElementById('desactiver');

boutonClic.addEventListener ('click', function() {
    compteurClics.textContent = (++compteur);
});

desactiver.addEventListener ('click', function() {
    compteur = 0;
    compteurClics.textContent = "0";
});
