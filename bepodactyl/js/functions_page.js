/*******************************************************************************
Toutes les fonctions liées à la page pour le gestion des cadres des options,
demande d'un nouveau texte…
*******************************************************************************/

//cette fonction permet d'avoir un nouveau texte
var exo_en_cours = 0;													// la leçon en cours												// le numéro de la leçon
var cur_checked = "checked";

var le_texte=new Array();

var vies = 2;



function change_exo(a)
{
  if (a=="+" && exo_en_cours<exo.length-1)
    exo_en_cours++;
  else if (a=="-" && exo_en_cours>0)
    exo_en_cours--;

  new_text(exo_en_cours);
}


function new_text(a)
{
	//on réinitialise les variables
	le_texte = new Array;
	recommencer = false;
	nb_recom=0;
	l=0;  // la ligne en cours


	if (!a) // si le numéro de l'exercice n'est pas défini
	  a=0;  // on choisi par défaut le premier (donc le 0)

	exo_en_cours = a;  // permet de connaître globalement sur quel exo on se trouve

	var reg = new RegExp("###","g");

	le_texte = exo[a].split(reg);

	document.getElementById("resultats").innerHTML = "";	// efface la zone de résulats
	document.getElementById("txt").value = "";		// efface le texte frappé																//on efface le texte précédement tapé
	document.getElementById("txt").focus();			// donne le focus à la zone de frappe


	document.getElementById("exo_nb").innerHTML  = (a+1) +" : "+titre[a];	// affiche le numéro de l'exo (+1 pour faire joli) et le titre de l'exercice

	//vies = 2;
	if (mode_jeu)
		document.getElementById("nb_vies").innerHTML = make_heart();
	else
		document.getElementById("nb_vies").innerHTML = "";


	ligne_suivante();

	// ce qui suit permet de griser les boutons [-] et [+]
	document.getElementById("but_+").style.color = "inherit";
	document.getElementById("but_+").style.borderColor = "inherit";
	document.getElementById("but_-").style.color = "inherit";
	document.getElementById("but_-").style.borderColor = "inherit";

	if (exo_en_cours == 0)
	{
		document.getElementById("but_-").style.color = "grey";
		document.getElementById("but_-").style.borderColor = "grey";
	}
	if (exo_en_cours == exo.length-1)
	{
		document.getElementById("but_+").style.color = "grey";
		document.getElementById("but_+").style.borderColor = "grey";
	}

	color_key(); // colorisation des touches du clavier

}
