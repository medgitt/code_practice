/*Create a function that takes the age in years and returns the age in days.
Notes
1.Use 365 days as the length of a year for this challenge.
2.Ignore leap years and days between last birthday and now.
3.Expect only positive integer inputs. */




function calcAge(birthDate) {

    //parsing birthdate string to a date format
    const birthDateobj=new Date(birthDate);
    console.log(birthDateobj);
    

    const currentDate=new Date();

    const diffmillisec=(currentDate-birthDateobj);

    //converting milliseconds to days
    const days= Math.floor(diffmillisec/(1000*60*60*24));

    return days;

	
}


const days=calcAge('1991-11-11');
console.log(`Age in days: ${days}`);


