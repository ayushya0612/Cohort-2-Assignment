// Calculate the time it takes between a setTimeout and the inner function actually running

function temp(){
    console.timeEnd();
    console.log("Hey");
}

console.time();
setTimeout(temp, 1000);