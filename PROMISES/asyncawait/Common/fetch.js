

const url= "https://jsonplaceholder.typicode.com/todos/1";

const networkCall = async()=>{
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log("\n\t",jsonData)
}

networkCall();

