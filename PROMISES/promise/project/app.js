

const promObj = fetch('http://127.0.0.1:5500/project/api.txt')
console.log(promObj)
promObj.then((res)=>{
    console.log(res);
    return res.text()
}).then((data)=>{
    console.log(data)
})