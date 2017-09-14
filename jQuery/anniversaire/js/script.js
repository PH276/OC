$(function() {
    var div = $('div');
    var par1 = $('#par-1');
    var par2 = $('#par-2');
    var par3 = $('#par-3');
    var par4 = $('#par-4');
    var par = $('.par');
    var audio = $("audio");

    par1.on('click', function(){
        par2.css('display', 'block');
    });

    par2.on('click', function(){
        par3.css('display', 'block');
    });

    par3.on('click', function(){
        par4.css('display', 'block');
    });

    par4.on('click', function(){
        par.text("Bon anniversaire");
        div.addClass("fond");
        audio[0].play();
    });

});
