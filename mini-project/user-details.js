
// console.log(JSON.parse(localStorage.getItem('users')));

let users = JSON.parse(localStorage.getItem('users'));
console.log(users);


for (let i = 0; i < users.length; i++) {

    let user = users[i];
    let userDiv = document.createElement('div');

    function showProps(obj) {

        for (const i in obj) {

            if (obj[i].toString() !== '[object Object]') {

                let div = document.createElement('div');
                div.style.border = '2px solid darkBlue';
                div.style.width = '300px';


                let h2 = document.createElement('h2');
                div.appendChild(h2);
                h2.innerText = i + ": " + obj[i];


                userDiv.appendChild(div);

            } else {

                let div2 = document.createElement('div');
                div2.style.border = '2px solid darkBlue';
                div2.style.width = '300px';
                let h2Else = document.createElement('h2');
                h2Else.innerText = i + ":";
                div2.appendChild(h2Else);
                userDiv.appendChild(div2);

                let arr = obj[i];

                document.body.appendChild(userDiv);
                showProps(arr);
            }
        }

    }

    showProps(user);

    let buttonDiv = document.createElement('div');
    buttonDiv.style.display = 'flex';



    let button = document.createElement('button');
    button.style.width = '90%';
    button.style.alignItems = 'center';
    button.style.margin = 'auto';

    let h3 = document.createElement('h3');
    button.appendChild(h3);
    h3.innerText = "post of current user";

    button.onclick = function () {

        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(response => response.json())
            .then(posts => posts.forEach(post => {

                let postDiv = document.createElement('div');
                postDiv.innerText = post.id + ': ' + post.title;

                let postOfCurrentTitle = document.createElement('button');
                postOfCurrentTitle.innerText = "current post";

                postOfCurrentTitle.onclick = function () {

                        location.href = "post-details.html";
                        let postsArray = JSON.parse(localStorage.getItem('posts')) || [];

                        postsArray.push(post);
                        localStorage.setItem('posts', JSON.stringify(postsArray));

                };

                localStorage.clear();
                postDiv.appendChild(postOfCurrentTitle);
                document.body.appendChild(postDiv);

            }));

        };
    buttonDiv.appendChild(button);
    document.body.appendChild(buttonDiv);
}