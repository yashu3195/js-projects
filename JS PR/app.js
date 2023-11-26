const endDate = "03 December 2023 11:45:40 AM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);

    const now = new Date()
   
    const differ = (end - now) / 1000 //miliseconds to seconds//
// convert into days hour min sec
    //console.log(Math.floor(differ/3600/24));
    if (differ < 0) return
    inputs[0].value = Math.floor(differ/3600/24)
    inputs[1].value = Math.floor(differ/3600) % 24
    // input element me value daalne yaa replace ke .innerHTML nhi lagaate hai .value lagaate hai
    inputs[2].value = Math.floor(differ / 60 % 60)
    inputs[3].value = Math.floor(differ % 60)

    
}
//initial call of function clock
clock()

/*
1 day = 24 H
1 hour = 60 min
1 minute = 60 sec
60 min = 60 * 60 sec = 3600sec
*/

setInterval(() => {
    clock()
}, 1000);


