/* déclaration de fonction 

function additionXYZ(parametre1, parametre2, parametre3) {
    return parametre1 + parametre2 + parametre3;
}

let x = 5
let y = 10
let z = 15

console.log(additionXYZ(x, y, z));

// expression de fonction. on stocke la fonction dans une variable 

const salutation = function (username = 'invité') {
    // Vérifie si l'utilisateur a entré un nom via prompt
    const nomUtilisateur = prompt("Quel est votre nom d'utilisateur ?");
    // utilise le nom entré par l'utilisateur si disponible sinon utilise le paramètre par défaut.
    username = nomUtilisateur ? nomUtilisateur : username;
    console.log('Salut ' + username);
}

salutation();

// username = nomUtilisateur ? nomUtilisateur : username;

// équivaut à : 

// if (nomUtilisateur) {
//    username = nomUtilisateur
// } else {
// } 

// = si la valeur de nomUtilisateur est truthy, alors username prend la valeur de nomUtilisateur.
// truthy = valeur non nulle ou non définie
// sinon, username conserve sa valeur

// expression de fonction simplifiée 

const fonctionExprimee2 = (username = 'invité') => {
    prompt("Quel est votre nom d'utilisateur ?");
    console.log('Salut ' + username);
}

fonctionExprimee2('')

// fonction externe et interne (portée globale/locale)

const externe = () => {
    const interne = () => {
        console.log("Ceci est une fonction interne. Je ne peux pas l'invoquer seule, je dois obligatoirement passer par externe(), ou l'invoquer à l'intérieur de externe().");
    }
    interne();
    console.log("Ceci est une fonction externe. Je peux l'utiliser quand je veux, où je veux. Elle est indépendante.");
}

externe();

// conditions

const mesCourses = ['Lait', 'Miel', 'Oeufs', 'Gel'];
console.log("Nombre d'articles : " + mesCourses.length);

// fonction d'assistance

// on crée une première fonction :

const nombreMoniteurs = (lignes, colones) => {
    resultat = lignes * colones;
    return resultat;
}

// puis une seconde, qui utilisera la première fonction

const prixMoniteurs = prix => {
    resultat = nombreMoniteurs(5, 4) * prix;
    return resultat;
}

console.log(nombreMoniteurs(5, 4));
console.log("Le coût total de la commande est " + prixMoniteurs(400) + "€"); */

// LES OBJETS : 

let personne = {
    nom: 'Jean',
    age: 30,
    ville: paris
};

// personne = objet
// nom, age, ville = clé
// Jean, 30, paris = valeur

// Notation pointée : 

console.log(personne.nom);
console.log(personne.age);

// Notation avec crochets : 

let personne2 = {
    nom2: 'Alice',
}

const cle = nom2;

console.log(personne[cle]);