

const myPromise = () =>{
    return  new Promise((sucess,failure)=>{
        setTimeout(()=>{
            sucess("\n\t 1 sec please \n");
        },2000)
    })
}
// console.log(myPromise())


myPromise().then((fromResolve)=>{
    console.log(fromResolve);
})
