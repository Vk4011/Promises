
// Chaining OnSuccess Callback again
const url = "https://sonplaceholder.typicode.com/todos/1";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error)=>{
    console.log(error)
  })
  ;