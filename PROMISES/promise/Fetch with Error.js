
// Fetch with Error Handling
// Check the behavior of code with valid and invalid URLs.

const url = "https://jsonplaceholder.typicode.com/todos/1";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.log(error);
  });