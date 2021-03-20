//Using ternary operator
function Ride_Function(){
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML =Can_ride+ " to ride.";
}

//Ternary Operators Challenge
function voting_Function(){
    var age, Can_Vote;
    age= document.getElementById("age").value;
    Can_Vote= (age<18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML =Can_Vote;
}
//Constructor exercise
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}

var Jack= new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily= new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik= new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erik drives a " +Erik.Vehicle_Color +"-colored " +Erik.Vehicle_Model + " manufactured in" +Erik.Vehicle_Year;
}
//Another constructor exercise
function Student(firstName, lastName, testScore){
    this.Student_firstName=firstName;
    this.Student_lastName=lastName;
    this.Student_testScore=testScore;
}

var Fred= new Student("Fred", "Flintstone", 97);
var Wilma= new Student("Wilma", "Flintstone", 99);
var Barney= new Student("Barney", "Rubble", 100);

function newFunction(){
    document.getElementById("New_and_This").innerHTML= "scores are as follows:"+ Fred.Student_firstName + Fred.Student_lastName + Fred.Student_testScore +" "+ Wilma.Student_firstName + Wilma.Student_lastName + Wilma.Student_testScore +" "+ Barney.Student_firstName + Barney.Student_lastName + Barney.Student_testScore;
}

//Variable using a reserved word
//let export="big ship"
//document.write(export) <--This doesnt work

//Object constructor function
function Puppy(name, breed, color, sex){
    this.name=name;
    this.breed=breed;
    this.color=color;
    this.sex=sex;
}
//This is my nested function
function fluffyBunny(){
    document.getElementById("Nested_Function").innerHTML=countingBunnies();
    function countingBunnies(){
        var bunnyRabbit=4;
        function bunnyMultiply(){bunnyRabbit += 3;}
        bunnyMultiply();
        return bunnyRabbit;
   
    }   
    

}