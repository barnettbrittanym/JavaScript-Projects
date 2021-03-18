function firstFunction(){
    var str= "This text is purple!!"
    var result= str.fontcolor("purple");
    document.getElementById("purple_text").innerHTML=result;
}

function secondFunction(){
    let sentence="I am learning ";
    sentence+= "a lot in this course!"
    document.getElementById("noodle").innerHTML=sentence;
}