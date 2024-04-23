// Global variables
var numGrade;

do{
    numGrade = prompt("Enter Number Grade from 0 though 120");
    numGrade = parseInt(numGrade); //using the parseInt to convert the string to an integer

    if(numGrade >= 0 && numGrade <= 120)
    {
        //calls the replace Grade function that is created below
        alert(replaceGrade(numGrade)); 
    }
    else if(numGrade != 1)
    {
        // uses the alert function to display a display box with the certain text
        alert("End of Entries.");
    }
    else if (numGrade > 120)
    {
        alert("Please Enter a Number Between 0 and 120.");
    }
}
//continues to loop until numGrade is not -1
while(numGrade != -1)

function replaceGrade(grade){
    if(grade >= 0 && grade < 60) //each if statements have 2 conditions it must pass to be return an output
    {
        //uses the return for the output that will be displayed int the alert box when the function is called.
        return ("Number Grade = " + grade + "\nLetter Grade = F");
    }
    else if(grade >= 60 && grade <= 69)
    {
        // uses the \n to jump to the next line 
        return ("Number Grade = " + grade + "\nLetter Grade = D");
    }
    else if(grade >= 70 && grade <= 79)
    {
        return ("Number Grade = " + grade + "\nLetter Grade = C");
    }
    else if(grade >= 80 && grade <= 99)
    {
        return ("Number Grade = " + grade + "\nLetter Grade = B");
    }
    else if(grade >= 100 && grade <= 120)
    {
        return ("Number Grade = " + grade + "\nLetter Grade = A");
    }

}