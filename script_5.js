const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


// Est-ce que tous les livres ont été au moins empruntés une fois ?
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")

function rented_or_not(books) {
  let all_rented = true;

  for (const one_book of books) {
    if (one_book.rented === null || one_book.rented === 0) {
      all_rented = false;
      break;
    }
  }

  if (all_rented) {
    console.log("Tous les livres ont été empruntés au moins une fois.");
  } else {
    console.log("Un ou plusieurs livres n'ont toujours pas été empruntés.");
  }
}

rented_or_not(books);




// Quel est le livre le moins emprunté ?
console.log("Quel est le livre le moins emprunté ?")

function less_rented_book(books) {
  // Trie par ordre croissant
  books.sort(function(a, b) {
    return a.rented - b.rented;
  });
  
  // j'affiche le premier livre (ligne 0)
  console.log("Le livre le moins emprunté est:", books[0].title);
}

less_rented_book(books);




// Trouve le livre avec l'ID: 873495 ;
console.log("Trouve le livre avec l'ID: 873495")

const the_id = 873495;

for (const the_book of books) {
  if (the_book.id === the_id) {
    console.log("C'est ce livre :", the_book.title);
    break; 
  }
}




// Supprime le livre avec l'ID: 133712
console.log("Supprime le livre avec l'ID: 133712")

const id_to_delete = 133712;
let updated_list = [];

for (const the_book of books) {
  if (the_book.id !== id_to_delete) {
    updated_list.push(the_book);
  }
}

console.log("Voici la liste sans le livre avec l'id 133712 :", updated_list);




// Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)")

const idtodelete = 133712;
let updatedlist = [];

for (const the_book of books) {
  if (the_book.id !== idtodelete) {
    updatedlist.push(the_book);
  }
}

// trie alphabétique méthode courte (voir script_4 pour la longue)
updatedlist.sort((a, b) => a.title.localeCompare(b.title));

console.log("Voici la liste classé sans le livre avec l'ID 133712 :", updatedlist);