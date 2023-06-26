

const myPromise = () =>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },2000)
    })
}
console.log(myPromise())
