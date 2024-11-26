// "Convert a 12-hour AM/PM time format to a 24-hour military time format."

const readline = require('readline');
// readline

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

function isValidTimeFormat(time){
    const regex = /^(0[1-9]1[0-2]):([0-5][0-9])(AM|PM)$/;
    return regex.test(time);
}

r1.question('please enter a time in 12 hour format ',(input)=>{
    if(!isValidTimeFormat(input)){
        console.log("Invalid time format. Please enter the time in the correct format (hh:mm:ssAM/PM).");
        r1.close();
        return ;
    }
    console.log(timeConversion(input))
    r1.close();
})


function timeConversion(s){
    let period = s.slice(-2);
    let hour = s.slice(0,2);
    let time = s.slice(2,8);

    if(period === 'AM'){
        if(hour === "12"){
            return '00' + time
        }
        return s.slice(0,8);
    }else{
        if(hour === "12"){
            return s.slice(0,8);
        }
        let militaryHour = (parseInt(hour)+12).toString();
        return militaryHour + time;
    }
}