
console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
let etages = prompt("Utilisateur rentre un nombre (par ex 5)");
console.log(`// Utilisateur rentre un nombre (par ex 5)`);

for(let i = 1; i <= etages; i++) {
    console.log(" ".repeat(etages - i) + "#".repeat(i));
}


