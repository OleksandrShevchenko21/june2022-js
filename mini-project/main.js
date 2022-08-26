// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.

// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {



        let div = document.createElement('div');

        div.style.border = '2px solid darkBlue';
        div.style.width = '300px';
        div.style.display = 'flex';
        div.style.margin = 'auto';
        div.style.flexDirection = 'column';
        div.style.flexWrap = 'wrap';
        // div.style.background = 'blue';

        let h2 = document.createElement('h2');
        h2.style.alignItems = 'center';
        h2.style.margin = 'auto';

        h2.innerText =user.id + ': '+ user.name;


        let button = document.createElement('button');
        button.style.width = '200px';
        button.style.alignItems = 'center';
        button.style.margin = 'auto';
        button.style.background = 'yellow';

        let h3 = document.createElement('h3');
        button.appendChild(h3);

        h3.innerText = 'users info';
        button.onclick = function () {
            location.href = "user-details.html";
            let array = JSON.parse(localStorage.getItem('users')) || [];
            array.push(user);
            localStorage.setItem('users', JSON.stringify(array));




        };

        localStorage.clear();
        document.body.appendChild(div);
        div.appendChild(h2);
        div.appendChild(button);
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.flexWrap = 'wrap';
document.body.style.height = '200px';
    }));

// console.log(JSON.parse(localStorage.getItem('users')));