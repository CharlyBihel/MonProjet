/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");

var solution = Math.floor(Math.random() * 100) + 1;
var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
var nb =0;

for (var i = 1; i <= 6; i++){
    
    if (nombre === solution){
        console.log("Bravo vous avez trouvez la solution qui est " + nombre);
        console.log("Vous avez trouve la solution en " + i + " essai(s)");
        break;
    }
    
    if (nombre > solution){
        console.log(nombre + " est trop grand ! Il vous reste " + (6-nb) + "essai(s)");
    }
    
    else {
        console.log(nombre + " est trop petit ! Il vous reste " + (6-nb) + "essai(s)");
    }

    nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
    if (i >= 6){
        console.log("Perdu... La solution était " + solution);
    }
}