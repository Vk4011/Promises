// Rejected State
// Fetching a resource can be failed for various reasons like:

// URL is spelled incorrectly
// Server is taking too long to respond
// Network failure error, etc.


const url = "INCORRECT_RESOURCE_URL";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  return response;
});
responsePromise.catch((error) => {
  console.log(error); // TypeError{ "Failed to fetch" }
});

// Fetching a resource can be failed for various reasons like:

// URL is spelled incorrectly
// Server is taking too long to respond
// Network failure error, etc.