
const loadData = () => {
console.log("js connecting vnbhgh");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

};

loadPost = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
         console.log(json);
        displayPost(json);
      });
}

const displayPost = (posts) =>{
   posts.forEach(post=>{
     console.log(post);
   })
}

