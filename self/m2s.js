const readLine=require('readline');
const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

function minToSec(minutes){

    if(isNaN(minutes) || minutes.trim() === ""){
        return "Please enter a valid number";
    }

    var seconds=minutes*60;
    return seconds+"seconds";

}


r1.question("Enter the number of minutes",(userInput)=>{
    const result=minToSec(userInput); 
    console.log(result);
    r1.close();});