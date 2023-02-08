var tabDpt = new Array();
var tabPref = new Array();
function initialiserTableau (){
	tabDpt["Dordogne"]="Aquitaine"
	tabDpt["Landes"]="Aquitaine"
	tabDpt["Var"]="Paca"
	tabDpt["Vaucluse"]="Paca"
	tabDpt["Hautes-alpes"]="Paca"
	tabDpt["Charente"]="Poitou-charentes"
	tabDpt["Vienne"]="Poitou-charentes"
	console.log(tabDpt);

	tabPref["Dordogne"]="Perigueux"
  tabPref["Landes"]="Dax"
  tabPref["Var"]="Toulon"
	tabPref["Vaucluse"]="Avignon"
  tabPref["Hautes-alpes"]="Gap"
  tabPref["Charente"]="Angouleme"
	tabPref["Vienne"]="Poitiers"
	console.log(tabPref);

}


function getHTMLZoneDeListe(laRegion){
	var html = "<select name='dpt' id='dpt' onchange='afficherPref(this.value)'	>";
	initialiserTableau();
	for (var dpt in tabDpt) {
		if (tabDpt[dpt] === laRegion) {
			html += "<option value='" + dpt + "'>" + dpt + "</option>";
		}
	}
	html += "</select>";
	html += "<div id='prefecture'></div>";
	return html;
}
function afficherZoneDeListe(){
	var laRegion;
	laRegion=document.getElementById("reg").value;
	document.getElementById("liste").innerHTML=getHTMLZoneDeListe(laRegion);
}
/*
fonction getHTMLImg(leDépartement : chaîne de caractères) : chaïne de caractères
    début
        codeHTML <- "<img src='img/" + leDépartement + ".jpg'>"
        renvoyer codeHTML
    fin
*/
function getHTMLImg(leDepartement) {
   return `<img src= img/${leDepartement}.jpg alt = ${leDepartement}>`;
}

function afficherImage() {
  let departement = document.getElementById("dpt").value;
  let codeHTML = getHTMLImg(departement);
  document.getElementById("res").innerHTML = codeHTML;
}

function afficherPref(dpt) {
  var pref = tabPref[dpt];
  document.getElementById("prefecture").innerHTML = "Préfecture : " + pref;
}
