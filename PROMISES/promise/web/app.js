

document.getElementById("btn").addEventListener("click",fun);

function fun(){
    console.log("\n\t Button Clicked")
    const promiseObj = fetch('url.json')
    // console.log(promiseObj)
    promiseObj.then((res)=>{

        console.log(res)
        return res.text()
    }).then((data)=>{
        console.log(data)
        document.getElementById("display").innerHTML= data;
    })
}