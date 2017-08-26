var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire: function(){
        var description=this.nom + " est un " + this.race + " mesurant " + this.taille + " cm. Il aboie : " + this.aboyer();
        return description;
    }
};

var chiens=[];

var chien1 = Object.create(Chien);
chien1.init ("Crokdur", "mâtin de Naples", 75);
chiens.push(chien1);

var chien2 = Object.create(Chien);
chien2.init ("Pupuce", "Bichon", 22);
chiens.push(chien2);

var chien3 = Object.create(Chien);
chien3.init ("Médor", "labrador", 58);
chiens.push(chien3);

console.log("Le chenil héberge " + chiens.length + " chien(s) :");
chiens.forEach (function(chien){
    console.log(chien.decrire());
});
