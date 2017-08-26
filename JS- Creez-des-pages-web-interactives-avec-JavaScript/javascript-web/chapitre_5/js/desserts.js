var listeDesserts = document.getElementById('desserts');
var ajouterDessert = document.querySelector("button");
ajouterDessert.addEventListener("click", function () {
    var nouveauDessert = prompt ("Saisissez un de vos desserts préférés :");
    var ligneDessert = document.createElement('li');
    ligneDessert.addEventListener("click", function (){
        this.textContent = prompt ("Modifiez le dessert " + this.textContent);
    });
    ligneDessert.textContent = nouveauDessert;
    listeDesserts.appendChild(ligneDessert);
});
