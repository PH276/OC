var bouton = document.querySelector('button');
var textTemps = document.querySelector('#temps');
var temps = Number(textTemps.textContent);
var chronoEnCours;

function incrementeTemps(){
    // temps++;
    textTemps.textContent = ++temps;
}

bouton.addEventListener('click', function(){
    if (bouton.textContent === "Démarrer") {
        bouton.textContent = "Arrêter";
        chronoEnCours = setInterval(incrementeTemps, 1000);
    } else {
        bouton.textContent = "Démarrer";
        clearInterval(chronoEnCours);
    }
});
