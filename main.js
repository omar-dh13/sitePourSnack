const myName = prompt("Nom d'utilisateur = ?")
const salut = function saluer(myName) {
    return 'Salut ' + myName
}

if (!myName) {
    console.log(salut('invité'))
} else {
    console.log(salut(myName));
}