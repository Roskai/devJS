function getTauxAlcoolemie (lePoids , leSexe , leDegreEntier , leNombreVerres){
	//renvoie le taux d'alcoolémie associé aux valeurs fournies en paramètre d'entrée. Le paramètre leSexe peut prendre
	//seulement deux valeurs : F ou M.
	let tauxAlcool = (  leNombreVerres * 100*(leDegreEntier * 0.01)*0.8) / (lePoids * (leSexe === "M" ? 0.7 : 0.6));
	/*
		On multiplie le nombre de verres par 100 pour avoir la quantié ingéré, on multiplie cet valeur par le degré entier par 100 pour avoir
		un pourcentage, puis on multiplie par 0.8 car c'est l'énoncé.
	*/
	return tauxAlcool;
}
function estUnEntierPositif(laValeur){
	const INTVAL = parseInt(laValeur);
	return !isNaN(INTVAL) && INTVAL > 0;
}
function estUnEntierPositifREGEX(laValeur) {
	// Regex :[^0-9]
 /*
  Cette expression recherche un caractère unique qui n'est pas présent dans la liste ci-dessous [^0-9].
 */
	let exp = "[^0-9]";
	if (laValeur.length !== 0) {
		return laValeur.search(exp)===-1 ; // On retourne l'inverse de ce que l'on recherche
	}
	return false // si c'est vide alors c'est faux
}

function testerFonction1(){
	alert ("taux pour Poids = 70 kg Sexe = Masculin Degré = 8 Nombre de verres : 3 ==> " +  getTauxAlcoolémie(70,"M",8,3));
}
function testerFonction2(){
	alert (`res pour 70 ==> ${estUnEntierPositif("70")}`);
	alert (`res pour -78 ==> ${estUnEntierPositif("-78")}`);
	alert (`res pour -7B ==> ${estUnEntierPositif("-7B")}`)
	alert (`res pour 17B ==> ${estUnEntierPositif("17B")}`);
	alert (`res pour un string vide ==> ${estUnEntierPositif("")}` )
}
function testerFonctionREGEX(){
	alert (`resREGEX pour 70 ==> ${estUnEntierPositifREGEX("70")}`);
	alert (`resREGEX pour -78 ==> ${estUnEntierPositifREGEX("-78")}`);
	alert (`resREGEX pour -7B ==> ${estUnEntierPositifREGEX("-7B")}`)
	alert (`resREGEX pour 17B ==> ${estUnEntierPositifREGEX("17B")}`);
	alert (`resREGEX pour 1B7 ==> ${estUnEntierPositifREGEX("1B7")}`);
	alert (`resREGEX pour un string vide ==> ${estUnEntierPositifREGEX("")}` )
}
function genHTML(){
	let codeHTML;
	let i;
	const POIDS = document.getElementById("poids").value;
	const DEGRE = document.getElementById("deg").value;
	const SEXE = document.getElementById("sexe").value;
	codeHTML ="<center><table><tr><th>Nombre de verres</th><th>Taux d'alcoolémie</th></tr>";
	for (i=1;i<=10;i++)	{
		codeHTML +=`<tr><td>${i}</td><td>${getTauxAlcoolemie(POIDS,SEXE,DEGRE,i)}</td></tr>`;
	}
	codeHTML += "</table></center>";
	return (codeHTML);
}
function traiter(){
	const POIDS = document.getElementById("poids");
	var codeHTML;
	if (estUnEntierPositif(POIDS.value)){
		POIDS.className="normal";
		codeHTML=genHTML();
	}	else	{
		POIDS.className="erreur";
		codeHTML ="<h2>Erreur sur le poids</h2>";
	}
	document.getElementById("res").innerHTML=codeHTML;
}
