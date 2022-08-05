// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaRect = (a, b) => a * b;
console.log(areaRect(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle(radius) {
    let s = Math.PI * Math.pow(radius, 2);
    return s;
}

console.log(areaCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areacylinder(height, radius) {
    let a = 2 * Math.PI * radius * (radius + height);
    return a;
}
console.log(areacylinder(3, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

function array(items){
    for (const item of items){
        console.log((item));
    }
}

array(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragrafText(){
    document.write (`<p>${arguments[0]}</p>`)
}
paragrafText('4444');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function array1(){
    document.write(`
    <ul>
        <li>${arguments[0]}</li>
        <li>${arguments[0]}</li>
        <li>${arguments[0]}</li>
    </ul>
    `)
}
array1('asd');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function array2(){
    document.write(`<ul>`)
        for (let i = 0; i < arguments[1]; i++) {
            document.write(`<li>${arguments[0]}</li>`)
        }
    document.write(`</ul>`)

}
array2('qwery',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let somearray = [1, 'asd', true];

function array3(items3) {
    document.write(`<ul>`);
    for (const items3Element of items3) {
        document.write(`<li>${items3Element}</li>`);
    }
    document.write(`</ul`);
}
array3(somearray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users4 = [
    {id: 'id-0', name: 'vasya', age: 31},
    {id: 'id-1', name: 'petya', age: 30},
    {id: 'id-2', name: 'kolya', age: 29},
    {id: 'id-3', name: 'olya', age: 28},
    {id: 'id-4', name: 'max', age: 30},
    {id: 'id-5', name: 'any', age: 31}
    ];

function array4(items4) {
    for (const items4Element of items4) {
        document.write(`<div>${items4Element.id} ${items4Element.name.toUpperCase()}  ${items4Element.age}</div>`);
    }
}
array4(users4);
// - створити функцію яка повертає найменьше число з масиву
let numbers5 = [3, 10, 4, 9];

function array5(items5) {
    let min = items5[0];
     for (let j = 0; j < items5.length; j++) {

        if (min > items5[j]) {
            min = items5[j];
        }
    }
    return min;
}
console.log(array5(numbers5));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers6 = [1, 2, 10];

function array6(items6){
    let sum6 = items6[0];
    for (let k = 1; k < items6.length; k++) {
        sum6 += items6[k]
    }
    return sum6;
}

console.log(array6(numbers6));