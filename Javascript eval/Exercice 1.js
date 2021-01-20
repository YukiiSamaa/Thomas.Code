alert("Exercice 1 \ncalcul du nombre de jeunes, de moyens et de vieux")

var j= 0; // variables pour les jeunes
var m= 0; // variables pour les moyens
var v= 0; // variables pour les vieux
var nb; // variables pour les ages rentrer 
do { 
    nb=window.prompt("Entrez votre age"); // Entrer l'age
    if (nb<20) {          // Pour les jeunes / moins de 20
        j++;
        console.log(nb);
    }
    else if ((nb >=20) && (nb <=40)) {       // Pour les moyens / entre 20 et 40ans
        m++;
        console.log(nb);
    }
    else if ((nb >=40) && (nb <=100)) {     // Pour les vieux / entre 40ans jusque 100ans
        v++;
        console.log(nb);
    }
}
while (nb <100);

document.write("<h4> jeunes " + j + "<br>moyen " + m + "<br>adultes " + v + "<br>Dont un centenaire</h4>")
alert("jeunes" + j + "\nmoyen" + m + "\nadultes" + v + "\nDont un centenaire")
console.log("jeunes" + j + "\nmoyen" + m + "\nadultes" + v + "\nDont un centenaire")