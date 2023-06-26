

// Error Handling with Async and Await



const url= "https://jsonplaceholder.typicode.com/todos/1";

const networkCall = async()=>{
    try{
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log("\n\t",jsonData)
    }
    catch(error){
        console.log(error)//TypeError("failed to fetch")
    }
}



const asyncPromise = networkCall();
console.log(asyncPromise)
