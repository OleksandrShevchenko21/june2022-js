
// console.log(JSON.parse(localStorage.getItem('users')));

let users = JSON.parse(localStorage.getItem('users'));
console.log(users);


for (let i = 0; i < users.length; i++) {

    let user = users[i];
    let userDiv = document.createElement('div');

    function showProps(obj) {

        for (const i in obj) {

            if (obj[i].toString() !== '[object Object]') {

                let keyDiv = document.createElement('div');
                keyDiv.innerText = i + ": " + obj[i];
                userDiv.appendChild(keyDiv);

            } else {

                let key2Div = document.createElement('div');
                key2Div.innerText = i + ":";
                userDiv.appendChild(key2Div);

                let arr = obj[i];

                document.body.appendChild(userDiv);
                showProps(arr);
            }
        }

    }

    showProps(user);


    let postOfCurrentUser = document.createElement('button');
    postOfCurrentUser.innerText = "post of current user";

    postOfCurrentUser.onclick = function () {

        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(response => response.json())
            .then(titles => titles.forEach(title => {

                let titleDiv = document.createElement('div');
                titleDiv.innerText = title.id + ': ' + title.title;

                let postOfCurrentTitle = document.createElement('button');
                postOfCurrentTitle.innerText = "current post";

                postOfCurrentTitle.onclick = function () {

                        location.href = "post-details.html";
                        let postsArray = JSON.parse(localStorage.getItem('posts')) || [];

                        postsArray.push(title);
                        localStorage.setItem('posts', JSON.stringify(postsArray));

                };

                localStorage.clear();
                titleDiv.appendChild(postOfCurrentTitle);
                document.body.appendChild(titleDiv);

            }));

        };

    document.body.appendChild(postOfCurrentUser);

}


// На странице user-details.html:

// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.


