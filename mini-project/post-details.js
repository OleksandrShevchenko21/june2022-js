let posts = JSON.parse(localStorage.getItem('posts'));
console.log(posts);


for (let i = 0; i < posts.length; i++) {

    let post = posts[i];
    let postDiv = document.createElement('div');
    //
    function showPropsPost(obj) {

        for (const i in obj) {

            if (obj[i].toString() !== '[object Object]') {

                let keyDiv = document.createElement('div');
                keyDiv.innerText = i + ": " + obj[i];
                postDiv.appendChild(keyDiv);

            } else {

                let key2Div = document.createElement('div');
                // key2Div.innerText = i + ":";
                postDiv.appendChild(key2Div);

                let arr = obj[i];

                document.body.appendChild(postDiv);
                showPropsPost(arr);
            }
        }

    }

    showPropsPost(posts);

    document.body.appendChild(postDiv);
}
