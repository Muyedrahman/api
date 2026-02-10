const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayPosts(data);
    });
};

const displayPosts = (posts) =>{
    // 1. Get the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = '';

    // console.log(postContainer);

    posts.forEach((post) =>{
       console.log(post.title);
    //    2
    const li = document.createElement("li");
     li.innerText = post.title;
     console.log(li);
      postContainer.appendChild(li);
    });
};
