//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function increases the value of displayed number by 1
function increment(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if(!(isNaN(num))){
            num++;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Subtract" button is clicked
function subtract(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if(!(isNaN(num))){
         prevCalc = num;
         document.frmCalc.txtNumber.value = "";
         calc = "Subtract";
        }
} 

//The following function is called when "Divide" button is clicked
function divide(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if(!(isNaN(num))){
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

//The following function is called when "Multiply" button is clicked
function multiply(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if(!(isNaN(num))){
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

//The following function is called when "Power" button is clicked
function power(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if(!(isNaN(num))){
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

//The following function is called when "Square Root" button is clicked
function squareRoot(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if(!(isNaN(num))){
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
            
        }
}

//The following function is called when "Round" button is clicked
//For some reason this was the only button beside floor to not work
/*function roundNum(){
    var num = parseFloat(document.frmCalc.txt.value);
    if(!(isNaN(num))){
        num = Math.round(num);
        document.frmCalc.txtNumber.value = num;
    }
}*/

//The following function is called when "Power2" button is clicked
function power2(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if(!(isNaN(num))){
        num = Math.pow(num,2);
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Subtract"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Divide"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Multiply"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Power"){
                var total = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total;
            }
        }
        
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}