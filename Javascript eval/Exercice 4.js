alert("Exercice 4 \nTotal d'une commande")

 


var PU= parseFloat(window.prompt("Saisir le prix unitaire: "));     // Prix unitaires d'un produit
var QTECOM= parseInt(window.prompt("Saisir la quantité commandée: "));  // Quantité commandée
var TOT = (PU*QTECOM);  // Le total du prix selon la quantité
var fport= 0.02 * TOT;  // Frais de port en fonction du total =port
var remise1 = TOT * (0.05);  // Remise de 5% =rem1
var remise2 = TOT *(0.10);   // Remise de 10% =rem2
var PAP= 0;   // Prix final 
    // Vérification du nombres saisi
    if (isNaN(PU && QTECOM)) {
        alert("Erreur, veuilliez saisir un nombres");
    }
    // si le nombres saisi et correct alors la boucle commence
    // Si total au dessus de 500€ alors le prix total sera déduit de la remise de 10% 
    else {
        if (TOT > 500) {
            PAP= TOT-remise2;
            alert("Le pris payer sera de " + PAP + " € !");
        }
        // Si le total et compris entre >200 et =< à 500
        // si frais de port infé à 6, fport sera= à 6€ de frais de port, mais si frais de port sont supé à 6 alors 2% seront apliquée au TOT,
        // Et pour donner le prix total on appliquera la remise de 10% + les frais de port qui auront été donnée avant
        else if (TOT > 200 && TOT <=500) {
            if (fport < 6) {
                fport = 6;
            }
            else {
                fport = 0.02 * TOT;
                
            }
            PAP = TOT - remise2 + fport;
            alert("Prix à payer sera de " + PAP + " € !");
        }
        // Si TOT <= à 200 et >= 100 alors la remise de 5% avec frais de port si besoin sera appliquer
        else if (TOT <=200 && TOT >=100) {
            PAP = TOT - remise1 + 6;
            alert("Le prix à payer sera " + PAP + " € !");
        }
        else {
            PAP = TOT + 6;
            alert("Le prix à payer sera " + PAP + " € !");
        }
    }

