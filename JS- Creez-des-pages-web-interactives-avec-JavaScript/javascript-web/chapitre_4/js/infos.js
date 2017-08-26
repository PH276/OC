contenu = document.getElementById('contenu');
infos = document.getElementById('infos');
styleContenu = getComputedStyle (contenu);

p = document.createElement ('p');
p.textContent = "Informations sur l'lélément :";

ul = document.createElement ('ul');

h = document.createElement ('li');
h.textContent = "Hauteur : " + styleContenu.height;
ul.appendChild (h);
l = document.createElement ('li');
l.textContent = "Hauteur : " + styleContenu.width;
ul.appendChild (l);


infos.appendChild(p);
infos.appendChild(ul);
