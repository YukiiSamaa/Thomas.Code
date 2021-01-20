alert("Exercice 3 \nRecherche d'un prénom")

var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]; 
// variables avec les prénom recherche
    var prénom = window.prompt("Veuillez choisir un prénom \nAudrey, Aurélien, Flavien, Jérémy, Laurent, Melik, Nouara, Salem, Samuel, Stéphane. ")
    // Prénom saisie
    var rang = tab.indexOf(prénom);
    // permet de trouver l'emplacement du prénom
  
if (rang>=0) // On cherche à savoir si le rang n'est pas inférieur donc si il trouve le prénom
{
    // Donne combien de prénom seront choisi
    var sup = tab.splice(rang,1);
    // Donne le nombre de prénom restant et le prénom sélectionner
    console.log("rang "+sup)
    console.log(tab)
    // Permet de push le prénom qui à été donner se qui donne un espace blanc 
    tab.push("     ")
    // donne le résultat du prénom suprimer
    document.write(sup)
    console.log(sup)
 
}
else { // si il ne trouve pas le prénom alors il prévient
    alert ("Mauvais prénom")
 
}
// Ecrit le résultat sur la page et console
document.write(tab) 
console.log(tab)

