
// Array Map with Callback:


// - Implement a function 'mapArray' that takes an array 
// and a callback function as arguments. 'mapArray '
// should apply the callback function to each element of 
// array with the modified CSSFontFeatureValuesRule.


function xyz(element, index,array){
    newArr[index] = callback(arr[i])
}



function mapArray (arr,callback){
    
    newArr = [];

    arr.forEach(xyz);

    return newArr;

}


testArr = [1,2,3,4];

function add1(element){
    return element + 1;
}

newArr = mapArray(testArr,add1)

