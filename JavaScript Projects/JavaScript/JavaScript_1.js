//switch assignment
function animal_Function() {
    var animalOutput;
    var animals=document.getElementById("animal_input").value;
    var animal_string= " is a great and ferocious animal!";
    switch(animals){
        case "Lion":
            animalOutput= "Lion" + animal_string;
        break;
        case "Tiger":
            animalOutput= "Tiger" + animal_string;
        break;
        case "Bear":
            animalOutput= "Bear" + animal_string;
        break;
        case "Wolf":
            animalOutput= "Wolf" + animal_string;
        break;
        case "Alligator":
            animalOutput= "Alligator" + animal_string;
        break;
        default:
            animalOutput= "Please enter an animal exactly as shown in the above list.";          
    }
    document.getElementById("output").innerHTML= animalOutput;
}

//getElementsByClassName exercise
function test_Function(){
    let barnyard=document.getElementsByClassName("element");
    barnyard[0].innerHTML= "Rawr";
    barnyard[1].innerHTML="Chomp";
}

//HTML Canvas Exercise
function myCanvas(){
    var c= document.getElementById("first_canvas");
    var ctx= c.getContext("2d");
    var img= document.getElementById("bear");
    ctx.drawImage(img,125,15);
}

//HTML Canvas with a gradient
function mySecondCanvas(){
    var d= document.getElementById("second_canvas");
    var ctx=d.getContext("2d");
    var grd= ctx.createLinearGradient(0,0,550,0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1,"white");
    ctx.fillStyle=grd;
    ctx.fillRect(0,0,500,250);

}