// Récupère l'élément via son ID
var check = document.getElementById('envoie');
// Ajout d'un évènement lors du click
check.addEventListener("click", function verif(event) {
    // Déclarations des regex
    // regex demandant une première lettre en majuscule et les caractères spéciaux
    var Identité = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    // regex controlant les adresses mails , on autorise tout les carctères alphanumériques
    // ainsi que ". et -" on dis qu'il faut @ ensuite plus au moins 1 caractère alphabétique
    // puis un point suivi de 2 ou 3 caractères alphabétiques
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    // Ce regex est pour les dates américaines car c'est la valeur renvoyer par la balise
    // de l'input type date. On demande ainsi les 4 chiffres de l'année suivi d'un "-",puis
    // on controle les 2 chiffres correspondant au mois suivi d'un "-" et enfin les 2 chiffres
    // correspondant au jour
    var birth = /(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    // regex controlant le code postal, on controle s'il y a bien 5 chiffres.
    var cp = /(^[0-9]{5}$)|^$/;
    // regex controlant l'adresse , il doit y avoir au moins 1 chiffre suivi de au moins
    // 1 caractère alphabétique et une prise en compte du champ vide car non obligatoire
    var adr = /(^[0-9]+[a-zA-Z-\s]+$)|^$/;
    // regex controlant la ville , le meme que alpha mais prenant en compte un champ vide car non obligatoire
    var Localisation = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)|^$/;

    // Déclarations des variables
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var sexe1 = document.getElementById("inlineRadio1").checked;
    var sexe2 = document.getElementById("inlineRadio2").checked;
    var sexe3 = document.getElementById("inlineRadio3").checked;
    var date = document.getElementById("date").value;
    var codepostal = document.getElementById("codepostal").value;
    var adresse = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var accept = document.getElementById("accept").checked;
    var question = document.getElementById("question").value;
    // Controle du nom
    // Vérifie que la variable respecte les paramètres
    
    if (!Identité.test(nom))
    {
        // Appel de l'id "errName" et affichage du message dans une balise <p> vide de la page HTML grace à la fonction textContent
        document.getElementById("erreurName").textContent = "Utilisez uniquement des caractères alphabétiques";
        // Retour à l'évènement déterminé dans la var check en début de page
        event.preventDefault();
        
    }
    else {
        // Si non, le message d'erreur n'apparait pas
        document.getElementById("erreurName").textContent = "Valider";
    }
    
    // Controle du prénom
    if (!Identité.test(prenom)) {
        document.getElementById("erreurPrenom").textContent = "Veulliez entrer une adresse mail valide";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurPrenom").textContent = "Valider";
    }
    // Controle des booleans "sexe"
    if (sexe1 == false && sexe2 == false && sexe3 == false)
    // Si les trois booleans retourne false, affiche un message d'erreur
    {
        document.getElementById("erreurSexe").textContent = "Veulliez choisir une réponse";

    }
    else
    {
        document.getElementById("erreurSexe").textContent = "Valider";
    }
    // Controle de la date de naissance
    if (!birth.test(date)) {
        document.getElementById("erreurDate").textContent = "Date de naissance non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurDate").textContent = "Valider";
    }
    // Controle du code postal
    if (!cp.test(codepostal)) {
        document.getElementById("erreurCP").textContent = "Code postal non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurCP").textContent = "Valider";
    }
    // Controle de l'adresse
    if (!adr.test(adresse)) {
        document.getElementById("erreurAdr").textContent = "Adresse non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurAdr").textContent = "Valider";
    }
    // Controle de la ville
    if (!Localisation.test(ville)) {
        document.getElementById("erreurVille").textContent = "Utilisez uniquement des caractères alphabétiques";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurVille").textContent = "Valider";
    }
    // Controle de l'email
    if (!mail.test(email)) {
        document.getElementById("erreurMail").textContent = "Adresse mail non conforme";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurMail").textContent = "Valider";
    }
    // Controle du sujet
    // Si la valeur de la balise <select> ayant l'id sujet est égal 1, on affiche le message d'erreur
    if (sujet == 1)
    {
        document.getElementById("erreurSujet").textContent = "Selectionnez le sujet de votre requête";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurSujet").textContent = "Valider";
    }
    // Controle de la checkbox
    if (accept != true) {
        document.getElementById("erreurAccept").textContent = "Veuillez cocher cette case";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurAccept").textContent = "Valider";
    }
    // Controle de la question
    // Si rien n'est écrit, on affiche le message d'erreur
    if (question == "") {
        document.getElementById("erreurQuest").textContent = "Ce champ est obligatoire";
        event.preventDefault();
    }
    else {
        document.getElementById("erreurQuest").textContent = "Valider";
    }
});