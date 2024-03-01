const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")

const entrepreneurs_born_in_70s = entrepreneurs.filter(function(businessman) {
  return  businessman.year >= 1970 && businessman.year < 1980;
});

console.log(entrepreneurs_born_in_70s);


// Sors une array qui contient le prénom et le nom des entrepreneurs ;
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")

const entrepreneurs_full_names = entrepreneurs.map(function(businessman) {
  return businessman.first + " " + businessman.last;
});

console.log(entrepreneurs_full_names);


//Quel âge aurait chaque inventeur aujourd'hui ?
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

const current_year = 2024

const entrepreneurs_ages = entrepreneurs.map(function(businessman) {
  return { name: businessman.first + " " + businessman.last, age: current_year - businessman.year };
});

console.log(entrepreneurs_ages);


//Trie les entrepreneurs par ordre alphabétique du nom de famille.
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille")

// trie alphabétique méthode longue (voir script_5 pour la courte)
const entrepreneurs_sorted_by_last_name = entrepreneurs.sort(function(a, b) {
  if (a.last < b.last) {
    return -1;
  }
  if (a.last > b.last) {
    return 1;
  }
  return 0;
});

console.log(entrepreneurs_sorted_by_last_name);


