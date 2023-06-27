
// Creating your own Promises
// Promises are the new style of async code that you'll see used in modern JavaScript.

// Syntax :

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//     //Async task
// });
// The Promise constructor takes a function (an executor) that will be executed immediately and passes in two functions: resolve, which must be called when the Promise is resolved (passing a result), and reject when it is rejected (passing an error).
// The executor is to be executed by the constructor, during the process of constructing the new Promise object.
// resolveFunction is called on promise fulfilled.
// rejectFunction is called on promise rejection.


const myPromise = () =>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
           
            reject("\n\t Promise Rejected \n");
            resolve("\n\t PRomise is resolved")
        },2000)
    })
}


myPromise().then((fromResolve)=>{
    console.log(fromResolve);
}).catch((fromReject)=>{
    console.log(fromReject);
})



// when resolve() is ChannelSplitterNode,callback inside
// TouchEvent() will be executed.

// resolve() ==> then()