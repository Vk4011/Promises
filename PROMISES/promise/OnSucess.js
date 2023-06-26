// OnSuccess Callback returns Promise


const url = "RESOURCE_URL";
let responsePromise = fetch(url);
// console.log(responsePromise)

responsePromise.then((response) => {
  console.log(response.json());
}); //Here, log the response in JSON format
