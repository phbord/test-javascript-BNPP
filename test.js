/** EX1 :
 * Que devrons nous mettre à la place de ??? pour afficher 'fruit' à la console.log : (il faut expliquer le résultat)
 * 
const food = 'orange';
let foodType;
 
switch (food) {
    case 'carrot':
        foodType = 'vegetable';
        break;
    case 'apple' ??? :
        foodType = 'fruit';
        break;
}

console.log(foodType);
*/

// TODO E1
const food = 'orange';
let foodType;
 
switch (food) {
    case 'carrot':
        foodType = 'vegetable';
        break;
    case 'apple':
    case 'orange' :
        foodType = 'fruit';
        break;
}

console.log(foodType);
/*
    Explications : 
    si on ajoute un ou plusieurs cases avec des valeurs différentes sans actions, avant un case avec une valeur et une action, cela signifie que ces premiers cases équivalent à des "OU" d'une condition.
*/




/** EX 2:
 * 
 * 
const hero = 'Batman';
let univers;
 
switch (hero) {
    case 'Batman':
        univers = 'DC';
    default:
        univers = 'MARVEL';
    case 'Superman' :
        univers = 'DC'
    case 'Ironman' :
        univers = 'MARVEL';
        break;
}

console.log(univers);

  quelle est le résultat du console.log (il faut expliquer le résultat)
*/

// TODO EX2
const hero = 'Batman';
let univers;
 
switch (hero) {
    case 'Batman':
        univers = 'DC';
    default:
        univers = 'MARVEL';
    case 'Superman' :
        univers = 'DC'
    case 'Ironman' :
        univers = 'MARVEL';
        break;
}

console.log(univers);
/*
    Explications : 
    Pour sélectionner la variable "univers", il faut absolument un "break;" afin de sortir du "switch".
    S'il n'y a pas d'égalité en "hero" et "univers", ou de break si l'égalité est confirmée, alors c'est le cas "default" (par défaut) qui s'appliquera.
*/



/** EX3 :
 (function(){
    var a = b = 42;
  })();
   
  console.log(typeof a);
  console.log(typeof b);
  

  quelle est le résultat des console.log ? (il faut expliquer le résultat)
 */

// TODO EX3
(function(){
    var a = b = 42;
})();
   
console.log(typeof a);
console.log(typeof b);
/*
    Explications : 
    Le type de a affiche "undefined", parce qu'on lui assigne aucune valeur ou type, mais la variable b.
    Le type de b affiche "42", parce qu'on lui affecte directement sa valeur.
*/


  /** EX4 :
   * 
   * Ecrire une fonction sum qui calcul la somme de deux entiers, est qui est appelée de la maniére suivante :
   * let result = sum(2)(3);
   * console.log(result)
  */

// TODO EX4
function sum(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
let result = sum(2)(3);

console.log(result);

//================================================================ALGORITHMICS========================================================


/** EX 1:
 * a(i, j) devrait retourner true si au moins un des arguments est égal à 1 ou si leur somme est égale à 1. 
 * Les deux arguments donnés seront toujours des nombres.
 * Par exemple :
 * a(1, 5) retourne true 
 * a(2, 3) retourne false 
 * a(-3, 4) retourne true
 */

// TODO EX 1
function a(i, j) {
    let res = false;
    if (i === 1 || j === 1 || i + j === 1) {
        res = true;
    }
    console.log('ex1: ',res);
    return res;
}
a(1, 5);
a(2, 3);
a(-3, 4);


/** EX2 :
 * Implémentez la fonction solution telle que l'exécution de la ligne suivante : console.log(solution('Hello you !'));
 * Donne la sortie suivante (un mot par ligne) :
 * Hello 
 * you
 * !
 */

// TODO EX2
function solution(str) {
    let res = '';
    words = str.split(" ");
    words.map(word => res += `\n${word}`);
    return res;
}

console.log(solution('Hello you !'));


/** EX 3:
 * Implémentez la fonction helloProperties(obj).
 * Cette fonction prend en paramètre un objet obj comme celui-ci:
 * {
 * john: 12,
 * brian: true,
 * doe: 'hi',
 * fred: false
 * }
 * Et renvoie un array contenant ses noms de propriétés, préfixés par "Hello-", comme ceci:
 * ['Hello-john', 'Hello-brian', 'Hello-doe', 'Hello-fred'];
 */

// TODO EX 3
function helloProperties(obj) {
    //const res = Object.keys(obj);
    const res = [];
    for (const [key, value] of Object.entries(obj)) {
        res.push(`Hello-${key}`);
      }
    console.log('ex3 : ',res);
    return res;
}
const obj = {
    john: 12,
    brian: true,
    doe: 'hi',
    fred: false
};
helloProperties(obj);


/** EX4 :
 * Écrivez le corps de la fonction calc(array, n1, n2).
 * array est un tableau d'entiers. Les parametres n1 et n2 sont des entiers definis par la relation
 * 0 <= n1 <= n2 < array.length.
 * La fonction calc doit retourner la somme des entiers de array dont l'index appartient à l'intervalle [n1; n2]
 */

// TODO EX4
function calc(array, n1, n2) {
    if (0 <= n1 && n1 <= n2 && n2 < array.length) {
        let res = 0;
        for (let i = 0; i < array.length; i++) {
            if (i >= n1 && i <= n2) {
                res += i;
            }
        }
        return res;
    }
    return false;
}
console.log('ex4 : ',calc([5,5,5], 1, 2));


/** EX5 :
 * Le jumeau (twin) d'un mot est un mot écrit avec exactement les mêmes lettres (indépendamment de la casse), mais pas nécessairement dans le même ordre.
 * Par exemple Marion est le jumeau de Romain.
 * La fonction isTwin(a, b) retourne true si b est le jumeau de a ou false si ce n'est pas le cas. a et b sont
 * deux chaînes de caractères non null.
 * Écrivez le corps de la fonction isTwin(a, b).
 */

// TODO EX5
function isTwin(a, b) {
    if (!a || !b)  {
        console.log('ex5 : false');
        return false;
    }

    const arrA = a.toLowerCase().split('');
    const arrB = b.toLowerCase().split('');

    if (a.length !== b.length)  {
        console.log('ex5 : false');
        return false;
    }

    arrA.map(x => {
        for (let i = 0; i < arrB.length; i++) {
            if (arrB[i] === x) {
                arrB.splice(i, 1);
                console.log(i,'>>> ',arrB);
                break;
            }
            console.log(i,' break');
        }
    });

    console.log('arrB : ',arrB);
    if (arrB.length > 0)  {
        console.log('ex5 : false');
        return false;
    }

    console.log('ex5 : true');
    return true;
}

console.log('start -----------');
isTwin('Romain', 'Marion');
console.log('-----------');
isTwin('Romain', 'Mario');
console.log('-----------');
isTwin('Romain', 'Harion');
console.log('----------- end');


/** EX6 :
 * Créez une fonction qui répète chaque caractère dans une chaîne n fois.
 * repeatChr("alex", 3) ➞ "aaallleeexxx"
 * repeatChr("waytolearnx", 1) ➞ "waytolearnx"
 * repeatChr("bob", 2) ➞ "bboobb"
*/
function repeatChr(str, n) {
    if (!n || n <= 0) return false;
    if (n === 1) {
        console.log('ex6 : ',str);
        return str;
    }

    const words = str.split('');
    let newWords = '';
    for (let i = 0; i < words.length; i++) {
        let j = 0;
        do {
            newWords += words[i];
            j += 1;
        } while (j < n);
    }
    console.log('ex6 : ',newWords);
    return newWords;
}

repeatChr("alex", 3);
repeatChr("waytolearnx", 1);
repeatChr("bob", 2);


// TODO EX6

/** EX7 :
 * Vous avez un tableau avec des mots aléatoires, mais votre programme n’accepte pas les mots commençant par 
 * la lettre majuscule « Z ». 
 * Supprimez les mots non acceptés et renvoyez le nouveau tableau.
 * 
 * filterWords(["Bob", "Alex", "Zoello"]) ➞ ["Bob", "Alex"]
 * filterWords(["Lion", "Zebra", "Gazelle"]) ➞ ["Lion", Gazelle"]
 * filterWords(["Mercedes", "Bmw", "Audi"]) ➞ ["Mercedes", "Bmw", "Audi"]
*/

// TODO EX7
function filterWords(arr) {
    let i = 0;
    arr.filter((word) => {
        if (word.charAt(0) === 'Z') {
            arr.splice(i, 1);
        }
        i++;
    });
    console.log('ex7',arr);
    return arr;
}

filterWords(["Bob", "Alex", "Zoello"]);
filterWords(["Lion", "Zebra", "Gazelle"]);
filterWords(["Mercedes", "Bmw", "Audi"]);


/** EX8 :
 * Écrivez une fonction qui renvoie l’extension des fichiers.
 * 
 * getExtension(["file.html", "file.js"]) ➞ ["html", "js"]
 * getExtension(["image.jpg", "image.png", "image.gif"]) ➞ ["jpg", "png", "gif"]
 * getExtension(["file.pdf", "file.txt", "file.docx"]) ➞ ["pdf", "txt", "docx"]
 * 
*/

// TODO EX8


/** EX9 :
 * Un palindrome est un mot qui s’écrit de la même manière après l’inversion de ce dernier. 
 * ‘ada’ est un palindrome. Écrivez une méthode qui vérifie si une chaîne est un palindrome.
 * 
 * isPalindrome("NON") ➞ true
 * isPalindrome("TOTO") ➞ false
 * 
*/

// TODO EX9


//========================================================= Mini App =================================================


/** ENONCE :
 * 
 * On veut créer une IHM qui a pour but d'afficher une liste de films et d'afficher les détails des films ainsi que les détails des réalisateurs :
 * 
 * une base de données est fournie dans le dossier problemToResolve/db avec les json movies.json et directors.json
 * 
 * il faut dynamiser le comportement de l'accordéon fermeture ouverture, (utilisation du JavaScript native ou jQuery pour manipuler le DOM)
 * 
 * un serveur http local est fournie dans le dossier problemToResolve, Attention il faut bien installer les dépendances !!!
 * 
*/