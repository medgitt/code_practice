// Display next number of the entered number 

const readLine=require('readline');

const r1=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

function add(num){

    const parsedNum=parseInt(num)+1;

    if(!isNaN(parsedNum)){
    
    return parsedNum+1;
}else {
    console.log("Please enter a valid number ");
    return null;
}

}

r1.question("Enter the number ", (number)=>{
    const result=add(number);
    console.log(result);
    r1.close();
});