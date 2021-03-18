let int1= prompt("Please enter a valid number");
   let int2= prompt("Please enter a second valid number");
   let sum=(parseInt(int1)+parseInt(int2));
   let difference=(parseInt(int1)-parseInt(int2))
   let product=(parseInt(int1)*parseInt(int2))
   let quotient=(parseInt(int1)/parseInt(int2))
//This function is for addition
function addition(int1, int2){
   document.getElementById("Math").innerHTML=(`The sum of the two numbers is ${sum}!`);
}
//This function is for subtraction
function subtraction(int1, int2){
    document.getElementById("Math2").innerHTML=(`The difference of the two numbers is ${difference}!`);
 }
 //This function is for multiplication
 function multiplication(int1, int2){
    document.getElementById("Math3").innerHTML=(`The product of the two numbers is ${product}!`);
 }
//This fuction is for division
 function division(int1, int2){
    document.getElementById("Math4").innerHTML=(`The quotient of the two numbers is ${quotient}!`);
 }
//This fuction has multiple operations
 function moreMath(){
     var moreMath= (4+5)*10/2-12;
    document.getElementById("Math5").innerHTML=(`4 plus 5, multiplied by 10, divided in half and then subtracted by 12 equals ${moreMath}!`);
 }
 //This function uses the modulus operator
 function modOperator(){
     var modOperator= 42%12;
     document.getElementById("Math6").innerHTML= "When you divide 42 by 12 you have a remainder of " + modOperator;
 }
 //This function negates a number
 function negOperator(){
     var modOperator= int1;
     document.getElementById("Math7").innerHTML= -modOperator;
 }
 //This function increments the first number entered
 function incrementNum(){
     document.getElementById("Math8").innerHTML= int1++;
 }
 //This function decrements the first number entered
 function decrementNum(){
     document.getElementById("Math9").innerHTML= int1--;
 }
 //This generates a random number
 function randomNum(){
     var random=Math.floor(Math.random()*100)+1;
     document.getElementById("Math10").innerHTML= random
 }

//This will give you the value of PI
function valuePI(){
    var x= Math.PI
    document.getElementById("Math11").innerHTML=x
}