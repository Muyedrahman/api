const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

// const displayPosts = (posts) =>{
//     // 1. Get the container
//     const postContainer = document.getElementById("post-container");
//     postContainer.innerHTML = '';

//     // console.log(postContainer);

//     posts.forEach((post) =>{
//        console.log(post.title);
//     //    2
//     const li = document.createElement("li");
//      li.innerText = post.title;
//      console.log(li);
//       postContainer.appendChild(li);
//     });
// };

// {userId: 10,
// id: 91,
// title: 'aut amet sed',
// body: 'libero voluptate eveniet aperiam sed\nsunt placeat …nsequatur consequatur dolores quia eos et placeat'
// }

const displayPosts = (posts) =>{
    // 1. Get the container and empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = '';
    posts.forEach((post) =>{
        // 2. create element

        const postCard = document.createElement('div');
        postCard.innerHTML = `
         <div class="post-card">
            <h2>${post.title} </h2>
            <p>${post.body} </p>
        </div>
        `;
        // 3. add to the container
        postContainer.append(postCard)
    });
};
loadPost()