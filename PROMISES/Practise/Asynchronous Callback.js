

// write a function 'higherOrderAsync' that takes a callback function 
// as a argument.Inside 'higherOrderAsync', call the callback function asynchronously using setTimeout after a 
// delay of n seconds, where n is current day of the month according to UTC time (1 <= n <= 31).Inside


function getDayOfMonth(){
    const date = new Date();

    return date.getUTCDate();
}

function higherOrderAsync(callback){
    setTimeout(callback,getDayOfMonth()*1000);
}

function printText(){
    console.log('Sucess');
}

console.log(getDayOfMonth)