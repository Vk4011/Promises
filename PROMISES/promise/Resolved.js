
const url = "https://jsonplaceholder.typicode.com/todos/1";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  console.log(response); // Response{ … }
  
});