// Create a Counter in JavaScript (counts down from 30 to 0)

let count = 30;

function decrement(x){
    console.log(x);
    x = x-1;
    
    return x;
}

function countDown(){
    count = decrement(count);
    
    if(count === 0){
        clearInterval(intervalId);
    }

}

let intervalId = setInterval(countDown, 5000);