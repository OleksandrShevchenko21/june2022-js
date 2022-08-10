// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let helloWorld = 'hello world';
console.log(helloWorld.length);

let loremIpsum = 'lorem ipsum';
console.log(loremIpsum.length);

let javascriptIsCool = 'javascript is cool';
console.log(javascriptIsCool.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(helloWorld.toUpperCase());

console.log(loremIpsum.toUpperCase());

console.log(javascriptIsCool.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log(helloWorld.toLowerCase());

console.log(loremIpsum.toLowerCase());

console.log(javascriptIsCool.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
let cleanString = dirtyString.replace(' ', '');
console.log(cleanString);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';

function stringToarray(text) {
    let arr = text.split(' ');
    return console.log(arr);
}

stringToarray(str);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let number = function (x) {
    console.log(x = String(x));
}
numbers.forEach(number);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];

function sortNums(numbers, direction) {
    if (direction === 'ascending') {
        numbers.sort((num1, num2) => {
            return num1 - num2;
        });
        console.log(numbers, direction);
    } else if (direction === 'descending') {
        numbers.sort((num1, num2) => {
            return num2 - num1;
        });
        console.log(numbers, direction);
    }
}

sortNums(nums, 'ascending') // [3,11,21]
sortNums(nums, 'descending') // [21,11,3]

//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((m1, m2) => {
    return m2.monthDuration - m1.monthDuration;
});
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filterCourses);

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deckOfCards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: '6', color: 'red'},
    {cardSuit: 'diamonds', value: '7', color: 'red'},
    {cardSuit: 'diamonds', value: '8', color: 'red'},
    {cardSuit: 'diamonds', value: '9', color: 'red'},
    {cardSuit: 'diamonds', value: '10', color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: '6', color: 'red'},
    {cardSuit: 'hearts', value: '7', color: 'red'},
    {cardSuit: 'hearts', value: '8', color: 'red'},
    {cardSuit: 'hearts', value: '9', color: 'red'},
    {cardSuit: 'hearts', value: '10', color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spade', value: 'Ace', color: 'black'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'Jack', color: 'black'},
    {cardSuit: 'spade', value: 'Queen', color: 'black'},
    {cardSuit: 'spade', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},

];
// - знайти піковий туз
let spadeAce = deckOfCards.find(value => value.cardSuit === 'spade' && value.value === 'Ace');
console.log(spadeAce);
// - всі шістки
let sixes = deckOfCards.filter(value => value.value === '6');
console.log(sixes);
// - всі червоні карти
let red = deckOfCards.filter(value => value.color === 'red');
console.log(red);
// - всі буби
let diamonds = deckOfCards.filter(value => value.cardSuit === 'diamonds');
console.log(diamonds);

// - всі трефи від 9 та більше
let clubs = deckOfCards.filter(value => value.cardSuit === 'clubs');
let clubsFiltered = clubs.filter(value => value.value === 'Ace' || value.value === 'King' || value.value === 'Queen' || value.value === 'Jack' || value.value === '10' || value.value === '9');
console.log(clubsFiltered);
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт

let reduce = deckOfCards.reduce((accumulator, card)=>  {

        if (card.cardSuit === 'spade') {
            accumulator.spades.push(card);
        }
        if (card.cardSuit === 'clubs') {
            accumulator.clubs.push(card);
        }
        if (card.cardSuit === 'diamonds') {
            accumulator.diamonds.push(card);
        }
         if(card.cardSuit === 'hearts') {
            accumulator.hearts.push(card);
        }
        return accumulator;
},
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);
