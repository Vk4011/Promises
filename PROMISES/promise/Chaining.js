

// Combining multiple .then()s or .catch()s to a single promise is called promise chaining.

const url = "http://127.0.0.1:5500/web/url.json";
let responsePromise = fetch(url);

responsePromise
  .then((response) => {
    console.log(response);
    return response.text();
    
  }).then((data)=>{
    console.log(data)
  }

  )
  .catch((error) => {
    console.log(error);
  });