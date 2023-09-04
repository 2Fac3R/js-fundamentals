// JavaScript Arrays


// Arrays creation
const characters = [
  { id: 1, name: 'Goku', serie: 'Dragon Ball', characteristics: ['sayajín', 'comelón'], speak: () => 'No soy kakaroto' },
  { id: 2, name: 'Robin', serie: 'One Piece', characteristics: ['misteriosa', 'inteligente'], speak: () => 'Gigantesco mano' },
  { id: 3, name: 'Orihime', serie: 'Bleach', characteristics: ['llorona'], speak: () => 'wua wua' },
  { id: 4, name: 'Luffy', serie: 'One Piece', characteristics: ['comelón', 'ambisioso', 'libre'], speak: () => 'kaizoku ni orewa naru' },
  { id: 5, name: 'Shikamaru', serie: 'Naruto', characteristics: ['inteligente', 'perezoso'], speak: () => 'Que flojera!' },
  { id: 6, name: 'Ash', serie: 'Pokemon', characteristics: ['joven', 'resiliente'], speak: () => 'Tengo que ser siempre el mejor...' },
  { id: 7, name: 'Sakura', serie: 'Sakura Card Captor', characteristics: [/* ni idea */], speak: () => 'Ni idea...' },
  { id: 8, name: 'Sakura', serie: 'Naruto', characteristics: ['fuerte', 'terca', 'llorona'], speak: () => 'Sasuke-kun' },
]

const fruits = ['Apple', 'Orange', 'Banana', 'Watermelon', 'Mango']
const vegetables = ["carrot", "broccoli", "cucumber", "celery", "tomato"];

// Ops
let sortedFruits = fruits.sort()
let reversedVegetables = vegetables.reverse()

// Accessing elements in an array

// console.log(characters)
console.log(characters.length) // Returns the number of elements
console.log(sortedFruits) // Sorts the array
console.log(reversedVegetables) // Reverse the array

console.log(characters[0]) // Accesing the first element
console.log(characters[characters.length - 1]) // Accesing the last element
console.log(characters[3].speak())
console.log(characters[2].serie) // Accessing array with property name

// Converting an array to a String
console.log(typeof fruits) // Arrays are objects
console.log(typeof fruits.toString()) // It is an string now


// Looping arrays

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i].id)
}

characters.forEach((element, index) => console.log(element.name))
let characterNames = characters.forEach((element, index) => element.name);
console.log(characterNames) // undefined

characters.map((element, index) => console.log(element.serie))
let characterNameAndserie = characters.map((element, index) => [element.name, element.serie])
console.log(characterNameAndserie) // new array


// Adding elements to arrays

characterNameAndserie[1] = ['Sakura', 'Naruto']
characterNameAndserie[10] = ['Sasuke', 'Naruto'] // This could create empty items
characterNameAndserie.push(['Chopper', 'One Piece'])
console.log(characterNameAndserie)
console.log(characterNameAndserie[7]) // Empty item -> undefined


// Array Methods

console.log(fruits)

fruits.pop() // Removes the last element
console.log(fruits)

fruits.shift() // Removes the first element and shifts all other elements
console.log(fruits)

fruits.unshift('New fruit')
console.log(fruits) // Adds a new element at the beginning of the array

let fruitsAndVegetables = fruits.concat(vegetables) // creates a new array by merging two or more arrays
console.log(fruitsAndVegetables)

fruits.splice(2, 0, ['new', 'xnew']) // Adds new items at a certain position
console.log(fruits)

fruits.splice(2, 2) // Removes elements in index (from, to)
console.log(fruits)

let orange = fruits.slice(2) // method slices out a piece of an array into a new array
console.log(orange)
console.log(fruits) // Notice: 'Orange' is still in the elements

let numbers = [255, 412, 124, 624]
console.log(numbers.sort()[0]) // Get the min value element
console.log(numbers.sort()[numbers.length - 1]) // Get the max value element

// arr.find(function): Returns the value of the first occurrence that passes a test
let firstSakura = characters.find(character => character.name === 'Sakura')
console.log(firstSakura)

// arr.findIndex(function): Return the index of the first element that passes a test
let firstSakuraIndex = characters.findIndex(character => character.name === 'Sakura')
console.log(firstSakuraIndex)

// arr.filter(function): Creates a new array with the elements that pass a test
let sakuras = characters.filter(character => character.name === 'Sakura')
console.log(sakuras)

console.log(numbers)
// arr.reduce(function): runs a function on each element to reduce it to a single value
let sumNumbers = numbers.reduce((x, y) => x + y)
console.log(sumNumbers)

// arr.every(function): checks if all array values pass a test -> boolean
// numbers.push(15)
let allOverOneHundred = numbers.every(number => number > 100)
console.log(allOverOneHundred)

// arr.some(function): checks if some array values pass a test -> boolean
// numbers.push(1024)
let someOverOneThousand = numbers.some(number => number > 1000)
console.log(someOverOneThousand)

console.log(vegetables)
console.log(vegetables.indexOf('cucumber')) // Gets the element index

vegetables.push('tomato')
console.log(vegetables)
console.log(vegetables.lastIndexOf('tomato')) // Same as indexOf but returns last occurrence


// arr.includes(): Checks if an element is present in an array -> boolean
console.log('Voy a ser el próximo rey de los piratas'.includes('rey'))
console.log(vegetables.includes('carrot'))
console.log(characters.includes(firstSakura))


// The ...spread operator: expands an iterable (like an array) into more elements
const myTVCharacters = [
  { id: 9, name: 'Bender', serie: 'Futurama', characteristics: ['divertido', 'borracho', 'robot'], speak: () => 'Bender is god' },
  { id: 10, name: 'Bart', serie: 'Los Simpsons', characteristics: ['travieso', 'divertido'], speak: () => 'Ya estas viejo homero' },
  { id: 11, name: 'Caesar', serie: 'One Piece', characteristics: ['genio incomprendido'], speak: () => 'Shurorororo!' },
  { id: 12, name: 'Don Cangrejo', serie: 'Bob Esponja', characteristics: ['avaricioso'], speak: () => 'Dame el dinero' },
  { id: 13, name: 'Giru', serie: 'Dragon Ball GT', characteristics: ['miedoso', 'robot'], speak: () => 'Giru giru giru' },
  { id: 14, name: 'Freezer', serie: 'Dragon Ball Z', characteristics: ['peligroso', 'inmortal', 'violento'], speak: () => 'Malditos sayayins!' },
]
const allCharacters = [...characters, ...myTVCharacters]
console.log(allCharacters)


const searchRobots = allCharacters.filter(character => character.characteristics.includes('robot'))
const searchDragonBall = allCharacters.filter(character => character.serie.includes('Dragon Ball'))

searchRobots.map((character) => console.log(character.speak()))
searchDragonBall.map((character) => console.log(character.name))
