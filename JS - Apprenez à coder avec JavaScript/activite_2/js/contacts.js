/*
Activité : gestion des contacts
*/

var contacts=[];

Contact={
	prenom: "",
	nom: "",

	initPrenom: function(prenom) {
		this.prenom = prenom;
	},
	initNom: function(nom) {
		this.nom = nom;
	},
	afficher: function() {
		var resultat = "Nom : " + this.nom + ", prénom : " + this.prenom;
		console.log(resultat);
	}

};

var saisie;
var contact;

contact = Object.create(Contact);
contact.initPrenom ("Carole");
contact.initNom ("Lévisse");
contacts.push(contact);

contact = Object.create(Contact);
contact.initPrenom ("Mélodie");
contact.initNom ("Nelsonne");
contacts.push(contact);

console.log("Bienvenue dans le gestionnaire des contacts !");
do {
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");

	saisie = prompt ("Choisissez une option :");

	if (saisie === "1" ){
		console.log("Voici la liste de tous vos contacts :");
		contacts.forEach(function (contact) {
			contact.afficher();
		});
	} else if (saisie === "2") {
		contact = Object.create (Contact);
		nom = prompt ("Entrez le nom du nouveau contact :");
		contact.initNom(nom);
		prenom = prompt ("Entrez le prénom du nouveau contact :");
		contact.initPrenom(prenom);
		contacts.push (contact);
		console.log("Le nouveau contact a été ajouté");
	}

	console.log("");

} while (saisie !== "0");
console.log("Au revoir !");
