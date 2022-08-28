let posts = JSON.parse(localStorage.getItem('posts'));
console.log(posts);

let mainDiv = document.createElement('div');

let mainCommentDiv = document.createElement('div');

function showPropsPost(obj) {
        let postDiv = document.createElement('div');
        postDiv.style.margin = '10px';

        for (const i in obj) {

            if (obj[i].toString() !== '[object Object]') {

                let text = document.createElement('h3');
                text.style.padding = '10px';
                text.innerText = i + ": " + obj[i];
                postDiv.appendChild(text);
                mainDiv.appendChild(postDiv);

            } else {

                let arr = obj[i];

                showPropsPost(arr);
            }
        }
    }
    showPropsPost(posts)

function showPropsComment(obj) {
    let commentDiv = document.createElement('div');
    commentDiv.style.background = 'yellow';
    commentDiv.style.border = '2px solid darkBlue';
    commentDiv.style.borderRadius = '10px';
    commentDiv.style.margin = '10px';
    commentDiv.style.width = '300px';

    for (const i in obj) {

        if (obj[i].toString() !== '[object Object]') {

            let text = document.createElement('h3');

            text.style.width = '200px';
            text.style.borderRadius = '10px';
            text.style.padding = '10px';

            text.innerText = i + ": " + obj[i];
            commentDiv.appendChild(text);
            mainCommentDiv.appendChild(commentDiv);


        } else {

            let arr = obj[i];

            showPropsComment(arr);
        }
    }
}


for (let i = 0; i < posts.length; i++) {

    let post = posts[i];

        fetch('https://jsonplaceholder.typicode.com/post/' + post.id + '/comments')
            .then(response => response.json())
            .then(comments => comments.forEach(comment => {

                let commentsArray = JSON.parse(localStorage.getItem('comments')) || [];

                commentsArray.push(comment);
                console.log(commentsArray);

                localStorage.setItem('posts', JSON.stringify(commentsArray));


                showPropsComment(commentsArray);

            }));
    }

document.body.appendChild(mainDiv);
document.body.appendChild(mainCommentDiv);


mainDiv.style.background = 'cyan';
mainDiv.style.width = '1300px';
mainDiv.style.border = '2px solid darkBlue';
mainDiv.style.borderRadius = '10px';

mainCommentDiv.style.background = 'peachpuff';
mainCommentDiv.style.width = '1300px';
mainCommentDiv.style.border = '2px solid darkBlue';
mainCommentDiv.style.borderRadius = '10px';
mainCommentDiv.style.display = 'flex';
mainCommentDiv.style.flexWrap = 'wrap';
mainCommentDiv.style.margin = '10px';

document.body.style.margin = 'auto';
document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
