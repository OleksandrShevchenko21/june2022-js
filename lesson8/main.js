// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//----------------------------------------------------------------------------------------
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];

let user1 = new User(1, 'friend1', 'friend11', 'friend1@.com',111);
let user2 = new User(2, 'friend2', 'friend22', 'friend2@.com',222);
let user3 = new User(3, 'friend3', 'friend33', 'friend3@.com',333);
let user4 = new User(4, 'friend4', 'friend44', 'friend4@.com',444);
let user5 = new User(5, 'friend5', 'friend55', 'friend5@.com',555);
let user6 = new User(6, 'friend6', 'friend66', 'friend6@.com',666);
let user7 = new User(7, 'friend7', 'friend77', 'friend7@.com',777);
let user8 = new User(8, 'friend8', 'friend88', 'friend8@.com',888);
let user9 = new User(9, 'friend9', 'friend99', 'friend9@.com',999);
let user10 = new User(10, 'friend10', 'friend10', 'friend10@.com',1000);

users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users);
//----------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//----------------------------------------------------------------------------------------
for (let i = 0; i < users.length; i++) {
    if (users[i].id % 2 === 0) {

        // console.log(users[i]);
    }
}
//----------------------------------------------------------------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//----------------------------------------------------------------------------------------
let sort = users.sort((a,b)=>{
    return a.id - b.id;
})
console.log(sort);
//----------------------------------------------------------------------------------------
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
    let client1 = new Client(1, 'a', 'aa', 'aa@.com', 111, ['tomato1', 'apple1']);
    let client2 = new Client(2, 'b', 'bb', 'bb@.com', 222, ['tomato2', 'apple2', 'apple22']);
    let client3 = new Client(3, 'c', 'cc', 'cc@.com', 333, ['tomato3']);
    let client4 = new Client(4, 'd', 'dd', 'dd@.com', 444, ['tomato4', 'apple4']);
    let client5 = new Client(5, 'e', 'ee', 'ee@.com', 555, ['tomato5', 'apple5']);
    let client6 = new Client(6, 'f', 'ff', 'ff@.com', 666, ['tomato6', 'apple6']);
    let client7 = new Client(7, 'g', 'gg', 'gg@.com', 777, ['tomato7', 'apple7']);
    let client8 = new Client(8, 'h', 'hh', 'hh@.com', 888, ['tomato8', 'apple8']);
    let client9 = new Client(9, 'j', 'jj', 'jj@.com', 999, ['tomato9', 'apple9']);
    let client10 = new Client(10, 'k', 'kk', 'kk@.com', 100, ['tomato10', 'apple10']);

let clients = [];
clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort1 = clients.sort(({order:x},{order:y})=> {
    return x.length - y.length;

})
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку