const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    //statement-1
    console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
  });

//statement-2
console.log("\n\tfetching done\n"); // fetching done

// In the asynchronous js
// the second statement won’t wait until 
// the first statement execution. 
// In JS, fetch() works asynchronously