

// Error Handling with Async and Await



const url= "https://jonplaceholder.typicode.com/todos/1";

const networkCall = async()=>{
    try{
    
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log("\n\t",jsonData)
    console.log("Try is executed")
    }
    catch(error){
        console.log("Catch is executed ")
        console.log(error.message)//TypeError("failed to fetch")
    }
}



const asyncPromise = networkCall();
console.log(asyncPromise)
