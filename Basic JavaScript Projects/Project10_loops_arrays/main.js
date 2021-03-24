// While loop
function Call_Loop(){
    var Digit="";
    var x=1
    while(x<101){
        Digit += "<br>"+ x;
        x++;
    }
    document.getElementById("Loop").innerHTML= Digit
}

//String length property challenge
function lengthProperty(){
    var yourName="I like chicken"
    var n =yourName.length
    document.getElementById("length").innerHTML=n
}

//For Loop Assignment
var Instruments=["Guitar", "Mandolin", "Accordion", "Drums", "Piano", "Bass", "Trumpet", "Flute"]
var Content="";
var Y;
function for_Loop(){
    for(Y=0; Y<Instruments.length; Y++){
        Content += Instruments[Y]+ "<br>";
    }
    document.getElementById("List_Of_Instruments").innerHTML=Content;
}

//Array function
function array_Function(){
    var fruits= [];
    fruits[0]="apple";
    fruits[1]= "pear";
    fruits[2]= "pineapple";
    fruits[3]= "watermelon";
    fruits[4]= "grapes"
    document.getElementById("Array").innerHTML= "My favorite fruit is " + fruits[3] +"."
}

//Constant function
function constant_function(){
    const super_Hero={character: "Batman", name: "Bruce Wayne", transportation: "batmobile"};
    super_Hero.transportation= "Bat-mobile";
    super_Hero.colors= "Black";
    document.getElementById("Constant").innerHTML= "My favorite super hero is " + super_Hero.character + " also known as " + super_Hero.name +". He drives a " +super_Hero.transportation + " and wears " + super_Hero.colors + "."
}

//Let us use let
function let_Function(){
    let bananas= "I would like a banana please!"
    document.getElementById("letmebe").innerHTML= bananas
}

//Return statement challenge

function return_Function(){
    let name=prompt("What is your name?");
    return "Hello " + name;  
}
document.getElementById("return").innerHTML=return_Function();

//Creating an object

let furniture={
    type: "sofa",
    color: "grey",
    upholstery: "leather",
    width: 89,
    depth: 30,
    description: function(){
        return 
    }
}
document.getElementById("sofa").innerHTML= "I have a " + furniture["type"] + " made of " + furniture["upholstery"] + ". It is " + furniture["color"] +"."

//break statement
function break_Statement(){
for (i=0; i<5; i++){
    if (i===4){break;}
    text="The number is " + i + "<br>";
}
document.getElementById("break").innerHTML= text;
}

//continue statement
function continue_Statement(){
    for (i=0; i<15; i++){
        if (i===10){continue;}
        state="The number is "+ i + "<br>";

    }
document.getElementById("continue").innerHTML= state;
}