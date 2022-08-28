
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
                let h2 = document.createElement('h2');
                div.appendChild(h2);
                h2.innerText = i + ": " + obj[i];

                userDiv.appendChild(div);

                h2.style.alignItems = 'center';
                h2.style.margin = 'auto';
                h2.style.paddingLeft = '10px';

                div.style.margin = '2px';
                div.style.background = 'cyan';
                div.style.borderRadius = '10px';
                div.style.width = '400px';
            } else {
                let divElse = document.createElement('div');
                let h2Else = document.createElement('h2');
                h2Else.innerText = i + ": ";
                divElse.appendChild(h2Else);

                let arr = obj[i];

                userDiv.appendChild(divElse);

                document.body.appendChild(userDiv);
                showProps(arr);

                h2Else.style.alignItems = 'center';
                h2Else.style.margin = 'auto';
                h2Else.style.paddingLeft = '10px';

                divElse.style.margin = '2px';
                divElse.style.background = 'cyan';
                divElse.style.width = '400px';
                divElse.style.background = 'cyan';
                divElse.style.borderRadius = '10px';


            }
        }
    }

    showProps(user);

    let buttonDiv = document.createElement('div');
    let button = document.createElement('button');
    let h3 = document.createElement('h3');
    button.appendChild(h3);
    h3.innerText = "post of current user";

    button.onclick = function () {

        let mainPostDiv = document.createElement('div');

        fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
            .then(response => response.json())
            .then(posts => posts.forEach(post => {


                let postDiv = document.createElement('div');
                let postDivText = document.createElement('h4');
                postDiv.appendChild(postDivText);
                postDivText.innerText = post.id + ': ' + post.title;

                let buttonCurrentPost = document.createElement('button');
                let currentPostText = document.createElement('h4');
                buttonCurrentPost.appendChild(currentPostText);
                buttonCurrentPost.onclick = function () {

                        location.href = "post-details.html";
                        let postsArray = JSON.parse(localStorage.getItem('posts')) || [];

                        postsArray.push(post);
                        localStorage.setItem('posts', JSON.stringify(postsArray));

                };

                localStorage.clear();
                postDiv.appendChild(buttonCurrentPost);
                mainPostDiv.appendChild(postDiv);
                document.body.appendChild(mainPostDiv);

                postDiv.style.background = 'peachpuff';
                postDiv.style.width = '300px';
                postDiv.style.border = '2px solid darkBlue';
                postDiv.style.borderRadius = '10px';
                postDiv.style.display = 'flex';
                postDiv.style.margin = '10px';

                postDivText.style.margin = '10px';
                postDivText.style.width = '150px';

                buttonCurrentPost.style.display = 'flex';
                buttonCurrentPost.style.width = '150px';
                buttonCurrentPost.style.border = '2px solid darkBlue';
                buttonCurrentPost.style.borderRadius = '10px';
                buttonCurrentPost.style.background = 'yellow';

                currentPostText.innerText = "current post";
                currentPostText.style.margin = 'auto';
                currentPostText.style.display = 'flex';
                currentPostText.style.alignItems = 'center';

            }));

        mainPostDiv.style.border = '2px solid darkBlue';
        mainPostDiv.style.borderRadius = '10px';
        mainPostDiv.style.width = '1700px';
        mainPostDiv.style.display = 'flex';
        mainPostDiv.style.margin = '10px';
        mainPostDiv.style.flexWrap = 'wrap';
        mainPostDiv.style.justifyContent = 'center';
        mainPostDiv.style.background = 'cornflowerblue';
        };
    buttonDiv.appendChild(button);
    document.body.appendChild(buttonDiv);

    userDiv.style.border = '2px solid darkBlue';
    userDiv.style.borderRadius = '10px';
    // userDiv.style.width = '90%';
    userDiv.style.height = '600px';
    userDiv.style.display = 'flex';
    userDiv.style.flexDirection = 'column';
    userDiv.style.margin = '10px';
    userDiv.style.flexWrap = 'wrap';
    userDiv.style.background = 'darkred';

    button.style.margin = 'auto';
    button.style.display = 'flex';
    button.style.width = '100%';
    button.style.border = '2px solid darkBlue';
    button.style.borderRadius = '10px';
    button.style.background = 'yellow';

    h3.style.margin = 'auto';
    h3.style.height = '50px';
    h3.style.display = 'flex';
    h3.style.alignItems = 'center';

    buttonDiv.style.margin = 'auto';
    buttonDiv.style.width = '90%';
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'center';
    buttonDiv.style.alignItems = 'center';

    document.body.style.margin = 'auto';
    document.body.style.display = 'flex';
    document.body.style.flexWrap = 'wrap';
    document.body.style.flexDirection = 'column';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';

}