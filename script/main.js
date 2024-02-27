// Fonction Inversion de chaine 

function InverserChaine(chaine){
    return chaine.split("").reverse().join("");

}
//split: La méthode split est utilisée par la fonction pour converttir la chaine en un tableau de caractère
//reverse: La méthode reverse pour inverser l'ordre du tableau
//join: La méthode join pour convertir le tableau en une chaine et la retourne

// Testons la fonction InverserChaine
console.log(InverserChaine("Football"));
console.log(InverserChaine("123456"));

// Fonction Compter Chaine de caractère

function CompterCaracteres(chaine){
    return chaine.length;
}                  

// La fonction utilise l'argument chaine
// la propriété length utilisé par la fonction permet de compter le nombre de caractères.

// Testons la fonction compterCrarctère

console.log(CompterCaracteres("123456"));     
console.log(CompterCaracteres("Football"));   

//Foncton Mettre les mots en majuscules
function MettreEnmajuscule(lettre){
    return lettre= lettre[0].toUpperCase() + lettre.slice(1);
}
//La fonction prend un seul paramètre lettre qui représente une chaîne de caractères.
//La fonction utilise la propriété [0] pour accéder à la première lettre de la chaîne.
//La fonction utilise la méthode toUpperCase() pour convertir la première lettre en majuscule.
//La fonction utilise la méthode slice(1) pour obtenir le reste de la chaîne après la première lettre.
//La fonction concatène la première lettre en majuscule et le reste de la chaîne en utilisant l'opérateur +.
// Et enfin La fonction retourne la chaîne avec la première lettre en majuscule.
 


// Testons la fonction Mettre en majuscule
console.log(MettreEnmajuscule("hello"));
console.log(MettreEnmajuscule("goodbye everybody"));

//Fonction Tableau Recherche valeurs min et max dans un tableau de nombre

function maxMin(Array) {      // Définir les valeurs maximales et minimales par défaut
    
    let max = Array[0];
    let min = Array[0];
  
    // Parcourir le tableau et comparer chaque élément aux valeurs maximales et minimales
    for (let i = 1; i < Array.length; i++) {
      if (Array[i] > max) {
        max = Array[i];
      } else if (Array[i] < min) {
        min = Array[i];
      }
    }
  
    // Retourner un objet avec les valeurs maximales et minimales
    return { max: max, min: min };
  }

  // Testons la fonction min, max
  const nombres = [10, 50, 30, 20, 40];

const resultat = maxMin(nombres);

console.log("Valeur maximale:", resultat.max); 
console.log("Valeur minimale:", resultat.min); 

// Fonction somme des éléments d'un tableau

function som(Array){
    som = 0;
    i=0;
    for(let i=1; i<Array.length; i++){
        som = som + Array[i];
    }
    return som + Array[i];
}
// Testons la fonction somme
let Array = [10, 50, 30, 20, 40]
console.log(som(Array));

// Fontion Filtre

function filtrer(tableau, condition) {
    
    const tableauFiltre = [];         // Créer un nouveau tableau pour stocker les éléments filtrés
  
    // Parcourir le tableau et ajouter chaque élément qui satisfait la condition au nouveau tableau
    for (let i = 0; i < tableau.length; i++) {
      if (condition(tableau[i])) {
        tableauFiltre.push(tableau[i]);
      }
    }
  
    return tableauFiltre;  // Retourner le nouveau tableau filtré
  }
  

  
  const number = [1, 2, 3, 4, 5];
  
  // Filtrer les nombres pairs
  const numberPairs = filtrer(number, number => number % 2 === 0);
  
  console.log(numberPairs); 
  
  // Filtrer les nombres supérieurs à 3
  const numberSuperieursA3 = filtrer(number, number => number > 3);
  
  console.log(numberSuperieursA3); 
  
  // Fonction mathématiques: factorielle

  function factorielle(n) {    //La fonction factorielle prend un nombre n en argument.
   
    
    
    if (n === 0) {                           // La fonction utilise la propriété === pour comparer n à 0.
      return 1;                             //Si n est égal à 0, la fonction retourne 1.
    } else {
      return n * factorielle(n - 1);        // Sinon, la fonction retourne n multiplié par la factorielle de n - 1.
    }
  }
  

  console.log(factorielle(4)); 

  //

  function estPremier(nombre) {
    if (nombre <= 1) {
      return false;
    }
    if (nombre <= 3) {
      return true;
    }
    if (nombre % 2 === 0 || nombre % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= nombre) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  
  // Teste de la fonction
  
  console.log(estPremier(13)); 
  console.log(estPremier(15)); 
  
  
// Fonction sequence Fibonacci

function fibonacci(n) {
    let a = 0;              // Définir les deux premiers termes
    let b = 1;
  
    for (let i = 0; i < n - 2; i++) {      // Itérer jusqu'à n-2
    
      let c = a + b;             // Calculer le prochain terme
  
      a = b;                   // Définir a comme b
  
      b = c;                     // Définir b comme c
    }

    return [a, b];              //// Retourner les deux derniers termes
  }
  
  
// Test de la fonction Fibonacci  
  const [a, b] = fibonacci(12);
  
  console.log(`Termes ${a} et ${b} de la séquence de Fibonacci`);
  