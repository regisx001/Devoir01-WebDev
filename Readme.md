# But 

créer une page Web rendant des données complexes facilement lisibles en les organisant de manière structurée pour simplifier leur présentation et leur consultation. Il s'agit d'afficher des formes verbales et leurs traductions en offrant  des fonctionnalités interactives, enrichissant l’expérience utilisateur et répondant à divers besoins pratiques.

---

Ecrire le code HTM/CSS/JavaScript  qui donne sortie de l'image en attachement et qui répond aux exigences suivantes:

# a :
 Les deux volets, de gauche et de droite, peuvent être interchangés en cliquant sur l'élément  "◀ ▶ ". L'entête du tableau est toujours visible et à chaque lien du volet à droite correspond au moins un verbe dans le tableau du volet à gauche; 

---

# b :
Lors  de chargement de la page, une fonction Javascript lit le contenu du tableau à partir d'une table JavaScript (voir le code en bas);

---

# c :
Un clic sur l'élément " ▶ " permet de réduire le volet de  droite et d'étendre le volet de gauche pour occuper la largeur de la page, tout en gardant cet élément toujours visible, mais contenant cette fois "◀"(Ce qui permet de retourner à l'état initial suite à un clic);

---

# d :
Les boutons "Edit", "Update" et "Delete" permettent respectivement d'afficher une vue détaillée du verbe, d'actualiser les données et de supprimer la ligne à la quelle il appartient, les deux premières opérations se font à l'aide des boîtes de dialogue personnalisées. Sur la vue détaillée, on trouve plus de détails sur le verbe ( synonymes, phrases, images et autres);

---

# e :
Un clic sur un des liens du volet à droite permet de faire défiler le contenu du tableau pour s'aligner sur le premier verbe commençant par la lettre correspondant au lien cliqué (La ligne sera avec du texte en rouge);

---

# f :
L'ajout d'une nouvelle entrée dans le tableau se fait en cliquant sur le bouton "Add a verb", l'insertion se fait dans l'ordre alphabétique. Si le lien qui correspond à la  première lettre du verbe n'existe pas, il est ajouté. L'ajout d'un nouveau verbe avec le champs "verb" vide est refusé. Mais, si au moins un des autres champs est vide, la ligne correspondante sera avec une bordure rouge; 

---

# g :
Un clic sur le bouton "Find" permet de chercher un verbe dans le tableau. S'il existe,  l'entrée qui lui correspond est affichée en premier dans le volet de gauche;

---

# h :
 Après chaque modification les informations en bas du volet de droite sont actualisées.