// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('числове значення');
console.log(x);
x ? console.log('Вірно') : console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('your number');
console.log(time);

    if  (time >= 0 && time <= 15) {
        console.log('first quarter');
    }
    else if (time > 15 && time <= 30){
        console.log('second quarter');
    }
    else if (time > 30 && time <= 45) {
        console.log('third quarter');
    }
    else if (time > 45 && time <= 59) {
        console.log('fourth quarter');
    }
    else {
        console.log('?????');
    }




// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('enter day');
console.log(day);

if (day >= 1 && day < 11) {
    console.log('first decade');
}
    else
    if (day >= 11 && day < 21) {
        console.log('second decade');
    }
    else if (day >= 21 && day <= 31) {
        console.log('third decade');
    } else {
        console.log('????');
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numberDay = prompt('enter number of day');
console.log(numberDay);

switch (numberDay){
    case '1':
        console.log('Monday');
        break;
    case'2':
        console.log('Tuesday');
        break;
    case'3':
        console.log('Wednesday');
        break;
    case'4':
        console.log('Thursday');
        break;
    case'5':
        console.log('Friday');
        break;
    case'6':
        console.log('Saturday');
        break;
    case'7':
        console.log('Sunday');
        break;
    default:
        console.log('????');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x = +prompt('enter a first number');
let y = +prompt('enter a second number');

if (x > y){
    console.log(x);
}
else if (x < y) {
    console.log(y);
}
else if (x == y) {
    console.log(x + ' is equal to ' + y);
}
else
    console.log('??????');

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = prompt('значення') || 'default';
console.log(x);
