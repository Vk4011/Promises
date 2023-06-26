
// Array Filter with Callback:

// Write a function "filterArray" that takes an array and a callback function
// as arguments. 'filter Array' should filter the elements of the array based on the condition specified by the callback function and return a new array 
// with the filtered elements.


function filterArray(arr,callback){
    function xyz(element,index,array){
        if(callback(element)===true){
            return true;
        }
        else{
            return false;
        }
    }
    return arr.filter(xyz);
}

testArr = [1,2,3,4];
function add1(element){
    return element + 1;
}

newArr = mapArray(testArr,add1)
console.log(newArr);


//Expect : newArr = [2,3,4,5]