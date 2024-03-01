number= prompt("De quel nombre veux-tu calculer la factorielle ?")

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    if (number >= 0) {
        console.log(`Le résultat est : ${factorial(number)}`);
    } else {
        number = prompt("Rentre un nombre compris entre 0 et l'infini !");
    }
