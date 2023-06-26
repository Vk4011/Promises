
// Parallel Execution with Callbacks:

// Implement a function ' parallelFileOperation' that returns an array of size 
// 2 with the first index containing the contents of the file 
// 'a.txt' in UTF-8 encoding. If `a.txt` dosen't exist, then throw an error. 
// The seccond element of the array contains 1 
// if the text 'Hello!' is sucessfully 
// written to the file `b.txt ` and 0 if the write operation FileSystemWritableFileStream.







const fs= require('fs');


function parallelFileOperation(){


function readcallbackFn(err,data){
    if(err){
        throw err;
    }

    ans[0] = data;
}

function writecallback(err){
    if(err){
        ans[1]=0;
    }
    else{
        ans[1]=1;
    }
}





        fs.readFile('a.txt','utf-8',readcallbackFn);

        fs.writeFile('b.txt','Hello', 'utf-8',writecallbackFn)

        console.log(3);

        return ans;


}

console.log(parallelFileOperation)