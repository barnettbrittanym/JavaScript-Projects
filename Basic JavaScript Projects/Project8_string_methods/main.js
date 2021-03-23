//Concat function
function pineapple(){
    var part_1=" Apple";
    var part_2=" Pen";
    var part_3=" Pineapple";
    var whole_song=part_2.concat(part_3, part_1, part_2);
    document.getElementById("ccp").innerHTML=whole_song;
}
//Using slice method
function slice_of_holiday(){
var Sentence="Happy Easter Everybody!"
var Holiday= Sentence.slice(6,12);
document.getElementById("slice").innerHTML=Holiday;
}

//More methods challenge-toUpperCase() method
function tell_it_dont_yell_it(){
    var question= prompt ("Can you hear me okay? Please answer yes or no.");
    if (question=="yes"){
        answer= "okay";
        document.getElementById("sound").innerHTML=answer;
    }

    else if (question=="no"){
        answer= "okay I will speak up!!!";
        document.getElementById("sound").innerHTML=answer.toUpperCase();
    }
}

//More methods challenge-search() method
var str="Pen Pineapple Apple Pen"
var p=str.search(/pineapple/i);
document.write("In the string "+ str + " pineapple is starting at index "+ p);

//Using the toString() method
function string_Method(){
    var p=975;
    document.getElementById("string").innerHTML=p.toString();
}

//Using the toPrecision() Method
function precision_Method(){
    var y=5.64842574565847654;
    document.getElementById("precision").innerHTML=y.toPrecision(5);
}

//Using the toFixed() Method
function fixed_Method(){
    var y=5.64842574565847654;
    document.getElementById("fixed").innerHTML=y.toFixed(3);
}

//Using the valueOf() Method
function valueOf_Method(){
    var y=5.64842574565847654;
    document.getElementById("value").innerHTML=y.valueOf();
}