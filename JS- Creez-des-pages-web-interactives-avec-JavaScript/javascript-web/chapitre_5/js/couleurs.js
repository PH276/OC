var fond;
var divs = document.querySelectorAll('div');
document.addEventListener("keypress", function (e) {
    switch (String.fromCharCode(e.charCode)){
        case 'r' :
        case 'R' :
            fond = "red";
            break;
        case 'j' :
        case 'J' :
            fond = "yellow";
            break;
        case 'v' :
        case 'V' :
            fond = "green";
            break;
        case 'b' :
        case 'B' :
            fond = "white";
    }
    divs.forEach(function(div){
        div.style.backgroundColor=fond;
    });

});
