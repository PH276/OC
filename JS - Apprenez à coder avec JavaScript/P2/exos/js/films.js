var films=[];
var Film = {
    titre:"",
    anneeSortie:0,
    realisateur:"",
    init:function(titre, anneeSortie, realisateur){
            this.titre=titre;
            this.anneeSortie=anneeSortie;
            this.realisateur=realisateur;
    },
    decrire:function(){
        var description=this.titre + " (" + this.anneeSortie + ", " + this.realisateur + ")";
        console.log(description);
    }
};

var film1 = Object.create(Film);
film1.init ("Le loup de Wall Street", 2013, "Martin Scorsese");
films.push(film1);

var film2 = Object.create(Film);
film2.init ("Vice-Versa", 2015, "Pete Docter");
films.push(film2);

var film3 = Object.create(Film);
film3.init ("Babysitting", 2013, "Philippe Lachau et Nicolas Benamou");
films.push(film3);

films.forEach (function(film){
    film.decrire();
});
