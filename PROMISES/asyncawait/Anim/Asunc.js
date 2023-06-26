

// The Async/Await is a modern way to consume Promise

// The Await ensures processing 
// completes before th enexft statement executes.



const myPromise = async()=>{
    const promiseObj1 = fetch(url1);
    const response1 = await promiseObj1;

    const promiseObj2= fetch(url2);
    const response2 = await promiseObj2;
};
myPromise();


// Two Rules

// Use async keyword before the function only
// if it is performing async operations


// should use await inside async function only
