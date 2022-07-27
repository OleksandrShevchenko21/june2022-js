// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let sports = [
    'football',
    'basketball',
    'hockey',
    'volleyball',
    'tennis',
    'chess',
    'sailing',
    'formula1',
    'swimming',
    'fencing'];
console.log(sports[0]);
console.log(sports[1]);
console.log(sports[2]);
console.log(sports[3]);
console.log(sports[4]);
console.log(sports[5]);
console.log(sports[6]);
console.log(sports[7]);
console.log(sports[8]);
console.log(sports[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Wild west',
    pageCount: 222,
    genre: 'Western'
};
let book2 = {
    title: 'Space',
    pageCount: 333,
    genre: 'Fantastic'
};
let book3 = {
    title: 'Napoleon',
    pageCount: 444,
    genre: 'Historical'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4 = {
    title: 'Wild west',
    pageCount: 222,
    genre: 'Western',
    author: [
        {name: 'AD', age: 22},
        {name: 'GH', age: 33},
        {name: 'JK', age: 44},
            ]

};
let book5 = {
    title: 'Space',
    pageCount: 333,
    genre: 'Fantastic',
    author: [
        {name: 'ADA', age: 23},
        {name: 'GHG', age: 34},
        {name: 'JKJ', age: 45},
    ]
};
let book6 = {
    title: 'Napoleon',
    pageCount: 444,
    genre: 'Historical',
    author: [
        {name: 'ADAD', age: 25},
        {name: 'GHGH', age: 35},
        {name: 'JKJK', age: 46},
    ]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'qwe', username:'qwe0', password:'qwe00'},
    {name: 'asd', username:'asd1', password:'ads11'},
    {name: 'zxc', username:'zxc2', password:'zxc22'},
    {name: 'rty', username:'rty3', password:'rty33'},
    {name: 'fgh', username:'fgh4', password:'fgh44'},
    {name: 'vbn', username:'vbn5', password:'vbn55'},
    {name: 'uio', username:'uio6', password:'uoi66'},
    {name: 'jkl', username:'jkl7', password:'jkl77'},
    {name: 'nm,', username:'nm,8', password:'nm,88'},
    {name: 'ipo', username:'ipo9', password:'ipo99'},
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);