//Global variables
var prevCalc = 0;
var calc = "";

//Made a function which returns the id of the buttons, so it can called later
//got this function from the murach textbook and the idea to use window onload
var $ = function (id){
    return document.getElementById(id);
}

//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum() {
    document.frmCalc.txtNumber.value += this.value;
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

//The following function is the floor button
function floor(){
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if(!(isNaN(num))){
            var floor = Math.floor(num);
            document.frmCalc.txtNumber.value = floor;
            
        }
}

//The following function is called when "Round" button is clicked
//For some reason this was the only button beside floor to not work
function round(){
    var num = parseFloat(document.frmCalc.txt.value);
    if(!(isNaN(num))){
        var round = Math.round(num);
        document.frmCalc.txtNumber.value = round;
    }
}

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
                var total1 = prevCalc - num;
                document.frmCalc.txtNumber.value = total1;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Divide"){
                var total2 = prevCalc / num;
                document.frmCalc.txtNumber.value = total2;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Multiply"){
                var total3 = prevCalc * num;
                document.frmCalc.txtNumber.value = total3;
            }
        }
        if(!(isNaN(num))){
            if(calc == "Power"){
                var total4 = Math.pow(prevCalc, num);
                document.frmCalc.txtNumber.value = total4;
            }
        }
        
}

//clears the textbox on the calculater
function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}

//allows for javascript to be linked on the html file
window.onload = function ()
{
    //calls the id of the button, then has an event handler that says when it is clicked a certain formula executed
    $("btn1").onclick = showNum; //for the show number it uses the value per each button that is declared in the html file.
    $("btn2").onclick = showNum;
    $("btn3").onclick = showNum;
    $("btn4").onclick = showNum;
    $("btn5").onclick = showNum;
    $("btn6").onclick = showNum;
    $("btn7").onclick = showNum;
    $("btn8").onclick = showNum;
    $("btn9").onclick = showNum;
    $("btn0").onclick = showNum;
    $("btnDecimal").onclick = showNum;
    $("btnPlus").onclick = add;
    $("btnMinus").onclick = subtract;
    $("btnTimes").onclick = multiply;
    $("btnDivide").onclick = divide;
    $("btnPow").onclick = power;
    $("btnPow2").onclick = power2;
    $("btnSqrt").onclick = squareRoot;
    $("btnDecrement").onclick = decrement;
    $("btnIncrement").onclick = increment;
    $("btnReset").onclick = clear;
    $("btnCalc").onclick = calculate;
    $("btnRound").onclick = round;
    $("btnFloor").onclick = floor;
}