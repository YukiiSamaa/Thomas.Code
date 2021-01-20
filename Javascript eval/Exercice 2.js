alert("Exercice 2 \nTable de multiplication");

var nb; // variables nombres voulu pour la multiplication
function tablemath() {
    do{
        nb=window.prompt("Saisissez un nombre entier"); // Demande de nombre entier
    }   while(isNaN(nb) || nb%1!==0);    // Pour tester si le nombre et supérieur à zéro
 
    document.write("<h4>La table de multiplication du nombre: "+nb+"</h4>") //text 
    document.write("<table border>"); // creation du tableau

    for(var i=1; i<=20; i++){   // on part de i=1 donc nb*1 jusque i inférieur ou égal à 20 et i++ à chaque "boucle"
        document.write("<tr>");                                // ouverture du tableau avec tr                 
        document.write("<td>"+nb+" x "+i+" =</td>");            // 1er colonne calcul nb*i  
        document.write("<td>"+nb*i+"</td>");                    // 2éme colonne résultat du calcul
        document.write("</tr>");                               // fermeture du tableau avec tr
    }
}
document.write("</table>");              // Fermeture tableau
tablemath();