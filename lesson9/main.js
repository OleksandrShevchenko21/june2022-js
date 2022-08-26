// - є масив

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// ---------------------------------------------------------------------------------------

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

let targets1 = document.getElementsByClassName('target1');
let target1 = targets1[0];

for (const simpson of simpsons) {

    let div = document.createElement('div');
    div.classList.add('member');


    let personSimpson = document.createElement('h2');
    personSimpson.innerText = simpson.name + ' ' + simpson.surname;

    let personSimpsonInfo = document.createElement('h3');
    personSimpsonInfo.innerText = simpson.info;

    let photoSimpson = document.createElement('img');
    photoSimpson.src = simpson.photo;

    div.appendChild(personSimpson);
    div.appendChild(personSimpsonInfo);
    div.appendChild(photoSimpson);

    target1.appendChild(div);
}

// ---------------------------------------------------------------------------------------

//
// Цикл в циклі
// - Є масив

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// ---------------------------------------------------------------------------------------

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// let targets2 = document.getElementsByClassName('target2');
// let target2 = targets2[0];
//
// for (const array2 of coursesArray) {
//
//     let course = document.createElement('div');
//     course.classList.add('course');
//
//     let courseTitle = document.createElement('div');
//     let courseTitleText = document.createElement('h2');
//     courseTitleText.innerText = array2.title;
//     courseTitle.appendChild(courseTitleText);
//
//     let courseMonthDuration = document.createElement('div');
//     let courseMonthDurationText = document.createElement('h3');
//     courseMonthDurationText.innerText = array2.monthDuration;
//     courseMonthDuration.appendChild(courseMonthDurationText);
//
//     let courseHourDuration = document.createElement('div');
//     let courseHourDurationText = document.createElement('h3');
//     courseHourDurationText.innerText = array2.hourDuration;
//     courseHourDuration.appendChild(courseHourDurationText);
//
//     let courseModules = document.createElement('ul');
//     for (const moduleElement of array2.modules) {
//         let element = document.createElement('li');
//         element.innerText = moduleElement;
//         courseModules.appendChild(element);
//     }
//
//     course.appendChild(courseTitle);
//     course.appendChild(courseMonthDuration);
//     course.appendChild(courseHourDuration);
//     course.appendChild(courseModules);
//
//     target2.appendChild(course);
// }
// ---------------------------------------------------------------------------------------

// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
 // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// ---------------------------------------------------------------------------------------
// let targets3 = document.getElementsByClassName('target3');
// let target3 = targets3[0];
//
// let block = document.createElement('div');
//
// block.classList.add('wrap');
// block.classList.add('collapse');
// block.classList.add('alpha');
// block.classList.add('beta');
//
// block.style.background = 'red';
// block.style.color = 'yellow';
// block.style.fontSize = '10px';
//
// target3.appendChild(block);
//
// let cloneBlock = block.cloneNode(true);
// target3.appendChild(cloneBlock);

// ---------------------------------------------------------------------------------------

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// ----------------------СДЕЛАНО template_homework.html-------------------------------------------------------


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let target6 = document.getElementsByClassName('target6')[0];
//
// let items6 = document.createElement('div');
// for (const item6 of coursesAndDurationArray) {
//     let item6Info = document.createElement('div');
//     item6Info.innerText = item6.title + " - " + item6.monthDuration;
//     items6.appendChild(item6Info);
// }
// target6.appendChild(items6);

// ---------------------------------------------------------------------------------------

//
// - Є масив
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// let target7 = document.getElementsByClassName('target7')[0];
//
// for (const item7 of coursesAndDurationArray) {
//
//     let div7 = document.createElement('div');
//     div7.classList.add('item');
//
//     let item7Title = document.createElement('h1');
//     item7Title.classList.add('heading');
//     item7Title.innerText = item7.title;
//     div7.appendChild(item7Title);
//
//     let item7MonthDuration = document.createElement('p');
//     item7MonthDuration.classList.add('description');
//     item7MonthDuration.innerText = item7.monthDuration;
//     div7.appendChild(item7MonthDuration);
//
//     target7.appendChild(div7);
//
// }

// ---------------------------------------------------------------------------------------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let target8 = document.getElementsByClassName('target8')[0];
// let id = document.createElement('div');
// id.innerText = 'text';
// target8.appendChild(id);
//
// let button8 = document.getElementsByTagName('button')[0];
// button8.innerText = 'remove text';
// target8.appendChild(button8);
//
// button8.style.width = '100px';
// button8.style.height = '100px';
//
//
// button8.onclick = function (){
//   target8.removeChild(id);
// }


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let target9 = document.getElementsByClassName('target9')[0];
let form9 = document.createElement("form");
form9.name = 'f1';
target9.appendChild(form9);

let input = document.createElement('input');
form9.appendChild(input);

let button9 = document.getElementsByTagName('button')[0];
button9.innerText = 'apply';
form9.appendChild(button9);


let form91 = document.forms.f1;


 form91.onsubmit = function(e){
   e.preventDefault()
   if (input.value >= 18){
     console.log('more then 18');
   }
 }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let target10 = document.getElementsByClassName('target10')[0];

let form101 = document.createElement("form");
form101.name = 'f1';
target10.appendChild(form101);

let input101 = document.createElement('input');
form101.appendChild(input101);


let form102 = document.createElement("form");
form102.name = 'f2';
target10.appendChild(form102);

let input102 = document.createElement('input');
form102.appendChild(input102);


let form103 = document.createElement("form");
form103.name = 'f1';
target10.appendChild(form103);

let input103 = document.createElement('input');
form103.appendChild(input103);

let button10 = document.getElementsByTagName('button')[0];
button10.innerText = 'add table';
target10.appendChild(button10);

button10.style.width = '100px';
button10.style.height = '100px';

let table = document.createElement('table');
target10.appendChild(table);

let thead = document.createElement('thead');
target10.appendChild(thead);

let tbody = document.createElement('tbody');
target10.appendChild(tbody);

let row1 = document.createElement('tr');
let heading_1 = document.createElement('th');

let heading_2 = document.createElement('th');

let heading_3 = document.createElement('th');

let row2 = document.createElement('tr');
let row2_data1 = document.createElement('td');
row2_data1.innerHTML = "1.";
let row2_data2 = document.createElement('td');
row2_data2.innerHTML = "James Clerk";
let row2_data3 = document.createElement('td');
row2_data3.innerHTML = "Netflix";


row1.appendChild(heading_1);
row1.appendChild(heading_2);
row1.appendChild(heading_3);



table.appendChild(row1);
table.appendChild(row2);

