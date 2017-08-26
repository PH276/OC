
divs = document.querySelectorAll('div');
fond=prompt ("couleur du fond des paragraphes :");
texte=prompt ("couleur du texte des paragraphe :");
divs.forEach(function(div){
    div.style.backgroundColor=fond;
    div.style.color=texte;
});
