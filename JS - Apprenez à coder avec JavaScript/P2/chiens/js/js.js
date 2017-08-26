var Chien = {
    cri:"",
    init : function (nom, race, taille) {
        this.nom=nom;
        this.race=race;
        this.taille=taille;
    },
    aboyer : function(){
        return (this.cri + " ! " + this.cri + " ! ");
    }

};


var crokdur = Object.create(Chien);
crokdur.cri="Grrr";

crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.cri="Kaii";
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
