var demarrer = document.querySelector('#demarrer');
var arreter = document.querySelector('#arreter');
var ballon = document.querySelector('#ballon');
var cadre = document.querySelector('#cadre');
var largeurBallon = parseFloat(getComputedStyle(ballon).width);
var deplacement;
var sens = 1;

function positionGauche(){
    var largeurCadre = parseFloat(getComputedStyle(cadre).width);
    var positionBallon = parseFloat(getComputedStyle(ballon).left);
    if (sens == 1) {
        if (positionBallon+largeurBallon+10>largeurCadre) {
            sens = -1;
        }
    } else {
        if (positionBallon-10<0) {
            sens = 1;
        }
    }
    nouvellePosition=positionBallon+(10*sens);
    ballon.style.left = nouvellePosition+"px";

}

demarrer.addEventListener('click', function(){
    deplacement = setInterval(positionGauche, 100);
    demarrer.disabled = true;
    arreter.disabled = false;
});

arreter.addEventListener('click', function(){
    demarrer.disabled = false;
    arreter.disabled = true;
    clearInterval(deplacement)
});
