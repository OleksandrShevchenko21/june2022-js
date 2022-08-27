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
        let h2 = document.createElement('h2');
        h2.innerText =user.id + ': '+ user.name;


        let button = document.createElement('button');
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


            div.style.border = '2px solid darkBlue';
            div.style.borderRadius = '10px';
            div.style.width = '310px';
            div.style.display = 'flex';
            div.style.margin = '10px';
            div.style.flexDirection = 'column';
            div.style.background = 'cyan';

            button.style.background = 'yellow';
            button.style.border = '2px solid darkBlue';
            button.style.borderRadius = '10px';

            h2.style.alignItems = 'center';
            h2.style.margin = 'auto';
            h2.style.padding = '10px';


        document.body.style.margin = 'auto';
        document.body.style.width = '900px';
        document.body.style.display = 'flex';
         document.body.style.flexWrap = 'wrap';

    }));