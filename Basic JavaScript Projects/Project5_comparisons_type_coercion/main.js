//Using typeOf
document.write(typeof "Banana");
let Banana= "This is bananas...B-A-N-A-N-A-S"

//Coercion
document.write("12"+10)

//functions using NaN
function nanFunctions(){
    document.getElementById("nanParagraph").innerHTML= 0/0;
}
function nanFunctions2(){
    document.getElementById("nanParagraph2").innerHTML= isNaN('0/0');
}
function nanFunctions3(){
    document.getElementById("nanParagraph3").innerHTML= isNaN('45');
}

//Functions using infinity and negative infinity
document.write(21E320);
document.write(-7E340);

//Boolean values
document.write(29>21);
document.write(29===21);

//More Boolean Values
console.log(12+54);
console.log(12===45);
console.log(14==14);
console.log(25==27);

//Using the triple equals sign
A= "banana";
B= "banana";
document.write(A===B);

a="apple";
b= "orange";
document.write(a===b);

AA="54";
BB=54;
document.write(AA===BB);

aa="pomegranate"
bb="cantaloupe"
document.write(aa===bb);
//Using the AND and OR operators
document.write(7>5&&6>2);
document.write(5<8&&8<5);
document.write(5<8||8>5);
document.write(5>8||3>8);

//Not function
function not_Function(){
document.getElementById("not").innerHTML=!(100<50);
}
function not_Function2(){
    document.getElementById("not2").innerHTML=!(100>50);
}
