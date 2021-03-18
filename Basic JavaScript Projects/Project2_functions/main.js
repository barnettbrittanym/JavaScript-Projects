function firstFunction(){
    var str= "This text is purple!!"
    var result= str.fontcolor("purple");//Changes the button font color to purple
    document.getElementById("purple_text").innerHTML=result;
}

function secondFunction(){
    let sentence="I am learning ";
    sentence+= "a lot in this course!"//Here I used the += to concantenate!
    document.getElementById("noodle").innerHTML=sentence;
}