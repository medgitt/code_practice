const readLine=require('readline');
const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

function hoursToSec(hours){

    const seconds=hours*60*60;

    if(isNaN(hours)){
        console.log("Please enter a valid number");
    }else{
        
        return seconds + "seconds";  

    }


}

r1.question("Please enter the number of hours",(num_of_hours)=>{
    const result=hoursToSec(num_of_hours);
    console.log(result);
    r1.close();})