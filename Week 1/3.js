// Create a terminal clock(HH: MM: SS)

function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    console.log(hh);
}