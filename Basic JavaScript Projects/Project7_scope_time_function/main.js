let a=50;
//Global variable
function bananagram(){
    document.write(a-20);
    document.getElementById("global")
}
//Local variable
function wannabanana(){
    var x=321;
    console.log(x-12);
    document.getElementById("local")
}
//Dummy variable
function bethebanana(){
    console.log(x+2);
    document.getElementById("dummy")
}
//Function using Date.getHours method
function greeting(){
    if (new Date().getHours() < 12){
        document.getElementById("time").innerHTML="Good Morning!"
    }
    else {
        document.getElementById("time").innerHTML="Good Day!"
    }
}

//My own if statement
function day(){
    var color= prompt("Enter a color").toLowerCase();
    if(color==="black"){
        document.getElementById("iffy").innerHTML="Thats my favorite color!"
    }
    else(
        document.getElementById("iffy").innerHTML="Try again!"
    )
}

//Else assignment
function ageRange(){
    input=document.getElementById("year").value;
    if (input>=18){
       Age="You are an adult!";
    }
     else{
        Age="You are a child!";
        
     }
     document.getElementById("answer").innerHTML=(Age);
}

//Time function
function Time_function(){
    var Time= new Date().getHours();
    var Reply;
    if(Time<12==Time>0){
        Reply="It is morning time!";
    }
    else if(Time>=12==Time<18){
        Reply="It is afternoon";
    }
    else{
        Reply="It is evening time";
    }
document.getElementById("Time_of_day").innerHTML=Reply;
}
